// Reader-feedback annotator for the chapter-candidate preview pages.
// Select text -> tag it (correction / unclear / dislike / want / concern / like)
// -> add a note. Notes persist in localStorage per page and export as Markdown
// for the next Claude iteration. No server, no build step, Chrome-targeted
// (uses the CSS Custom Highlight API when available).

(() => {
  const TYPES = [
    ["correction", "Correction", "#9b3030"],
    ["unclear", "Unclear", "#795100"],
    ["dislike", "Dislike", "#a54425"],
    ["want", "Want", "#2f5f8a"],
    ["concern", "Concern", "#66518e"],
    ["like", "Like", "#006b5a"],
  ];
  const KEY = `harness-variant-notes:${location.pathname.split("/").pop()}`;
  const article = document.querySelector("main") || document.body;

  const load = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
  };
  const save = (notes) => { try { localStorage.setItem(KEY, JSON.stringify(notes)); } catch {} };
  let notes = load();

  // ---------- styles ----------
  const style = document.createElement("style");
  style.textContent = `
    ${TYPES.map(([k, , c]) => `::highlight(note-${k}) { background: ${c}2e; text-decoration: underline dotted ${c}; }`).join("\n")}
    ::highlight(note-flash) { background: #ffd54f99; }
    .anno-pop { position: fixed; z-index: 200; display: flex; flex-direction: column; gap: 6px; width: 300px; padding: 10px; border: 1px solid var(--line, #ccc); border-radius: 10px; background: var(--surface-raised, #fff); box-shadow: 0 12px 32px rgb(0 0 0 / 18%); font-size: 13px; }
    .anno-pop .anno-types { display: flex; flex-wrap: wrap; gap: 4px; }
    .anno-pop button.anno-type { padding: 3px 9px; border: 1px solid var(--line, #ccc); border-radius: 999px; background: transparent; color: var(--ink, #222); font-size: 12px; cursor: pointer; }
    .anno-pop button.anno-type[aria-pressed="true"] { color: #fff; border-color: transparent; }
    .anno-pop textarea { min-height: 54px; padding: 6px; border: 1px solid var(--line, #ccc); border-radius: 6px; background: var(--surface, #fff); color: var(--ink, #222); font: inherit; font-size: 12.5px; resize: vertical; }
    .anno-pop .anno-actions { display: flex; gap: 6px; justify-content: flex-end; }
    .anno-pop .anno-actions button { padding: 4px 12px; border-radius: 6px; border: 1px solid var(--line, #ccc); background: transparent; color: var(--ink, #222); cursor: pointer; font-size: 12px; }
    .anno-pop .anno-actions button.primary { background: var(--teal, #006b5a); border-color: var(--teal, #006b5a); color: #fff; }
    .anno-fab { position: fixed; right: 18px; bottom: 18px; z-index: 190; display: flex; gap: 8px; align-items: center; padding: 9px 16px; border: 1px solid var(--line, #ccc); border-radius: 999px; background: var(--surface-raised, #fff); color: var(--ink, #222); box-shadow: 0 10px 28px rgb(0 0 0 / 16%); cursor: pointer; font-size: 13px; font-weight: 700; }
    .anno-fab .anno-count { display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 20px; padding: 0 5px; border-radius: 999px; background: var(--teal, #006b5a); color: #fff; font-size: 11.5px; }
    .anno-panel { position: fixed; top: 0; right: 0; bottom: 0; z-index: 210; display: flex; flex-direction: column; width: min(380px, 92vw); border-left: 1px solid var(--line, #ccc); background: var(--surface, #fff); color: var(--ink, #222); box-shadow: -14px 0 40px rgb(0 0 0 / 18%); transform: translateX(105%); transition: transform 0.18s ease; }
    .anno-panel.open { transform: none; }
    .anno-panel header { display: flex; gap: 8px; align-items: center; justify-content: space-between; padding: 12px 14px; border-bottom: 1px solid var(--line, #ccc); }
    .anno-panel header strong { font-size: 14px; }
    .anno-panel header button { border: none; background: none; color: var(--ink, #222); font-size: 18px; cursor: pointer; }
    .anno-list { flex: 1; overflow: auto; padding: 10px 12px; display: flex; flex-direction: column; gap: 10px; }
    .anno-item { padding: 9px 10px; border: 1px solid var(--line, #ccc); border-left-width: 4px; border-radius: 8px; font-size: 12.5px; }
    .anno-item .anno-chip { display: inline-block; margin-bottom: 4px; padding: 1px 8px; border-radius: 999px; color: #fff; font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .anno-item blockquote { margin: 4px 0; padding-left: 8px; border-left: 2px solid var(--line, #ccc); color: var(--ink-soft, #555); font-style: italic; overflow-wrap: anywhere; }
    .anno-item .anno-note { white-space: pre-wrap; overflow-wrap: anywhere; }
    .anno-item .anno-ops { display: flex; gap: 10px; margin-top: 6px; }
    .anno-item .anno-ops button { border: none; background: none; padding: 0; color: var(--blue, #2f5f8a); font-size: 11.5px; cursor: pointer; text-decoration: underline; }
    .anno-tools { display: flex; flex-wrap: wrap; gap: 6px; padding: 10px 12px; border-top: 1px solid var(--line, #ccc); }
    .anno-tools button { flex: 1 1 45%; padding: 6px 8px; border: 1px solid var(--line, #ccc); border-radius: 7px; background: transparent; color: var(--ink, #222); font-size: 12px; cursor: pointer; }
    .anno-tools button.primary { background: var(--teal, #006b5a); border-color: var(--teal, #006b5a); color: #fff; }
    .anno-toast { position: fixed; bottom: 74px; right: 18px; z-index: 220; padding: 8px 14px; border-radius: 8px; background: var(--ink, #222); color: var(--paper, #fff); font-size: 12.5px; opacity: 0; transition: opacity 0.2s; pointer-events: none; }
    .anno-toast.show { opacity: 1; }
    .anno-hint { position: fixed; left: 18px; bottom: 18px; z-index: 180; padding: 6px 12px; border-radius: 999px; background: var(--surface-raised, #fff); border: 1px solid var(--line, #ccc); color: var(--ink-faint, #777); font-size: 11.5px; }
    @media print { .anno-fab, .anno-panel, .anno-hint, .anno-pop, .anno-toast { display: none !important; } }
  `;
  document.head.appendChild(style);

  // ---------- text offset helpers (article text is static per page build) ----------
  const walker = () => document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
  function absOffset(node, offset) {
    let total = 0; const w = walker();
    for (let n = w.nextNode(); n; n = w.nextNode()) {
      if (n === node) return total + offset;
      total += n.data.length;
    }
    return -1;
  }
  function rangeFromOffsets(start, end) {
    let total = 0; const w = walker(); const range = document.createRange();
    let haveStart = false;
    for (let n = w.nextNode(); n; n = w.nextNode()) {
      const next = total + n.data.length;
      if (!haveStart && start < next) { range.setStart(n, start - total); haveStart = true; }
      if (haveStart && end <= next) { range.setEnd(n, end - total); return range; }
      total = next;
    }
    return null;
  }
  const articleText = () => {
    let s = ""; const w = walker();
    for (let n = w.nextNode(); n; n = w.nextNode()) s += n.data;
    return s;
  };

  function nearestHeading(range) {
    let el = range.startContainer.nodeType === 1 ? range.startContainer : range.startContainer.parentElement;
    while (el && el !== article) {
      let sib = el.previousElementSibling;
      while (sib) {
        if (/^H[1-6]$/.test(sib.tagName)) return sib.textContent.replace(/#$/, "").trim();
        const inner = sib.querySelectorAll?.("h1,h2,h3,h4,h5,h6");
        if (inner && inner.length) return inner[inner.length - 1].textContent.replace(/#$/, "").trim();
        sib = sib.previousElementSibling;
      }
      el = el.parentElement;
    }
    return document.title.replace(/ · .*$/, "");
  }

  // ---------- highlight rendering ----------
  const supportsHL = "highlights" in CSS;
  function paint() {
    if (!supportsHL) return;
    for (const [k] of TYPES) CSS.highlights.delete(`note-${k}`);
    const text = articleText();
    const byType = new Map(TYPES.map(([k]) => [k, []]));
    for (const note of notes) {
      if (note.pageLevel) continue;
      let { start, end } = note;
      if (text.slice(start, end) !== note.quote) {
        const idx = text.indexOf(note.quote);
        if (idx < 0) continue;
        start = idx; end = idx + note.quote.length;
      }
      const r = rangeFromOffsets(start, end);
      if (r) byType.get(note.type)?.push(r);
    }
    for (const [k, ranges] of byType) {
      if (ranges.length) CSS.highlights.set(`note-${k}`, new Highlight(...ranges));
    }
  }

  // ---------- UI: toast ----------
  const toast = document.createElement("div");
  toast.className = "anno-toast";
  document.body.appendChild(toast);
  let toastTimer;
  const say = (msg) => {
    toast.textContent = msg; toast.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  };

  // ---------- UI: popover ----------
  let pop = null;
  function closePop() { pop?.remove(); pop = null; }
  function openPop(rect, draft, onSave) {
    closePop();
    pop = document.createElement("div");
    pop.className = "anno-pop";
    let chosen = draft.type || null;
    const typesRow = document.createElement("div");
    typesRow.className = "anno-types";
    const buttons = TYPES.map(([k, label, c]) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "anno-type"; b.textContent = label;
      b.setAttribute("aria-pressed", String(k === chosen));
      if (k === chosen) b.style.background = c;
      b.addEventListener("click", () => {
        chosen = k;
        buttons.forEach((ob, i) => {
          ob.setAttribute("aria-pressed", String(TYPES[i][0] === k));
          ob.style.background = TYPES[i][0] === k ? TYPES[i][2] : "";
          ob.style.color = TYPES[i][0] === k ? "#fff" : "";
        });
      });
      typesRow.appendChild(b);
      return b;
    });
    const ta = document.createElement("textarea");
    ta.placeholder = "Why? What should change? (optional but gold)";
    ta.value = draft.note || "";
    const actions = document.createElement("div");
    actions.className = "anno-actions";
    const cancel = document.createElement("button");
    cancel.type = "button"; cancel.textContent = "Cancel";
    cancel.addEventListener("click", closePop);
    const ok = document.createElement("button");
    ok.type = "button"; ok.className = "primary"; ok.textContent = "Save note";
    ok.addEventListener("click", () => {
      if (!chosen) { say("Pick a type first"); return; }
      onSave(chosen, ta.value.trim());
      closePop();
    });
    actions.append(cancel, ok);
    pop.append(typesRow, ta, actions);
    document.body.appendChild(pop);
    const top = Math.min(innerHeight - pop.offsetHeight - 12, Math.max(12, rect.bottom + 8));
    const left = Math.min(innerWidth - 312, Math.max(12, rect.left));
    pop.style.top = `${top}px`; pop.style.left = `${left}px`;
    ta.focus();
  }

  document.addEventListener("mouseup", (event) => {
    if (pop?.contains(event.target) || panel.contains(event.target) || fab.contains(event.target)) return;
    setTimeout(() => {
      const sel = getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) return;
      const range = sel.getRangeAt(0);
      if (!article.contains(range.commonAncestorContainer)) return;
      const quote = sel.toString();
      if (!quote.trim() || quote.length > 2000) return;
      const start = absOffset(range.startContainer, range.startOffset);
      const end = absOffset(range.endContainer, range.endOffset);
      if (start < 0 || end <= start) return;
      const heading = nearestHeading(range);
      const rect = range.getBoundingClientRect();
      openPop(rect, {}, (type, noteText) => {
        notes.push({ id: Date.now().toString(36), quote, start, end, heading, type, note: noteText, created: new Date().toISOString() });
        save(notes); paint(); renderPanel(); sel.removeAllRanges();
        say("Noted. Export from the Feedback panel when done.");
      });
    }, 0);
  });

  // ---------- UI: panel ----------
  const fab = document.createElement("button");
  fab.type = "button"; fab.className = "anno-fab";
  document.body.appendChild(fab);
  const hint = document.createElement("div");
  hint.className = "anno-hint";
  hint.textContent = "Select any text to leave feedback";
  document.body.appendChild(hint);

  const panel = document.createElement("aside");
  panel.className = "anno-panel";
  panel.innerHTML = `
    <header><strong>Reader feedback</strong><button type="button" data-close aria-label="Close">×</button></header>
    <div class="anno-list"></div>
    <div class="anno-tools">
      <button type="button" data-pagenote>+ Page-level note</button>
      <button type="button" data-copy class="primary">Copy Markdown for Claude</button>
      <button type="button" data-download>Download .md</button>
      <button type="button" data-clear>Clear all</button>
    </div>`;
  document.body.appendChild(panel);
  panel.querySelector("[data-close]").addEventListener("click", () => panel.classList.remove("open"));
  fab.addEventListener("click", () => { panel.classList.toggle("open"); renderPanel(); });

  function typeMeta(k) { return TYPES.find(([t]) => t === k) || [k, k, "#555"]; }

  function renderPanel() {
    fab.innerHTML = `Feedback <span class="anno-count">${notes.length}</span>`;
    const list = panel.querySelector(".anno-list");
    list.innerHTML = "";
    if (!notes.length) {
      list.innerHTML = `<p style="color:var(--ink-faint,#777);font-size:12.5px">No notes yet. Select any text in the page, pick a type, and say what you think. Add page-level notes below for overall direction.</p>`;
      return;
    }
    const ordered = [...notes].sort((a, b) => (a.pageLevel ? -1 : a.start) - (b.pageLevel ? -1 : b.start));
    for (const note of ordered) {
      const [, label, color] = typeMeta(note.type);
      const item = document.createElement("div");
      item.className = "anno-item";
      item.style.borderLeftColor = color;
      const chip = `<span class="anno-chip" style="background:${color}">${label}</span>`;
      const src = note.pageLevel
        ? `<div style="color:var(--ink-faint,#777)">whole page</div>`
        : `<blockquote>${note.quote.length > 160 ? `${note.quote.slice(0, 160)}…` : note.quote}</blockquote><div style="color:var(--ink-faint,#777)">§ ${note.heading}</div>`;
      item.innerHTML = `${chip}${src}<div class="anno-note">${note.note ? note.note.replace(/</g, "&lt;") : "<i style='color:var(--ink-faint,#777)'>no note</i>"}</div>
        <div class="anno-ops">${note.pageLevel ? "" : '<button type="button" data-jump>Jump</button>'}<button type="button" data-edit>Edit</button><button type="button" data-del>Delete</button></div>`;
      item.querySelector("[data-jump]")?.addEventListener("click", () => {
        const text = articleText();
        let { start, end } = note;
        if (text.slice(start, end) !== note.quote) {
          const idx = text.indexOf(note.quote); if (idx < 0) return; start = idx; end = idx + note.quote.length;
        }
        const r = rangeFromOffsets(start, end);
        if (!r) return;
        (r.startContainer.parentElement || article).scrollIntoView({ block: "center", behavior: "smooth" });
        if (supportsHL) {
          CSS.highlights.set("note-flash", new Highlight(r));
          setTimeout(() => CSS.highlights.delete("note-flash"), 1600);
        }
      });
      item.querySelector("[data-edit]").addEventListener("click", () => {
        openPop({ bottom: innerHeight / 2 - 90, left: innerWidth / 2 - 150 }, note, (type, text) => {
          note.type = type; note.note = text; save(notes); paint(); renderPanel();
        });
      });
      item.querySelector("[data-del]").addEventListener("click", () => {
        notes = notes.filter((n) => n.id !== note.id);
        save(notes); paint(); renderPanel();
      });
      list.appendChild(item);
    }
  }

  panel.querySelector("[data-pagenote]").addEventListener("click", () => {
    openPop({ bottom: innerHeight / 2 - 90, left: innerWidth / 2 - 150 }, {}, (type, text) => {
      if (!text) { say("A page-level note needs text"); return; }
      notes.push({ id: Date.now().toString(36), pageLevel: true, type, note: text, created: new Date().toISOString() });
      save(notes); renderPanel();
    });
  });

  function toMarkdown() {
    const title = document.title.replace(/ · .*$/, "");
    const lines = [`# Reader feedback — ${title}`, `Page: ${location.pathname.split("/").pop()} · exported ${new Date().toISOString()}`, ""];
    const ordered = [...notes].sort((a, b) => (a.pageLevel ? -1 : a.start) - (b.pageLevel ? -1 : b.start));
    for (const note of ordered) {
      const [, label] = typeMeta(note.type);
      if (note.pageLevel) {
        lines.push(`## [${label}] Whole page`, note.note, "");
      } else {
        lines.push(`## [${label}] § ${note.heading}`, `> ${note.quote.replace(/\n/g, "\n> ")}`, "", note.note || "(no note)", "");
      }
    }
    if (!ordered.length) lines.push("(no notes)");
    return lines.join("\n");
  }

  panel.querySelector("[data-copy]").addEventListener("click", async () => {
    const md = toMarkdown();
    try {
      await navigator.clipboard.writeText(md);
      say("Copied — paste it to Claude");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = md; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
      say("Copied — paste it to Claude");
    }
  });

  panel.querySelector("[data-download]").addEventListener("click", () => {
    const blob = new Blob([toMarkdown()], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `feedback-${location.pathname.split("/").pop().replace(/\.html$/, "")}-${new Date().toISOString().slice(0, 10)}.md`;
    a.click(); URL.revokeObjectURL(a.href);
    say("Saved to Downloads — tell Claude the filename");
  });

  panel.querySelector("[data-clear]").addEventListener("click", () => {
    if (!confirm("Delete all notes on this page?")) return;
    notes = []; save(notes); paint(); renderPanel();
  });

  renderPanel();
  paint();
})();

(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const storageKey = "harness-learning-theme";

  const storedTheme = (() => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  })();
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : preferredDark
      ? "dark"
      : "light";

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (!themeButton) return;
    const next = theme === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", `Use ${next} theme`);
    themeButton.querySelector(".theme-label").textContent = theme === "dark" ? "Dark" : "Light";
  };
  applyTheme(initialTheme);

  themeButton?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // Theme persistence is optional; the control still works.
    }
  });

  const progressBars = [...document.querySelectorAll("[data-reading-progress]")];
  const updateProgress = () => {
    if (!progressBars.length) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    for (const bar of progressBars) bar.style.transform = `scaleX(${ratio})`;
  };
  updateProgress();
  addEventListener("scroll", updateProgress, { passive: true });
  addEventListener("resize", updateProgress, { passive: true });

  const expandButton = document.querySelector("[data-expand-evidence]");
  expandButton?.addEventListener("click", () => {
    const details = [...document.querySelectorAll("details.evidence-detail")];
    const shouldOpen = expandButton.getAttribute("aria-pressed") !== "true";
    details.forEach((item) => { item.open = shouldOpen; });
    expandButton.setAttribute("aria-pressed", String(shouldOpen));
    expandButton.textContent = shouldOpen ? "Collapse evidence" : "Expand evidence";
  });

  const tocLinks = [...document.querySelectorAll(".toc a[href^='#']")];
  const observed = tocLinks
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter(Boolean);
  if ("IntersectionObserver" in window && observed.length) {
    const byId = new Map(tocLinks.map((link) => [decodeURIComponent(link.hash.slice(1)), link]));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        tocLinks.forEach((link) => link.removeAttribute("aria-current"));
        byId.get(visible.target.id)?.setAttribute("aria-current", "location");
      },
      { rootMargin: "-12% 0px -72%", threshold: [0, 1] },
    );
    observed.forEach((heading) => observer.observe(heading));
  }
})();

# Harness Engineering V2 — Provisional Skeleton Portfolio

**Checkpoint:** `V2-SK-CP00`
**Status:** Rejected by the maintainer at V2-SK-CP00; retained as design history
**Authority:** V2-D012, approved 2026-07-21
**Maturity:** Structural hypotheses only; no approved outline, taxonomy, claim,
or promoted evidence
**Input boundary:** Existing captured V2 artifacts through
`awesome-screen-core-04`; no new source opening or legacy access

This portfolio makes the organizing choices visible early enough for the
maintainer to redirect them. It does not choose an outline. Each skeleton is a
different hypothesis about how a rigorous harness-engineering body of
knowledge could help an experienced builder reason, investigate, and decide.

**Maintainer disposition:** V2-D013 rejects all three as active candidates.
Their abstraction-first spines replaced recognizable field terminology and
their two-level depth cap hid useful structure. The active replacement is
[`conventional-skeleton.md`](conventional-skeleton.md). The material below is
preserved so the rejected approach and its analytical lenses remain auditable.

Core-04's source dispositions and catalog corrections remain proposed. This
checkpoint uses that batch only as a provisional structural stress test, not as
approved subject evidence or a source of findings.

## Portfolio rules

- Maintain three active skeletons at a maintainer checkpoint.
- A fourth challenger may be developed between checkpoints when a genuinely
  different organizing principle appears.
- A new skeleton must change the unit of organization, decision ownership, or
  dependency structure. New labels or reordered headings are not a new
  skeleton.
- Only the maintainer may approve admission, merger, replacement, retirement,
  or selection.
- Preserve every version and its lineage. A retired skeleton remains visible
  with the reason, useful elements transferred, and reopening condition.
- Reviewers may challenge, compare, or recommend; they cannot select the
  program's objectives, approve a skeleton, or change its authority.
- Batch observations accumulate in
  [`skeleton-pressure-ledger.md`](skeleton-pressure-ledger.md). Skeleton prose
  changes only at a checkpoint, not after each source.

## Active baseline portfolio

| ID | Version | Organizing unit | Primary reading mode | Portfolio role |
| --- | --- | --- | --- | --- |
| `V2-SK-A` | `0.1` | Builder decisions under operating constraints | Linear decision journey with reference entry points | Provisional recommended direction |
| `V2-SK-B` | `0.1` | Observable control transitions through time | Causal trace plus transition lookup | Behavioral alternative |
| `V2-SK-C` | `0.1` | Allocation of responsibility and authority | Nonlinear topology with an authority-first first reading | Dissenting alternative |

The portfolio deliberately does not make a component list, product family,
catalog category, implementation family, source type, or curriculum sequence
its organizing spine.

### Version lineage

| Skeleton | Version | Parent | Introduced | State |
| --- | --- | --- | --- | --- |
| `V2-SK-A` | `0.1` | None | `V2-SK-CP00` | Active, provisional |
| `V2-SK-B` | `0.1` | None | `V2-SK-CP00` | Active, provisional |
| `V2-SK-C` | `0.1` | None | `V2-SK-CP00` | Active, provisional |

After this checkpoint is frozen, a later version is appended to this lineage;
it does not replace the earlier version silently. A changed organizing
principle receives a new skeleton ID and an explicit predecessor relationship.

## Shared contract, not shared organization

The three skeletons share only decisions already approved in the brief:

- technically fluent harness builders are the primary audience;
- the provisional boundary is the modifiable system surrounding one or more
  model calls, with model weights and training fixed;
- the body of knowledge should support boundary-setting, unfamiliar-system
  analysis, causal tracing, design judgment, evidence evaluation, transfer
  judgment, and selection of the next uncertainty-reducing inspection or test;
- mechanism explanation precedes comparative recommendation;
- evidence standards precede effectiveness claims; and
- curriculum, product tutorials, procurement, cases, and implementation
  instructions remain later derivatives or evidence vehicles rather than the
  outline spine.

Every skeleton must satisfy four approved comparison obligations without
turning them into repeated mini-chapters: evidence and uncertainty; operating
conditions; authority and trust; and version and transfer. Control-policy
representation and ownership is a provisional cross-cutting hypothesis from
the captured structural inputs, not an approved universal axis.

| Obligation or hypothesis | `V2-SK-A` explanatory owner | `V2-SK-B` explanatory owner | `V2-SK-C` explanatory owner | Traversal rule |
| --- | --- | --- | --- | --- |
| Evidence and uncertainty | A3 | B6, using observations from B5 | C6 | Other branches state only their evidence burden and link to the owner. |
| Operating conditions | A1 | B1 | C1 | Other branches carry applicable constraints as metadata, not repeated explanation. |
| Authority and trust | A5 | B4 | C4 | Escalation and operation branches reference the primary authority model rather than restating it. |
| Version and transfer | A7 | B8 | C8 | Earlier branches identify version-sensitive choices; the terminal owner explains transfer and change. |
| Control-policy representation and ownership — provisional | A5 | B3 | C3 | State representation remains with the state-owning branch; this row covers who represents and owns control policy. |

The owner contains the explanation, alternatives, and evidence synthesis. A
traversing branch records only the constraint, consequence, or secondary link
needed for its own decision. This prevents the common obligations from
silently harmonizing the three structures or duplicating claims.

Source-native terms remain aliases. A term such as “memory,” “agent loop,”
“skill,” or “verification” is mapped to the decision, transition, or authority
relationship it denotes in a concrete system; the label does not determine its
home.

## `V2-SK-A` — Constraints-to-decisions journey

### Organizing principle and reading mode

Organize the body of knowledge around the sequence of judgments a builder must
make for a concrete operating problem. Mechanisms, implementations, and
evidence enter only after the conditions and decision they address are clear.

The first reading is linear. Reference use begins at the decision currently in
doubt and follows its prerequisites and downstream consequences.

### High-level tree

```text
Harness Engineering — Constraints-to-Decisions
├── A1. Frame the decision situation
│   ├── task, environment, and success conditions
│   └── cost, latency, scale, uncertainty, and trust
├── A2. Choose the necessary system and boundary
│   ├── no harness, single call, workflow, adaptive agent, or composed system
│   └── inclusions, exclusions, actors, and ambiguous edges
├── A3. Establish the evidence and observation contract
│   ├── observable behavior, baselines, and comparisons
│   └── evidence limits, transfer conditions, and next tests
├── A4. Choose the control architecture
│   ├── planning, routing, scheduling, branching, and concurrency
│   └── commitments, recovery semantics, and stopping conditions
├── A5. Allocate information, capability, and authority
│   ├── context, state, memory, tools, and interfaces
│   └── model, runtime, human, agent, service, and environment authority
├── A6. Compose, test, and correct the system
│   ├── mechanism interactions, verification, and causal tracing
│   └── failure, handoff, rollback, escalation, and correction
└── A7. Decide whether to deploy, evolve, simplify, or retire
    ├── operating evidence, economics, incidents, and go/no-go judgment
    └── change triggers, transfer, simplification, and retirement decisions
```

Each branch owns one builder decision. A1 has no subject prerequisite; each
later branch depends on the operating conditions, boundary, and evidence
contract established above it. A7 tests whether the earlier choices remain
valid outside a single successful run.

### Fit to the approved audience and outcomes

This is the strongest direct fit for experienced builders making and defending
design choices under stated conditions. It foregrounds boundary-setting,
alternatives, evidence quality, tradeoffs, transfer, and the next test, while
using causal tracing as a required validation method rather than the spine.

### Inclusion, crossing, and source roles

A mechanism belongs only when it changes one of these decisions or supplies
evidence needed to judge it. A mechanism that affects several decisions has one
primary decision home: the earliest branch where the builder intentionally
chooses or rejects it. Later consequences and revision points are secondary
links; the explanation is not copied into multiple chapters.

When later inspected under an approved research plan, implementations and
domains may serve as comparison cases. Papers, documentation, repositories,
benchmarks, and practitioner accounts may supply differently limited evidence;
source type alone supplies no quality judgment. None becomes the sequence or a
quality tier.

### Benefits

- Best direct fit to the builder-first and decision-support outcomes.
- Makes “should this be agentic?” and boundary choice prerequisites rather than
  assumptions.
- Places evidence before recommendation and operation inside the main journey.
- Makes alternatives, conditions, and tradeoffs easier to defend.

### Risks, blind spots, and anchoring hazards

- Wave 1 already pressures toward this option, so it is especially vulnerable
  to confirmation bias.
- It can decay into a generic systems-engineering process unless the research
  questions remain specific to model–environment control.
- Temporal behavior and failure propagation can disappear inside decision
  summaries.
- Mechanism lookup is less immediate than in a component reference.

### Sequence rationale

Conditions precede the decision to add agency; boundary and observability
precede architecture comparison; architecture commitments precede mechanism
composition; executed behavior precedes effectiveness judgment; and operating
evidence tests whether the earlier choices remain valid. This is a first-reading
order, not a one-way design process: A6 and A7 can reopen A1's conditions, A3's
evidence contract, A4's control commitments, or A5's allocations. A7 owns the
decision to deploy or change the design; per-run observation and correction
remain in A6. Reversing the first-reading order would select mechanisms before
their problem, evidence, or transfer conditions are known.

## `V2-SK-B` — Causal control lifecycle

### Organizing principle and reading mode

Organize the body of knowledge around observable state transitions in the
model–environment control process. The unit is not a named component but a
transition: what state existed, who or what selected the transition, what
action occurred, what changed, and how the system knew.

The first reading follows one episode and then repeated operation. Reference
use enters at the transition where behavior diverged from expectation. Fixed,
branching, parallel, nested, human-driven, and multi-agent paths are explicit
variations; no single circular “agent loop” is presumed universal.

### High-level tree

```text
Harness Engineering — Causal Control Lifecycle
├── B1. Bound and initialize the control process
│   ├── no added harness, single call, workflow, adaptive, and composed paths
│   └── external intent → bounded objective, actors, authority, and initial state
├── B2. Transform available information into working state
│   ├── stored and environment information → model-usable state
│   └── selection, retrieval, compaction, memory, caching, and provenance
├── B3. Transform working state into a control commitment
│   ├── state and policy → selected plan, route, schedule, delegate, or branch
│   └── deterministic, model-directed, parallel, and hybrid commitments
├── B4. Transform a commitment into environment effects
│   ├── model calls, tools, protocols, services, agents, and human actions
│   └── interfaces, credentials, permissions, isolation, and side effects
├── B5. Transform effects into reconciled observations and state
│   ├── outputs, traces, artifacts, costs, and environment feedback
│   └── observation, interpretation, state reconciliation, and ground truth
├── B6. Transform observed state into a response decision
│   ├── verification, evaluators, uncertainty, and failure propagation
│   └── continue, retry, replan, roll back, escalate, or terminate
├── B7. Transform a response into continuity or closure
│   ├── persistence, cleanup, handoff, resumption, and stopping
│   └── recurrence, scheduling, nested processes, and longer-running systems
└── B8. Transform operational history into lifecycle change
    ├── incidents, economics, scale, and version evidence → change decision
    └── rollout, migration, rollback, simplification, and retirement
```

Each branch owns one transition class and applies the same inspection tuple:
pre-state → selector or policy → action or transformation → resulting state →
observable evidence → exit or next transition. B1 explicitly tests system and
investigation membership before presuming a loop. The tree follows causal
dependency for a first reading, while a reader diagnosing an unfamiliar system
can enter at the transition where observed behavior diverges.

### Fit to the approved audience and outcomes

This is the strongest fit for analyzing an unfamiliar harness and tracing
actual behavior instead of inferring architecture from terminology. It helps a
builder locate uncertainty and choose the next inspection or test; comparative
design judgment is supported through alternate transition policies rather than
being the primary reading journey.

### Inclusion, crossing, and source roles

Material belongs when it changes a transition, the information available to
it, its authority, or the evidence that the transition behaved as intended.
A mechanism may participate in several transitions, but its explanation is
owned by the transition whose input-output contract it directly changes. If it
changes several contracts, the primary home is the earliest control commitment
that would have to change to remove it; later effects become secondary links.

When later inspected under an approved research plan, implementations may
supply executable traces or counterexamples, and papers or benchmarks may test
transition policies under bounded conditions. Product documentation states
declared interface behavior, not verified current behavior or effectiveness.
Domains may supply different environment and success semantics. None supplies
the lifecycle automatically.

### Benefits

- Strongest fit to tracing actual causal behavior rather than product labels.
- Gives debugging, observability, recovery, and stopping natural homes.
- Makes component interactions and hidden state transitions visible.
- Supports unfamiliar-system analysis through traces and state changes.

### Risks, blind spots, and anchoring hazards

- It can silently reproduce a seed's loop model and imply that all useful
  systems are adaptive cycles.
- Strategic architecture alternatives and organization-level ownership may be
  underweighted.
- Some controls act before, during, and after several transitions and resist a
  single primary home.
- A lifecycle can become a descriptive tour instead of decision guidance.

### Sequence rationale

The causal order is the first-reading dependency order: an action cannot be
judged without its initial state and intended result; response selection cannot
operate without an observation path; and continuity cannot be evaluated
without a closure contract. The technical system is iterative: B5–B7 feed new
state into B2–B3, and B8 may reopen B1's boundary, authority, and success
conditions. B8 owns changes across incidents, releases, migrations, and
retirement; ordinary per-run telemetry remains in B5 and ordinary recurrence
remains in B7. “Loop engineering” therefore does not decide the harness
boundary by label.

## `V2-SK-C` — Responsibility and authority topology

### Organizing principle and reading mode

Organize the body of knowledge around where consequential responsibilities and
decision rights live. Candidate control loci include the model, deterministic
runtime, human, peer agent, tool or environment, and external service. They are
abstract roles, not current products or permanent architectural layers.

The primary artifact is a topology: responsibilities, authority, information,
and evidence flow among control loci. A first reading establishes actors and
then allocates progressively more consequential decisions. Reference use
starts with a disputed responsibility—who knows, decides, acts, judges,
intervenes, or changes the system.

### High-level tree

```text
Harness Engineering — Responsibility and Authority Topology
├── C1. Define control loci, boundaries, and accountability
│   ├── model, runtime, human, agent, service, tool, and environment
│   └── system, investigation, trust, and accountability boundaries
├── C2. Allocate information and state stewardship
│   ├── selection, transformation, storage, sharing, and expiry
│   └── context, memory, environment state, access, and provenance
├── C3. Allocate intent, planning, and policy authority
│   ├── goals, decomposition, routing, scheduling, and delegation
│   └── code, configuration, natural language, model policy, and human judgment
├── C4. Allocate capability and action authority
│   ├── exposure, request, approval, execution, mediation, and revocation
│   └── tools, credentials, protocols, containment, and side effects
├── C5. Allocate coordination and handoff responsibility
│   ├── workers, assignments, communication, and shared state
│   └── isolation, conflicts, integration, partial failure, and handoff
├── C6. Allocate observation, judgment, and verification
│   ├── telemetry, ground truth, evaluation, and evidence sufficiency
│   └── self-checks, independent checks, humans, and external evaluators
├── C7. Allocate intervention, recovery, and termination
│   ├── pause, retry, replan, rollback, escalation, and override
│   └── ordinary approval, emergency authority, stopping, and resumption
└── C8. Assign accountability for operation and change
    ├── deployment, budgets, monitoring, auditing, and maintenance authority
    └── incident, version, transfer, simplification, and retirement ownership
```

Each branch owns a family of decision rights. C1 establishes the abstract
actors before any authority is assigned; later branches follow the dependency
from information to policy, action, judgment, intervention, and sustained
change. The topology is still intended for nonlinear reference use.

### Fit to the approved audience and outcomes

This is the strongest fit for comparing systems that distribute control under
different names and abstractions. It foregrounds boundary-setting,
responsibility, trust, handoff, and evidence ownership; detailed causal tracing
requires the explicit lifecycle cross-mapping rather than following directly
from the tree. Every allocation branch must compare alternatives under stated
operating conditions and record causal consequences, supporting evidence, and
the conditions under which the authority should be revoked or reassigned. C6
judges the sufficiency of the topology-wide evidence; it does not absorb the
other branches' design choices.

### Inclusion, crossing, and source roles

Material belongs when it changes a responsibility, decision right, information
flow, authority relationship, or evidence obligation. A mechanism appears at
the branch where its accountable authority is granted, constrained, or revoked
and is cross-mapped to lifecycle stage and operating condition. If several
actors participate, the primary home follows the actor accountable for the
consequential outcome; execution and judgment relationships become secondary
links. “Memory,” for example, is not a chapter by name; it is a set of
stewardship, access, persistence, and verification decisions.

When later inspected under an approved research plan, implementations may
instantiate topologies and papers may compare allocation choices or their
effects. Documentation identifies declared interfaces and authority, not
verified execution or effectiveness. Domains may change who can supply ground
truth or bear risk. Sources never become actors merely because they describe a
product.

### Benefits

- Most clearly exposes hidden control, delegation, permissions, handoffs, and
  human authority.
- Gives representation and ownership choices a central analytical role.
- Remains useful across fixed workflows, adaptive agents, and multi-agent
  systems.
- Supplies a strong comparison language when products use different labels.

### Risks, blind spots, and anchoring hazards

- It can become a static roles-and-components taxonomy instead of explaining
  behavior through time.
- Mechanism mechanics and failure propagation may be hard to discover.
- It may assume actor boundaries are cleaner or more stable than actual
  implementations.
- Accountability language can pull the program toward governance while
  underweighting performance and engineering tradeoffs.

### Sequence rationale

Actors and boundaries must exist before rights can be allocated; information
availability constrains policy; policy and authority constrain action;
observation precedes judgment; judgment precedes intervention; and sustained
operation requires an explicit owner for change. This is a coherent first
reading, not a one-way technical dependency: capability limits, observation
gaps, incidents, and intervention failures can force reallocation in C1–C7.
C8 owns accountability for deployment, budgets, maintenance, change, and
retirement; it does not absorb per-episode execution or evaluation. The
topology therefore remains nonlinear.

## Material-distinctness stress test

| Example pressure | `V2-SK-A` primary; secondary | `V2-SK-B` primary; secondary | `V2-SK-C` primary; secondary |
| --- | --- | --- | --- |
| Context compaction | **A5** information allocation; A3/A6/A7 | **B2** working-state transformation; B5/B7 | **C2** state stewardship; C3/C6 |
| Human approval before a side effect | **A5** authority allocation; A4/A6 | **B4** effect authorization; B6 | **C4** action authority; C6/C7 |
| Runtime observability | **A3** observation contract; A6/A7 | **B5** effect reconciliation; B6/B8 | **C6** observation ownership; C7/C8 |
| Outcome evaluation and verification | **A3** evidence contract; A6 | **B6** response decision; B5 | **C6** judgment authority; C7 |
| Subagent orchestration | **A4** control architecture; A5/A6 | **B3** delegated control commitment; B7 | **C5** coordination responsibility; C2/C6 |
| Continuity across long-running episodes | **A7** operate/change decision; A4/A5 | **B7** continuity transition; B8 | **C8** operating accountability; C2/C7 |

The rows intentionally land in different conceptual homes. If later revisions
make the three columns interchangeable, the portfolio has converged and must
replace or retire an option at a maintainer checkpoint.

## Comparative assessment

| Criterion | `V2-SK-A` | `V2-SK-B` | `V2-SK-C` |
| --- | --- | --- | --- |
| Strongest approved outcome | Defensible design and evaluation decisions | Causal tracing and runtime diagnosis | Cross-system comparison of control and authority |
| First-reading strength | Why and when to choose | How behavior unfolds | Who or what owns each consequence |
| Reference strength | Decision and tradeoff lookup | Transition and failure-location lookup | Responsibility and trust-boundary lookup |
| Main thing it reveals | Conditions, alternatives, and downstream consequences | State change, feedback, recovery, and stopping | Hidden ownership, delegation, and decision rights |
| Main thing it hides | Detailed temporal behavior | Strategic design and institutional ownership | Temporal mechanics and causal propagation |
| Dominant anchoring risk | Wave 1's favored decision journey | Seed loop language | Static subsystem or governance taxonomy |
| Role of mechanisms | Options realizing a decision | Means of changing or judging a transition | Implementations of a responsibility allocation |
| Role of evidence | Precondition for comparison and revision | Observation needed to validate a transition | Obligation assigned to a judging control locus |

The following is a checkpoint-00 primary structural judgment against every
approved outcome. It does not count sources, treat recurrence as support, or
select a skeleton.

| Approved outcome | `V2-SK-A` | `V2-SK-B` | `V2-SK-C` |
| --- | --- | --- | --- |
| State and defend a useful boundary | **Strongest:** A1–A2 make the problem, degree of agency, inclusions, and exclusions explicit decisions. | **Strong:** B1 tests membership before assuming a control cycle. | **Strong:** C1 exposes system, investigation, trust, and accountability boundaries. |
| Analyze an unfamiliar harness without relying on labels | **Strong:** reconstruct the decisions and constraints that produced the system. | **Strongest:** enter at an observed transition and trace state change. | **Strong:** remap product terms to information, authority, and accountability. |
| Identify choices, alternatives, constraints, costs, failures, and transfer limits | **Strongest:** these are the direct organizing unit and operating test. | **Strong:** alternate transition policies and failure propagation are visible; strategic alternatives are less direct. | **Strong:** allocation alternatives and consequences are explicit; temporal failures require cross-mapping. |
| Trace actual behavior and causal paths | **Adequate but vulnerable:** causal tracing is mandatory in A6, but summaries could hide transition detail. | **Strongest:** state change and observation are the spine. | **Vulnerable without the B cross-map:** authority topology alone does not reconstruct execution order. |
| Judge the epistemic status of a claim | **Strongest:** A3 establishes the evidence contract before comparison and A7 tests transfer. | **Strong:** B5–B6 separate observation from response judgment. | **Strong:** C6 assigns evidence and judgment responsibility, but ownership alone does not establish quality. |
| Make and defend decisions under stated operating conditions | **Strongest:** builder decisions under conditions are the spine. | **Adequate:** transition-policy comparison supports local decisions but can underweight strategic choice. | **Strong:** allocation branches require alternatives, evidence, consequences, and revocation conditions. |
| Choose the next uncertainty-reducing inspection or test | **Strongest:** A3 owns the next-test decision and later branches reopen it. | **Strong:** divergence localizes the next transition to inspect. | **Adequate:** C6 identifies the responsible judge and evidence gap, but not always the causal inspection order. |

The approved priority order places design judgment and evidence-based
evaluation first. On that basis, A remains the provisional favorite; B is the
strongest causal-tracing alternative, and C is the strongest terminology-
independent authority comparison. This ranking follows the approved outcomes,
not the frequency of decision language in captured inputs.

## Challenger and control alternatives

### First challenger: failure and uncertainty response

**Principle:** define expected behavior → detect divergence → localize causal
failure → choose an intervention → validate recovery → prevent recurrence and
test transfer.

This route makes diagnostic reasoning, negative evidence, and why a mechanism
exists unusually visible. It remains a challenger because a reactive spine can
underweight successful architecture, opportunity cost, simple systems, and the
decision to remove a mechanism. Walking Labs also supplies a polished
problem-first sequence tied to coding repositories, creating a strong anchoring
risk.

Recommend it for maintainer activation only if review shows that the active
portfolio cannot keep failure propagation and corrective reasoning visible
without distorting its primary principles.

### Mandatory layer, not an active skeleton: evidence-centered inquiry

An evidence-first route—decision → alternatives → observable behavior → test →
update—strongly supports the approved evidence outcomes. As a primary spine it
risks becoming a research-method manual with no discoverable home for harness
design. It is therefore mandatory inside all three skeletons rather than an
active fourth organization.

### Control alternative: nested systems stack

A model-interface → runtime → workflow → coordination → operations stack is
intuitive and reference-friendly. It is not active because the captured inputs
disagree about which layers contain workflows, scheduling, memory, evaluation,
and repeated loops. Making it the spine would settle the central boundary
question before the maintainer does. Retain it as an adversarial check for
missing interfaces.

### Deferred derivative: progressive curriculum

A constraints → mechanisms → composition → operation learning journey may be
valuable after the knowledge architecture is approved. It is not active because
the brief makes research and decision architecture primary and because an
early curriculum spine would import teaching prerequisites before their
technical dependencies are established.

## Provisional recommendation

`V2-SK-A` is the provisional recommendation because it most directly serves
the builder-first decision outcomes and keeps task, evidence, and boundary
choices ahead of mechanisms. It is not selected. Its favorable position in the
captured Wave 1 material is also its largest anchoring hazard, so `V2-SK-B` and
`V2-SK-C` must remain full alternatives rather than decorative overlays.

Withdraw this recommendation if A becomes a generic systems-design process,
cannot preserve causal and failure traces without duplicating B, or later
authorized research repeatedly invalidates its decision-dependency order.
Those are disqualifying conditions, not minor revision prompts.

The adversarial review must test whether:

1. the three are materially different in actual information placement;
2. any skeleton silently adopts catalog or curriculum categories;
3. the approved technical boundary is preserved rather than pre-decided;
4. evidence, operation, human authority, and transfer remain load-bearing;
5. the recommendation reflects the approved outcomes rather than source
   frequency; and
6. the failure-response challenger should replace an active option.

## Maintainer checkpoint

After adversarial review and accepted corrections, the maintainer may:

- keep, revise, merge, replace, or retire any option;
- activate the challenger or request a new principle;
- change the shared contract or comparison criteria;
- choose whether any future screening tranche is worth opening; and
- approve neither an outline nor a later batch merely by accepting this review
  packet.

"use strict";

const questions = [
  {
    type: "single",
    label: "MISSION 1 • STATEMENT SCANNER",
    title: "Find the proposition",
    difficulty: 1,
    scenario: "A campus information robot can reason only with statements that are definitely <strong>true or false</strong>.",
    prompt: "Which item is a proposition?",
    options: ["Is the help desk open?", "Please open the help desk.", "The help desk closes at 6:00 p.m.", "x + 4 = 10"],
    answer: 2,
    hint: "A proposition is a declarative sentence with a truth value. Questions, commands, and open sentences with an unknown variable do not qualify.",
    explanation: "“The help desk closes at 6:00 p.m.” makes a definite claim, so it can be true or false."
  },
  {
    type: "single",
    label: "MISSION 2 • SMART-HOME OVERRIDE",
    title: "Negate the message",
    difficulty: 1,
    scenario: "A smart-home dashboard displays <strong>p: “The garage door is closed.”</strong> The technician needs the exact negation, ¬p.",
    prompt: "Which sentence correctly represents ¬p?",
    options: ["The garage door is open.", "The garage door is not closed.", "The garage door may be closed.", "Close the garage door."],
    answer: 1,
    hint: "A precise negation says that the original claim is not true. Avoid adding assumptions that were not stated.",
    explanation: "¬p is “The garage door is not closed.” Saying it is open could add an assumption—for example, the door might be partly open."
  },
  {
    type: "single",
    label: "MISSION 3 • EVENT CONTROL",
    title: "Translate an access rule",
    difficulty: 2,
    scenario: "For an outdoor concert, let <strong>p</strong> mean “The ticket is valid” and <strong>q</strong> mean “The security check is complete.” A guest may enter only when both conditions hold.",
    symbols: ["p = valid ticket", "q = security check complete"],
    prompt: "Which formula represents the entry requirement?",
    options: ["p ∨ q", "p ∧ q", "p → q", "¬p ∧ q"],
    answer: 1,
    formula: true,
    hint: "The word “both” signals conjunction. Conjunction requires each part to be true.",
    explanation: "The guest needs a valid ticket AND a completed security check, so the rule is p ∧ q."
  },
  {
    type: "single",
    label: "MISSION 4 • SECURE DOOR",
    title: "Test a conditional",
    difficulty: 2,
    scenario: "A security rule says: <strong>“If a badge is valid, then the door unlocks.”</strong> Let p = badge is valid and q = door unlocks. During a test, p is true but q is false.",
    symbols: ["Rule: p → q", "Observed: p = T", "Observed: q = F"],
    prompt: "What is the truth value of the rule for this test?",
    options: ["True, because the badge was valid", "True, because the door stayed locked", "False, because the promised result did not occur", "Cannot be determined"],
    answer: 2,
    hint: "A conditional is false in exactly one situation: the “if” part is true and the “then” part is false.",
    explanation: "The valid badge activated the condition, but the door failed to unlock. Therefore p → q is false."
  },
  {
    type: "single",
    label: "MISSION 5 • DELIVERY LOCKER",
    title: "Build an if-and-only-if rule",
    difficulty: 3,
    scenario: "Let <strong>p</strong> mean “The pickup code is correct,” <strong>q</strong> mean “The identity scan passes,” and <strong>r</strong> mean “The locker opens.” The design says: <strong>The locker opens if and only if the pickup code is correct and the identity scan passes.</strong>",
    symbols: ["p = code correct", "q = scan passes", "r = locker opens"],
    prompt: "Which formula matches the design?",
    options: ["r ↔ (p ∧ q)", "r → (p ∨ q)", "(p ∧ q) → r", "r ↔ (p ∨ q)"],
    answer: 0,
    formula: true,
    hint: "“If and only if” is a biconditional (↔). Keep the words after it grouped together.",
    explanation: "The biconditional connects r with the combined requirement p ∧ q, giving r ↔ (p ∧ q)."
  },
  {
    type: "truth",
    label: "MISSION 6 • DRONE WEATHER TABLE",
    title: "Complete the truth table",
    difficulty: 3,
    scenario: "A delivery drone may launch when <strong>at least one route is clear</strong> and there is <strong>no lightning</strong>. Let p and q represent the two clear-route reports, and r represent lightning. The launch rule is <strong>(p ∨ q) ∧ ¬r</strong>.",
    symbols: ["p = north route clear", "q = south route clear", "r = lightning detected"],
    prompt: "Click each ? to set the final column to T or F.",
    variables: ["p", "q", "r"],
    expression: "(p ∨ q) ∧ ¬r",
    rows: [
      ["T","T","T"],["T","T","F"],["T","F","T"],["T","F","F"],
      ["F","T","T"],["F","T","F"],["F","F","T"],["F","F","F"]
    ],
    answer: ["F","T","F","T","F","T","F","F"],
    hint: "Work inside out: first evaluate p ∨ q. Then negate r. The final AND is true only when both intermediate results are true.",
    explanation: "The drone launches only in rows 2, 4, and 6: at least one route is clear and lightning is false."
  },
  {
    type: "single",
    label: "MISSION 7 • SMART GREENHOUSE",
    title: "Rewrite the control rule",
    difficulty: 4,
    scenario: "Let <strong>p</strong> mean “The soil is dry,” <strong>q</strong> mean “The pump turns on,” and <strong>r</strong> mean “Manual override is active.” The controller uses <strong>(p ∧ ¬r) → q</strong>. Engineers want an equivalent rule containing only NOT and OR.",
    symbols: ["Original: (p ∧ ¬r) → q", "Identity: a → b ≡ ¬a ∨ b"],
    prompt: "Which formula is logically equivalent?",
    options: ["¬p ∨ r ∨ q", "p ∨ ¬r ∨ q", "¬p ∧ r ∧ q", "p ∨ r ∨ ¬q"],
    answer: 0,
    formula: true,
    hint: "Replace a → b with ¬a ∨ b. Then apply De Morgan’s law: ¬(p ∧ ¬r) becomes ¬p ∨ r.",
    explanation: "(p ∧ ¬r) → q ≡ ¬(p ∧ ¬r) ∨ q ≡ ¬p ∨ r ∨ q."
  },
  {
    type: "multi",
    label: "MISSION 8 • ROVER RESCUE FINALE",
    title: "Complete a two-step inference",
    difficulty: 4,
    scenario: "An autonomous rover follows these rules: <strong>p → q</strong> and <strong>(q ∧ r) → s</strong>. Sensors confirm <strong>p</strong> and <strong>r</strong>. Here, p = battery is low, q = rover returns to base, r = storm is detected, and s = shelter mode activates.",
    symbols: ["Facts: p, r", "Rules: p → q, (q ∧ r) → s"],
    prompt: "Select exactly the two new conclusions that logically follow.",
    options: ["q: The rover returns to base", "s: Shelter mode activates", "¬p: The battery is not low", "q → p: Returning proves the battery was low"],
    answer: [0, 1],
    hint: "Use the first fact with the first rule. Then combine that new result with r and apply the second rule. Do not reverse an implication.",
    explanation: "From p and p → q, modus ponens gives q. Then q and r satisfy q ∧ r, so (q ∧ r) → s gives s."
  },
  {
    type: "build",
    label: "MISSION 9 • DISASTER-RESPONSE COMMAND",
    title: "Construct the dispatch rule",
    difficulty: 4,
    scenario: "A city emergency center dispatches buses under this policy: <strong>“Buses are dispatched if and only if an evacuation order has been issued and at least one evacuation route is safe.”</strong> Let p = order issued, q = north route safe, r = south route safe, and s = buses dispatched.",
    symbols: ["p = order issued", "q = north route safe", "r = south route safe", "s = buses dispatched"],
    prompt: "Drag the required tiles into the answer zone in the correct order. Several tiles are distractors.",
    tokens: ["s", "↔", "(", "p", "∧", "(", "q", "∨", "r", ")", ")", "→", "¬", "q", "∧", "s"],
    answer: ["s", "↔", "(", "p", "∧", "(", "q", "∨", "r", ")", ")"],
    hint: "Build from the inside out: “at least one route” is q ∨ r. Combine that with p using ∧. Finally, connect the complete requirement to s using ↔.",
    explanation: "The completed policy is s ↔ (p ∧ (q ∨ r)). The nested parentheses keep the route choice together."
  },
  {
    type: "build",
    buildStyle: "proof",
    label: "MISSION 10 • BIOSECURITY VAULT",
    title: "Assemble the proof chain",
    difficulty: 4,
    scenario: "A laboratory robot may retrieve a protected sample only through a traceable chain of reasoning. Use the facts <strong>p</strong> and <strong>r</strong>, and the rules <strong>p → q</strong>, <strong>(q ∧ r) → s</strong>, and <strong>s → t</strong>. Build a numbered proof that concludes <strong>t</strong>.",
    symbols: ["p = biometric match", "q = secure area opens", "r = supervisor approval", "s = sample retrieved", "t = audit log created"],
    prompt: "Drag exactly nine proof lines into a valid order. Four extra lines do not belong.",
    tokens: [
      "p — Given", "p → q — Given", "q — Modus ponens", "r — Given",
      "(q ∧ r) → s — Given", "q ∧ r — Conjunction", "s — Modus ponens",
      "s → t — Given", "t — Modus ponens", "q → p — Converse error",
      "¬r — Unsupported", "p ∨ t — Irrelevant", "t → s — Converse error"
    ],
    answer: [
      "p — Given", "p → q — Given", "q — Modus ponens", "r — Given",
      "(q ∧ r) → s — Given", "q ∧ r — Conjunction", "s — Modus ponens",
      "s → t — Given", "t — Modus ponens"
    ],
    hint: "First obtain q from p. Next combine q with the given fact r. That conjunction activates the rule for s; s then activates the final rule for t.",
    explanation: "The chain uses modus ponens, conjunction, modus ponens again, and one final modus ponens to reach t. None of the converse or unsupported lines is valid."
  },
  {
    type: "truth",
    label: "MISSION 11 • DELIVERY AUTHORIZATION AUDIT",
    title: "Evaluate a nested policy",
    difficulty: 4,
    scenario: "A delivery is authorized when the address and GPS reports agree, <strong>or</strong> when the address is not verified but a dispatcher override is present. Let p = address verified, q = GPS matches, and r = override present. Evaluate <strong>(p ↔ q) ∨ (¬p ∧ r)</strong>.",
    symbols: ["p = address verified", "q = GPS matches", "r = override present"],
    prompt: "Complete all eight rows of the final column.",
    variables: ["p", "q", "r"],
    expression: "(p ↔ q) ∨ (¬p ∧ r)",
    rows: [
      ["T","T","T"],["T","T","F"],["T","F","T"],["T","F","F"],
      ["F","T","T"],["F","T","F"],["F","F","T"],["F","F","F"]
    ],
    answer: ["T","T","F","F","T","F","T","T"],
    hint: "Calculate the two grouped parts separately: p ↔ q is true when p and q match; ¬p ∧ r is true only when p is false and r is true. Then OR the results.",
    explanation: "The final column is T, T, F, F, T, F, T, T. Either agreement or the specific override condition is enough."
  },
  {
    type: "truth",
    label: "MISSION 12 • EMERGENCY-SYSTEM FINAL AUDIT",
    title: "Master the four-variable table",
    difficulty: 4,
    scenario: "An emergency coordinator is checking whether two compound policy descriptions agree. Let p = emergency confirmed, q = dispatcher notified, r = ambulance available, and s = fire unit available. Audit the expression <strong>((p → q) ∧ (r ∨ s)) ↔ (¬q ∨ p)</strong>.",
    symbols: ["p = emergency confirmed", "q = dispatcher notified", "r = ambulance available", "s = fire unit available"],
    prompt: "Complete all sixteen rows. Work one connective at a time.",
    variables: ["p", "q", "r", "s"],
    expression: "((p → q) ∧ (r ∨ s)) ↔ (¬q ∨ p)",
    rows: [
      ["T","T","T","T"],["T","T","T","F"],["T","T","F","T"],["T","T","F","F"],
      ["T","F","T","T"],["T","F","T","F"],["T","F","F","T"],["T","F","F","F"],
      ["F","T","T","T"],["F","T","T","F"],["F","T","F","T"],["F","T","F","F"],
      ["F","F","T","T"],["F","F","T","F"],["F","F","F","T"],["F","F","F","F"]
    ],
    answer: ["T","T","T","F","F","F","F","F","F","F","F","T","T","T","T","F"],
    hint: "Create four scratch columns: p → q, r ∨ s, their conjunction, and ¬q ∨ p. The final ↔ is true only when the last two columns match.",
    explanation: "The final column is T, T, T, F, F, F, F, F, F, F, F, T, T, T, T, F."
  },
  {
    type: "logicLab",
    label: "MISSION 13 • LOGIC CLASSIFICATION ARENA",
    title: "Satisfiable, valid, or impossible?",
    difficulty: 4,
    scenario: "A verification team must decide whether three proposed AI rules are <strong>satisfiable</strong>, <strong>valid</strong>, or <strong>unsatisfiable</strong>. Complete all three stages: classify the rules, construct a counterexample, and assemble an informal proof.",
    symbols: ["Satisfiable = true at least once", "Valid = true in every row", "Unsatisfiable = never true"],
    formulas: [
      { id: "a", label: "Rule A", text: "P → ¬P" },
      { id: "b", label: "Rule B", text: "(P → Q) → (¬Q → ¬P)" },
      { id: "c", label: "Rule C", text: "(P → Q) → ((P ∧ R) → Q)" }
    ],
    classificationAnswer: { a: "sat", b: "valid", c: "valid" },
    proofTokens: [
      "P → Q — Assume the outer antecedent",
      "¬Q — Assume the inner antecedent",
      "P — Suppose for contradiction",
      "Q — From P and P → Q",
      "Q and ¬Q — Contradiction",
      "¬P — Therefore the inner conclusion holds",
      "Q → P — Reverse the rule",
      "P ∨ Q — Introduce an unrelated OR",
      "¬(P → Q) — Deny the assumption",
      "P ∧ Q — Unsupported conjunction"
    ],
    proofAnswer: [
      "P → Q — Assume the outer antecedent",
      "¬Q — Assume the inner antecedent",
      "P — Suppose for contradiction",
      "Q — From P and P → Q",
      "Q and ¬Q — Contradiction",
      "¬P — Therefore the inner conclusion holds"
    ],
    hints: [
      "A valid formula is automatically satisfiable. Rule A is true for one value of P but false for the other. Rules B and C describe reasoning patterns that never fail.",
      "An implication is false only when its antecedent is true and its consequent is false. For P → ¬P, try making P true.",
      "Assume P → Q and ¬Q. To establish ¬P, suppose P temporarily, derive Q, and identify the contradiction."
    ],
    explanation: "Rule A is satisfiable but not valid; P = T is its counterexample. Rules B and C are valid. The proof tiles establish Rule B by deriving a contradiction from P together with ¬Q and P → Q."
  }
];

const $ = (selector) => document.querySelector(selector);
const startScreen = $("#startScreen");
const gameScreen = $("#gameScreen");
const certificateScreen = $("#certificateScreen");
const status = $("#status");
const answerArea = $("#answerArea");
const feedback = $("#feedback");
const hintBox = $("#hintBox");
const checkButton = $("#checkButton");
const nextButton = $("#nextButton");
const hintButton = $("#hintButton");

let playerName = "";
let current = 0;
let score = 0;
let attempts = 0;
let hintUsed = false;
let selection = null;
let buildPool = [];
let logicStage = 0;
let logicStageSolved = false;
let logicPlacements = {};
let logicCounterexample = "?";
let logicProofPool = [];
let logicProofSelection = [];
let logicErrors = 0;

function showScreen(screen) {
  [startScreen, gameScreen, certificateScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = questions[current];
  attempts = 0;
  hintUsed = false;
  selection = q.type === "multi" || q.type === "build" ? [] : q.type === "truth" ? Array(q.rows.length).fill("?") : null;
  buildPool = q.type === "build" ? q.tokens.map((text, id) => ({ text, id })) : [];
  if (q.type === "logicLab") {
    logicStage = 0;
    logicStageSolved = false;
    logicPlacements = {};
    logicCounterexample = "?";
    logicProofPool = q.proofTokens.map((text, id) => ({ text, id }));
    logicProofSelection = [];
    logicErrors = 0;
  }
  feedback.hidden = true;
  feedback.className = "feedback";
  hintBox.hidden = true;
  hintButton.disabled = false;
  checkButton.hidden = false;
  nextButton.hidden = true;
  nextButton.textContent = current === questions.length - 1 ? "Complete challenge →" : "Next mission →";
  $("#missionType").textContent = q.label;
  $("#questionTitle").textContent = q.title;
  $("#difficulty").textContent = "●".repeat(q.difficulty) + "○".repeat(4 - q.difficulty);
  $("#scenario").innerHTML = q.scenario;
  $("#levelLabel").textContent = `Mission ${current + 1} of ${questions.length}`;
  $("#progressFill").style.width = `${((current + 1) / questions.length) * 100}%`;
  const symbols = $("#symbols");
  if (q.symbols) {
    symbols.innerHTML = q.symbols.map((item) => `<span>${item}</span>`).join("");
    symbols.hidden = false;
  } else {
    symbols.hidden = true;
  }

  if (q.type === "truth") {
    const headers = q.variables.map((variable) => `<th>${variable}</th>`).join("");
    answerArea.innerHTML = `
      <p class="question-prompt">${q.prompt}</p>
      <table class="truth-table">
        <thead><tr>${headers}<th>${q.expression}</th></tr></thead>
        <tbody>${q.rows.map((row, i) => `<tr>${row.map((value) => `<td>${value}</td>`).join("")}<td><button class="truth-toggle" data-row="${i}" data-value="?" aria-label="Set row ${i + 1} truth value">?</button></td></tr>`).join("")}</tbody>
      </table>`;
    answerArea.querySelectorAll(".truth-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const row = Number(button.dataset.row);
        const next = button.dataset.value === "?" ? "T" : button.dataset.value === "T" ? "F" : "T";
        button.dataset.value = next;
        button.textContent = next;
        selection[row] = next;
      });
    });
    return;
  }

  if (q.type === "build") {
    renderBuildBoard(q);
    return;
  }

  if (q.type === "logicLab") {
    renderLogicLab(q);
    return;
  }

  answerArea.innerHTML = `<p class="question-prompt">${q.prompt}</p><div class="options">${q.options.map((option, i) => `
    <button class="option ${q.formula ? "formula-option" : ""}" type="button" data-index="${i}">
      <span class="option-key">${String.fromCharCode(65 + i)}</span><span>${option}</span>
    </button>`).join("")}</div>`;
  answerArea.querySelectorAll(".option").forEach((button) => button.addEventListener("click", () => selectOption(button, q.type)));
}

function renderBuildBoard(q) {
  const proofClass = q.buildStyle === "proof" ? " proof-board" : "";
  answerArea.innerHTML = `
    <p class="question-prompt">${q.prompt}</p>
    <p class="build-label">Tile bank</p>
    <div class="tile-bank drop-target${proofClass}" data-target="pool" aria-label="Available logic tiles">
      ${buildPool.map((tile, index) => tileMarkup(tile, index, "pool", q.buildStyle)).join("") || '<span class="empty-note">All tiles are on the board.</span>'}
    </div>
    <div class="build-header"><p class="build-label">Your ${q.buildStyle === "proof" ? "proof" : "formula"}</p><button type="button" class="clear-board">Clear board</button></div>
    <div class="solution-zone drop-target${proofClass}" data-target="selection" aria-label="Your constructed answer">
      ${selection.map((tile, index) => tileMarkup(tile, index, "selection", q.buildStyle, q.buildStyle === "proof" ? index + 1 : null)).join("") || '<span class="empty-note">Drag or click tiles here.</span>'}
    </div>
    <p class="build-help">Tip: You can drag tiles or click them. Click a tile on your answer board to return it to the bank.</p>`;

  answerArea.querySelectorAll(".logic-tile").forEach((tile) => {
    tile.addEventListener("click", () => moveBuildTile(tile.dataset.source, Number(tile.dataset.index)));
    tile.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", JSON.stringify({ source: tile.dataset.source, index: Number(tile.dataset.index) }));
      event.dataTransfer.effectAllowed = "move";
    });
  });
  answerArea.querySelectorAll(".drop-target").forEach((zone) => {
    zone.addEventListener("dragover", (event) => { event.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      try {
        const payload = JSON.parse(event.dataTransfer.getData("text/plain"));
        if (payload.source !== zone.dataset.target) moveBuildTile(payload.source, payload.index);
      } catch (_) { /* Ignore malformed external drops. */ }
    });
  });
  answerArea.querySelector(".clear-board").addEventListener("click", () => {
    buildPool = [...buildPool, ...selection].sort((a, b) => a.id - b.id);
    selection = [];
    renderBuildBoard(q);
  });
}

function tileMarkup(tile, index, source, style, lineNumber = null) {
  const line = lineNumber ? `<span class="line-number">${lineNumber}</span>` : "";
  return `<button type="button" class="logic-tile ${style === "proof" ? "proof-tile" : ""}" draggable="true" data-source="${source}" data-index="${index}">${line}<span>${tile.text}</span></button>`;
}

function moveBuildTile(source, index) {
  const from = source === "pool" ? buildPool : selection;
  const to = source === "pool" ? selection : buildPool;
  const [tile] = from.splice(index, 1);
  if (!tile) return;
  to.push(tile);
  if (source === "selection") buildPool.sort((a, b) => a.id - b.id);
  renderBuildBoard(questions[current]);
}

function renderLogicLab(q) {
  logicStageSolved = false;
  feedback.hidden = true;
  hintBox.hidden = true;
  hintButton.disabled = false;
  checkButton.hidden = false;
  nextButton.hidden = true;
  nextButton.textContent = logicStage < 2 ? `Continue to Stage ${logicStage + 2} →` : "Finish challenge →";

  if (logicStage === 0) renderClassificationStage(q);
  if (logicStage === 1) renderCounterexampleStage();
  if (logicStage === 2) renderLogicProofStage(q);
}

function renderClassificationStage(q) {
  const categories = [
    { id: "valid", title: "Valid", note: "True under every assignment" },
    { id: "sat", title: "Satisfiable, but not valid", note: "True sometimes and false sometimes" },
    { id: "unsat", title: "Unsatisfiable", note: "False under every assignment" }
  ];
  const unplaced = q.formulas.filter((formula) => !logicPlacements[formula.id]);
  answerArea.innerHTML = `
    <div class="stage-banner"><strong>Stage 1 of 3</strong><span>Classify all three rules</span></div>
    <p class="question-prompt">Drag every formula into exactly one classification zone.</p>
    <div class="formula-dock logic-drop" data-category="unassigned">
      ${unplaced.map((formula) => logicFormulaCard(formula)).join("") || '<span class="empty-note">All rules have been classified.</span>'}
    </div>
    <div class="classification-grid">
      ${categories.map((category) => `
        <section class="classification-zone logic-drop" data-category="${category.id}">
          <h3>${category.title}</h3><p>${category.note}</p>
          <div class="zone-cards">${q.formulas.filter((formula) => logicPlacements[formula.id] === category.id).map((formula) => logicFormulaCard(formula)).join("")}</div>
        </section>`).join("")}
    </div>
    <p class="build-help">Drag with a mouse, or click a formula repeatedly to move it through the zones.</p>`;

  answerArea.querySelectorAll(".logic-formula-card").forEach((card) => {
    card.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", card.dataset.formula));
    card.addEventListener("click", () => cycleFormulaPlacement(card.dataset.formula));
  });
  answerArea.querySelectorAll(".logic-drop").forEach((zone) => {
    zone.addEventListener("dragover", (event) => { event.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      const id = event.dataTransfer.getData("text/plain");
      if (!q.formulas.some((formula) => formula.id === id)) return;
      if (zone.dataset.category === "unassigned") delete logicPlacements[id];
      else logicPlacements[id] = zone.dataset.category;
      renderClassificationStage(q);
    });
  });
}

function logicFormulaCard(formula) {
  return `<button type="button" class="logic-formula-card" draggable="true" data-formula="${formula.id}"><span>${formula.label}</span><strong>${formula.text}</strong></button>`;
}

function cycleFormulaPlacement(id) {
  const order = [undefined, "valid", "sat", "unsat"];
  const next = order[(order.indexOf(logicPlacements[id]) + 1) % order.length];
  if (next) logicPlacements[id] = next;
  else delete logicPlacements[id];
  renderClassificationStage(questions[current]);
}

function renderCounterexampleStage() {
  answerArea.innerHTML = `
    <div class="stage-banner"><strong>Stage 2 of 3</strong><span>Counterexample laboratory</span></div>
    <p class="question-prompt">Rule A, P → ¬P, is not valid. Set P to the value that makes the rule false.</p>
    <div class="counterexample-panel">
      <div class="truth-switches">
        <button type="button" class="counter-value ${logicCounterexample === "T" ? "selected" : ""}" data-value="T">P = True</button>
        <button type="button" class="counter-value ${logicCounterexample === "F" ? "selected" : ""}" data-value="F">P = False</button>
      </div>
      <div class="evaluation-card">
        <span>P → ¬P</span>
        <strong>${logicCounterexample === "?" ? "Choose P" : logicCounterexample === "T" ? "T → F = False" : "F → T = True"}</strong>
      </div>
    </div>
    <p class="build-help">A single false row is enough to prove that a formula is not valid.</p>`;
  answerArea.querySelectorAll(".counter-value").forEach((button) => button.addEventListener("click", () => {
    logicCounterexample = button.dataset.value;
    renderCounterexampleStage();
  }));
}

function renderLogicProofStage(q) {
  answerArea.innerHTML = `
    <div class="stage-banner"><strong>Stage 3 of 3</strong><span>Informal proof builder</span></div>
    <p class="question-prompt">Show why Rule B, (P → Q) → (¬Q → ¬P), is valid. Arrange the six necessary lines in order; four tiles are distractors.</p>
    <p class="build-label">Proof-line bank</p>
    <div class="tile-bank proof-board logic-proof-drop" data-target="pool">
      ${logicProofPool.map((tile, index) => logicProofTile(tile, index, "pool")).join("") || '<span class="empty-note">All tiles are on the proof board.</span>'}
    </div>
    <div class="build-header"><p class="build-label">Your proof</p><button type="button" class="clear-logic-proof">Clear proof</button></div>
    <div class="solution-zone proof-board logic-proof-drop" data-target="selection">
      ${logicProofSelection.map((tile, index) => logicProofTile(tile, index, "selection", index + 1)).join("") || '<span class="empty-note">Drag or click proof lines here.</span>'}
    </div>`;
  answerArea.querySelectorAll(".logic-proof-tile").forEach((tile) => {
    tile.addEventListener("click", () => moveLogicProofTile(tile.dataset.source, Number(tile.dataset.index)));
    tile.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", JSON.stringify({ source: tile.dataset.source, index: Number(tile.dataset.index) })));
  });
  answerArea.querySelectorAll(".logic-proof-drop").forEach((zone) => {
    zone.addEventListener("dragover", (event) => { event.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault(); zone.classList.remove("drag-over");
      try {
        const payload = JSON.parse(event.dataTransfer.getData("text/plain"));
        if (payload.source !== zone.dataset.target) moveLogicProofTile(payload.source, payload.index);
      } catch (_) { /* Ignore unrelated drops. */ }
    });
  });
  answerArea.querySelector(".clear-logic-proof").addEventListener("click", () => {
    logicProofPool = [...logicProofPool, ...logicProofSelection].sort((a, b) => a.id - b.id);
    logicProofSelection = [];
    renderLogicProofStage(q);
  });
}

function logicProofTile(tile, index, source, lineNumber = null) {
  const line = lineNumber ? `<span class="line-number">${lineNumber}</span>` : "";
  return `<button type="button" class="logic-tile proof-tile logic-proof-tile" draggable="true" data-source="${source}" data-index="${index}">${line}<span>${tile.text}</span></button>`;
}

function moveLogicProofTile(source, index) {
  const from = source === "pool" ? logicProofPool : logicProofSelection;
  const to = source === "pool" ? logicProofSelection : logicProofPool;
  const [tile] = from.splice(index, 1);
  if (!tile) return;
  to.push(tile);
  if (source === "selection") logicProofPool.sort((a, b) => a.id - b.id);
  renderLogicProofStage(questions[current]);
}

function selectOption(button, type) {
  const index = Number(button.dataset.index);
  if (type === "multi") {
    const exists = selection.includes(index);
    selection = exists ? selection.filter((item) => item !== index) : [...selection, index];
    button.classList.toggle("selected", !exists);
  } else {
    selection = index;
    answerArea.querySelectorAll(".option").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  }
}

function answerIsComplete(q) {
  if (q.type === "truth") return !selection.includes("?");
  if (q.type === "build") return selection.length > 0;
  if (q.type === "multi") return selection.length > 0;
  return selection !== null;
}

function answerIsCorrect(q) {
  if (q.type === "truth") return q.answer.every((value, i) => selection[i] === value);
  if (q.type === "build") return selection.length === q.answer.length && q.answer.every((value, i) => selection[i].text === value);
  if (q.type === "multi") return selection.length === q.answer.length && q.answer.every((value) => selection.includes(value));
  return selection === q.answer;
}

function markAnswer(q) {
  if (q.type === "truth") {
    answerArea.querySelectorAll(".truth-toggle").forEach((button, i) => {
      button.style.borderColor = selection[i] === q.answer[i] ? "#2d9b67" : "#c94f4f";
    });
  } else if (q.type === "build") {
    answerArea.querySelector(".solution-zone").classList.add("build-correct");
  } else {
    answerArea.querySelectorAll(".option").forEach((button, i) => {
      if ((Array.isArray(q.answer) && q.answer.includes(i)) || q.answer === i) button.classList.add("correct");
      if (button.classList.contains("selected") && !button.classList.contains("correct")) button.classList.add("wrong");
    });
  }
}

function checkAnswer() {
  const q = questions[current];
  if (q.type === "logicLab") {
    checkLogicLab(q);
    return;
  }
  if (!answerIsComplete(q)) {
    feedback.hidden = false;
    feedback.className = "feedback error";
    feedback.textContent = q.type === "truth" ? "Set every truth-table row before checking." : "Choose an answer before checking.";
    return;
  }
  attempts += 1;
  if (!answerIsCorrect(q)) {
    feedback.hidden = false;
    feedback.className = "feedback error";
    feedback.innerHTML = "Not quite. Recheck the exact meaning of each connective, then try again.";
    return;
  }
  const earned = Math.max(6, 10 - (attempts - 1) * 2 - (hintUsed ? 2 : 0));
  score += earned;
  $("#scoreValue").textContent = score;
  markAnswer(q);
  feedback.hidden = false;
  feedback.className = "feedback success";
  feedback.innerHTML = `<strong>Mission solved! +${earned} points.</strong> ${q.explanation}`;
  checkButton.hidden = true;
  hintButton.disabled = true;
  nextButton.hidden = false;
  answerArea.querySelectorAll("button").forEach((button) => { button.disabled = true; });
}

function checkLogicLab(q) {
  let complete = false;
  let correct = false;
  if (logicStage === 0) {
    complete = q.formulas.every((formula) => Boolean(logicPlacements[formula.id]));
    correct = complete && q.formulas.every((formula) => logicPlacements[formula.id] === q.classificationAnswer[formula.id]);
  } else if (logicStage === 1) {
    complete = logicCounterexample !== "?";
    correct = logicCounterexample === "T";
  } else {
    complete = logicProofSelection.length > 0;
    correct = logicProofSelection.length === q.proofAnswer.length && q.proofAnswer.every((text, index) => logicProofSelection[index].text === text);
  }

  if (!complete) {
    feedback.hidden = false;
    feedback.className = "feedback error";
    feedback.textContent = logicStage === 0 ? "Classify all three formulas before checking." : logicStage === 1 ? "Choose a truth value for P." : "Build the proof before checking.";
    return;
  }
  attempts += 1;
  if (!correct) {
    logicErrors += 1;
    feedback.hidden = false;
    feedback.className = "feedback error";
    feedback.textContent = logicStage === 0 ? "At least one formula is in the wrong category. Remember that a valid formula is also satisfiable." : logicStage === 1 ? "This assignment makes the rule true, so it is not a counterexample. Try the other value." : "The proof is incomplete, contains a distractor, or has a line out of order.";
    return;
  }

  logicStageSolved = true;
  checkButton.hidden = true;
  hintButton.disabled = true;
  nextButton.hidden = false;
  answerArea.querySelectorAll("button").forEach((button) => { button.disabled = true; });
  feedback.hidden = false;
  feedback.className = "feedback success";

  if (logicStage < 2) {
    const messages = [
      "Correct. Rule A is satisfiable but not valid; Rules B and C are valid.",
      "Correct. With P = T, ¬P = F, so T → F is false. You found a counterexample."
    ];
    feedback.innerHTML = `<strong>Stage ${logicStage + 1} solved!</strong> ${messages[logicStage]}`;
    return;
  }

  const earned = Math.max(6, 10 - logicErrors * 2 - (hintUsed ? 2 : 0));
  score += earned;
  $("#scoreValue").textContent = score;
  feedback.innerHTML = `<strong>Final mission solved! +${earned} points.</strong> ${q.explanation}`;
}

function showHint() {
  hintUsed = true;
  const q = questions[current];
  const hint = q.type === "logicLab" ? q.hints[logicStage] : q.hint;
  hintBox.innerHTML = `<strong>Hint:</strong> ${hint}`;
  hintBox.hidden = false;
  hintButton.disabled = true;
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    completeChallenge();
  }
}

function handleNext() {
  const q = questions[current];
  if (q.type === "logicLab" && logicStageSolved && logicStage < 2) {
    logicStage += 1;
    renderLogicLab(q);
    return;
  }
  nextQuestion();
}

function completeChallenge() {
  const now = new Date();
  $("#certificateName").textContent = playerName;
  $("#certificateScore").textContent = `${score} / 130`;
  $("#certificateDate").textContent = now.toLocaleString([], { dateStyle: "long", timeStyle: "short" });
  status.hidden = true;
  showScreen(certificateScreen);
}

$("#startForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#playerName").value.trim();
  if (!name || !$("#privacyCheck").checked) return;
  playerName = name;
  current = 0;
  score = 0;
  $("#scoreValue").textContent = "0";
  status.hidden = false;
  renderQuestion();
  showScreen(gameScreen);
});

checkButton.addEventListener("click", checkAnswer);
hintButton.addEventListener("click", showHint);
nextButton.addEventListener("click", handleNext);
$("#printButton").addEventListener("click", () => window.print());
$("#restartButton").addEventListener("click", () => {
  $("#startForm").reset();
  status.hidden = true;
  showScreen(startScreen);
});

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

function showScreen(screen) {
  [startScreen, gameScreen, certificateScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = questions[current];
  attempts = 0;
  hintUsed = false;
  selection = q.type === "multi" ? [] : q.type === "truth" ? Array(q.rows.length).fill("?") : null;
  feedback.hidden = true;
  feedback.className = "feedback";
  hintBox.hidden = true;
  hintButton.disabled = false;
  checkButton.hidden = false;
  nextButton.hidden = true;
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
    answerArea.innerHTML = `
      <p class="question-prompt">${q.prompt}</p>
      <table class="truth-table">
        <thead><tr><th>p</th><th>q</th><th>r</th><th>(p ∨ q) ∧ ¬r</th></tr></thead>
        <tbody>${q.rows.map((row, i) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><button class="truth-toggle" data-row="${i}" data-value="?" aria-label="Set row ${i + 1} truth value">?</button></td></tr>`).join("")}</tbody>
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

  answerArea.innerHTML = `<p class="question-prompt">${q.prompt}</p><div class="options">${q.options.map((option, i) => `
    <button class="option ${q.formula ? "formula-option" : ""}" type="button" data-index="${i}">
      <span class="option-key">${String.fromCharCode(65 + i)}</span><span>${option}</span>
    </button>`).join("")}</div>`;
  answerArea.querySelectorAll(".option").forEach((button) => button.addEventListener("click", () => selectOption(button, q.type)));
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
  if (q.type === "multi") return selection.length > 0;
  return selection !== null;
}

function answerIsCorrect(q) {
  if (q.type === "truth") return q.answer.every((value, i) => selection[i] === value);
  if (q.type === "multi") return selection.length === q.answer.length && q.answer.every((value) => selection.includes(value));
  return selection === q.answer;
}

function markAnswer(q) {
  if (q.type === "truth") {
    answerArea.querySelectorAll(".truth-toggle").forEach((button, i) => {
      button.style.borderColor = selection[i] === q.answer[i] ? "#2d9b67" : "#c94f4f";
    });
  } else {
    answerArea.querySelectorAll(".option").forEach((button, i) => {
      if ((Array.isArray(q.answer) && q.answer.includes(i)) || q.answer === i) button.classList.add("correct");
      if (button.classList.contains("selected") && !button.classList.contains("correct")) button.classList.add("wrong");
    });
  }
}

function checkAnswer() {
  const q = questions[current];
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

function showHint() {
  hintUsed = true;
  hintBox.innerHTML = `<strong>Hint:</strong> ${questions[current].hint}`;
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

function completeChallenge() {
  const now = new Date();
  $("#certificateName").textContent = playerName;
  $("#certificateScore").textContent = `${score} / 80`;
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
nextButton.addEventListener("click", nextQuestion);
$("#printButton").addEventListener("click", () => window.print());
$("#restartButton").addEventListener("click", () => {
  $("#startForm").reset();
  status.hidden = true;
  showScreen(startScreen);
});

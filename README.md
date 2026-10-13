# Susan Zehra's Propositional Logic Challenge

A self-contained, browser-based learning game with thirteen increasingly difficult real-world propositional-logic missions. It is designed for GitHub Pages and requires no server, database, account, or installation.

## Features

- Thirteen sequential missions covering propositions, negation, conjunction, conditionals, biconditionals, truth tables, logical equivalence, satisfiability, validity, counterexamples, and multi-step inference
- Two substantial drag-and-drop construction games with distractor tiles
- Three truth-table missions, culminating in a sixteen-row, four-variable table
- A three-stage final logic arena combining classification, counterexample construction, and proof assembly
- Real-world scenarios and a hint for every mission
- Immediate explanatory feedback and session-only scoring
- Dependency-based proof validation that accepts any logically valid ordering
- Personalized completion certificate with date and time
- Print / Save as PDF support
- Responsive design for computers, tablets, and phones
- No analytics, tracking, network requests, or stored names

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and `LICENSE.txt` to the repository root.
3. Open the repository's **Settings**.
4. Select **Pages** in the left sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder, then click **Save**.
7. Wait a few minutes. GitHub will display the public site address on the Pages settings screen.

## Test locally

You can double-click `index.html`, or run a simple local server from this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Privacy

The player's name and answers remain in browser memory only for the current session. The project contains no storage, tracking, analytics, cookies, or backend service.

## Permission

The hosted activity may be used by students for educational purposes. Reuse of the source code requires prior written permission from Susan Zehra. See `LICENSE.txt`.

# Football Match Stats Tracker Suite

A complete, lightweight, browser-based suite for managing, tracking, and broadcasting football (soccer) matches. This tool requires no backend, runs entirely in your web browser, and allows match officials or media managers to generate highly professional social media graphics and interactive fan reports on the fly.

## Project Structure

This project consists of three standalone HTML tools:

### 1. `index.html` (The Main Engine)
The core application of the suite. It handles pre-match setup, live in-game stat tracking, substitution management, and post-match graphic generation. 
* **Fixture Maker**: Generate pre-match schedule graphics with team logos, match time, and weather icons.
* **Lineup Management**: Input formations, starters (up to 9v9), and bench players.
* **CSV Roster Import/Export**: Save team rosters as `.csv` files and load them later. Automatically assigns selected players to the starting lineup and moves the rest to the bench.
* **Live Match Tracking**: Track goals, assists, shots, shots on target, fouls, cards, corners, and possession.
* **Smart Substitutions**: Select "Player Coming Off" and "Player Coming On" from dynamically updated dropdowns (supports rolling subs).
* **Event Logging**: Record goals (with minute and assist tracking), yellow cards, and red cards using roster dropdowns.
* **Man of the Match**: Pick the MOTM from the combined rosters at Full Time.
* **Social Media Export**: Auto-generate stunning, high-quality square graphics for Half Time and Full Time match results.
* **Fan View Export**: Export an interactive, stylized HTML file containing the match summary, lineups, and timeline to share with fans.

### 2. `possession.html`
A dedicated, manual possession tracker. Use this tool to accurately click and track real-time possession between Team A and Team B, which can then be inputted into the main tracker.

### 3. `stats.html`
A lightweight, standalone tool used strictly for keeping a running ledger of player goals and assists across multiple games or tournaments.

---

## How to Use

Because this project is built with standard web technologies (HTML, CSS, JavaScript), there is **no installation required**.

1. Extract the project files to a folder on your computer.
2. Double-click `index.html`, `possession.html`, or `stats.html` to open them in any modern web browser (Chrome, Safari, Edge, Firefox).

### Workflow for `index.html`
1. **Setup Screen**: Enter the Tournament Name and Team Names. Upload team logos (PNG/JPG).
2. **Set Lineups**: Either manually type in your Starters and Bench, or use the **"Load from CSV"** button to instantly import a saved roster. 
3. *(Optional)* **Fixture Graphic**: Click "Schedule Match" in the top right to generate a pre-game promotional graphic.
4. **Start Match**: Click "Save Lineups & Start Match" to enter the tracker screen. The match clock will begin.
5. **Track Stats**: Use the `+` and `-` buttons to track stats. When logging a Goal, Yellow Card, or Red Card, a popup will ask you to select the specific player involved.
6. **Substitutions**: Click "Make Substitution" to swap an active player with a bench player.
7. **End Match**: Progress the clock through 1st Half, Half Time, 2nd Half, and Full Time. Select your Man of the Match.
8. **Export**: Click **"Save as Image"** to download the final score graphic, or **"Export Interactive HTML"** to download the Fan View match report.

---

## Technologies Used

* **HTML5**: Application structure and semantics.
* **CSS3**: Custom styling, grid layouts, responsive design, and CSS variables for theming.
* **Vanilla JavaScript**: Logic state management, timers, DOM manipulation, CSV parsing, and dynamic UI updates. No JS frameworks (like React/Vue) were required.
* **[html2canvas](https://html2canvas.hertzen.com/)**: Used to capture specific DOM elements and render them as downloadable `.png` social media graphics.

---

## CSV Format Guide

When creating or editing rosters externally (e.g., in Excel or Google Sheets) to import into `index.html`, use the following format:

```csv
Name,Position
John Doe,ST
Jane Smith,CM
Alex Johnson,GK


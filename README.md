# ScoreApp: Professional Tournament Platform

A complete, real-time, browser-based suite for managing, tracking, and broadcasting football (soccer) tournaments. Upgraded with a modern, SofaScore/FotMob-inspired interface, this platform uses Firebase as a backend to sync data in real-time across all devices.

## Project Structure

This project consists of the main platform engine and auxiliary tools:

### 1. `index.html` (The ScoreApp Engine)
The core application of the suite. It handles tournament creation, team registration, live match tracking, knockout brackets, and announcements.
* **Modern UI & Theme Engine**: A sleek, mobile-first design featuring a bottom navigation bar, smooth slide-up modals, and three customizable themes (Dark, Light, AMOLED) saved to your local storage.
* **Real-time Sync (Firebase)**: All matches, brackets, stats, and announcements update live for all connected users without needing to refresh the page.
* **Tournament Management**: Create Group Stage or Knockout tournaments. Automatically generates and updates Knockout Brackets (up to Round of 32).
* **Advanced Match Scheduling**: 
  * "Set Matchup" to determine bracket opponents.
  * "Schedule Match" to assign dates, times, and weather conditions.
* **Live Match Center**: Deep-dive into specific matches with live score updates, timelines (Goals, Assists, Yellows, Reds), lineups, and player ratings.
* **Automated Player Ratings**: Players automatically gain ratings for Goals/Assists and lose ratings for Red Cards.
* **Platform Announcements**: Post news updates, images, and vlogs directly to the home feed. Admins can delete posts directly from the feed.
* **Graphic Generation**: Generate pre-match fixture graphics and print-friendly tournament brackets on the fly.

### 2. `admin_tracker.html`
The administrative dashboard for logging live match events. Track goals, assists, subs, cards, and possession. Integrates directly with the Firebase backend to update the Match Center in real time.

### 3. Auxilliary Tools
* `possession.html`: A dedicated, manual possession tracker.
* `photo.html`: A tool for taking or uploading player photos.
* `predictor.html`: A fan-engagement tool for predicting match outcomes.

---

## How to Use

### Setup & Requirements
This project uses Firebase for real-time database management and authentication.
1. The project requires an active internet connection to sync with Firebase.
2. Open `index.html` in any modern web browser. 
3. **Admin Access**: Standard users see a read-only fan view. To manage tournaments, click the Admin icon (👤) in the top right header and log in.

### Admin Workflow
1. **Create Tournament**: Use the Admin Panel to create a new Group or Knockout tournament.
2. **Register Squads**: Add teams, upload logos, and define player rosters.
3. **Set Brackets / Schedule**: 
   * Go to the Bracket tab and click "Set Matchup" on TBD nodes. 
   * Click the new matchup to open the Match Center and hit "Schedule Match" to set the date/time.
4. **Track Live Match**: Once a match is scheduled, use the `admin_tracker.html` (or internal admin tools) to log live events. Fans viewing `index.html` will see the score and timeline update instantly.
5. **Post News**: Click "Post News" in the Admin panel to share updates, images, or vlog videos to the Home tab.

---

## Technologies Used

* **HTML5 / CSS3**: Modern structural semantics and a comprehensive CSS variable design system for theming (Dark/Light/AMOLED).
* **Vanilla JavaScript**: Logic state management, DOM manipulation, and dynamic UI updates without heavy front-end frameworks.
* **Firebase (Firestore & Auth)**: Real-time NoSQL database for syncing match states, brackets, leaderboards, and user authentication.
* **html2canvas**: Used to capture specific DOM elements and render them as downloadable `.png` social media graphics.

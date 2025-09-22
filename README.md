# Mini Music Distribution Dashboard

A fully-featured music distribution dashboard built with Next.js and React. This project was created as a frontend assessment and includes all required features plus several bonus additions for an enhanced user experience and a polished UI.


---

## ✨ Features Completed

### Required Features
- [x] **Login Page:** Mock authentication with a modern, "frosted glass" UI on a custom background.
- [x] **Dashboard Page:** Displays a list of tracks from a mock API in a clean, responsive table layout.
- [x] **Track Upload Page:** A form to add new tracks to the dashboard with client-side validation.
- [x] **Track Details Page:** Dynamic routing (`/track/[id]`) to show details for a specific track.

### Bonus Features
- [x] **Search/Filter:** Real-time search functionality on the dashboard to filter tracks by title or artist.
- [x] **Theme Switcher:** A button to toggle the application between a light and a dark mode.
- [x] **Persistent State:** The user's theme choice and login session are saved to `localStorage`, so they persist across page reloads and browser sessions.
- [x] **Polished UI/UX:** Enhanced with a consistent layout, responsive design, and smooth hover/transition effects.

---

## 🛠️ Setup and Run Instructions

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/VandanaSh178/mini-music-dashboard.git](https://github.com/VandanaSh178/mini-music-dashboard.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd mini-music-dashboard
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 💡 Approach Taken

-   **Framework:** Built with **Next.js (Pages Router)** to leverage its powerful file-based routing, dynamic routing capabilities, and built-in API routes for the mock backend.
-   **State Management:**
    -   **Local State:** Utilized React Hooks (`useState`, `useEffect`) for managing state within individual components (e.g., form inputs, search queries).
    -   **Global State:** Implemented the **React Context API** to manage application-wide state for Theme (light/dark mode) and Authentication (login status). This provides a clean and scalable solution without prop-drilling.
-   **Styling:**
    -   Styled with **Global CSS and CSS Modules** for a combination of a consistent theme and component-scoped styles.
    -   A theme was established using **CSS Variables**, allowing for an easy and efficient implementation of the light/dark mode switcher.
    -   The design is fully responsive for mobile, tablet, and desktop, with a focus on a modern aesthetic.
-   **User Experience:** Enhanced with a persistent light/dark theme, session persistence using `localStorage`, and dynamic hover/transition effects to create an engaging and user-friendly interface.

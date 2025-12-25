# [Illustration Catalog](https://wrincied.github.io/Portfolio/home)

This is a portfolio web application designed to showcase a range of creative services and introduce the team behind them. The project is built as a Single Page Application (SPA).

## Features

*   **Service Showcase:** Browse different creative service categories such as UI/UX, Illustrations, Web Development, Motion Design, and Game Design.
*   **Team Profiles:** View dedicated pages for each team member.
*   **Routing:** The application uses Angular Router to navigate between different sections.
*   **Component-Based Architecture:** The UI is built using a modular, component-based structure.

## Technologies Used

*   **Frontend:**
    *   Angular (~11.2.6)
    *   TypeScript (~4.1.5)
    *   RxJS
    *   HTML5
    *   SCSS
    *   `ngx-drag-scroll` for scrollable areas.

*   **Development & Testing:**
    *   Angular CLI
    *   Karma & Jasmine (Unit Testing)
    *   Protractor (E2E Testing)
    *   TSLint

## Setup and Usage

**Prerequisites:**

*   Node.js and npm installed on your machine.
*   Angular CLI installed globally is recommended (`npm install -g @angular/cli`).

**Installation:**

1.  Clone the repository:
    ```bash
    git clone https://github.com/wrincied/Portfolio.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd CommercialWebsite
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

**Running the Application:**

1.  Start the development server:
    ```bash
    npm start
    ```
2.  The application will be running at `http://localhost:4200/`.

## How to Use

1.  Open your web browser and go to `http://localhost:4200`.
2.  The application will redirect to the home page.
3.  Use the navigation links to explore the different sections like "UI/UX", "Illustrations", or "Our Team".

## File Structure

```
.
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/         # Main landing page components
│   │   │   ├── router/       # Components for each routed page (services, team members)
│   │   │   ├── footer/       # Footer component
│   │   │   └── slider/       # Slider component
│   │   ├── app-routing.module.ts # Defines application routes
│   │   ├── app.component.ts      # Root application component
│   │   └── app.module.ts         # Root application module
│   ├── assets/             # Static assets (images, icons)
│   ├── environments/       # Environment-specific configurations
│   ├── main.ts             # Main entry point of the application
│   └── styles.scss         # Global styles
├── angular.json          # Angular CLI configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

Note: This is an archived portfolio project from March 2023. It serves as a demonstration of early full-stack development skills using vanilla JavaScript and Node.js. For my most recent work with Angular 21 and Signals, please see the [Spotify Clone](https://github.com/wrincied/spotify-clone) repository.

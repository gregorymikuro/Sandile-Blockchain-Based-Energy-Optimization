# Sandile Energies Web Application

Welcome to the **Sandile Energies** web application! This project aims to help users reduce energy consumption and improve efficiency through cutting-edge, blockchain-driven solutions. The platform provides tools for analyzing energy usage, implementing recommendations, and promoting energy optimization.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [ICP Login Integration](#icp-login-integration)
- [Usage](#usage)
  - [Analyzing Energy Usage](#analyzing-energy-usage)
  - [Recommendations](#recommendations)
- [License](#license)

## Introduction
The **Sandile Energies** platform is designed to help users make smarter energy decisions. It provides energy usage analytics, personalized energy-saving recommendations, and tools to implement and monitor energy efficiency improvements. The platform also includes Internet Computer (ICP) blockchain authentication for a secure and decentralized experience.

## Features

- **Energy Usage Analysis**: Visual insights into your energy consumption, with charts like line graphs, bar charts, and pie charts.
- **Recommendations**: Personalized suggestions for optimizing energy usage, including goal setting and progress tracking.
- **ICP Login Integration**: Secure login using Internet Identity provided by the ICP blockchain.
- **Interactive UI**: Engaging visual elements, including animations, charts, and dynamically updating components.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations and transitions.
- **Node.js** and **Express**: Server-side environment and framework.
- **Vite**: Development build tool for fast and efficient bundling.
- **@dfinity/auth-client**: Authentication client for ICP Internet Identity integration.

## Getting Started

Follow these steps to set up the **Sandile Energies** web application on your local environment.

### Prerequisites

- **Node.js** (v14 or later)
- **npm**
- **Internet Connection** (for ICP login)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/gregorymikuro/Sandile-Blockchain-Based-Energy-Optimization
   cd sandile-energies
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm run dev
   ```

2. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Folder Structure

The project follows the following folder structure:

```
src/
  Sandile_backend/
    src/
      (Rust backend code)
    Cargo.toml
    Sandile_backend.did
  Sandile_frontend/
    public/
      images/
        (Logo images, partner logos, etc.)
      videos/
        bulb.mp4
    src/
      components/
        Header.jsx
        Footer.jsx
        HeroSection.jsx
        PartnerLogos.jsx
        ICPLogin.jsx
        CallToAction.jsx
      pages/
        HomePage.jsx
        AnalyzePage.jsx
        RecommendationsPage.jsx
      assets/
        images/
        videos/
      styles/
        tailwind.css
    index.html
    package.json
    postcss.config.js
    tailwind.config.js
    tsconfig.json
    vite.config.js
.gitignore
Cargo.lock
Cargo.toml
README.md
dfx.json
generate_did.sh
package-lock.json
package.json
tsconfig.json
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build.

## Environment Variables

The application uses environment variables for configuration. You can create a `.env` file in the root directory with the following keys:

```
CANISTER_ID=<YOUR_CANISTER_ID>
DFX_NETWORK=ic
```
Make sure to configure these based on your DFX and canister settings.

## ICP Login Integration

The application uses **@dfinity/auth-client** for Internet Identity authentication. Users can securely log in to access features such as setting energy goals and viewing personalized recommendations.

To use the ICP login feature, ensure that the **identityProvider** is set to `https://identity.ic0.app` in the `ICPLogin.tsx` component.

## Usage

### Analyzing Energy Usage
The **Analyze Page** includes interactive charts (line graphs, pie charts, and bar charts) that provide insights into your energy consumption. You can view daily, monthly, or annual usage data, allowing you to identify trends and opportunities for improvement.

### Recommendations
The **Recommendations Page** provides personalized energy-saving suggestions, each with actionable buttons:
- **Set Goal**: Establish energy-saving objectives.
- **Working Towards**: Track your progress.
- **Ask for Help**: Request professional assistance.
- **Mark as Completed**: Track completed energy-saving tasks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

We hope you enjoy using **Sandile Energies** to manage your energy consumption effectively. If you have any questions or run into issues, feel free to reach out through the **Contact Us** page.


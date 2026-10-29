# Government Schemes (Scheme Sathi) 🇮🇳

> **Scheme Sathi** is an intelligent, real-time national welfare and grant discovery engine engineered for Indian citizens. The platform dynamically matches users against **Central, State, and Corporate CSR schemes** using a multidimensional 28-parameter rule-based eligibility engine.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)

---

## 🌟 Key Features

- **3,200+ Verified Government & CSR Schemes**: Comprehensive database aggregating Central Ministries, State Governments, and Corporate Foundation CSR initiatives (Tata Trusts, Reliance, Infosys).
- **28-Parameter Multi-Dimensional Matching Engine**: Real-time evaluation taking into account demographics, household economic thresholds, education, agricultural assets, enterprise type, and disability factors.
- **Interactive Eligibility Assessment Wizard**: Intuitive multi-step questionnaire guiding citizens through qualification parameters with instant benefit calculation.
- **Modern Obsidian & Glassmorphic UI**: High-fidelity interface with smooth momentum scrolling (Lenis), Framer Motion physics, dynamic 3D scenes (Spline & Canvas parallax), and dark/light modes.
- **Secure Authentication & Cloud Synchronization**: Supabase PostgreSQL database integration with row-level security, encrypted localStorage caching, and duplicate registration protection.
- **Offline & Responsive Resilience**: Fully responsive on mobile, tablet, and desktop devices with fast client-side query indexing.

---

## 🏗️ Technical Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling & Animations**: TailwindCSS, Framer Motion, Lenis Smooth Scroll
- **3D & Parallax**: Spline Runtime, Canvas 2D/3D Parallax
- **Backend & Persistence**: Supabase (PostgreSQL & Auth), LocalStorage fallback
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Talmberg/Government-Schemes.git
cd Government-Schemes

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### 🐳 Run with Docker

You can containerize and run the complete application with Docker and Nginx:

```bash
# Build and run with Docker Compose (mapped to port 3000)
docker compose up --build -d

# Check running status
docker compose ps

# View logs
docker compose logs -f

# Stop containers
docker compose down
```
Open **http://localhost:3000** in your browser.

---

## 📖 System Documentation

For detailed technical specifications, matching algorithms, mathematical scoring models, and database schemas, see [DOCUMENTATION.md](./DOCUMENTATION.md).

---

## 📄 License

This project is licensed under the MIT License.

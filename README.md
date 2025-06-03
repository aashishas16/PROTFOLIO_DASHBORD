
# Portfolio-Ashish

This project consists of **three interconnected components**:

1. **Main Portfolio**  
   A personal portfolio website showcasing projects, skills, and experiences. Built using **React**, **Vite**, and **Tailwind CSS** for a modern and responsive design.  
   🔗 [Live Portfolio](https://main-portfolio-iota-gold.vercel.app/)

2. **Portfolio MERN Backend**  
   A backend service developed with the **MERN stack** (MongoDB, Express.js, React, Node.js). It handles API requests, manages data, and provides a robust foundation for the portfolio’s dynamic features.

3. **Portfolio Dashboard**  
   An admin dashboard for managing portfolio content such as projects, blogs, and user interactions. It offers an intuitive interface for seamless updates and monitoring.  
   🔗 [Live Dashboard](https://protfolio-dashbord.vercel.app/login)

Together, these components create a **comprehensive portfolio solution**, combining a visually appealing frontend, a powerful backend, and an efficient content management system.

---

## 🚀 Features

- **React** – Library for building dynamic user interfaces  
- **Vite** – Lightning-fast build tool  
- **Tailwind CSS** – Utility-first CSS framework  
- **Redux Toolkit** – State management made simple and scalable  
- **ShadCn UI** – Beautiful UI components for React  
- **ESLint** – Code quality and linting tool  
- **Zod** – Schema validation library

---

## 📁 Project Structure

```
MAIN_PORTFOLIO/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   ├── lib/              # Utility functions
│   ├── styles/           # Global and component-specific styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind CSS entry
├── .env                  # Environment variables
├── .eslintrc.cjs         # ESLint config
├── .gitignore            # Ignore rules
├── components.json       # UI component configuration
├── index.html            # HTML entry
├── jsconfig.json         # JS config for path aliases
├── package.json          # Dependencies and scripts
├── README.md             # Documentation
└── tailwind.config.js    # Tailwind CSS config
```

---

## 📌 Projects

### 📂 **Portfolio Maker Website**  
🛠️ **Tech Stack**: React, Node.js, MongoDB, Tailwind CSS, ShadCn UI, Redux Toolkit  
📅 **Duration**: Jan 2024 – Jun 2024  

#### 🔧 Key Features & Functionality:
1. **Full-Stack Web App**  
   Built an end-to-end portfolio builder allowing users to create, manage, and update their portfolios dynamically.

2. **Secure Authentication**  
   Implemented secure login functionality with JWT and bcrypt for both users and admin.

3. **Responsive UI & Role-Based Dashboards**  
   Designed adaptive interfaces for mobile/desktop with **role-based access control (RBAC)** to separate user and admin privileges.

4. **Admin Messaging System**  
   Enabled users to send messages directly to the admin for feedback, queries, or support.

5. **Resume & Portfolio Management**  
   Users can upload and update their resume and portfolio sections directly through the dashboard.

6. **CRUD Operations**  
   Developed full **Create, Read, Update, Delete** functionality for:
   - User Profiles  
   - Resume Sections  
   - Project Listings  
   - Contact Messages

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-ashish.git
   cd portfolio-ashish
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts

- `npm run dev` – Start development server  
- `npm run build` – Build for production  
- `npm run lint` – Run ESLint checks

---

## 🔐 Environment Variables

Create a `.env` file and configure:

```
VITE_BASE_URL=https://your-backend-api-url
```

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [ShadCn UI](https://ui.shadcn.dev/)  
- [Redux Toolkit](https://redux-toolkit.js.org/)  
- [Zod](https://zod.dev/)  
- [ESLint](https://eslint.org/)





# PORTFOLIO_MERN_BACKEND

This is the backend for a portfolio application built using the MERN stack. It provides APIs for managing users, timelines, messages, skills, software applications, and projects.

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

## Project Structure

```
PORTFOLIO_MERN_BACKEND/
├── app.js                 # Main application file
├── server.js              # Server entry point
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Dependency lock file
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── /config                # Configuration files
│   └── config.env         # Environment configuration
├── /database              # Database connection setup
│   └── connection.js      # MongoDB connection logic
├── /middlewares           # Middleware functions
│   └── error.js           # Error handling middleware
├── /routes                # API route handlers
│   ├── userRouter.js      # User-related routes
│   ├── timelineRouter.js  # Timeline-related routes
│   ├── messageRouter.js   # Message-related routes
│   ├── skillRouter.js     # Skill-related routes
│   ├── softwareApplicationRouter.js # Software application routes
│   └── projectRouter.js   # Project-related routes
└── /controllers           # Controller logic for routes
    └── ...                # Individual controllers for each route
```

## Key Features

- **User Management**: APIs for user authentication and profile management.
- **Timeline**: APIs to manage timeline events.
- **Messages**: APIs to handle user messages.
- **Skills**: APIs to manage skills displayed on the portfolio.
- **Projects**: APIs to manage portfolio projects.
- **File Uploads**: Supports file uploads using `express-fileupload`.
- **Environment Variables**: Managed using `dotenv`.

## Environment Variables

The `.env` file contains sensitive information such as:

- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `MONGO_URI`
- `JWT_SECRET_KEY`
- `PORT`

Ensure this file is not shared publicly.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/aashishas16/PORTFOLIO_MERN_BACKEND.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and configure the required variables.
4. Start the server:
   ```bash
   npm start
   ```
5. The backend will run on the port specified in the `.env` file (default: `8000`).

## Scripts

- `npm start`: Starts the server.
- `npm run dev`: Starts the server in development mode using `nodemon`.

## Dependencies

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Cloudinary**: For managing media assets.
- **JWT**: For authentication.
- **dotenv**: For environment variable management.

## License

This project is licensed under the MIT License.
## 🙏 Acknowledgments

- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [ShadCn UI](https://ui.shadcn.dev/)  
- [Redux Toolkit](https://redux-toolkit.js.org/)  
- [Zod](https://zod.dev/)  
- [ESLint](https://eslint.org/)

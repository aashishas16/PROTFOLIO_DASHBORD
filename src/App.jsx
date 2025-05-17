import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ManageSkills from "./pages/ManageSkills";
import ManageProjects from "./pages/ManageProjects";
import UpdateProject from "./pages/UpdateProject";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/slices/userSlice";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { getAllSkills } from "./store/slices/skillSlice";
import { getAllSoftwareApplications } from "./store/slices/softwareApplicationSlice";
import { getAllTimeline } from "./store/slices/timelineSlice";
import { getAllMessages } from "./store/slices/messageSlice";
import ManageTimeline from "./pages/ManageTimeline";
import { getAllProjects } from "./store/slices/projectSlice";
import ViewProject from "./pages/ViewProject";
import { Signup } from "./pages/Signup";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllSkills());
    dispatch(getAllSoftwareApplications());
    dispatch(getAllTimeline());
    dispatch(getAllMessages());
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Redirect to login if user is not authenticated */}
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/manage/skills" element={isAuthenticated ? <ManageSkills /> : <Navigate to="/login" />} />
        <Route path="/manage/timeline" element={isAuthenticated ? <ManageTimeline /> : <Navigate to="/login" />} />
        <Route path="/manage/projects" element={isAuthenticated ? <ManageProjects /> : <Navigate to="/login" />} />
        <Route path="/view/project/:id" element={isAuthenticated ? <ViewProject /> : <Navigate to="/login" />} />
        <Route path="/update/project/:id" element={isAuthenticated ? <UpdateProject /> : <Navigate to="/login" />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Overview from "./pages/Overview";
// import Task from "./pages/Task";
// import TaskDetail from "./pages/TaskDetail";
// import Mentors from "./pages/Mentors";
// import Message from "./pages/Message";
// import Settings from "./pages/Settings";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";

// function Layout({ children, user }) {
//   const location = useLocation();

//   const noHeaderPages = ["/task"]; // Hide Header on Task page

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="ml-64 flex-1 bg-gray-50 min-h-screen">
//         {!noHeaderPages.includes(location.pathname) && <Header user={user} />}
//         <div className="p-6">{children}</div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(savedUser);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={user ? <Navigate to="/overview" /> : <Login setUser={setUser} />} />
//         <Route path="/signup" element={user ? <Navigate to="/overview" /> : <Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/overview"
//           element={
//             user ? (
//               <Layout user={user}>
//                 <Overview />
//               </Layout>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/task"
//           element={
//             user ? (
//               <Layout user={user}>
//                 <Task />
//               </Layout>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/task/:id"
//           element={
//             user ? (
//               <Layout user={user}>
//                 <TaskDetail />
//               </Layout>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/mentors"
//           element={
//             user ? (
//               <Layout user={user}>
//                 <Mentors />
//               </Layout>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/message"
//           element={
//             user ? (
//               <Layout user={user}>
//                 <Message />
//               </Layout>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             user ? (
//               <Layout user={user}>
//                 <Settings />
//               </Layout>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Overview from "./pages/Overview";
import Task from "./pages/Task";
import TaskDetail from "./pages/TaskDetail";
import Mentors from "./pages/Mentors";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Sidebar />}
        <div className={isAuthenticated ? "ml-64 flex-1 bg-gray-50 min-h-screen" : "flex-1"}>
          <Routes>
            {/* Public Routes */}
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                isAuthenticated ? <Overview /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/task"
              element={isAuthenticated ? <Task /> : <Navigate to="/login" />}
            />
            <Route
              path="/task/:id"
              element={isAuthenticated ? <TaskDetail /> : <Navigate to="/login" />}
            />
            <Route
              path="/mentors"
              element={isAuthenticated ? <Mentors /> : <Navigate to="/login" />}
            />
            <Route
              path="/message"
              element={isAuthenticated ? <Message /> : <Navigate to="/login" />}
            />
            <Route
              path="/settings"
              element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

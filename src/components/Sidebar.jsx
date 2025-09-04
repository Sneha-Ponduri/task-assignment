// import { NavLink } from "react-router-dom";
// import { BookOpen, Home, ListChecks, Users, MessageSquare, Settings, HelpCircle } from "lucide-react";

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col justify-between h-screen w-60 bg-white shadow-md p-4">
//       {/* Logo */}
//       <div>
//         <div className="flex items-center gap-2 mb-8">
//           <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white">
//             <BookOpen size={18} />
//           </div>
//           <span className="text-lg font-bold">DNX</span>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col gap-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               }`
//             }
//           >
//             <Home size={18} />
//             Overview
//           </NavLink>

//           <NavLink
//             to="/task"
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               }`
//             }
//           >
//             <ListChecks size={18} />
//             Task
//           </NavLink>

//           <NavLink
//             to="/mentors"
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               }`
//             }
//           >
//             <Users size={18} />
//             Mentors
//           </NavLink>

//           <NavLink
//             to="/message"
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               }`
//             }
//           >
//             <MessageSquare size={18} />
//             Message
//           </NavLink>

//           <NavLink
//             to="/settings"
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               }`
//             }
//           >
//             <Settings size={18} />
//             Settings
//           </NavLink>
//         </nav>
//       </div>

//       {/* Help Center */}
//       <div className="bg-gray-900 text-white rounded-xl p-4 text-center">
//         <div className="flex justify-center mb-2">
//           <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md">
//             <HelpCircle size={18} />
//           </div>
//         </div>
//         <p className="text-sm mb-2">Having trouble in learning? Please contact us for more questions.</p>
//         <button className="bg-white text-black text-xs px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
//           Go To Help Center
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  ClipboardList,
  Users,
  MessageSquare,
  Settings,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const navItems = [
  { name: "Overview", icon: LayoutGrid, path: "/" },
  { name: "Task", icon: ClipboardList, path: "/task" },
  { name: "Mentors", icon: Users, path: "/mentors" },
  { name: "Message", icon: MessageSquare, path: "/message" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen fixed left-0 top-0 flex flex-col justify-between">
      {/* Logo Section */}
      <div>
        <div className="flex items-center gap-3 px-6 py-6">
          <div className="bg-blue-500 p-2 rounded-lg">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">DNX</span>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-100 transition rounded-lg mx-3 ${
                  isActive ? "bg-gray-100 font-semibold" : ""
                }`
              }
            >
              <item.icon className="w-5 h-5 text-gray-500" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Help Center */}
      <div className="p-4">
        <div className="bg-gray-900 text-white rounded-2xl p-4 flex flex-col items-center text-center">
          <HelpCircle className="w-6 h-6 mb-2" />
          <h3 className="text-sm font-semibold">Help Center</h3>
          <p className="text-xs text-gray-300 mt-1">
            Having trouble in learning? Please contact us for more questions.
          </p>
          <button className="mt-3 bg-white text-gray-900 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            Go To Help Center
          </button>
        </div>
      </div>
    </div>
  );
}

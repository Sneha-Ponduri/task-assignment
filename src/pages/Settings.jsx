// import { useState } from "react";

// const Settings = () => {
//   const [activeTab, setActiveTab] = useState("general");
//   const [timezoneFormat, setTimezoneFormat] = useState("24");

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-6">Settings</h1>

//       <div className="bg-white rounded-xl shadow-sm p-6">
//         {/* Tabs */}
//         <div className="flex gap-6 border-b border-gray-200 mb-6">
//           <button
//             onClick={() => setActiveTab("general")}
//             className={`pb-2 text-sm font-medium ${
//               activeTab === "general"
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-500"
//             }`}
//           >
//             General
//           </button>
//           <button
//             onClick={() => setActiveTab("notification")}
//             className={`pb-2 text-sm font-medium ${
//               activeTab === "notification"
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-500"
//             }`}
//           >
//             Notification
//           </button>
//         </div>

//         {activeTab === "general" && (
//           <div className="space-y-6">
//             {/* Language */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Language</label>
//               <select className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>English (Default)</option>
//                 <option>Spanish</option>
//                 <option>French</option>
//               </select>
//             </div>

//             {/* Timezone */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Timezone</label>
//               <select className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option>GMT</option>
//                 <option>EST</option>
//                 <option>PST</option>
//               </select>
//             </div>

//             {/* Time Format */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Timezone</label>
//               <div className="flex gap-4">
//                 <button
//                   className={`px-4 py-2 rounded-lg border text-sm ${
//                     timezoneFormat === "24"
//                       ? "border-blue-500 text-blue-600"
//                       : "border-gray-300 text-gray-600"
//                   }`}
//                   onClick={() => setTimezoneFormat("24")}
//                 >
//                   24 Hours
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded-lg border text-sm ${
//                     timezoneFormat === "12"
//                       ? "border-blue-500 text-blue-600"
//                       : "border-gray-300 text-gray-600"
//                   }`}
//                   onClick={() => setTimezoneFormat("12")}
//                 >
//                   12 Hours
//                 </button>
//               </div>
//             </div>

//             {/* Save Button */}
//             <div>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         )}

//         {activeTab === "notification" && (
//           <div className="text-sm text-gray-500">
//             <p>Notification settings will go here...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Settings;


// import { Bell } from "lucide-react";

// export default function Settings() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="flex items-center justify-between bg-white px-8 py-4 shadow-sm border-b fixed top-0 left-64 right-0 z-10">
//         <h1 className="text-xl font-semibold">Settings</h1>
//         <div className="flex items-center gap-6">
//           {/* Notification Icon */}
//           <button className="relative">
//             <Bell className="w-6 h-6 text-gray-600" />
//             <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//           </button>
//           {/* Profile Image */}
//           <img
//             src="https://randomuser.me/api/portraits/women/44.jpg"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="pt-24 px-8">
//         <div className="bg-white p-6 rounded-xl shadow">
//           {/* Tabs */}
//           <div className="flex border-b mb-6">
//             <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-500 font-semibold">
//               General
//             </button>
//             <button className="px-4 py-2 text-gray-500 hover:text-blue-500">
//               Notification
//             </button>
//           </div>

//           {/* Language Dropdown */}
//           <div className="mb-4">
//             <label className="block mb-2 font-medium">Language</label>
//             <select className="w-full border rounded-lg px-3 py-2">
//               <option>English (Default)</option>
//               <option>French</option>
//               <option>Spanish</option>
//             </select>
//           </div>

//           {/* Timezone Dropdown */}
//           <div className="mb-4">
//             <label className="block mb-2 font-medium">Timezone</label>
//             <select className="w-full border rounded-lg px-3 py-2">
//               <option>English (Default)</option>
//               <option>EST</option>
//               <option>PST</option>
//             </select>
//           </div>

//           {/* Timezone Radio */}
//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Timezone</label>
//             <div className="flex gap-4">
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="timezone" className="form-radio" defaultChecked />
//                 24 Hours
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="timezone" className="form-radio" />
//                 12 Hours
//               </label>
//             </div>
//           </div>

//           {/* Save Button */}
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";

// export default function Settings() {
//   const [notifications, setNotifications] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className="p-6 lg:ml-64 mt-16 lg:mt-0">
//       <h1 className="text-2xl font-bold mb-6">Settings</h1>

//       <div className="space-y-6 max-w-lg">
//         {/* Account Info */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2 className="text-lg font-semibold mb-4">Account</h2>
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
//               Save Changes
//             </button>
//           </div>
//         </div>

//         {/* Preferences */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2 className="text-lg font-semibold mb-4">Preferences</h2>
//           <div className="flex justify-between items-center py-3">
//             <span className="text-gray-700">Enable Notifications</span>
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={notifications}
//                 onChange={() => setNotifications(!notifications)}
//                 className="sr-only"
//               />
//               <div
//                 className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
//                   notifications ? "bg-blue-500" : "bg-gray-300"
//                 }`}
//               >
//                 <div
//                   className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
//                     notifications ? "translate-x-5" : ""
//                   }`}
//                 />
//               </div>
//             </label>
//           </div>

//           <div className="flex justify-between items-center py-3">
//             <span className="text-gray-700">Dark Mode</span>
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={darkMode}
//                 onChange={() => setDarkMode(!darkMode)}
//                 className="sr-only"
//               />
//               <div
//                 className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
//                   darkMode ? "bg-blue-500" : "bg-gray-300"
//                 }`}
//               >
//                 <div
//                   className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
//                     darkMode ? "translate-x-5" : ""
//                   }`}
//                 />
//               </div>
//             </label>
//           </div>
//         </div>

//         {/* Logout */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { Bell, Menu } from "lucide-react";

// export default function Settings() {
//   const [activeTab, setActiveTab] = useState("Notification");

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="flex items-center justify-between bg-white px-4 py-3 shadow-sm border-b fixed top-0 left-0 right-0 z-10">
//         <div className="flex items-center gap-3">
//           {/* Hamburger Menu */}
//           <button className="p-2 rounded-md hover:bg-gray-100">
//             <Menu size={24} className="text-gray-700" />
//           </button>
//           <h1 className="text-lg font-semibold">Settings</h1>
//         </div>

//         <div className="flex items-center gap-4">
//           {/* Notification Icon */}
//           <button className="relative">
//             <Bell className="w-6 h-6 text-gray-600" />
//             <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//           </button>
//           {/* Profile */}
//           <img
//             src="https://randomuser.me/api/portraits/women/44.jpg"
//             alt="Profile"
//             className="w-9 h-9 rounded-full"
//           />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="pt-20 px-4">
//         <div className="bg-white p-5 rounded-2xl shadow-sm">
//           {/* Tabs */}
//           <div className="flex border-b mb-6">
//             <button
//               onClick={() => setActiveTab("General")}
//               className={`px-4 py-2 text-sm font-medium ${
//                 activeTab === "General"
//                   ? "border-b-2 border-blue-500 text-blue-500"
//                   : "text-gray-500"
//               }`}
//             >
//               General
//             </button>
//             <button
//               onClick={() => setActiveTab("Notification")}
//               className={`px-4 py-2 text-sm font-medium ${
//                 activeTab === "Notification"
//                   ? "border-b-2 border-blue-500 text-blue-500"
//                   : "text-gray-500"
//               }`}
//             >
//               Notification
//             </button>
//           </div>

//           {/* Notification Tab Content */}
//           {activeTab === "Notification" && (
//             <div>
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-gray-700 text-sm">Message</span>
//                 <input type="checkbox" defaultChecked className="toggle-checkbox" />
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-gray-700 text-sm">Task Update</span>
//                 <input type="checkbox" className="toggle-checkbox" />
//               </div>
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-gray-700 text-sm">Task Deadline</span>
//                 <input type="checkbox" defaultChecked className="toggle-checkbox" />
//               </div>
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-gray-700 text-sm">Mentor Help</span>
//                 <input type="checkbox" className="toggle-checkbox" />
//               </div>

//               {/* Save Button */}
//               <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                 Save Changes
//               </button>
//             </div>
//           )}

//           {/* General Tab Content */}
//           {activeTab === "General" && (
//             <div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Language</label>
//                 <select className="w-full border rounded-lg px-3 py-2 text-sm">
//                   <option>English (Default)</option>
//                   <option>French</option>
//                   <option>Spanish</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Timezone</label>
//                 <select className="w-full border rounded-lg px-3 py-2 text-sm">
//                   <option>English (Default)</option>
//                   <option>EST</option>
//                   <option>PST</option>
//                 </select>
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-sm font-medium">Timezone Format</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center gap-2">
//                     <input type="radio" name="timezone" defaultChecked /> 24 Hours
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input type="radio" name="timezone" /> 12 Hours
//                   </label>
//                 </div>
//               </div>

//               <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                 Save Changes
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Toggle switch styles */}
//       <style>{`
//         .toggle-checkbox {
//           appearance: none;
//           width: 40px;
//           height: 20px;
//           background: #ddd;
//           border-radius: 9999px;
//           position: relative;
//           cursor: pointer;
//           outline: none;
//           transition: background 0.3s;
//         }
//         .toggle-checkbox:checked {
//           background: #3b82f6;
//         }
//         .toggle-checkbox:before {
//           content: "";
//           position: absolute;
//           top: 2px;
//           left: 2px;
//           width: 16px;
//           height: 16px;
//           background: white;
//           border-radius: 9999px;
//           transition: transform 0.3s;
//         }
//         .toggle-checkbox:checked:before {
//           transform: translateX(20px);
//         }
//       `}</style>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Bell } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Notification");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between bg-white px-4 py-3 shadow-sm border-b fixed top-0 left-0 right-0 z-10 lg:ml-64">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold">Settings</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Icon */}
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            {/* Profile */}
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </div>

        {/* Settings Content */}
        <div className="pt-20 px-4 lg:ml-64">
          <div className="bg-white p-5 rounded-2xl shadow-sm max-w-md mx-auto">
            {/* Tabs */}
            <div className="flex justify-center border-b mb-6">
              <button
                onClick={() => setActiveTab("General")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "General"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
              >
                General
              </button>
              <button
                onClick={() => setActiveTab("Notification")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "Notification"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
              >
                Notification
              </button>
            </div>

            {/* Notification Tab */}
            {activeTab === "Notification" && (
              <div>
                {[
                  { label: "Message", checked: true },
                  { label: "Task Update", checked: false },
                  { label: "Task Deadline", checked: true },
                  { label: "Mentor Help", checked: false },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between mb-4"
                  >
                    <span className="text-gray-700 text-sm">{item.label}</span>
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      className="toggle-checkbox"
                    />
                  </div>
                ))}
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  Save Changes
                </button>
              </div>
            )}

            {/* General Tab */}
            {activeTab === "General" && (
              <div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">
                    Language
                  </label>
                  <select className="w-full border rounded-lg px-3 py-2 text-sm">
                    <option>English (Default)</option>
                    <option>French</option>
                    <option>Spanish</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">
                    Timezone
                  </label>
                  <select className="w-full border rounded-lg px-3 py-2 text-sm">
                    <option>GMT (Default)</option>
                    <option>EST</option>
                    <option>PST</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium">
                    Timezone Format
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="timezone" defaultChecked /> 24
                      Hours
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="timezone" /> 12 Hours
                    </label>
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toggle Switch Style */}
      <style>{`
        .toggle-checkbox {
          appearance: none;
          width: 40px;
          height: 20px;
          background: #ddd;
          border-radius: 9999px;
          position: relative;
          cursor: pointer;
          outline: none;
          transition: background 0.3s;
        }
        .toggle-checkbox:checked {
          background: #3b82f6;
        }
        .toggle-checkbox:before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 9999px;
          transition: transform 0.3s;
        }
        .toggle-checkbox:checked:before {
          transform: translateX(20px);
        }
      `}</style>
    </div>
  );
}




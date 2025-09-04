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


import { Bell } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between bg-white px-8 py-4 shadow-sm border-b fixed top-0 left-64 right-0 z-10">
        <h1 className="text-xl font-semibold">Settings</h1>
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {/* Profile Image */}
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-8">
        <div className="bg-white p-6 rounded-xl shadow">
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-500 font-semibold">
              General
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-blue-500">
              Notification
            </button>
          </div>

          {/* Language Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Language</label>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>English (Default)</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>

          {/* Timezone Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Timezone</label>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>English (Default)</option>
              <option>EST</option>
              <option>PST</option>
            </select>
          </div>

          {/* Timezone Radio */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Timezone</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="timezone" className="form-radio" defaultChecked />
                24 Hours
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="timezone" className="form-radio" />
                12 Hours
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

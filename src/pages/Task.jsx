// // // import { Search, Filter, ChevronRight, ChevronLeft } from "lucide-react";

// // // const tasks = [
// // //   {
// // //     title: "Creating Awesome Mobile Apps",
// // //     role: "UI/UX Design",
// // //     progress: 90,
// // //     time: "1 Hour",
// // //     img: "https://via.placeholder.com/300x180", // Replace with real images
// // //   },
// // //   {
// // //     title: "Creating Fresh Website",
// // //     role: "Web Developer",
// // //     progress: 85,
// // //     time: "2 Hour",
// // //     img: "https://via.placeholder.com/300x180",
// // //   },
// // //   {
// // //     title: "Creating Color Palletes",
// // //     role: "UI/UX Design",
// // //     progress: 100,
// // //     time: "1 Hour",
// // //     img: "https://via.placeholder.com/300x180",
// // //   },
// // // ];

// // // const newTasks = [
// // //   {
// // //     title: "Creating Mobile App Design",
// // //     role: "UI/UX Design",
// // //     progress: 75,
// // //     time: "3 Days Left",
// // //     img: "https://via.placeholder.com/300x180",
// // //   },
// // //   {
// // //     title: "Creating Perfect Website",
// // //     role: "Web Developer",
// // //     progress: 85,
// // //     time: "4 Days Left",
// // //     img: "https://via.placeholder.com/300x180",
// // //   },
// // //   {
// // //     title: "Mobile App Design",
// // //     role: "UI/UX Design",
// // //     progress: 65,
// // //     time: "3 Days Left",
// // //     img: "https://via.placeholder.com/300x180",
// // //   },
// // // ];

// // // const TaskCard = ({ title, role, progress, time, img }) => (
// // //   <div className="bg-white rounded-xl shadow-sm overflow-hidden p-4">
// // //     <img src={img} alt={title} className="rounded-lg mb-3 w-full h-40 object-cover" />
// // //     <h3 className="font-semibold text-sm mb-1">{title}</h3>
// // //     <p className="text-xs text-gray-500 mb-3">{role}</p>
// // //     <div className="mb-2">
// // //       <p className="text-xs text-gray-500 mb-1">Progress</p>
// // //       <div className="w-full bg-gray-200 rounded-full h-2">
// // //         <div
// // //           className="bg-blue-500 h-2 rounded-full"
// // //           style={{ width: `${progress}%` }}
// // //         ></div>
// // //       </div>
// // //     </div>
// // //     <div className="flex justify-between items-center mt-3">
// // //       <p className="text-xs text-gray-600">{time}</p>
// // //       <div className="flex -space-x-2">
// // //         {[...Array(4)].map((_, i) => (
// // //           <img
// // //             key={i}
// // //             className="w-6 h-6 rounded-full border-2 border-white"
// // //             src={`https://i.pravatar.cc/150?img=${i + 1}`}
// // //             alt="avatar"
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // const Task = () => {
// // //   return (
// // //     <div className="p-6">
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h1 className="text-2xl font-semibold">Explore Task</h1>
// // //         <div className="flex items-center gap-4">
// // //           <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm text-gray-700">
// // //             Category <Filter size={16} />
// // //           </button>
// // //           <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg text-sm text-gray-700">
// // //             Sort By: Deadline
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Search */}
// // //       <div className="mb-6">
// // //         <div className="relative w-full max-w-md">
// // //           <input
// // //             type="text"
// // //             placeholder="Search Task"
// // //             className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           />
// // //           <Search
// // //             size={16}
// // //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Time Limit Section */}
// // //       <div className="mb-10">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h2 className="font-semibold text-lg">Time Limit</h2>
// // //           <div className="flex gap-2">
// // //             <button className="p-1 rounded-full border border-gray-300">
// // //               <ChevronLeft size={16} />
// // //             </button>
// // //             <button className="p-1 rounded-full border border-gray-300">
// // //               <ChevronRight size={16} />
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {tasks.map((task, idx) => (
// // //             <TaskCard key={idx} {...task} />
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* New Task Section */}
// // //       <div>
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h2 className="font-semibold text-lg">New Task</h2>
// // //           <div className="flex gap-2">
// // //             <button className="p-1 rounded-full border border-gray-300">
// // //               <ChevronLeft size={16} />
// // //             </button>
// // //             <button className="p-1 rounded-full border border-gray-300">
// // //               <ChevronRight size={16} />
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {newTasks.map((task, idx) => (
// // //             <TaskCard key={idx} {...task} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Task;

// // import React from "react";
// // import { Search, Filter, ArrowUpDown, Bell } from "lucide-react";

// // import one from "../assets/one.jpg";
// // import two from "../assets/two.jpg";
// // import three from "../assets/three.jpg";
// // import four from "../assets/four.jpg";
// // import five from "../assets/five.jpg";
// // import six from "../assets/six.jpg";
// // import { Link } from "react-router-dom";

// // // Inside your card component:
// // <Link to={`/task/1`}>
// //   <div className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition">
// //     <img src="/assets/one.jpg" alt="Task" className="w-full rounded-lg mb-4" />
// //     <h3 className="font-semibold">Creating Awesome Mobile Apps</h3>
// //     <p className="text-sm text-gray-500">Progress: 90%</p>
// //   </div>
// // </Link>


// // const Task = () => {
// //   const timeLimitTasks = [
// //     { title: "Creating Awesome Mobile Apps", role: "UI/UX Design", progress: 90, time: "1 Hour", img: one },
// //     { title: "Creating Fresh Website", role: "Web Developer", progress: 85, time: "2 Hour", img: two },
// //     { title: "Creating Color Palettes", role: "UI/UX Design", progress: 100, time: "1 Hour", img: three },
// //   ];

// //   const newTasks = [
// //     { title: "Creating Mobile App Design", role: "UI/UX Design", progress: 75, time: "3 Days Left", img: four },
// //     { title: "Creating Perfect Website", role: "Web Developer", progress: 85, time: "4 Days Left", img: five },
// //     { title: "Mobile App Design", role: "UI/UX Design", progress: 65, time: "3 Days Left", img: six },
// //   ];

// //   const renderTaskCard = (task) => (
// //     <div
// //       key={task.title}
// //       className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
// //     >
// //       <img src={task.img} alt={task.title} className="w-full h-40 object-cover" />
// //       <div className="p-4">
// //         <h3 className="text-base font-semibold text-gray-800">{task.title}</h3>
// //         <p className="text-xs text-gray-500">{task.role}</p>
// //         <div className="mt-3">
// //           <p className="text-xs text-gray-500 mb-1">Progress</p>
// //           <div className="w-full bg-gray-200 rounded-full h-1.5">
// //             <div
// //               className="bg-blue-500 h-1.5 rounded-full"
// //               style={{ width: `${task.progress}%` }}
// //             ></div>
// //           </div>
// //           <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
// //             <span>{task.time}</span>
// //             <span>{task.progress}%</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Header section (white background) */}
// //       <div className="bg-white p-6 shadow-sm border-b border-gray-100">
// //         <div className="flex justify-between items-center">
// //           <h1 className="text-xl font-semibold text-gray-800">Explore Task</h1>
// //           <div className="flex items-center gap-4">
// //             {/* Search */}
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 placeholder="Search Task"
// //                 className="pl-4 pr-10 py-2 w-64 rounded-xl border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// //               />
// //               <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
// //             </div>
// //             {/* Category */}
// //             <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
// //               <Filter size={16} /> Category
// //             </button>
// //             {/* Sort */}
// //             <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
// //               <ArrowUpDown size={16} /> Sort By: Deadline
// //             </button>
// //             {/* Notifications */}
// //             <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
// //               <Bell size={18} className="text-gray-600" />
// //             </button>
// //             {/* Profile */}
// //             <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
// //               <img
// //                 src="https://randomuser.me/api/portraits/women/44.jpg"
// //                 alt="Profile"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Task Section (gray background) */}
// //       <div className="p-6">
// //         {/* Time Limit */}
// //         <h2 className="text-lg font-semibold text-gray-800 mb-4">Time Limit</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
// //           {timeLimitTasks.map(renderTaskCard)}
// //         </div>

// //         {/* New Task */}
// //         <h2 className="text-lg font-semibold text-gray-800 mb-4">New Task</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {newTasks.map(renderTaskCard)}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Task;





// import React from "react";
// import { Search, Filter, ArrowUpDown, Bell } from "lucide-react";
// import { Link } from "react-router-dom";

// import one from "../assets/one.jpg";
// import two from "../assets/two.jpg";
// import three from "../assets/three.jpg";
// import four from "../assets/four.jpg";
// import five from "../assets/five.jpg";
// import six from "../assets/six.jpg";

// const timeLimitTasks = [
//   { id: "1", title: "Creating Awesome Mobile Apps", role: "UI/UX Design", progress: 90, time: "1 Hour", img: one },
//   { id: "2", title: "Creating Fresh Website", role: "Web Developer", progress: 85, time: "2 Hour", img: two },
//   { id: "3", title: "Creating Color Palettes", role: "UI/UX Design", progress: 100, time: "1 Hour", img: three },
// ];

// const newTasks = [
//   { id: "4", title: "Creating Mobile App Design", role: "UI/UX Design", progress: 75, time: "3 Days Left", img: four },
//   { id: "5", title: "Creating Perfect Website", role: "Web Developer", progress: 85, time: "4 Days Left", img: five },
//   { id: "6", title: "Mobile App Design", role: "UI/UX Design", progress: 65, time: "3 Days Left", img: six },
// ];

// const renderTaskCard = (task) => (
//   <Link
//     key={task.id}
//     to={`/task/${task.id}`}
//     className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
//   >
//     <img src={task.img} alt={task.title} className="w-full h-40 object-cover" />
//     <div className="p-4">
//       <h3 className="text-base font-semibold text-gray-800">{task.title}</h3>
//       <p className="text-xs text-gray-500">{task.role}</p>
//       <div className="mt-3">
//         <p className="text-xs text-gray-500 mb-1">Progress</p>
//         <div className="w-full bg-gray-200 rounded-full h-1.5">
//           <div
//             className="bg-blue-500 h-1.5 rounded-full"
//             style={{ width: `${task.progress}%` }}
//           ></div>
//         </div>
//         <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
//           <span>{task.time}</span>
//           <span>{task.progress}%</span>
//         </div>
//       </div>
//     </div>
//   </Link>
// );

// const Task = () => (
//   <div className="min-h-screen bg-gray-50">
//     {/* Header section */}
//     <div className="bg-white p-6 shadow-sm border-b border-gray-100">
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl font-semibold text-gray-800">Explore Task</h1>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search Task"
//               className="pl-4 pr-10 py-2 w-64 rounded-xl border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
//           </div>
//           <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
//             <Filter size={16} /> Category
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
//             <ArrowUpDown size={16} /> Sort By: Deadline
//           </button>
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
//             <Bell size={18} className="text-gray-600" />
//           </button>
//           <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Task Section */}
//     <div className="p-6">
//       <h2 className="text-lg font-semibold text-gray-800 mb-4">Time Limit</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//         {timeLimitTasks.map(renderTaskCard)}
//       </div>

//       <h2 className="text-lg font-semibold text-gray-800 mb-4">New Task</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {newTasks.map(renderTaskCard)}
//       </div>
//     </div>
//   </div>
// );

// export default Task;





// import React from "react";
// import { Search, Filter, ArrowUpDown, Bell } from "lucide-react";
// import { Link } from "react-router-dom";

// import one from "../assets/one.jpg";
// import two from "../assets/two.jpg";
// import three from "../assets/three.jpg";
// import four from "../assets/four.jpg";
// import five from "../assets/five.jpg";
// import six from "../assets/six.jpg";

// const timeLimitTasks = [
//   { id: "1", title: "Creating Awesome Mobile Apps", role: "UI/UX Design", progress: 90, time: "1 Hour", img: one },
//   { id: "2", title: "Creating Fresh Website", role: "Web Developer", progress: 85, time: "2 Hour", img: two },
//   { id: "3", title: "Creating Color Palettes", role: "UI/UX Design", progress: 100, time: "1 Hour", img: three },
// ];

// const newTasks = [
//   { id: "4", title: "Creating Mobile App Design", role: "UI/UX Design", progress: 75, time: "3 Days Left", img: four },
//   { id: "5", title: "Creating Perfect Website", role: "Web Developer", progress: 85, time: "4 Days Left", img: five },
//   { id: "6", title: "Mobile App Design", role: "UI/UX Design", progress: 65, time: "3 Days Left", img: six },
// ];

// const renderTaskCard = (task) => (
//   <Link
//     key={task.id}
//     to={`/task/${task.id}`}
//     className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col"
//   >
//     <img
//       src={task.img}
//       alt={task.title}
//       className="w-full h-48 sm:h-40 object-cover"
//     />
//     <div className="p-4 flex flex-col flex-1">
//       <h3 className="text-base font-semibold text-gray-800">{task.title}</h3>
//       <p className="text-xs text-gray-500">{task.role}</p>
//       <div className="mt-3">
//         <p className="text-xs text-gray-500 mb-1">Progress</p>
//         <div className="w-full bg-gray-200 rounded-full h-1.5">
//           <div
//             className="bg-blue-500 h-1.5 rounded-full"
//             style={{ width: `${task.progress}%` }}
//           ></div>
//         </div>
//         <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
//           <span>{task.time}</span>
//           <span>{task.progress}%</span>
//         </div>
//       </div>
//     </div>
//   </Link>
// );

// const Task = () => (
//   <div className="min-h-screen bg-gray-50">
//     {/* Header */}
//     <div className="bg-white p-4 sm:p-6 shadow-sm border-b border-gray-100">
//       <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//         <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
//           Explore Task
//         </h1>
//         <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center">
//           {/* Search */}
//           <div className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search Task"
//               className="pl-4 pr-10 py-2 w-full sm:w-64 rounded-xl border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
//           </div>
//           {/* Category */}
//           <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
//             <Filter size={16} /> Category
//           </button>
//           {/* Sort */}
//           <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
//             <ArrowUpDown size={16} /> Sort
//           </button>
//           {/* Notifications */}
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
//             <Bell size={18} className="text-gray-600" />
//           </button>
//           {/* Profile */}
//           <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 overflow-hidden">
//             <img
//               src="https://randomuser.me/api/portraits/women/44.jpg"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Task Section */}
//     <div className="p-4 sm:p-6">
//       <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
//         Time Limit
//       </h2>
//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
//         {timeLimitTasks.map(renderTaskCard)}
//       </div>

//       <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
//         New Task
//       </h2>
//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {newTasks.map(renderTaskCard)}
//       </div>
//     </div>
//   </div>
// );

// export default Task;


import React, { useState } from "react";
import { Search, Filter, ArrowUpDown, Bell, Menu } from "lucide-react";
import { Link } from "react-router-dom";

import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";

const timeLimitTasks = [
  { id: "1", title: "Creating Awesome Mobile Apps", role: "UI/UX Design", progress: 90, time: "1 Hour", img: one },
  { id: "2", title: "Creating Fresh Website", role: "Web Developer", progress: 85, time: "2 Hour", img: two },
  { id: "3", title: "Creating Color Palettes", role: "UI/UX Design", progress: 100, time: "1 Hour", img: three },
];

const newTasks = [
  { id: "4", title: "Creating Mobile App Design", role: "UI/UX Design", progress: 75, time: "3 Days Left", img: four },
  { id: "5", title: "Creating Perfect Website", role: "Web Developer", progress: 85, time: "4 Days Left", img: five },
  { id: "6", title: "Mobile App Design", role: "UI/UX Design", progress: 65, time: "3 Days Left", img: six },
];

const renderTaskCard = (task) => (
  <Link
    key={task.id}
    to={`/task/${task.id}`}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col"
  >
    <img
      src={task.img}
      alt={task.title}
      className="w-full h-44 sm:h-40 object-cover"
    />
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-base font-semibold text-gray-800">{task.title}</h3>
      <p className="text-xs text-gray-500">{task.role}</p>
      <div className="mt-3">
        <p className="text-xs text-gray-500 mb-1">Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full"
            style={{ width: `${task.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
          <span>{task.time}</span>
          <span>{task.progress}%</span>
        </div>
      </div>
    </div>
  </Link>
);

const Task = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-3 sm:p-6 shadow-sm border-b border-gray-100">
        <div className="flex justify-between items-center">
          {/* Left: Menu Button for Mobile */}
          <div className="flex items-center gap-3">
            <button
              className="sm:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
              Explore Task
            </h1>
          </div>

          {/* Right: Actions */}
          <div className="hidden sm:flex flex-wrap gap-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Task"
                className="pl-4 pr-10 py-2 w-64 rounded-xl border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
              <Filter size={16} /> Category
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
              <ArrowUpDown size={16} /> Sort
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Bell size={18} className="text-gray-600" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white shadow-md border-b p-4">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Search Task"
              className="pl-4 pr-10 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
              <Filter size={16} /> Category
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
              <ArrowUpDown size={16} /> Sort
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-100">
              <Bell size={16} /> Notifications
            </button>
          </div>
        </div>
      )}

      {/* Task Section */}
      <div className="p-3 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
          Time Limit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-10">
          {timeLimitTasks.map(renderTaskCard)}
        </div>

        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
          New Task
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {newTasks.map(renderTaskCard)}
        </div>
      </div>
    </div>
  );
};

export default Task;




      
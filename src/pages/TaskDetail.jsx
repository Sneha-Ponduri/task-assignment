// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// // ✅ Import all images
// import one from "../assets/one.jpg";
// import two from "../assets/two.jpg";
// import three from "../assets/three.jpg";
// import four from "../assets/four.jpg";
// import five from "../assets/five.jpg";
// import six from "../assets/six.jpg";

// // ✅ Centralized task data
// const taskData = [
//   {
//     id: "1",
//     title: "Creating Awesome Mobile Apps",
//     category: "UI/UX Design",
//     mentor: "Alex Johnson",
//     students: 200,
//     time: "1 Hour",
//     date: "1 July 2022",
//     image: one,
//     description:
//       "In this tutorial video, we will learn how to use each tool in the Figma application. Also learn how to make a good and clear design. Starting from sketching, typography, colors, and many other design techniques. This training is to present your work with imagination and anticipation.",
//     assessments: [
//       "Understanding the tools in Figma",
//       "Understanding the basics of making designs",
//       "Designing a mobile application using Figma",
//       "Presenting the design flow",
//     ],
//   },
//   {
//     id: "2",
//     title: "Creating Fresh Website",
//     category: "Web Developer",
//     mentor: "Sarah Lee",
//     students: 150,
//     time: "2 Hours",
//     date: "2 July 2022",
//     image: two,
//     description:
//       "Learn how to make modern websites with clean UI and UX. This training covers frontend frameworks, responsive design, and optimization best practices.",
//     assessments: [
//       "Master responsive design",
//       "Implement animations",
//       "Optimize for SEO",
//       "Use modern CSS frameworks",
//     ],
//   },
//   {
//     id: "3",
//     title: "Creating Color Palettes",
//     category: "UI/UX Design",
//     mentor: "Chris Martin",
//     students: 180,
//     time: "1 Hour",
//     date: "3 July 2022",
//     image: three,
//     description:
//       "Color theory and palettes are crucial for great design. Learn how to build aesthetically pleasing and accessible color palettes.",
//     assessments: [
//       "Understanding color theory",
//       "Creating color palettes",
//       "Testing colors for accessibility",
//       "Applying colors to projects",
//     ],
//   },
//   {
//     id: "4",
//     title: "Creating Mobile App Design",
//     category: "UI/UX Design",
//     mentor: "Emma Brown",
//     students: 220,
//     time: "3 Days Left",
//     date: "4 July 2022",
//     image: four,
//     description:
//       "Dive deep into mobile app design. We'll cover layout, typography, and usability for mobile-first design strategies.",
//     assessments: [
//       "Designing mobile-first interfaces",
//       "Wireframing and prototyping",
//       "User testing for apps",
//       "Typography in mobile apps",
//     ],
//   },
//   {
//     id: "5",
//     title: "Creating Perfect Website",
//     category: "Web Developer",
//     mentor: "Michael Scott",
//     students: 130,
//     time: "4 Days Left",
//     date: "5 July 2022",
//     image: five,
//     description:
//       "A practical course on building perfect websites. Learn how to make fast, scalable, and SEO-friendly websites.",
//     assessments: [
//       "Building scalable architecture",
//       "SEO optimization",
//       "Accessibility best practices",
//       "Deploying websites",
//     ],
//   },
//   {
//     id: "6",
//     title: "Mobile App Design",
//     category: "UI/UX Design",
//     mentor: "Sophia Williams",
//     students: 170,
//     time: "3 Days Left",
//     date: "6 July 2022",
//     image: six,
//     description:
//       "This project walks through the fundamentals of mobile app design, including grids, gestures, and microinteractions.",
//     assessments: [
//       "Using design grids",
//       "Implementing gestures",
//       "Adding microinteractions",
//       "Testing mobile app usability",
//     ],
//   },
// ];

// export default function TaskDetail() {
//   const { id } = useParams();
//   const [task, setTask] = useState(null);

//   useEffect(() => {
//     const foundTask = taskData.find((t) => t.id === id);
//     setTask(foundTask);
//   }, [id]);

//   if (!task) return <div className="p-6">Task not found.</div>;

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-semibold">Detail Task</h1>
//         <div className="flex items-center gap-4">
//           <input
//             type="text"
//             placeholder="Search Task"
//             className="border rounded-lg px-4 py-2 text-sm"
//           />
//           <button className="border rounded-lg px-4 py-2 text-sm">
//             Category
//           </button>
//           <button className="border rounded-lg px-4 py-2 text-sm">
//             Sort By: Deadline
//           </button>
//           <img
//             src="https://randomuser.me/api/portraits/women/1.jpg"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="grid grid-cols-3 gap-6">
//         {/* Left Section */}
//         <div className="col-span-2 bg-white rounded-lg shadow p-4">
//           <img
//             src={task.image}
//             alt={task.title}
//             className="w-full max-h-72 object-cover rounded-lg mb-4"
//           />
//           <h2 className="text-lg font-semibold">{task.title}</h2>
//           <p className="text-sm text-gray-500">
//             {task.category} • <span className="text-blue-500">Get Mentor</span>
//           </p>
//           <p className="text-sm text-gray-500 mt-1">
//             👥 {task.students} Students Involved • ⏱ {task.time}
//           </p>

//           <h3 className="mt-6 font-semibold">Description</h3>
//           <p className="text-gray-600 mt-2">{task.description}</p>

//           <h3 className="mt-6 font-semibold">Essence of Assessment</h3>
//           <ul className="mt-2 space-y-1">
//             {task.assessments.map((point, index) => (
//               <li key={index} className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="bg-white rounded-lg shadow p-4">
//           <h3 className="font-semibold mb-4">Assigned Assignments</h3>
//           <p className="text-sm text-gray-500">{task.title}</p>
//           <p className="text-sm text-gray-500">{task.category}</p>

//           <h4 className="mt-4 font-semibold">Detail Student</h4>
//           <p className="text-sm">Name: Dennis Neikid</p>
//           <p className="text-sm">Student Class: MIPA 2</p>
//           <p className="text-sm">Student Number: 10</p>

//           <h4 className="mt-4 font-semibold">File Task</h4>
//           <p className="text-sm">Deadline: {task.date}</p>

//           <div className="border-2 border-dashed rounded-lg mt-2 p-6 text-center">
//             <p className="text-gray-400">File submissions</p>
//           </div>

//           <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bell, Menu, Search } from "lucide-react";

// ✅ Import all images
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";

// ✅ Centralized task data
const taskData = [
  {
    id: "1",
    title: "Creating Awesome Mobile Apps",
    category: "UI/UX Design",
    mentor: "Alex Johnson",
    students: 200,
    time: "1 Hour",
    date: "1 July 2022",
    image: one,
    description:
      "In this tutorial video, we will learn how to use each tool in the Figma application. Also learn how to make a good and clear design. Starting from sketching, typography, colors, and many other design techniques. This training is to present your work with imagination and anticipation.",
    assessments: [
      "Understanding the tools in Figma",
      "Understanding the basics of making designs",
      "Designing a mobile application using Figma",
      "Presenting the design flow",
    ],
  },
  {
    id: "2",
    title: "Creating Fresh Website",
    category: "Web Developer",
    mentor: "Sarah Lee",
    students: 150,
    time: "2 Hours",
    date: "2 July 2022",
    image: two,
    description:
      "Learn how to make modern websites with clean UI and UX. This training covers frontend frameworks, responsive design, and optimization best practices.",
    assessments: [
      "Master responsive design",
      "Implement animations",
      "Optimize for SEO",
      "Use modern CSS frameworks",
    ],
  },
  {
    id: "3",
    title: "Creating Color Palettes",
    category: "UI/UX Design",
    mentor: "Chris Martin",
    students: 180,
    time: "1 Hour",
    date: "3 July 2022",
    image: three,
    description:
      "Color theory and palettes are crucial for great design. Learn how to build aesthetically pleasing and accessible color palettes.",
    assessments: [
      "Understanding color theory",
      "Creating color palettes",
      "Testing colors for accessibility",
      "Applying colors to projects",
    ],
  },
  {
    id: "4",
    title: "Creating Mobile App Design",
    category: "UI/UX Design",
    mentor: "Emma Brown",
    students: 220,
    time: "3 Days Left",
    date: "4 July 2022",
    image: four,
    description:
      "Dive deep into mobile app design. We'll cover layout, typography, and usability for mobile-first design strategies.",
    assessments: [
      "Designing mobile-first interfaces",
      "Wireframing and prototyping",
      "User testing for apps",
      "Typography in mobile apps",
    ],
  },
  {
    id: "5",
    title: "Creating Perfect Website",
    category: "Web Developer",
    mentor: "Michael Scott",
    students: 130,
    time: "4 Days Left",
    date: "5 July 2022",
    image: five,
    description:
      "A practical course on building perfect websites. Learn how to make fast, scalable, and SEO-friendly websites.",
    assessments: [
      "Building scalable architecture",
      "SEO optimization",
      "Accessibility best practices",
      "Deploying websites",
    ],
  },
  {
    id: "6",
    title: "Mobile App Design",
    category: "UI/UX Design",
    mentor: "Sophia Williams",
    students: 170,
    time: "3 Days Left",
    date: "6 July 2022",
    image: six,
    description:
      "This project walks through the fundamentals of mobile app design, including grids, gestures, and microinteractions.",
    assessments: [
      "Using design grids",
      "Implementing gestures",
      "Adding microinteractions",
      "Testing mobile app usability",
    ],
  },
];

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const foundTask = taskData.find((t) => t.id === id);
    setTask(foundTask);
  }, [id]);

  if (!task) return <div className="p-6">Task not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between bg-white px-4 py-3 shadow-sm border-b fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Menu size={24} className="text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold">Detail Task</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="Profile"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-4 pb-6 space-y-6">
        {/* Search bar */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search Task"
              className="w-full pl-4 pr-10 py-2 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <button className="border rounded-xl px-3 py-2 text-sm">Category</button>
          <button className="border rounded-xl px-3 py-2 text-sm">Sort</button>
        </div>

        {/* Task Details Card */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <img
            src={task.image}
            alt={task.title}
            className="w-full rounded-lg mb-4 object-cover max-h-60"
          />
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <p className="text-sm text-gray-500">
            {task.category} • <span className="text-blue-500">Get Mentor</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            👥 {task.students} Students Involved • ⏱ {task.time}
          </p>

          <h3 className="mt-6 font-semibold">Description</h3>
          <p className="text-gray-600 mt-2">{task.description}</p>

          <h3 className="mt-6 font-semibold">Essence of Assessment</h3>
          <ul className="mt-2 space-y-1">
            {task.assessments.map((point, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Assignment Card */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-semibold mb-4">Assigned Assignments</h3>
          <p className="text-sm text-gray-500">{task.title}</p>
          <p className="text-sm text-gray-500">{task.category}</p>

          <h4 className="mt-4 font-semibold">Detail Student</h4>
          <p className="text-sm">Name: Dennis Neikid</p>
          <p className="text-sm">Student Class: MIPA 2</p>
          <p className="text-sm">Student Number: 10</p>

          <h4 className="mt-4 font-semibold">File Task</h4>
          <p className="text-sm">Deadline: {task.date}</p>

          <div className="border-2 border-dashed rounded-lg mt-2 p-6 text-center">
            <p className="text-gray-400">File submissions</p>
          </div>

          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

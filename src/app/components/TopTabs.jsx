// "use client"
// import SearchIcon from "@mui/icons-material/Search";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { useState } from "react";

// export default function TopTabs() {
//   const [activeTab, setActiveTab] = useState("Overview");

//   const tabs = ["Overview", "My Tasks", "My Calendar"];

//   return (
//     <div className="flex flex-wrap items-center justify-between mt-6 mb-6">
//       {/* Left Tabs */}
//       <div className="flex space-x-4 bg-[#908dc8] rounded-sm p-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`cursor-pointer px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
//               activeTab === tab
//                 ? "bg-white shadow-md text-gray-800"
//                 : " hover:text-gray-800"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Right Search Bar */}
//       <div className="flex items-center gap-3 mt-4 md:mt-0">
//         <div className="flex items-center bg-white rounded-lg shadow-md px-3 py-2 w-64">
//           <SearchIcon fontSize="small" className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             placeholder="Search here"
//             className="outline-none text-sm w-full placeholder-gray-400"
//           />
//         </div>
//         <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition">
//           <FilterListIcon className="text-gray-500" />
//         </button>
//       </div>
//     </div>
//   );
// }





"use client";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

export default function TopTabs() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "My Tasks", "My Calendar"];

  return (
    <div className="flex flex-wrap items-center justify-between mt-6 mb-6">
      <div className="flex overflow-x-auto bg-[#908dc8] rounded-sm p-2 space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
              activeTab === tab
                ? "bg-white shadow-md text-gray-800"
                : " hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-4 md:mt-0 w-full md:w-auto">
        <div className="flex items-center bg-white rounded-lg shadow-md px-3 py-2 w-full md:w-64">
          <SearchIcon fontSize="small" className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none text-sm w-full placeholder-gray-400"
          />
        </div>
        <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-100 transition">
          <FilterListIcon className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}

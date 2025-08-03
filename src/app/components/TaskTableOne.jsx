import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function TaskTableToDo() {
  const tasks = [
    {
      name: "Tile shower services",
      description: "Refrigeration",
      priority: "High",
      date: "Jun 30 2025",
      members: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
        "https://avatars.githubusercontent.com/u/140997677?v=4",
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60",
      ],
      subTasksNum: 7,
    },
    {
      name: "Dashboard Redesign",
      description: "UI/UX improvements",
      priority: "Medium",
      date: "Feb 21 2025",
      members: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop",
        "https://avatars.githubusercontent.com/u/9919?v=4",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop",
      ],
      subTasksNum: 5,
    },
    {
      name: "SEO Optimization",
      description: "Marketing Team",
      priority: "Low",
      date: "Mar 12 2025",
      members: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop",
        "https://avatars.githubusercontent.com/u/583231?v=4",
      ],
      subTasksNum: 2,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
      <div className="flex justify-between items-center w-full bg-gray-100 p-2 mb-1 rounded-2xl h-[50px]">
        <div>
          <h3 className="text-gray-800 text-lg font-semibold ">To Do</h3>
        </div>
        <div className="icons flex">
          <MoreHorizIcon className="cursor-pointer" />
          <AddIcon className="cursor-pointer" />
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm uppercase text-left">
            <th className="py-3 px-4 rounded-tl-lg">Task Name</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4">Members</th>
            <th className="py-3 px-4">Priority</th>
            <th className="py-3 px-4 rounded-tr-lg">Date</th>
            <th className="py-3 px-4 rounded-tr-lg">SubTasks</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr
              key={idx}
              className="border-b hover:bg-gray-50 transition-all text-gray-700"
            >
              <td className="py-3 px-4 font-medium">{task.name}</td>
              <td className="py-3 px-4">{task.description}</td>
              <td className="py-3 px-4">
                <div className="flex items-center">
                  {task.members.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="member"
                      className={`w-8 h-8 object-cover rounded-full border-2 border-white ${
                        index !== 0 ? "-ml-2" : ""
                      }`}
                    />
                  ))}
                </div>
              </td>
              <td className="py-3 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    task.priority === "High"
                      ? "bg-red-500"
                      : task.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {task.priority}
                </span>
              </td>
              <td className="py-3 px-4">{task.date}</td>
              <td className="py-3 px-4">{task.subTasksNum} /10</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTableToDo;
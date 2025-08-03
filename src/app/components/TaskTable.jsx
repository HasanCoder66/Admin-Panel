function TaskTable() {
  const tasks = [
    { name: "Tile shower services", description: "Refrigeration", priority: "High", date: "Jun 30 2025" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-gray-700 font-semibold mb-4">To Do</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Task Name</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={idx} className="border-b">
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.priority}</td>
              <td>{task.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
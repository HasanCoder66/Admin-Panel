const Topbar = () => {
  return (
    <div className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-lg font-semibold text-black">Welcome Back, John</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search here..."
          className="border px-3 py-1 rounded-md text-sm text-black"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Topbar;
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleIcon from "@mui/icons-material/People";
import InboxIcon from "@mui/icons-material/Inbox";
import DescriptionIcon from "@mui/icons-material/Description";
import TaskIcon from "@mui/icons-material/Task";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WorkIcon from "@mui/icons-material/Work";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EventIcon from "@mui/icons-material/Event";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#111827] text-white p-4 hidden md:block">
      <div className="text-2xl font-bold mb-10">ADMIN PANEL</div>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <DashboardIcon fontSize="small" /> Dashboard
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <WorkspacePremiumIcon fontSize="small" /> Workspaces
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <PeopleIcon fontSize="small" /> Users
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <InboxIcon fontSize="small" /> Inbox
        </li>

        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <DescriptionIcon fontSize="small" /> Projects
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <TaskIcon fontSize="small" /> Tasks
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <PersonIcon fontSize="small" /> Client
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <ReceiptIcon fontSize="small" /> Invoices
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <FormatListBulletedIcon fontSize="small" /> Form Builder
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <WorkIcon fontSize="small" /> Gigs
        </li>
        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <ConfirmationNumberIcon fontSize="small" /> Ticketing
        </li>

        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <EventIcon fontSize="small" /> Calender
        </li>

        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <AnnouncementIcon fontSize="small" /> Notice Board
        </li>

        <li className="flex items-center gap-2 hover:text-white hover:bg-[#8884d8] transition-all duration-300 p-2 cursor-pointer hover:rounded-2xl">
          <SettingsIcon fontSize="small" /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
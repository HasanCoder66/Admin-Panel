import { Avatar, Button } from "@mui/material";

const messages = [
  {
    name: "Hasan",
    text: "I am waiting for your answer!",
    time: "2:54 PM",
    img: "https://avatars.githubusercontent.com/u/140997677?v=4",
    msgNum : 3
  },
  {
    name: "Devid Heilo",
    text: "Hello, how are you?",
    time: "2 min",
    img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    msgNum : 5
  },
  {
    name: "Sarah",
    text: "Hello, how are you?",
    time: "16 min",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    msgNum : 1
  },
  {
    name: "Henry Fisher",
    text: "I am waiting for you",
    time: "5:54 PM",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
    msgNum : 7
  },
];

function Messages() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between   ">
        <h3 className="text-gray-700 font-semibold mb-4 text-lg">Messages</h3>
        <Button variant="outlined">Latest</Button>
      </div>
      {messages.map((msg, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 mb-4 hover:bg-[#8884d8] hover:text-white transition-all duration-300 cursor-pointer p-2 mt-2 rounded-sm"
        >
          <Avatar src={msg.img} />
          <div className="relative">
            <p className="font-semibold">{msg.name}</p>
            <p className="text-sm  hover:text-white">{msg.text}</p>
          </div>
          <span className="ml-auto text-xs ">{msg.time}</span>
          <span className="absolute w-[20px] h-[20px] bg-green-400 rounded-full text-sm flex justify-center items-center right-25">
{msg.msgNum}
          </span>
          
        </div>
      ))}
    </div>
  );
}

export default Messages;

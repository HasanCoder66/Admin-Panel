// import { Card, CardContent, Typography } from "@mui/material";

// function SummaryCards() {
//   const cards = [
//     {
//       title: "Total Projects",
//       value: 98,
//       btnValue: "3 project completed",
//       color: "#8884d8",
//       icon: "",
//     },
//     {
//       title: "Total Users",
//       value: 43,
//       btnValue: "7 new users",
//       color: "#82ca9d",
//       icon: "",
//     },
//     {
//       title: "Total Workspace",
//       value: 12,
//       btnValue: "2 new workspace",
//       color: "#82ca9d",
//       icon: "",
//     },
//     {
//       title: "Total Clients",
//       value: 52,
//       btnValue: "4 new client",
//       color: "#8884d8",
//       icon: "",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-center">
//       {cards.map((item) => (
//         <Card key={item.title} className="shadow-md">
//           <CardContent>
//             <Typography variant="h6" color="black">
//               {item.title}
//             </Typography>
//             <Typography variant="h4" fontWeight="bold">
//               {item.value}
//             </Typography>
//             <Typography
//               sx={{
//                 // backgroundColor:{`${item.color}`},
//                 borderRadius: "20px",
//                 padding: "10px",
//               }}
//             >
//               {item.value}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default SummaryCards;

import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  WorkOutline,
  People,
  BusinessCenter,
  Group,
} from "@mui/icons-material";

function SummaryCards() {
  const cards = [
    {
      title: "Total Projects",
      value: 98,
      btnValue: "3 project completed",
      color: "#8884d8",
      icon: <WorkOutline />,
    },
    {
      title: "Total Users",
      value: 43,
      btnValue: "7 new users",
      color: "#82ca9d",
      icon: <People />,
    },
    {
      title: "Total Workspace",
      value: 12,
      btnValue: "2 new workspace",
      color: "#ffc658",
      icon: <BusinessCenter />,
    },
    {
      title: "Total Clients",
      value: 52,
      btnValue: "4 new clients",
      color: "#d84d88",
      icon: <Group />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((item) => (
        <Card key={item.title} className="shadow-md rounded-xl">
          <CardContent className="flex flex-col items-center space-y-4">
            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {item.title}
            </Typography>

            {/* Main Value */}
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {item.value}
            </Typography>

            {/* Button/Pill Text */}
            <Box
              sx={{
                backgroundColor: `${item.color}22`, // light shade
                color: item.color,
                borderRadius: "20px",
                padding: "6px 12px",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {item.icon} {item.btnValue}
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default SummaryCards;

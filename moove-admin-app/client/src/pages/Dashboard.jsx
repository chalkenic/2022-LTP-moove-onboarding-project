import { useEffect } from "react";
import { Box } from "@mui/system";

const Dashboard = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("Dashboard");
  });
  return (
    <Box>
      <div>Hello World</div>;
    </Box>
  );
};

export default Dashboard;

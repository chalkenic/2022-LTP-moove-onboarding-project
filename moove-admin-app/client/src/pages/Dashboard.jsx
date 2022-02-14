import { useEffect } from "react";

const Dashboard = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("Dashboard");
  });
  return <div>Hello World</div>;
};

export default Dashboard;

import { useEffect } from "react";

// TEMPORARY PAGE.
const Test = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("Test");
  });
  return <div>omg what</div>;
};

export default Test;

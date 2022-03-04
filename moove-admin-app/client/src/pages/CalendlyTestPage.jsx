import CalendlyBooking from "../components/CalendlyBooking";

const CalendlyTestPage = ({}) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "700px",
          height: "400px",
        }}
      >
        <CalendlyBooking />
      </div>
    </div>
  );
};

export default CalendlyTestPage;
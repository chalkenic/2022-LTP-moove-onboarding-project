import React from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyBooking(){
  return (
    <>
    <div className="CalendlyBooking">
      <InlineWidget url="https://calendly.com/moove-landlord" />
    </div>
    </>
  );
};
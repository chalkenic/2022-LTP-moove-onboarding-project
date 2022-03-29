import React from 'react';
import { InlineWidget } from 'react-calendly';
import axios from 'axios';



const handleApproval = () => {

      axios.get('https://api.calendly.com/scheduled_events', {
      }).then((res) => {
        
      }).catch((err) => {
        setError(err.message)
      })
  }


export default function ViewCalender() {

    return(
        <>
        <div className="ViewCalender">
          <InlineWidget url="https://calendly.com/moove-landlord" />
        </div>
        </>
    )
}
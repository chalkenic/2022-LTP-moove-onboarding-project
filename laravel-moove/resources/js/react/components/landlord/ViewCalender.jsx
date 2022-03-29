import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import axios from 'axios';



const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjQ4NTcxNTcyLCJqdGkiOiIyNGI1NjViMy05MzhlLTQzMmUtODBiNy1jMzI3M2JjMzM1YmIiLCJ1c2VyX3V1aWQiOiJhYjJlNmYyNy1hNTZlLTQzZWItYjM1ZC1jNWViYWRhOTBiMzEifQ.sdN0HcP8ZGqzeImxyFtm6ss665Nvhw4q7RYVnZn_tg0'
const userId = 'ab2e6f27-a56e-43eb-b35d-c5ebada90b31'


const handleGetUser = () => {

    const url = 'https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2Fab2e6f27-a56e-43eb-b35d-c5ebada90b31&organization=https%3A%2F%2Fapi.calendly.com%2Forganizations%2F764d0946-15a6-4055-b038-b74ad676add2&invitee_email=terrytibbs%40gmail.com'

    axios.get(url, { 'headers': { 'Authorization': token } })
  .then((response => {
    console.log(response.data);
  }))
  }


export default function ViewCalender() {

    useEffect(() => {
        handleGetUser()
        
    })

    return(
        <div>

        </div>
    )
}
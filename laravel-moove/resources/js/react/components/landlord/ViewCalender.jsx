import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import axios from 'axios';



export default function ViewCalender() {

    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjQ4NTcxNTcyLCJqdGkiOiIyNGI1NjViMy05MzhlLTQzMmUtODBiNy1jMzI3M2JjMzM1YmIiLCJ1c2VyX3V1aWQiOiJhYjJlNmYyNy1hNTZlLTQzZWItYjM1ZC1jNWViYWRhOTBiMzEifQ.sdN0HcP8ZGqzeImxyFtm6ss665Nvhw4q7RYVnZn_tg0'
    const userId = 'ab2e6f27-a56e-43eb-b35d-c5ebada90b31'

    const [events, setEvents] = useState([])

    const handleGetEvent = () => {

        const url = 'https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2Fab2e6f27-a56e-43eb-b35d-c5ebada90b31&organization=https%3A%2F%2Fapi.calendly.com%2Forganizations%2F764d0946-15a6-4055-b038-b74ad676add2'
    
        axios.get(url, { 'headers': { 'Authorization': token } })
      .then((response => {
        setEvents(response.data.collection)
      }))
      }


    useEffect(() => {
        handleGetEvent()
    }, [])

    

    

    
    return(
        <div>

        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                 <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-blue-900 px-6 py-4 text-left">
                                        Name</th>
                                    <th scope="col" className="text-sm font-medium text-blue-900 px-6 py-4 text-left">
                                        Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event, key) => (
                                    <tr key={key}>
                                        <td className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            {event.name}</td>
                                        <td className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            {event.start_time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
             </div>
            

        </div>
    )
}
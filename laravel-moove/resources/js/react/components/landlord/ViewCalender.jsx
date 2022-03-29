import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import axios from 'axios';



const handleGetUser = () => {

    const url = 'https://api.calendly.com/users/me'
    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjQ4NTcxNTcyLCJqdGkiOiIyNGI1NjViMy05MzhlLTQzMmUtODBiNy1jMzI3M2JjMzM1YmIiLCJ1c2VyX3V1aWQiOiJhYjJlNmYyNy1hNTZlLTQzZWItYjM1ZC1jNWViYWRhOTBiMzEifQ.sdN0HcP8ZGqzeImxyFtm6ss665Nvhw4q7RYVnZn_tg0'


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
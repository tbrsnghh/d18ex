import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function API01() {
    const [data, setData] = useState([])
    const fetchAPI = () => {
        const url = "https://66a07b337053166bcabb89f5.mockapi.io/Students"
        axios.get(url)
            .then(function (res) {
                console.log(res)
                setData(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchAPI();
    }, [])
    return (
        <div>API01
            {
                data.map((item, index) => (
                    <h1 key={index}>{item.id}, {item.name}</h1>
                )
                )
            }
        </div>
    )
}

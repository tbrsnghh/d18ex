import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Input, Table } from 'reactstrap'
export default function Students() {
    const [data, setData] = useState([])
    const [message, setMessage] = useState([null])
    const [text, setText] = useState([])
    const [isEditing, setIsEditing] = useState([{ id: "", flag: false }])
    const [textEdit, setTextEdit] = useState("")
    const url = "https://66a07b337053166bcabb89f5.mockapi.io/Students"
    const getStudents = () => {
        axios.get(url)
            .then(function (res) {
                setData(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const deleteStudent = (id) => {
        axios.delete(url + "/" + id)
            .then(function (res) {
                setMessage("Del successfull")
                setData(data.filter(item => item.id !== id))
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const addNewStudent = (txt) => {
        axios.post(url, {
            name: txt
        })
            .then(function (res) {
                setMessage("Add successfull")
                setData([...data, { id: res.data.id, name: txt }])
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const updateStudent = (id, txt) => {
        axios.put(url + "/" + id, {
            name: txt
        })
            .then(function (res) {
                setMessage("Update successfull")
                setData(data.map(item => item.id === id ? { ...item, name: txt } : item))
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getStudents();
    }, [])
    return (
        <div>
            <Container>
                {
                    message && <p>{message}</p>
                }
                <Input type="text" value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addNewStudent(text)
                        setText("")
                    }
                }
                } />
                <h1>Student List</h1>
                <Table>
                    <thead>
                        <tr>#</tr>
                        <th>ID</th>
                        <th>First Name</th>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item, index) => (
                                <tr>
                                    <td >{item.id}</td>
                                    {
                                        isEditing.id === item.id && isEditing.flag === true ?
                                            <>
                                                <td>
                                                    <Input type='text' value={textEdit}
                                                        onChange={(e) => setTextEdit(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') {
                                                                updateStudent(item.id, textEdit)
                                                                setIsEditing({ id: "", flag: false })
                                                            }
                                                        }} />
                                                </td>
                                            </>
                                            : <>
                                                <td>
                                                    <p onDoubleClick={() => {
                                                        setIsEditing({ id: item.id, flag: true })
                                                        setTextEdit(item.name)
                                                    }}>{item.name}</p>
                                                </td>

                                            </>
                                    }
                                    <td>
                                        <Button className='btn btn-danger' onClick={() => deleteStudent(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

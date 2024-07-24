import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Button, Container, Table} from 'reactstrap'
export default function Students() {
    const [data, setData] = useState([])
    const [message, setMessage] = useState([null])
    const url = "https://66a07b337053166bcabb89f5.mockapi.io/Students"
    const getStudents=()=>{
        axios.get(url)
        .then(function(res){
            setData(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    const addNewStudent = ()=>{
        axios.post(url,{
            name: "Lee Meo"
        })
            .then(function(res){
                setMessage("Add successfull")
                getStudents();
            })
            .catch(function(error){
                console.log(error)
            })
    }
    const deleteStudent = (id)=>{
        axios.delete(url+"/"+id)
            .then(function(res){
                setMessage("Del successfull")
                getStudents();
            })
            .catch(function(error){
                console.log(error)
            })
    }
    const updateStudent = (id)=>{
        axios.put(url+"/"+id,{
            name: "Lee Ga"
        })
            .then(function(res){
                setMessage("Update successfull")
                getStudents();
            })
            .catch(function(error){
                console.log(error)
            })
    }
    
    useEffect(()=>{
        getStudents();
    },[])
    return (
    <div>
        <Container>
            <Button className='btn btn-success' onClick={addNewStudent}>Add student</Button>
            {
                message&&<p>{message}</p>
            }
            <h1>Student List</h1>
            <Table>
                <thead>
                    <tr>#</tr>
                    <th>ID</th>
                    <th>First Name</th>
                </thead>
                <tbody>
                    {
                        data&&data.map((item, index)=>(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Button className='btn btn-danger' onClick={()=> deleteStudent(item.id)}>Delete</Button>
                                    <Button className='btn btn-success' onClick={()=> updateStudent(item.id)}>Update</Button>
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

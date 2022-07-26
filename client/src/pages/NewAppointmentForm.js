import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { FormField } from "../styles";
// import styled from "styled-components";
import { UserContext } from '../context/user';
import { MessageContext } from '../context/message';
import Wrapper from '../styles/Wrapper';
function NewAppointmentForm() {
const history = useHistory();
const { user } = useContext(UserContext)
const { setMessage } = useContext(MessageContext)
const [date, setDate] = useState("")
const [time, setTime] = useState("")
const [teacherId, setTeacherId] = useState()
const [studentId, setStudentId] = useState()
const [teachers, setTeachers] = useState([])
const [students, setStudents] = useState([])

useEffect(() => (
    
    fetch(`/api/teachers`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(r => r.json())
    .then(data => setTeachers(data))
), [])

useEffect(() => (
    fetch(`/api/students`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(r => r.json())
    .then(data => setStudents(data))
), [])

function handleSubmit(e) {
    e.preventDefault();
    
    (user.role === "teacher") ? setTeacherId(user.id) : setStudentId(user.id)

    fetch(`/api/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            date: date,
            time: time,
            teacher_id: teacherId,
            student_id: studentId
        })
    }).then((r) => {
        if (r.ok) {
            history.push("/appointments")
        } else {
            setMessage(r)
        }
    })
}

return (
    <Wrapper>
        <div class="box">
            <FormField>
                <input 
                    class="input is-rounded" 
                    type="date" 
                    onChange={(e) => setDate(e.target.value)}/>
            </FormField>
            <FormField>
                <input 
                    class="input is-rounded" 
                    type="time" 
                    onChange={(e) => setTime(e.target.value)}/>
            </FormField>
            
            { (user?.role === "teacher") ? 
                <FormField>
                <div class="select is-rounded">
                    <select id="student-id" onChange={(e) => setStudentId(parseInt(e.target.value))}>
                        <option> ---Choose student--- </option>
                        {students.map((s) => (
                            <option value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>
            </FormField>  : <FormField>
                <div class="select is-rounded">
                    <select id="teacher-id" onChange={(e) => setTeacherId(parseInt(e.target.value))}>
                        <option> ---Choose teacher--- </option>
                        {teachers.map((s) => (
                            <option value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>
            </FormField> }
            <FormField>
                <button class="button is-rounded" onClick={handleSubmit}>Schedule Appointment</button>
            </FormField>
        </div>
    </Wrapper>
  )
}

export default NewAppointmentForm
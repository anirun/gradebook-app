import React, { useState, useContext } from 'react'
import { FormField, Label } from "../styles";
import styled from "styled-components";
import { UserContext } from '../context/user';

function NewAppointmentForm() {
const { user } = useContext(UserContext)
const [date, setDate] = useState("")
const [time, setTime] = useState("")
const [teacherId, setTeacherId] = useState()
const [studentId, setStudentId] = useState()

function handleSubmit(e) {
    e.preventDefault();
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
                    <select id="student-id" onChange={(e) => setStudentId(e.target.value)}>
                        <option> ---Choose student--- </option>
                    </select>
                </div>
            </FormField>  : <FormField>
                <div class="select is-rounded">
                    <select id="teacher-id" onChange={(e) => setTeacherId(e.target.value)}>
                        <option> ---Choose teacher--- </option>
                    </select>
                </div>
            </FormField> }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default NewAppointmentForm
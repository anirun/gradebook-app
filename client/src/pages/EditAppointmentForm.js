import React, { useState, useContext } from 'react'
import Wrapper from '../styles/Wrapper'
import { FormField } from '../styles'
import { useLocation, useHistory } from 'react-router-dom'
import { UserContext } from '../context/user'
import { MessageContext } from '../context/message'


function EditAppointmentForm() {
  const location = useLocation()
  const history = useHistory()
  let { user } = useContext(UserContext)
  let { setMessage } = useContext(MessageContext)


  console.log(location.state.detail.appointment.date)
  
  const [appointment, setAppointment] = useState({
    date: location.state.detail.appointment.date,
    time: location.state.detail.appointment.time,
    student: location.state.detail.student,
    id: location.state.detail.appointment.id
  })

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/appointments/${appointment.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            appointment
        })
    }).then((r) => {
        if (r.ok) {
            history.push({
              pathname: `/appointments/${appointment.id}`,
              detail: appointment
            }) 
        } else {
            setMessage(r)
        }
    })}
  
  return (
    <Wrapper>
      <div class="box">
            <FormField>
                <input 
                    class="input is-rounded" 
                    name="date"
                    value={appointment.date} 
                    onChange={handleChange}/>
            </FormField>
            <FormField>
                <input 
                    class="input is-rounded" 
                    name="time"
                    value={appointment.time}
                    onChange={handleChange}/>
            </FormField>
            
            { (user?.role === "teacher") ? 
                <FormField>
                <div class="select is-rounded">
                    <select id="student-id" onChange={handleChange}>
                      <option value={appointment.student.id}>{appointment.student.name}</option>
                    </select>
                </div>
            </FormField>  : null }
            <FormField>
                <button class="button is-rounded" onClick={handleSubmit}>Edit Appointment</button>
            </FormField>
        </div>
    </Wrapper>
  )
}

export default EditAppointmentForm
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';
import AppointmentCard from '../components/AppointmentCard';
import Notification from '../components/Notification';
import Wrapper from '../styles/Wrapper';

function UserAppointments() {
    let history = useHistory()
    let { user } = useContext(UserContext)
    const [aptList, setAptList] = useState(user?.appointments)

    const handleNewAppointment = () => {
      history.push('/newappointment')
    }
    
    useEffect(() => {
      if (!aptList) {
        fetch(`/api/appointments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(r => r.json())
        .then(data => setAptList(data))
      }
    })

    let renderAppointments = aptList?.map( (a) => (
        <AppointmentCard key={a.id} appointment={a} />
    ))

  return (
    <>
      <Notification/>
      <Wrapper>
        <button class="button" onClick={handleNewAppointment}>New Appointment</button>
      </Wrapper>
      <div>{renderAppointments}</div>
    </>
  )
}

export default UserAppointments
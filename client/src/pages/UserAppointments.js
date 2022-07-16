import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import AppointmentCard from '../components/AppointmentCard';
import Notification from '../components/Notification';

function UserAppointments() {
    let { user } = useContext(UserContext)
    const [aptList, setAptList] = useState(user?.appointments)

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
      <div>{renderAppointments}</div>
    </>
  )
}

export default UserAppointments
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import AppointmentCard from '../components/AppointmentCard';

function UserAppointments() {
    let { user } = useContext(UserContext)
    const [aptList, setAptList] = useState(user.appointments)

    let renderAppointments = aptList.map( (a) => (
        <AppointmentCard key={a.appointment.id} appointment={a} />
    ))

  return (
    <div>{renderAppointments}</div>
  )
}

export default UserAppointments
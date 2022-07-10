import React from 'react'

function AppointmentCard({appointment}) {
  console.log(appointment)
    return (
    <div class="block">
        <div class="box">
            <div class="block">
                Date: {appointment.appointment.date} &nbsp; &nbsp; Time: {appointment.appointment.time}
            </div>
            <div class="block">
                Student: {appointment.student.name}
            </div>
        </div>
    </div>
  )
}

export default AppointmentCard
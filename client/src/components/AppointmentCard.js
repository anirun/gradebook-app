import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MessageContext } from "../context/message";
import Wrapper from "../styles/Wrapper";

function AppointmentCard({appointment}) {
  let history = useHistory();

  const { setMessage } = useContext(MessageContext);

  const handleClick = (e) => {
    if (e.target.value === "edit") {
      history.push({
        pathname: "/editappointment",
        state: { detail: appointment }})
    } else if (e.target.value === "delete") {
      fetch(`/api/appointments/${appointment.appointment.id}`, {
        method: "DELETE"
      }).then((r) => r.ok ? setMessage("Appointment Cancelled") : setMessage("Cancel Unsuccessful"))
    }
  }

    return (
    <Wrapper>
      <div class="block">
          <div class="box">
              <div class="block">
                  Date: {appointment.appointment.date || appointment.date} &nbsp; &nbsp; Time: {appointment.appointment.time || appointment.time}
              </div>
              <div class="block">
                  Student: {appointment.student.name}
              </div>
              <div class="block">
                <button class="button is-rounded" 
                  value="edit"
                  onClick={handleClick}
                  >Edit Appointment</button>
                &nbsp; &nbsp;
                <button class="button is-rounded" 
                  value="delete"
                  onClick={handleClick}
                  >Cancel Appointment</button>
              </div>
          </div>
      </div>
    </Wrapper>
  )
}

export default AppointmentCard;
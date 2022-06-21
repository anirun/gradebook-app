import React, { useState, useEffect } from 'react'
import AssignmentTable from '../pages/AssignmentTable'
import "../styles.css"
import styled from "styled-components";

const UserCard = ({user}) => {

  let [view, setView] = useState(false)
  let [assignments, setAssignments] = useState([])
  let [lectures, setLectures] = useState([])

  useEffect(() => {
    fetch(`/api/users/${user.id}/lectures`)
    .then((r) => r.json())
    .then((r) => {
      setLectures(r)
    })
  }, [])


  const handleAssignments = () => {
    (view === false) ? setView(true) : setView(false)
    if (user.role === "student") {
      setAssignments(user.graded_assignments)
    } 
  }

  const handleClick = (e) => {
      setView(true)
      fetch(`/api/lectures/${e.target.value}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r.graded_assignments)
        setAssignments(r.graded_assignments)  
      })
  }
  
  return (
    <Wrapper>
      <div class="card">
        <div class="card-image">
            <img src={user.image_url} className="photo" alt="User Profile Pic" />
        </div>
        <div class="card-content">
          <h4 class="title">Hey, {user.name}!! Welcome back. Thanks for being a {user.role} here!</h4>
        
          <div class="content">
            { (user.role === "student") ? <button class="button" onClick={handleAssignments}>View Assignments</button> : null }
            { lectures.map((l) => (<button class="button" value={l.id} onClick={(e) => handleClick(e)}>{l.name}</button>))}
          </div>
          <div class="content">
            { (view === true) ? <AssignmentTable assignments={assignments} /> : null }
          </div>
        </div>
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

export default UserCard
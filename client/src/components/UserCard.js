import React, { useState } from 'react'
import AssignmentTable from '../pages/AssignmentTable'
import "../styles.css"
import styled from "styled-components";

const UserCard = ({user}) => {

  let [view, setView] = useState(false)
  let [lectureId, setLectureId] = useState(``)
  let [assignments, setAssignments] = useState([])

  const handleLectureAssignments = (e) => {
    setView(false)
    setLectureId(parseInt(e.target.value))
    console.log(`lecture has id of ${lectureId}`)
    let allAssignments = user.assignments
    let foundAssignments = allAssignments.filter(l => l.assignment.lecture_id === lectureId)
    console.log(`found assignments for lecture number ${lectureId}`)
    setAssignments(foundAssignments)
    console.log(foundAssignments)
    setView(true)
  }

  const handleStudentAssignments = () => {
    let a = user.assignments
    (user.role === "student") ? setAssignments(a) : null
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
            { (user.role === "student") ? <button class="button" onClick={handleStudentAssignments}>View Assignments</button> : null }
            { user.lectures.map((l) => (<button class="button" value={l.id} onClick={(e) => handleLectureAssignments(e)} >{l.name}</button>))}
          </div>
          <div class="content">
            { (view === true) ? <AssignmentTable assignments={assignments} /> : "Check out your assignments for the lectures above..." }
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
import React, { useState } from 'react'
import AssignmentTable from '../pages/AssignmentTable'
import "../styles.css"
import styled from "styled-components";

const UserCard = ({user}) => {

  let [view, setView] = useState(false)
  let [lectureId, setLectureId] = useState(``)
  let [assignments, setAssignments] = useState([])

  const handleLectureChange = (e) => {
    setLectureId(parseInt(e.target.value))
    console.log(`found user's assignments`)
    let allAssignments = user.assignments
    let foundAssignments = allAssignments.filter(l => l.assignment.lecture_id === lectureId)
    console.log(`found user's assignments for lecture number ${lectureId}`)
    setAssignments(foundAssignments)
  }

  const handleLecture = (e) => {
    if (view === false) {
      setView(true)
      handleLectureChange(e)
    } else {
      console.log(`hi!`)
      handleLectureChange(e)
    }
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
            { (user.role === "student") ? <button class="button" onClick={handleLecture}>View Assignments</button> : null }
            { user.lectures.map((l) => (<button class="button" value={l.id} onClick={(e) => handleLecture(e)} >{l.name}</button>))}
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
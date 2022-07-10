import React, { useState, useContext } from 'react'
import AssignmentTable from '../pages/AssignmentTable'
import "../styles.css"
import styled from "styled-components";
import { UserContext } from '../context/user';
import LoginForm from './LoginForm';

const UserCard = ( ) => {
  const { user } = useContext(UserContext);

  let [view, setView] = useState(false)
  let [lectureId, setLectureId] = useState()
  let [assignments, setAssignments] = useState([])

  // load assignments specific to lecture
  const handleLectureAssignments = (e) => {
    setView(currentView => !currentView)
    let id = parseInt(e.target.value)
    setLectureId(id)
    let foundAssignments = user.assignments.filter(l => l.assignment.lecture_id === lectureId)
    setAssignments(foundAssignments)
  }
  
  // load all student's assignments
  const handleStudentAssignments = () => {
    let a = user.assignments
    if (user.role === "student") {
      setAssignments(a)
    } else {
      return null
    }
  }
  
  if (!user) return <Wrapper><LoginForm /></Wrapper>;

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
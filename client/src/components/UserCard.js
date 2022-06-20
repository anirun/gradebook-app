import React, { useState, useEffect } from 'react'
import { Box, Label } from '../styles'
import AssignmentList from '../pages/AssignmentList'
import "../styles.css"

const UserCard = ({user}) => {

  let [view, setView] = useState(false)
  let [assignments, setAssignments] = useState([])

  useEffect(() => {
    fetch(`/api/assignments`)
    .then((r) => r.json())
    .then((r) => setAssignments(r))
  }, [])

  const handleAssignments = () => {
    (view === false) ? setView(true) : setView(false)
    if (user.role === 0) {
      setAssignments(user.created_assignments)
    } else if (user.role === 1) {
      setAssignments(user.graded_assignments)
    } 
  }
  
  return (
    <div class="card">
      <div class="card-image">
          <img src={user.image_url} className="photo" alt="User Profile Pic" />
      </div>
      <div class="card-content">
        <Label>Hey, {user.name}!! Welcome back. Thanks for being a {user.role} here!</Label>
      
        <div class="content">
          <button class="button" onClick={handleAssignments}>View Assignments</button>
          { (view === true) ? <AssignmentList assignments={assignments} /> : null }
        </div>
      </div>
    </div>
  )
}

export default UserCard
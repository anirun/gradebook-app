import React, { useState, useEffect } from 'react'
import { Box, Label, Button } from '../styles'
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
    <>
      <Box>
        <img src={user.image_url} className="photo" alt="User Profile Pic" />
      </Box>
      <Box>    
        <Label>Hey, {user.name}!! Welcome back. Thanks for being a {user.role} here!</Label>
      </Box>
      <Button onClick={handleAssignments}>View Assignments</Button>
      { (view === true) ? <AssignmentList assignments={assignments} /> : null }
      
    </>
  )
}

export default UserCard
import React from 'react'
import { Box } from '../styles'

const AssignmentCard = ({assignment}) => {
  return (
    <Box>
        Student: {assignment.student.name}
        &nbsp;&nbsp;
        Assignment: {assignment.name}
        &nbsp;&nbsp;
        Grade: {assignment.grade}
    </Box>
  )
}

export default AssignmentCard
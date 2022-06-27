import React from 'react'

function AssignmentCard({assignment}) {
  console.log(assignment)
    return (
    <div>{assignment.name}</div>
  )
}

export default AssignmentCard
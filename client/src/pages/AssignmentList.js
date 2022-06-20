import React from 'react'
import AssignmentCard from '../components/AssignmentCard'

const AssignmentList = ({assignments}) => {
    
    const renderAssignments = assignments.map( (assignment) => <AssignmentCard key={assignment.id} assignment={assignment} /> )
  
 return (
    <div>

    {renderAssignments}

    </div>
  )
}

export default AssignmentList
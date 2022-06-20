import React from 'react'
import AssignmentCard from '../components/AssignmentCard'

const AssignmentList = ({assignments}) => {
    
    const renderAssignments = assignments.map( (assignment) => <AssignmentCard key={assignment.id} assignment={assignment} /> )
  
 return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Assignment</th>
            <th><abbr title="Graded Points">Pts</abbr></th>
            <th><abbr title="Total Points">Total</abbr></th>
            <th>Grade</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Student</th>
            <th>Assignment</th>
            <th><abbr title="Graded Points">Pts</abbr></th>
            <th><abbr title="Total Points">Total</abbr></th>
            <th>Grade</th>
          </tr>
        </tfoot>
      </table>
    {renderAssignments}

    </>
  )
}

export default AssignmentList
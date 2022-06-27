import React from 'react'
import AssignmentRow from '../components/AssignmentRow';

const AssignmentTable = ({assignments}) => {

  
    
    const renderAssignments = assignments.map( (assignment) => (
      <AssignmentRow key={assignment.assignment.id} assignment={assignment} />
    ) )
  
 return (
    <>
      <table class="table is-bordered is-hoverable is-centered is-narrow">
        <thead>
          <tr>
            <th>Student</th>
            <th>Assignment</th>
            <th><abbr title="Graded Points">Points</abbr></th>
            <th><abbr title="Total Points">Points Possible</abbr></th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
        {renderAssignments}
        </tbody>
        <tfoot>
        <tr>
            <th>Student</th>
            <th>Assignment</th>
            <th><abbr title="Graded Points">Points</abbr></th>
            <th><abbr title="Total Points">Points Possible</abbr></th>
            <th>Grade</th>
          </tr>
        </tfoot>
      </table>

    </>
  )
}

export default AssignmentTable;
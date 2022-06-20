import React from 'react'

const AssignmentTable = ({assignments}) => {
    
    const renderAssignments = assignments.map( (assignment, i) => (
      <tr key={i}>
        <td>{assignment.student.name}</td>
        <td>{assignment.name}</td>
        <td>{assignment.graded_points}</td>
        <td>{assignment.total_points}</td>
        <td>{assignment.grade}</td>
      </tr>
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
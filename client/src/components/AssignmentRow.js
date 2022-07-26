import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const AssignmentRow = ({assignments, setAssignments, assignment}) => {
  const history = useHistory()
  const [editMode, setEditMode] = useState(false)

  const [assign, setAssign] = useState({
    name: assignment.assignment.name,
    totalPoints: assignment.assignment.total_points,
    gradedPoints: assignment.assignment.graded_points,
    lectureId: assignment.assignment.lecture_id,
    studentId: assignment.student.id,
    grade: assignment.assignment.grade
  });

  const handleEdit = () => {
    editMode === true ? setEditMode(false) : setEditMode(true)
  }
  
  const handleChange = (e) => {
    setAssign({
        ...assign,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    fetch(`/api/assignments/${assignment.assignment.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: assign.name, 
        total_points: assign.totalPoints,
        graded_points: assign.gradedPoints,
        lecture_id: assign.lectureId,
        student_id: assign.studentId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setEditMode(false)
      history.push(`/`)
    });
  }

  const handleDelete = () => {
    fetch(`/api/assignments/${assignment.assignment.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      let newAssignments = [...assignments]
      newAssignments.splice(assignment.assignment.id, 1)
      setAssignments(newAssignments)
    })
  }

  return (
    <>
    { (editMode === true) ? (
      <tr key={assignment.assignment.id}>
        <td>{assignment.student.name}</td>
        <td>
          <input 
            class="input is-rounded"
            size="3"
            type="text"
            name="gradedPoints"
            value={assign.name}
            onChange={(e) => handleChange(e)}
          />
        </td>
        <td>
          <input 
            class="input is-rounded"
            size="3"
            type="text"
            name="gradedPoints"
            value={assign.gradedPoints}
            onChange={(e) => handleChange(e)}
            />
        </td>
        <td>
          <input 
            class="input is-rounded"
            size="3"
            type="text"
            name="totalPoints"
            value={assign.totalPoints}
            onChange={(e) => handleChange(e)}
            />
        </td>
        <td>
          <button 
            class="is-rounded" 
            onClick={handleSubmit}>
              submit
          </button>
        </td>
      </tr>
      ) : (
    <>
      <tr key={assignment.assignment.id}>
      <td>{assignment.student.name}</td>
      <td>{assign.name}
        &nbsp; &nbsp;
        <button class="is-rounded"
          onClick={handleDelete}>delete</button>
      </td>
      <td>{assign.gradedPoints}
        &nbsp;&nbsp;&nbsp;&nbsp;
          <button 
            class="is-rounded" 
            onClick={(e) => handleEdit(e)} 
            value={assignment.assignment.graded_points}>
              edit
          </button>
      </td>
      <td>{assign.totalPoints}</td>
      <td>{assign.grade}</td>
      </tr>
    </>
  )
  }
</>
)
}

export default AssignmentRow;
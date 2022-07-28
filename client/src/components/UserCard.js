import React, { useState, useContext, useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import AssignmentTable from '../pages/AssignmentTable'
import "../styles.css"
import styled from "styled-components";
import { UserContext } from '../context/user';
import LoginForm from './LoginForm';

const UserCard = ( ) => {
  const { user } = useContext(UserContext);
  let [lectureId, setLectureId] = useState({})
  let assignments = []
  
  const findLecture = (id) => {
    let foundLecture = user.given_lectures.find((l) => l.id === id)
    console.log(foundLecture)
  }
  
  const handleClick = (e) => {
    setLectureId(e.target.value)
    console.log('e.target.value', e.target.value, 'lecture id state', lectureId)
    findLecture(parseInt(lectureId))
  }


  // given_assignments & given_lectures includes STUDENT and LECTURE objects for assignment

  

  
  if (!user) return <Wrapper><LoginForm /></Wrapper>;

  return (
    <Wrapper>
      <div class="card">
        <div class="card-image">
            <img src={user.image_url} className="photo" alt="User Profile Pic" />
        </div>

        <div class="box">
          <h4 class="title">Hey, {user.name}!! Welcome back. Thanks for being a {user.role} here!</h4>
          <div class="field">
            <div class="select is-rounded">
              <select id= "lecture" onChange={(e) => setLectureId(e.target.value)} >  
                <option> ---Choose your lecture!--- </option>  
                  {user.lectures.map((lecture) =>
                  <option key={lecture.id} value={lecture.id}>
                    {lecture.name}
                  </option>
                  )}
              </select>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button class="button is-rounded">View Lecture</button>
          </div>
          <div class="box">
            <AssignmentTable assignments={assignments} />
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
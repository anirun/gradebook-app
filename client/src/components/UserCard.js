import React, { useState, useContext, useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import AssignmentTable from '../pages/AssignmentTable'
import "../styles.css"
import styled from "styled-components";
import { UserContext } from '../context/user';
import LoginForm from './LoginForm';

const UserCard = ( ) => {
  const { user } = useContext(UserContext);
  let userAssignments = user?.given_assignments
  let [lectureId, setLectureId] = useState()
  let [assignments, setAssignments] = useState(userAssignments)
  // given_assignments includes STUDENT and LECTURE objects for assignment

  

  
  if (!user) return <Wrapper><LoginForm /></Wrapper>;

  return (
    <Wrapper>
      <div class="card">
        <div class="card-image">
            <img src={user.image_url} className="photo" alt="User Profile Pic" />
        </div>

        <div class="card-content">
          <h4 class="title">Hey, {user.name}!! Welcome back. Thanks for being a {user.role} here!</h4>
        
          <div class="content">
            
          </div>
          
          <div class="content">
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
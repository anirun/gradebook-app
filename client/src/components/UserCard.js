import React from 'react'
import { Box, Label } from '../styles'
import "../styles.css"

const UserCard = ({user}) => {
  return (
    <>
      <Box>
        <img src={user.image_url} className="photo" alt="User Profile Pic" />
      </Box>
      <Box>    
        <Label>Hey, {user.name}!! Welcome back. Thanks for being a {user.role} here!</Label>
      </Box>
    </>
  )
}

export default UserCard
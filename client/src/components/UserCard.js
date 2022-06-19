import React from 'react'
import { Box, Label } from '../styles'
const UserCard = ({user}) => {
  return (
    <Box>
        
        <Label>Hey, {user.name}!! Welcome back. Thanks for being a {user.role} here!</Label>
        
    </Box>
  )
}

export default UserCard
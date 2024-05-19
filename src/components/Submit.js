import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Submit = () => {
  return (
    <div>
      <Box sx={{border:'1px solid rgba(0,0,0,0.2)',height:'auto',margin:'20px 0px'}}>
    <Box sx={{width:'100%',background:'white',height:'65px',display:'flex',alignItems:'center',gap:'20px',justifyContent:'end'}}>
    <Button variant='contained' sx={{background:'red'}}>Cancel</Button>
    <Button variant='contained' sx={{marginRight:'20px'}}>Submit</Button>
    
     </Box>

 </Box>
    </div>
  )
}

export default Submit

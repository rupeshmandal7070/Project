import { Box, Grid, Typography } from '@mui/material'
import React from 'react'



const Devices = () => {
  return (

    <>
   
    <Box sx={{border:'1px solid rgba(0,0,0,0.2)',height:'auto',paddingBottom:'20px',marginLeft:'20px'}}>
    <Box sx={{width:'100%',background:'white',height:'35px',display:'flex',alignItems:'center'}}>
     <Typography sx={{marginLeft:'10px'}}> DEVICES</Typography>
    
     </Box>

     <Box sx={{marginTop:'10px',paddingLeft:'20px'}}>
        <Box sx={{display:'flex',gap:'10px',marginTop:'10px'}}>
         <input type='checkbox' />
          <Typography>Mobile</Typography>
        </Box>

        <Box sx={{display:'flex',gap:'10px',marginTop:'10px'}}>
         <input type='checkbox' />
          <Typography>Tablets</Typography>
        </Box>

        <Box sx={{display:'flex',gap:'10px',marginTop:'10px'}}>
         <input type='checkbox' />
          <Typography>Desktop</Typography>
        </Box>
     </Box>
 </Box>


 <Box sx={{border:'1px solid rgba(0,0,0,0.2)',height:'auto',paddingBottom:'20px',marginLeft:'20px',marginTop:'20px'}}>
    <Box sx={{width:'100%',background:'white',height:'35px',display:'flex',alignItems:'center'}}>
     <Typography sx={{marginLeft:'10px'}}>FILTER OPTIONS</Typography>
    
     </Box>

     <Box sx={{marginTop:'10px',paddingLeft:'20px'}}>
        <Box sx={{display:'flex',gap:'10px',marginTop:'10px'}}>
         <input type='checkbox' />
          <Typography>GatesSurvey</Typography>
        </Box>

        <Box sx={{display:'flex',gap:'10px',marginTop:'10px'}}>
         <input type='checkbox' />
          <Typography>Fraud_detection</Typography>
        </Box>
     </Box>
 </Box>
 </>
  )
}

export default Devices

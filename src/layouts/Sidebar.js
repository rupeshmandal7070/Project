import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { GridView, RocketLaunch } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <Box sx={{padding:'20px'}}>

       

       <Accordion sx={{background:'#3C5ECC',boxShadow:'none'}}>
        <AccordionSummary  onClick={()=>navigate('/')}
        expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>} sx={{color:'white',display:'flex',gap:'20px'}}>
           <GridView sx={{color:'white'}}/> Dashboard
        </AccordionSummary>
       </Accordion>


       <Accordion sx={{background:'#3C5ECC',boxShadow:'none'}}>
        <AccordionSummary onClick={()=>navigate('/project')}
        expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>} sx={{color:'white',display:'flex',gap:'20px'}}>
           <RocketLaunch sx={{color:'white'}}/> Projects
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{color:'white',fontSize:'14px'}}>Create Project</Typography>
            <Typography sx={{color:'white',fontSize:'14px'}}>All Projects</Typography>
        </AccordionDetails>
       </Accordion>
        
    </Box>
  )
}

export default Sidebar

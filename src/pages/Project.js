import { Box, Grid } from '@mui/material'
import React from 'react'
import Sidebar from '../layouts/Sidebar'
import ProjectContent from '../contents/ProjectContent'
import Navbar from '../layouts/Navbar'


const Project = () => {
  return (
    <div>
      <Box  sx={{background:'#F3F5F6'}}>
      <Grid container  gap={3}>
        <Grid  xs={4} md={2.5} sx={{background:'#3C5ECC',height:'auto'}}>
          <Sidebar/>
        </Grid>
        <Grid  xs={8} md={9} sx={{background:'#F3F5F6',height:'auto'}}>
            {/* <Navbar/> */}
          <ProjectContent/>
        </Grid>
        </Grid>
        </Box>
    </div>
  )
}

export default Project

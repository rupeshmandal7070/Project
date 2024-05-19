import { KeyboardBackspace } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import ProjectInfo from '../components/ProjectInfo'
import Devices from '../components/Devices'
import Regions from '../components/Regions'
import Specifications from '../components/Specifications'
import Navbar from '../layouts/Navbar'
import Submit from '../components/Submit'

const ProjectContent = () => {
  return (
    <div style={{marginTop:'10px'}}>
        {/* <Navbar/> */}
       <button style={{display:'flex',alignItems:'center',gap:'10px',borderRadius:'none'}}><KeyboardBackspace/>Project</button>

       <Grid container sx={{marginTop:'10px'}}>
            <Grid md={8}>
               <ProjectInfo/>
            </Grid>

            <Grid md={4}>
               <Devices/>
            </Grid>

            <Grid md={12}>
               <Regions/>
            </Grid>

            <Grid md={12}>
               <Specifications/>
            </Grid>

            <Grid md={12}>
               <Submit/>
            </Grid>
       </Grid>
    </div>
  )
}

export default ProjectContent
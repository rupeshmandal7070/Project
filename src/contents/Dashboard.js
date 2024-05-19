import { KeyboardBackspace } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import ProjectInfo from '../components/ProjectInfo'
import Devices from '../components/Devices'
import Regions from '../components/Regions'
import Specifications from '../components/Specifications'
import Submit from '../components/Submit'

const Dashboard = () => {
  return (
    <div style={{marginTop:'10px'}}>
       <button style={{display:'flex',alignItems:'center',gap:'10px',borderRadius:'none'}}><KeyboardBackspace/>Dashboard</button>

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

export default Dashboard

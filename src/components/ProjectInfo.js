import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const ProjectInfo = () => {
  return (
    <Box sx={{border:'1px solid rgba(0,0,0,0.2)',height:'auto',paddingBottom:'20px'}}>
       <Box sx={{width:'100%',background:'white',height:'35px',display:'flex',alignItems:'center'}}>
        <Typography sx={{marginLeft:'10px'}}> PROJECT INFORMATION</Typography>
       
        </Box>

        <Grid container sx={{display:'flex',justifyContent:'space-evenly',flexGrow:1,marginTop:'10px'}}>
            <Grid md={5.5}>
                <div>Project Name*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='ProjectName'/>
            </Grid>
            <Grid md={5.5}>
                <div>work Order No*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Work order no'/>
            </Grid>

            <Grid md={3.6} sx={{marginTop:'10px'}}>
                <div>Project Type*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Project Type'/>
            </Grid>

            <Grid md={3.6} sx={{marginTop:'10px'}}>
                <div>Category*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Category'/>
            </Grid>

            <Grid md={3.6} sx={{marginTop:'10px'}}>
                <div>Client*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Client'/>
            </Grid>

            <Grid md={3.6} sx={{marginTop:'10px'}}>
                <div>Client Contact*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Client Contact'/>
            </Grid>

            <Grid md={3.6} sx={{marginTop:'10px'}}>
                <div>Sales Person*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Sales Person'/>
            </Grid>

            <Grid md={3.6} sx={{marginTop:'10px'}}>
                <div>Project Mangaer*</div>
                 <TextField
                  variant='outlined' 
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Project Manager'/>
            </Grid>

            <Grid md={11.4} sx={{marginTop:'10px'}}>
                <div>Project Description</div>
                 <TextField
                  variant='outlined' 
                  multiline={true}
                  rows={3}
                  size='small'fullWidth 
                  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'},}}
                  placeholder='Project Description'/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProjectInfo

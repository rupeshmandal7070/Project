import { Search } from '@mui/icons-material'
import { Avatar, Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Box sx={{height:'60px',width:'100%',background:'white',display:'flex',alignItems:'center',justifyContent:'end'}}>
             {/* <img src='/logo freq.png' alt='logo'/> */}

             <Box sx={{display:'flex',gap:'20px'}}>
                 <TextField variant='outlined' size='small'   
                 InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search/>
                    </InputAdornment>
                  )
                }} placeholder='Search' sx={{width:'400px','& fieldset':{borderRadius:'20px'}}}/>
                <Avatar/>
              </Box>
        </Box>
    </div>
  )
}

export default Navbar

import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { countries } from '../constants/Country'


const Regions = () => {
    const [selectedCountries, setSelectedCountries] = useState([]);

    const handleChange = (event, value) => {
      setSelectedCountries(value);
    };
  return (
    <div>
       <Box sx={{border:'1px solid rgba(0,0,0,0.2)',height:'auto',paddingBottom:'20px',marginTop:'20px'}}>
    <Box sx={{width:'100%',background:'white',height:'35px',display:'flex',alignItems:'center'}}>
     <Typography sx={{marginLeft:'10px'}}>REGIONS</Typography>
    
     </Box>
    
    <Box sx={{padding:'0px 20px',marginTop:'20px'}}>
    <Autocomplete
      id="country-select-demo"
      fullwidth
      options={countries}
      autoHighlight
      multiple
      getOptionLabel={(option) => option.label}
      onChange={handleChange}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField  sx={{'& fieldSet':{borderRadius:'0px',border:'1px solid black'}}}
          {...params}
          label="Choose a country"
          fullwidth
          size='small'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
            
          }}
        />
      )}
    />

    </Box>




     
 </Box>
    </div>
  )
}

export default Regions

import { Add, Close } from '@mui/icons-material'
import { Box, Checkbox, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Specifications = () => {
    const [rows, setRows] = useState([
        { id: 1, country: 'Brazil', language: 'Portuguese', targetGroup: '', cpi: '', loi: '', ir: '', complete: '' },
      ]);
    
      // Function to add a new row
      const addRow = () => {
        const newRow = {
          id: rows.length + 1, // Generate a unique id
          country: 'Brazil',
          language: 'Portugese',
          targetGroup: '',
          cpi: '',
          loi: '',
          ir: '',
          complete: ''
        };
        setRows([...rows, newRow]);
      };
    
      // Function to remove a row by id
      const removeRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
      };
    
      // Function to handle input changes
      const handleInputChange = (id, field, value) => {
        setRows(rows.map(row => row.id === id ? { ...row, [field]: value } : row));
      };
  return (
    <div>
       <Box sx={{border:'1px solid rgba(0,0,0,0.2)',height:'auto',paddingBottom:'20px',marginTop:'20px'}}>
    <Box sx={{width:'100%',background:'white',height:'35px',display:'flex',alignItems:'center'}}>
     <Typography sx={{marginLeft:'10px'}}>SPECIFICATIONS</Typography>
    
     </Box>
      <Box sx={{padding:'0px 20px'}}>
          <TableContainer sx={{marginTop:'20px'}}>
            <Table>
                <TableHead sx={{background:'#3C5ECC'}}>
                    <TableRow>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>Sel.</TableCell>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>Country</TableCell>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>Language</TableCell>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>Target Group</TableCell>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>CPI($)</TableCell>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>LOI(MIN)</TableCell>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>IR%</TableCell>
                        <TableCell align='center' sx={{fontWeight:'700',color:'white'}}>Complete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>
                     {row.country}
                    </TableCell>
                    <TableCell>
                      {row.language}
                    </TableCell>
                    <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                      <TextField
                        value={row.targetGroup}
                        onChange={(e) => handleInputChange(row.id, 'targetGroup', e.target.value)}
                        variant='outlined'
                        size='small'
                        sx={{ '& fieldSet': { borderRadius: '0px', border: '1px solid black' } }}
                      />
                      <Box sx={{ display: 'flex', marginLeft: '10px', gap: '5px' }}>
                        <Box onClick={addRow} sx={{ background: 'green', borderRadius: '15px',display: 'flex', alignItems: 'center',cursor:'pointer' }}>
                          <Add sx={{ color: 'white' }} />
                        </Box>
                        <Box onClick={() => removeRow(row.id)} sx={{ background: 'red', borderRadius: '15px',display: 'flex', alignItems: 'center',cursor:'pointer' }}>
                          <Close sx={{ color: 'white' }} />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.cpi}
                        onChange={(e) => handleInputChange(row.id, 'cpi', e.target.value)}
                        variant='outlined'
                        size='small'
                        sx={{ '& fieldSet': { borderRadius: '0px', border: '1px solid black' } }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.loi}
                        onChange={(e) => handleInputChange(row.id, 'loi', e.target.value)}
                        variant='outlined'
                        size='small'
                        sx={{ '& fieldSet': { borderRadius: '0px', border: '1px solid black' } }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.ir}
                        onChange={(e) => handleInputChange(row.id, 'ir', e.target.value)}
                        variant='outlined'
                        size='small'
                        sx={{ '& fieldSet': { borderRadius: '0px', border: '1px solid black' } }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={row.complete}
                        onChange={(e) => handleInputChange(row.id, 'complete', e.target.value)}
                        variant='outlined'
                        size='small'
                        sx={{ '& fieldSet': { borderRadius: '0px', border: '1px solid black' } }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
                
            </Table>
          </TableContainer>
          </Box>
 </Box>
    </div>
  )
}

export default Specifications

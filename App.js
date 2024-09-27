import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Button from '@mui/material/Button'; 
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




const App = () => {
  return (
   <>

<h1 style={{marginLeft:'52px',paddingLeft:'22px', width:'190px',height:'50px', backgroundColor: 'black',color:'orange'}}>Material UI</h1>


    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
      <Fab color='error'>
      <NavigationIcon sx={{ mr: 1 , ml : 1}} />
      </Fab>
    </Box>
    <hr />
    <hr /> 
  

  {/* Buttons */}
  {/* href and target blank */}
  {/* 3 types of variant text,outlined,contained */}
    <Button variant="text">Text</Button>
    <Button variant='contained'href='https://www.youtube.com/' target='blank' color='success' style={{marginRight :'6px'}}>Click Here to go youtube!!</Button>
    <Button variant='outlined' href='https://www.youtube.com/' target='blank' style={{marginRight :'6px'}}>Click Here to go youtube!!</Button>
    <Button variant='contained' href='https://www.google.com' target='blank' color='error'>Google</Button>
    <Button variant='contained' href='https://github.com/' target='blank' style={{marginLeft:'5px'}}>GitHub</Button>

   <hr />
  <hr />

   {/*Buttons with Icons  */}

   <Button variant='outlined' color='error' style={{marginRight:'8px'}} startIcon={<AccessAlarmsIcon/>} href='https://vclock.com/' target='blank'> Set Alarm</Button>
   <Button variant='contained'color='secondary' startIcon={<CellWifiIcon/>}  href='https://www.weboost.com/blog/how-to-test-signal-strength-on-your-phone' target='blank'>Cell Phone Range</Button>
    <hr />
    {/* WhatsApp linking*/}

    <Button variant='contained' color='success' startIcon={<WhatsAppIcon/>} href='https://wa.link/vno3bs' target='blank'>Contact through WhatsApp</Button>
 
<hr />
<hr />
{/* Icons */}
<AccessAlarmsIcon color='error' style={{fontSize:'50px',marginRight:'8px'}}/>
<CellWifiIcon color='primary'  style={{fontSize:'50px',marginRight:'10px'}}/>
<WhatsAppIcon color='success'  style={{fontSize:'50px'}}/>
   


   </>
  )
}

export default App
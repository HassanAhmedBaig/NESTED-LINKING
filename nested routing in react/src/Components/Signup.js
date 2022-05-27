import React, { useState } from 'react'
import '../App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { useNavigate } from "react-router-dom";



const Signup  = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [gender,setGender] = useState("")
  const [phone,setPhone] = useState("")
  const navigate = useNavigate("")
  const signUp = () =>{
    let obj ={
      name,
      email,
      gender,
      phone
    }
    navigate(`/tempelate`, { state: obj });
    // navigate(`/Profile`, { state: obj });
    console.log(obj)
  }
  return (

<Grid align="center">
  <Paper style={{background:"#97f0e7"}} elevation={20} sx={{paddingTop:2,paddingLeft:7,paddingRight:7,paddingBottom:5,width:300,marginTop:2,marginLeft:"auto",marginRight:"auto"}}>
    <Grid>
<PersonAddAltSharpIcon style={{fontSize:"40"}} />
    </Grid>
    <h2 style={{margin:10}}>SIGN UP</h2>
    
<Typography variant='caption'>FILL THE FORM TO CREATE AN ACCOUNT</Typography>
<form>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Name" onChange={(e)=> setName(e.target.value)}/>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Email" onChange={(e)=> setEmail(e.target.value)}/>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Phone Number" onChange={(e)=> setPhone(e.target.value)}/>
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
    style={{display:"initial"}} 
    onChange={(e)=> setGender(e.target.value)}
  >
    <FormControlLabel  value="female" control={<Radio />} label="Female" />
    <FormControlLabel  value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Password"/>
<TextField style={{marginTop:10,marginBottom:10,marginRight:10}} fullWidth label="Confirm Password"/>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and conditions" />
</FormGroup>
<Button onClick={signUp} style={{marginTop:20,marginBottom:10}} type='submit' variant='contained' color='primary'>SIGN IN</Button>
</form>
  </Paper>
</Grid>
  )
}

export default Signup 


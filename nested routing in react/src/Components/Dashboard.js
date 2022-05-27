import * as React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from './Avatar';
import Table from './Table';
import { useLocation} from "react-router-dom";





export default function Dashboard() {
  const location = useLocation("")
  return (
    <div>
      <Typography variant='h5'>DASHBOARD</Typography>

<div style={{display:"flex",flexDirection:"row"}}>
<Avatar  />
<Typography style={{marginTop:50,marginLeft:20}} variant='h4'>{location.state.name}</Typography>
</div>
<Table />
    </div>
    
  );
}


import React from 'react'
import MainCard from 'ui-component/cards/MainCard';
import Switch from '@mui/material/Switch';
import './index.css'  
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const handleUpload=()=>{
  
}
const index=()=> (
  <MainCard title = "Autoscaler">
    <center>
    <form >
    <label >
    Scale factor   : {"   "}    
      <input type="number" name="scalefactor"/>
    </label>
    <input type="submit" value=" Submit" style={{borderRadius:'24px',width:'100px'}}/>
    </form>
   <br/>
   <br/>
   
  <label className = "switch">
    Enable Auto Scaling    :
    <Switch {...label} />
</label>
</center>
<center>

<p style={{fontSize:'16px',color:'black'}}>OR Manually upload a dataset to run</p>
<form>
          <input type="file" />
          <button type="submit" onSubmit={handleUpload}>Upload</button>
        </form>
        </center>
  </MainCard>
);
export default index
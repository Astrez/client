import { Typography } from '@mui/material';
import './index.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
const updateSubmit=()=>{

}
const DeleteDeployment = () => (
  <MainCard title=" Delete Deployment" style={{ textAlign: 'center' }}>
    <Typography variant='body2'>
    <form onSubmit={updateSubmit}>
    <label>

            Deployment Name: {" "}
            <input type="text"/>
            </label>
            <label>

              Namespace: {" "}
              <input type="text" name="namespace"/>
            </label>
            <input type="submit" style={{borderRadius:'24px',width:'100px'}}/>
            </form> 
            </Typography>
</MainCard>
);

export default DeleteDeployment;

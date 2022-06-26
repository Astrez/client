import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
const updateSubmit=()=>{

}
const DeleteDeployment = () => (
  <MainCard title=" Delete Deployment"style={{ textAlign: 'center' }}>
    <Typography variant='body2'>
    <form onSubmit={updateSubmit}>
    <label>

            Deployment Name: {" "}
            <input type="text"/>
            </label>
            <label>
              <br/>
              <br/>
              Namespace: {" "}
              <input type="text" name="namespace"/>
            </label>
            <br/>
              <br/>
            <input type="submit"/>
            </form> 
            </Typography>
</MainCard>
);

export default DeleteDeployment;

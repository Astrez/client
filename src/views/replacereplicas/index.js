import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
const updateSubmit=()=>{

}
const ReplaceReplicas = () => (
  <MainCard title = "Replace Deployment Replicas"style={{textAlign:'center'}}>
    <Typography variant='body2'>
    <form onSubmit={updateSubmit}>
    <label>Deployment Name :{"  "}
                <input type="text" name="deploymentName"/>
            </label>
        <br/><br/>

            <label>Replicas :{"  "}
                <input type="number" name='replicas'/>
            </label>
        <br/><br/>

            <label>Namespace :{"  "}
                <input type="text" name="namespace"/>
            </label>
    </form>
    </Typography>
    </MainCard>
);

export default ReplaceReplicas;
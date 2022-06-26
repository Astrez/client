// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Card } from '@mui/material';

import './deploy.css';
// ==============================|| SAMPLE PAGE ||============================== //
const updateSubmit=()=>{

}

const CreateDeployment = () => (
    <MainCard title="Create Deployment" style = {{ textAlign: 'center',fontSize:"24px" }}>
        <Typography variant="body2">
          
        <form onSubmit={updateSubmit} >  

            <label>Deployment Name : {" "}  
              <input type="text"name='deploymentName' />  
            </label>  
            

            <label> Conatiner Name : {" "}  
              <input type="text" name="containerName"/>  
            </label>
            

            <label>Container Image : {" "}   
              <input type="text" name="containerImage" />  
            </label> 
            

            <label>Deployment Name Space : {" "}  
              <input type="text" name="deploymentNamespace" />  
            </label>  
            

            <label>Port : {" "}
            <input type="text" name="port"/>
            </label>
            
            
            <label>
              Target : {"  "}
              <input type="text" name="target"/>
            </label>
           
            
            <label>
              Replicas : {"  "}
              <input type="number" name="replicas"/>
            </label>
            

              <input type="submit" value="Submit" style={{borderRadius:'24px',width:'100px'}}/>
            

          </form>
      
          <p style={{fontSize:"16px",textAlign: 'center' }}>OR please upload yaml file </p>
          
          
        <Card title="YAML FILE UPLOAD" style={{textAlign:'center'}}>
          <form style={{textAlign:'center'}}>
          <input type="file" />
          <button type="submit" style={{borderRadius:'24px',width:'100px'}}>Upload</button>
        </form>
        </Card>

        </Typography>

        </MainCard>
        
    
);

export default CreateDeployment;

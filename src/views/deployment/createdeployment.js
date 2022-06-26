// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// ==============================|| SAMPLE PAGE ||============================== //
const updateSubmit=()=>{

}

const CreateDeployment = () => (
    <MainCard title="Create Deployment"style={{ textAlign: 'center',fontSize:"24px" }}>
        <Typography variant="body2">
        <form onSubmit={updateSubmit}>  
            <label>Deployment Name : {" "}  
              <input type="text"name='deploymentName' />  
            </label>  
            <br/>
            <br/>

            <label> Conatiner Name : {" "}  
              <input type="text" name="containerName"/>  
            </label>
            <br/>
            <br/>

            <label>  Container Image : {" "}   
              <input type="text" name="containerImage" />  
            </label>
            <br/>
            <br/>

            <label>Deployment Name Space : {" "}  
              <input type="text" name="deploymentNamespace" />  
            </label>  
            <br/>
            <br/>
            <br/>
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

            

              <input type="submit" value="Submit" />
            <br/>
            <br/>

          </form>  
          <p style={{fontSize:"16px"}}>OR please upload yaml file </p>
          <br/>
          <br/>
          <MainCard title="React File Upload">
          <form>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
        </MainCard>

        </Typography>

        </MainCard>
        
    
);

export default CreateDeployment;

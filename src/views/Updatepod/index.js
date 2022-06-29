import { Typography } from '@mui/material';
// import './index.css';
// project imports
import MainCard from 'ui-component/cards/MainCard';

const UpdateDeployment = () => (
    <MainCard title="Update Deployment Container Image" style={{ textAlign: 'center' }}>
        <Typography variant="body2">
            <center>
                <form>
                    <label>
                        Deployment Name : {'  '}
                        <input type="text" name="deploymentName" />
                    </label>

                    <label>
                        Image : {'   '}
                        <input type="text" name="image" />
                    </label>

                    <label>
                        Namespace :
                        <input type="text" name="namespace" />
                    </label>
                </form>
            </center>
        </Typography>
    </MainCard>
);

export default UpdateDeployment;

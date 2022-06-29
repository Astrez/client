import { Typography } from '@mui/material';
// import './index.css';
// project imports
import MainCard from 'ui-component/cards/MainCard';
const updateSubmit = () => {};
const ReplaceReplicas = () => (
    <MainCard title="Replace Deployment Replicas" style={{ textAlign: 'center' }}>
        <Typography variant="body2">
            <form onSubmit={updateSubmit}>
                <label>
                    Deployment Name :{'  '}
                    <input type="text" name="deploymentName" />
                </label>

                <label>
                    Replicas :{'  '}
                    <input type="number" name="replicas" />
                </label>

                <label>
                    Namespace :{'  '}
                    <input type="text" name="namespace" />
                </label>
                <br />
                <input type="submit" name="submit" style={{ borderRadius: '24px', width: '100px' }} />
            </form>
        </Typography>
    </MainCard>
);

export default ReplaceReplicas;

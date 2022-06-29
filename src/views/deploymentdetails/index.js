import { Typography } from '@mui/material';
// import './index.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import React from 'react';

const DeploymentDetails = () => (
    <MainCard title="Deployment Details" style={{ textAlign: 'center' }}>
        <Typography variant="body2">
            <center>
                <table>
                    <tr>
                        <th>Revision</th>
                        <th>Container_Name</th>
                        <th>Container_Image</th>
                        <th>Replicas</th>
                        <th>Limits</th>
                        <th>Requests</th>
                    </tr>
                </table>
            </center>
        </Typography>
    </MainCard>
);

export default DeploymentDetails;

import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import React from 'react'

const DeploymentDetails = () => (
  <MainCard title="Create Deployment"style={{ textAlign: 'center' }}>
      <Typography variant="body2">
        <center>
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
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
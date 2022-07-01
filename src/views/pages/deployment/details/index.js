// import './index.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import React from 'react';
import DetailsTable from './table/DetailsTable';

const DeploymentDetails = () => (
    <MainCard title="Deployment Details" style={{ textAlign: 'center' }}>
        <DetailsTable />
    </MainCard>
);

export default DeploymentDetails;

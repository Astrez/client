import { useEffect } from 'react';
// import './index.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import React from 'react';
import DetailsTable from './table/DetailsTable';
import { useDispatch, useSelector } from 'react-redux';
import { loadDeployments } from 'store/actions/deploymentActions';

const DeploymentDetails = () => {
    const deployments = useSelector((state) => state.deployment.deployments);
    // const [data, setData] = useState(deployments);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('fetching');
        dispatch(loadDeployments());
    }, []);
    return (
        <MainCard title="Deployment Details" style={{ textAlign: 'center' }}>
            <DetailsTable data={deployments} />
        </MainCard>
    );
};

export default DeploymentDetails;

// project imports
import MainCard from 'ui-component/cards/MainCard';
import UpdateDeploymentForm from './form/UpdateDeploymentForm';
const handleSubmit = () => {};

const UpdateDeployment = () => (
    <MainCard title="Update Deployment Container Image" style={{ textAlign: 'center' }}>
        <UpdateDeploymentForm handleSubmit={handleSubmit} />
    </MainCard>
);

export default UpdateDeployment;

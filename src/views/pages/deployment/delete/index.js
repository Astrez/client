import MainCard from 'ui-component/cards/MainCard';
import DeleteDeploymentForm from './form/DeleteDeploymentForm';
const handleSubmit = () => {};
const DeleteDeployment = () => (
    <MainCard title=" Delete Deployment" style={{ textAlign: 'center' }}>
        <DeleteDeploymentForm handleSubmit={handleSubmit} />
    </MainCard>
);

export default DeleteDeployment;

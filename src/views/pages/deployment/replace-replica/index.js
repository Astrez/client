// project imports
import MainCard from 'ui-component/cards/MainCard';
import ReplaceReplicaForm from './form/ReplaceReplicaForm';
const handleSubmit = () => {};
const ReplaceReplicas = () => (
    <MainCard title="Replace Deployment Replicas" style={{ textAlign: 'center' }}>
        <ReplaceReplicaForm handleSubmit={handleSubmit} />
    </MainCard>
);

export default ReplaceReplicas;

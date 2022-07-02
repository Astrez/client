// project imports
import MainCard from 'ui-component/cards/MainCard';
import DetailsTable from './table/DetailsTable';

const PodDetails = () => (
    <MainCard title="Pod details" style={{ textAlign: 'center' }}>
        <DetailsTable />
    </MainCard>
);

export default PodDetails;

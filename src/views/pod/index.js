import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const PodDetails = () => (
  <MainCard title="Pod details" style={{textAlign: 'center' }}>
    <Typography variant='body2'>
      <center>
        <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <tr>
        <th>PodName</th>
        
        <th>Namespace</th>
        
        <th>PodIP</th>
        
        <th>Number Of Containers</th>
        
        <th>Container Name</th>
        
        <th>Container Image</th>
        <th>Limits</th>
        
        <th>Requests</th>
        
        <th>Container Image</th>
        
        <th>Status</th>
        
        </tr>
        </table>
        </center>
        </Typography>
    </MainCard>
);

export default PodDetails;
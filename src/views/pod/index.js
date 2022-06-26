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
        <td></td>
        <th>Namespace</th>
        <td></td>
        <th>PodIP</th>
        <td></td>
        <th>Number Of Containers</th>
        <td></td>
        <th>Container Name</th>
        <td></td>
        <th>Container Image</th>
        <th>Limits</th>
        <td></td>
        <th>Requests</th>
        <td></td>
        <th>Container Image</th>
        <td></td>
        <th>Status</th>
        <td></td>
        </tr>
        </table>
        </center>
        </Typography>
    </MainCard>
);

export default PodDetails;
// assets
import { IoSpeedometer } from 'react-icons/io5';

// constant
const icons = { IoSpeedometer };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IoSpeedometer,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

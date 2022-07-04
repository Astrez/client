// assets
import { IoSpeedometer, IoPersonAdd } from 'react-icons/io5';

// constant
const icons = { IoSpeedometer, IoPersonAdd };

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
        },
        {
            id: 'register',
            title: 'Register a User',
            type: 'item',
            url: '/register',
            icon: icons.IoPersonAdd,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

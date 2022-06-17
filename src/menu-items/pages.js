// assets
import { IoRocket,IoBuildSharp } from 'react-icons/io5';

// constant
const icons = {
    IoRocket, IoBuildSharp
};

// ==============================|| EXTRA deployment MENU ITEMS ||============================== //

const deployment = {
    id: 'deployment',
    title: 'Deployment Menu',
    type: 'group',
    children: [
        {
            id: 'deploy',
            title: 'Deployment',
            type: 'collapse',
            icon: icons.IoRocket,
            children: [
                {
                    id: 'start-deployment',
                    title: 'Start Deployment',
                    type: 'item',
                    url: '/deployment/start',
                    icon: icons.IoBuildSharp,
                },
            ]
        }
    ]
};

export default deployment;

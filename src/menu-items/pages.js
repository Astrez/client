// assets
import { IoRocket,  IoCreate, IoNewspaper } from 'react-icons/io5';
import {  MdOutlineChangeCircle } from 'react-icons/md';

// constant
const icons = {
    IoRocket,
    IoCreate,
    IoNewspaper,
    MdOutlineChangeCircle
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
                    id: 'create-deployment',
                    title: 'Create Deployment',
                    type: 'item',
                    url: '/deployment/create',
                    icon: icons.IoCreate
                },
                {
                    url: '/deployment/details',
                    id: 'deployment-details',
                    title: 'Deployment Details',
                    type: 'item',
                    icon: icons.IoNewspaper
                },

                {
                    url: '/deployment/pod',
                    id: 'pod-details',
                    title: 'Pod Details',
                    type: 'item',
                    icon: icons.IoNewspaper
                },

                {
                    url: '/deployment/autoscaler',
                    id: 'autoscaler',
                    title: 'Autoscale!',
                    type: 'item',
                    icon: icons.MdOutlineChangeCircle
                }
            ]
        }
    ]
};

export default deployment;

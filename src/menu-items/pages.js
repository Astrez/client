// assets
import { IoRocket, IoBuildSharp, IoCreate, IoNewspaper } from 'react-icons/io5';
import { GiCardExchange } from 'react-icons/gi';
import { MdUpdate, MdDelete, MdOutlineChangeCircle } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';

// constant
const icons = {
    IoRocket,
    IoBuildSharp,
    IoCreate,
    IoNewspaper,
    GiCardExchange,
    MdDelete,
    MdUpdate,
    MdOutlineChangeCircle,
    BiDetail
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
                    url: '/deployment/replace-replicas',
                    id: 'replace-replicas',
                    title: 'Replace Replica',
                    type: 'item',
                    icon: icons.GiCardExchange
                },
                {
                    url: '/deployment/pod',
                    id: 'pod-details',
                    title: 'Pod Details',
                    type: 'item',
                    icon: icons.IoNewspaper
                },
                {
                    url: '/deployment/update',
                    id: 'update-deployment',
                    title: 'Update Deployment',
                    type: 'item',
                    icon: icons.MdUpdate
                },
                {
                    url: '/deployment/delete',
                    id: 'delete-deployment',
                    title: 'Delete Deployment',
                    type: 'item',
                    icon: icons.MdDelete
                },
                {
                    url: '/deployment/autoscaler',
                    id: 'autoscaler',
                    title: 'Autoscale!',
                    type: 'item',
                    icon: icons.MdOutlineChangeCircle
                },

                {
                    url: '/deployment/metrics',
                    id: 'metrics',
                    title: 'Get Metrics',
                    type: 'item',
                    icon: icons.BiDetail
                }
            ]
        }
    ]
};

export default deployment;

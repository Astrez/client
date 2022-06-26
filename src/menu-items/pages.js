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
                {
                    id:'create-deployment',
                    title:'Create Deployment',
                    type:'item',
                    url: '/deployment/createdeployment',
                    icon: icons.IoBuildSharp,
                },
                {
                    url: '/deployment/deploymentdetails',
                    id:'deployment-details',
                    title:'Deployment Details',
                    type:'item',
                    icon: icons.IoBuildSharp,
                },
                {
                    url: '/deployment/replacereplicas',
                    id:'replace-replicas',
                    title:'Replace Replica',
                    type:'item',
                    icon: icons.IoBuildSharp,
                },
                {
                    url: '/deployment/pod',
                    id:'replace-replicas',
                    title:'Replace Replica',
                    type:'item',
                    icon: icons.IoBuildSharp,
                },
                {
                    url: '/deployment/Updatedeployment',
                    id:'update-deployment',
                    title:'Update Deployment',
                    type:'item',
                    icon: icons.IoBuildSharp,
                },
                {
                    url: '/deployment/deletedeployment',
                    id:'delete-deployment',
                    title:'Delete Deployment',
                    type:'item',
                    icon: icons.IoBuildSharp,
                },
                {
                    url: '/deployment/autoscaler',
                    id:'autoscaler',
                    title:'Autoscale!',
                    type:'item',
                    icon: icons.IoBuildSharp,
                },

                {
                    url:'/deployment/metrics',
                    id:'metrics',
                    title:'Get Metrics',
                    type:'item',
                    icon: icons.IoBuildSharp,
                },
            ]
        }
    ]
};

export default deployment;

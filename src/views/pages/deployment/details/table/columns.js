const columns = [
    { id: 'arrow', label: '', minWidth: 10 },
    { id: 'revision', label: 'Revision', minWidth: 150 },
    { id: 'containerName', label: 'Container Name', minWidth: 100 },
    {
        id: 'containerImage',
        label: 'Container Image',
        minWidth: 150,
        align: 'right'
    },
    {
        id: 'replicas',
        label: 'Replicas',
        minWidth: 150,
        align: 'right'
    },
    {
        id: 'limits',
        label: 'Limits',
        minWidth: 150,
        align: 'right'
    },
    {
        id: 'requests',
        label: 'Requests',
        minWidth: 150,
        align: 'right'
    }
];
export default columns;

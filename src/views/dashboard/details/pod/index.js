import React, { useEffect } from 'react';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import DetailsTable from './table/DetailsTable';
import { useSelector, useDispatch } from 'react-redux';
import { loadPods } from 'store/actions/podActions';

const PodDetails = () => {
    const data = useSelector((state) => state.pods.podDetails);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPods());
    }, []);
    return (
        <MainCard title="Pod details" style={{ textAlign: 'center' }}>
            <DetailsTable data={data} />
        </MainCard>
    );
};

export default PodDetails;

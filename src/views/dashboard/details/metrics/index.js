import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import DetailsTable from './table/DetailsTable';
export default function index() {
    return (
        <MainCard title="Metrics Details" styles={{ textAlign: 'center' }}>
            <DetailsTable />
        </MainCard>
    );
}

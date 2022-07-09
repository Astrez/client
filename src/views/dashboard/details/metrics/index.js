import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import DetailsTable from './table/DetailsTable';
import axios from 'axios';

const BASE_API_URL = 'http://127.0.0.1:5000';
export default function Metrics() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'GET',
            url: `${BASE_API_URL}/api/deployment/metrics`
        };
        axios(config)
            .then((response) => {
                setData(response.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <MainCard title="Metrics Details" styles={{ textAlign: 'center' }}>
            <DetailsTable data={data} />
        </MainCard>
    );
}

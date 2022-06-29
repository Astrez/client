import React from 'react';
import Kubernetes from 'assets/images/logo.svg';

export default function Logo() {
    return (
        <div>
            <img
                src={Kubernetes}
                alt=""
                style={{
                    width: '10rem'
                }}
            />
        </div>
    );
}

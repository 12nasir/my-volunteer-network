import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
    const {id} = useParams();
    const [service] = useState('Service.json'[Number (id) - 1 ]);
    const {name, img} = service;
    console.log(service);
    return (
        <div>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <h4>This is services:{id}</h4>
        </div>
    );
};

export default Service;
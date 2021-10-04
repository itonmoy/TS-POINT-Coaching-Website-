import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Courses from '../Courses/Courses';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2 className="mt-3 text-primary"> We are Provinding {services.length} Special Services </h2>
           <div className="service-container mt-5">
           {
                services.map(service =><Courses 
                service  ={service}
                >

                </Courses>)
            }
           </div>
        </div>
    );
};

export default Service;


import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
    const {services} = useAuth();

    return (
        <div>

            <div className="overly d-flex justify-content-center align-items-center services-bg">
            <div className="text-center">
                <h2 className="services_head">SERVICES US</h2>
                <p className="services-p">Meet our team of highly skilled professionals</p>
               <NavLink to="/home">
               <button className="btn">Home / Services</button>
               </NavLink>
            </div>
        </div>

       <div className="service-container">
       {
            services.map(service => <SingleService service={service}></SingleService>)
        }
       </div>
       

        </div>
    );
};

export default Services;
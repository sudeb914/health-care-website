import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {

    const {name,discription,img,id} = props.service;


    return (
        <div>
            
 
  <div className="m-2 text-center">
  <div class="card single-card">
    <img className="img-service" src={img} className="w-50" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{discription}</p>
      <br />
      <NavLink to={`/services/${id}`}>
      <button className="btn btn-primary">Details</button>
      </NavLink>
    </div>
    
  </div>
  </div>
  
  
  
</div>
        
    );
};

export default SingleService;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="row my-5 py-4">
                <div className="col-md-6 d-flex justify-content-center align-items-end">
                    <div>
                    <h2 className="text-info fw-bold">Hmmm...</h2>
                    <h4 className="text-info">Looks like something went wrong</h4>
                    <p className="text-muted">Would you like to go back?</p>
                    <NavLink to="/home">
                    <button className="btn btn-primary border-0">Back to Home</button>
                    </NavLink>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="w-75" src="https://i.ibb.co/278f01P/nf.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from "react";
import { NavLink } from "react-router-dom";
import BannerBG from './../../images/slider-1.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-white banner-half-bg padding-resize d-flex justify-content-center align-items-center">
            <div>
            <h5 className="text-center">HELLO, WE ARE MEDIKAL!!</h5>
            <h1 className="text-center main-heading">We Care <br /> About Your <br />
             Health</h1>
            <p className="text-center">
              Claritas est etiam processus dynamicus, qui sequitur mutationem <br />
              consuetudium lectorum. Mirum est notare quam littera gothica, quam <br />
              nunc putamus ui sequitur mutationem consuetudium lectorum. parum <br />
              claram
            </p>
           <div className="text-center">
           <NavLink to="/services">
           <button className="show-off">Service</button>
           </NavLink>
           </div>
            </div>
          </div>
          <div className="col-md-6 padding-resize">
              <img className="img-fluid" src={BannerBG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="overly d-flex justify-content-center align-items-center services-bg">
        <div className="text-center">
          <h2 className="services_head">ABOUT US</h2>
          <p className="services-p">
            Meet our team of highly skilled professionals
          </p>
          <button  className="btn"><NavLink className="text-decoration-none" to="/home">
          Home / About
          </NavLink></button>
        </div>
      </div>

      <div className="container">
        <h1 className="mt-5 text-center about-heading">
          Hi, we are <span className="text-custom">Medikal</span> We care about
          your heath!
        </h1>

        <div className="row mb-5">
          <div className="col-md-6">
            <div className="row">
              <h3 className="fs-4">Nam liber tempor cum soluta nobis eleifend option</h3>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum sequitur mutationem consuetudium lectorum.
              </p>
            </div>
            <div className="row mt-3">
              <h3 className="fs-4">Duis autem vel eum iriure dolor</h3>
              <p>
                Eodem modo typi, qui nunc nobis videntur parum clariqui
                sequitur.
              </p>
            </div>
            <div className="row mt-4">
              <h3 className="fs-4">Duis autem vel eum iriure dolor</h3>
              <p>
                Eodem modo typi, qui nunc nobis videntur parum clariqui
                sequitur. Ienatibus et magnis dis parturient
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h3 className="fs-4">Lobortis nisl ut aliquip</h3>
              <p>
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius qui sequitur mutationem consuetudium lectorum.
                quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip.
              </p>
            </div>
            <div className="row">
              <h3 className="fs-4">Velenit augue duis dolore</h3>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Eodem modo typi qui nunc nobis videntur parum clari,
                fiant sollemnes in futurum.qui sequitur mutationem consuetudium
                lectorum.
              </p>
            </div>
          </div>
        </div>


        <div className="my-5 py-3">
            <h2 className="fw-bold text-center fs-1">OUR SPECIALIST DOCTORS</h2>
            <br />
            <p className="text-center">Claritas est etiam processus dynamicus, qui sequ itur mutationem consuetudium lectorum.</p>

            <br />
            <br />

            <div className="row ">
                <div className="col-md-2 text-center">
                    <img src="https://i.ibb.co/MNmKB9k/doc-img-2.jpg" alt="" />
                </div>
                <div className="col-md-2 text-center">
                    <img src="https://i.ibb.co/CVX5FGS/doc-img-3.jpg" alt="" />
                </div>
                <div className="col-md-2 text-center">
                    <img src="https://i.ibb.co/MNmKB9k/doc-img-2.jpg" alt="" />
                </div>
                <div className="col-md-2 text-center">
                    <img src="https://i.ibb.co/bQrTS8q/doc-img-4.jpg" alt="" />
                </div>
                <div className="col-md-2 text-center">
                    <img src="https://i.ibb.co/MR8mVZ7/doc-img-5.jpg" alt="" />
                </div>
                <div className="col-md-2 text-center">
                    <img src="https://i.ibb.co/CVX5FGS/doc-img-3.jpg" alt="" />
                </div>
            </div>
        </div>

      </div>


    </div>
  );
};

export default About;

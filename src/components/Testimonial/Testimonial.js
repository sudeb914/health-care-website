import React from "react";
import TestimonialImage from './../../images/why-choose-img.jpg'
import { faHeart,faStethoscope,faUserMd ,faAmbulance} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-4 py-4">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
              <h1 className="fw-bold animate__bounce">Why <br /> Choose <br /> Us</h1>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <h5 className=" fw-bold">Medical Counseling</h5>
                <p className="text-muted">
                Medical Counselling Committee (MCC) · First slide. PG Counselling for 50% All India Quota seats of all states except 
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Professional services</h5>
                <p className="text-muted">
                Professional services are occupations in the service sector requiring special training in the arts or sciences. 
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">24 Hours service</h5>
                <p className="text-muted">
                ealth care systems are organizations established to meet the health needs of targeted populations. 
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h5 className="fw-bold">Qualified medical facilities</h5>
                <p className="text-muted">
                An efficient health care system can contribute to a significant part of a country's economy, development, and industrialization. 
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Top level doctors</h5>
                <p className="text-muted">
                An example of this was the worldwide eradication of smallpox in 1980, declared by the WHO as the first disease in human history to be
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Dedicated patient care</h5>
                <p className="text-muted">
                reliable information on which to base decisions and policies, and well-maintained health facilities to deliver quality medicines and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
            <img className="img-fluid" src={TestimonialImage} alt="" />
        </div>

        <section>
            <div className="container-fluid">
                <div className="row mt-3 mb-4">
                    <div className="col-md-3  bg-testimonial">
                    <div className="text-center p-5">
                   <span className="icon"> <FontAwesomeIcon icon={faHeart} /></span>
                        <h2>Heart Rate</h2>
                        <p>Medical Counselling Committee (MCC) · First slide. PG Counselling for 50% All India Quota seats of all states except</p>
                    </div>
                    </div>
                    <div className="col-md-3 bg-testimonial-cng">
                    <div className="text-center  p-5">
                    <span className="icon"><FontAwesomeIcon icon={faStethoscope} /></span>
                        <h2>Medical Counseling</h2>
                        <p>xample of this was the worldwide eradication of smallpox in 1980, declared by the WHO as the first disease in human history to be</p>
                    </div>
                    </div>
                    <div className="col-md-3 bg-testimonial">
                        <div className="text-center  p-5">
                        <span className="icon"><FontAwesomeIcon icon={faUserMd}/></span>
                        <h2>Qualified Doctors</h2>
                        <p> ealth care systems are organizations established to meet the health needs of targeted populations.</p>
                        </div>
                        
                    </div>
                    <div className="col-md-3 bg-testimonial-cng">
                        <div className="text-center  p-5">
                        <span className="icon"><FontAwesomeIcon icon={faAmbulance}/></span>
                        <h2>Emergency Services</h2>
                        <p>rofessional services are occupations in the service sector requiring special training in the arts or sciences.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>



      </div>
    </div>
  );
};

export default Testimonial;

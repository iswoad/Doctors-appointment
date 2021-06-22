import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitenning from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const serviceData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitenning
    }
]

const Services = () => {
    return (
        <section>
            <div className ="text-center">
                <h5 style = {{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className = "row w-75 mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetails service ={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
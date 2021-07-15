import React from 'react';
import chair from '../../../images/chair.png';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style = {{height: '600px'}}className = "row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style = {{color: '#3a4256'}}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde accusantium commodi exercitationem totam placeat molestiae fugit cupiditate dolore, suscipit repudiandae nulla velit ratione tenetur, quia eaque! Beatae, quo earum.</p>
                <Link syle = {{textDecoration:'none'}} to ="/appointment"><button className="btn btn-primary btn-brand" style={{backgroundColor: '#1CC7C1'}}>GET APPOINTMENT</button> </Link> 
            </div>
            <div className="col-md-6">
                <img src={chair} alt="i" className = "img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;
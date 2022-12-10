import React from 'react';
import image from '../../images/Cloth2.jpg'
import { useNavigate } from "react-router-dom";
const About = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} style={{ width: '400px', height: '500px' }} className="max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">PI Inventory Service</h1>
                        <p className="py-6 text-xl">Today’s clothing brands, fashion retailers and apparel companies manage inventory between physical stores and ecommerce platforms. Fashion retailers need to quickly unload items that are selling well. They need to order the items that will be popular next month or even next week.</p>

                        <div className='text-xl font-bold'>
                            <li>Track sales processes</li>
                            <li>Track orders</li>
                            <li>Generate work orders and bills of materials</li>
                            <li>Organize inventory data</li>
                            <li>Spend less money on inventory</li>
                            <li>eep transactions secure</li>
                        </div>
                        <button onClick={() => navigate('/')} className="btn btn-primary m-3">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
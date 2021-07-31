import React from 'react';
import Cards from './Cards';
import ServicesList from './ServicesList';
import './Services/services_style.css'


const ServicesCommon = () => {
    return (
        <>
            <div className='heading'>
                <h2>Our Services</h2>
                <p>what we offer</p>
            </div>

            <div className='cards'>
                {
                    ServicesList.map((val, index) => {
                        return (
                            <Cards
                                key= {index}
                                icon={val.icon}
                                sname={val.sname}
                                sdesc={val.sdesc}
                                lmore={val.lmore}
                            />
                        )
                    })
                }
            </div>

        </>
    );
}

export default ServicesCommon;
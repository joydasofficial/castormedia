import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './portfolio_style.css'
import PortfoiloList from '../PortfolioList';
import PortfolioCard from '../PortfolioCard';

const Portfoilo = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='sliderContainer'>
                <div className='heading'>
                    <h2>Portfoilo</h2>
                    <p>our recent works</p>
                </div>
                <Slider {...settings}>
                    {
                        PortfoiloList.map((val, index) => {
                            return (
                                <PortfolioCard
                                    id={index}
                                    img={val.img}
                                    title={val.title}
                                    desc={val.desc}
                                />);

                        })
                    }
                </Slider>
            </div>
        </>
    );
};

export default Portfoilo;
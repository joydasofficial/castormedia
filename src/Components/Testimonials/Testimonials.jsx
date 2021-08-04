import React from 'react';
import './testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import TestimonialsCard from '../TestimonialsCard';
import TestimonialsFeed from '../TestimonialsFeed';

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='sliderContainer'>
            <div className='heading'>
                <h2>Testimonials</h2>
                <p>what our clients say</p>
            </div>
            <Slider {...settings}>
                {
                    TestimonialsFeed.map((val, index) => {
                        return (
                            <TestimonialsCard
                                id={index}
                                img={val.img}
                                cname={val.cname}
                                cdesc={val.cdesc}
                                feedback={val.feedback}
                            />);

                    })
                }
            </Slider>
        </div>
    )
}

export default Testimonials;

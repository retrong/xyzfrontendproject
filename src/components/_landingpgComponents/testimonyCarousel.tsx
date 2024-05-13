"use client"

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CarouselData from './carouseldata';

export default class TestimonyCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1, // Adjust for responsiveness
            slidesToScroll: 1,
            // autoplay: true,
            autoplayspeed: 9000,
            responsive: [
                {
                    breakpoint: 768, // Breakpoint for smaller screens
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 480, // Breakpoint for even smaller screens
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
    
        return (
            <section className="w-full h-full py-14 px-16 mq750:px-6">
                <div className="item-center text-center text-foundation-black-black-500">
                    <div className="w-full justify-center flex-col flex text-center text-wrap gap-[14px]">
                        <h2 className=" font-normal text-[32px] m-0 inline-block">Check what our clients are saying</h2>
                        <p className="text-foundation-grey-grey-900 text-base inline-block m-0">
                            Testimonals
                        </p>
                    </div>

                    <div className="w-full items-center justify-center mx-auto">
                        <Slider {...settings}>
                            {/* Add your carousel items here */}
                            <CarouselData />
                            {/* Add more carousel items as needed */}
                        </Slider>
                    </div>
                </div>
            </section>
		);

    }
};

'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'; // Import Image from next/image

interface Testimonial {
  img: string;
  text: string;
  name: string;
  profession: string;
}

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials: Testimonial[] = [
    {
      img: "/img/testimonial-1.jpg",
      text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      name: "Client Name",
      profession: "Profession"
    },
    {
      img: "/img/testimonial-2.jpg",
      text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      name: "Client Name",
      profession: "Profession"
    },
    {
      img: "/img/testimonial-3.jpg",
      text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      name: "Client Name",
      profession: "Profession"
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 mb-5">Quotes</h1>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item text-center">
              <div className="testimonial-img position-relative">
                <Image 
                  className="img-fluid rounded-circle mx-auto mb-5" 
                  src={testimonial.img} 
                  alt={`Client ${testimonial.name}`} 
                  width={150} // Adjust width as needed
                  height={150} // Adjust height as needed
                />
                <div className="btn-square bg-primary rounded-circle mx-auto">
                  <i className="fa fa-quote-left text-white"></i>
                </div>
              </div>
              <div className="testimonial-text text-center rounded p-4">
                <p>{testimonial.text}</p>
                <h5 className="mb-1">{testimonial.name}</h5>
                <span className="fst-italic">{testimonial.profession}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
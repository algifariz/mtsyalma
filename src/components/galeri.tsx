'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Gallery = () => {
    const settings = {
      dots: true, // Tampilkan indikator dots di bawah carousel
      infinite: true, // Carousel akan mengulang setelah slide terakhir
      speed: 500, // Kecepatan transisi dalam milidetik
      slidesToShow: 6, // Jumlah slide yang ditampilkan pada satu waktu
      slidesToScroll: 1, // Jumlah slide yang bergeser pada satu waktu
      autoplay: true, // Aktifkan auto play
      autoplaySpeed: 2000, // Kecepatan autoplay dalam milidetik
      responsive: [
        {
          breakpoint: 1024, // Ukuran layar untuk perubahan pertama
          settings: {
            slidesToShow: 6, // Jumlah slide yang ditampilkan pada satu waktu di layar lebih besar dari breakpoint
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600, // Ukuran layar untuk perubahan kedua
          settings: {
            slidesToShow: 2, // Jumlah slide yang ditampilkan pada satu waktu di layar lebih besar dari breakpoint
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480, // Ukuran layar untuk perubahan ketiga
          settings: {
            slidesToShow: 1, // Jumlah slide yang ditampilkan pada satu waktu di layar lebih besar dari breakpoint
            slidesToScroll: 1
          }
        }
      ]
    };
  
    const galleryItems = [
      { src: "/img/project-1.jpg", title: "Auto Engineering" },
      { src: "/img/project-2.jpg", title: "Civil Engineering" },
      { src: "/img/project-3.jpg", title: "Gas Engineering" },
      { src: "/img/project-4.jpg", title: "Power Engineering" },
      { src: "/img/project-5.jpg", title: "Energy Engineering" },
      { src: "/img/project-6.jpg", title: "Water Engineering" }
    ];
  
    return (
      <div className="container-fluid bg-blue pt-5 my-5 px-0">
        <div className="text-center mx-auto mt-5" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-white mb-5">Galeri</h1>
        </div>
        <Slider {...settings}>
          {galleryItems.map((item, index) => (
            <div key={index} className="project-item">
              <Image className="img-fluid" src={item.src} alt={item.title} width={500} height={300} />
              <div className="project-title">
                <h5 className="text-primary mb-0">{item.title}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Gallery;
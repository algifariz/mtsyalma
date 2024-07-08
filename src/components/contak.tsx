'use client'

import React from 'react';

const ContactInfo = () => {
  return (
    <div className="container-custom">
      <h1 className="text-center text-dark mb-4">Kontak MTs AL-MA'ARIJ</h1>
      <div className="contact-info">
        <div className="info-box">
          <i className="fa fa-map-marker-alt"></i>
          <h3>Alamat</h3>
          <p>Jl. Contoh Alamat No. 123, Kota, Provinsi</p>
        </div>
        <div className="info-box">
          <i className="fa fa-phone-alt"></i>
          <h3>Telepon</h3>
          <p>(021) 123-4567</p>
        </div>
        <div className="info-box">
          <i className="fa fa-envelope"></i>
          <h3>Email</h3>
          <p>info@mtsalmaarij.sch.id</p>
        </div>
        <div className="info-box">
          <i className="fa fa-clock"></i>
          <h3>Jam Kerja</h3>
          <p>Senin - Kamis - Sabtu: 07:00 - 12:30</p>
          <p>Jum'at: 07:00 - 11:00</p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31827.88784314689!2d106.86503652921086!3d-6.223158293773374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4b1528a8b37%3A0xd6f6c7f6d7e6b29b!2sJl.%20Contoh%20Alamat%2C%20Kota%2C%20Provinsi!5e0!3m2!1sid!2sid!4v1649057489323!5m2!1sid!2sid"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;

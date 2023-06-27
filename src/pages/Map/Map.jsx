import React from 'react'
import Sidemenu from '../../component/sidemenu/Sidemenu'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './map.css'

const Maping = () => {
  return (
    <div className="map">
      <Sidemenu />
      <div className="map-contianer">
        <div className="container-fluid">
          <div className="maping">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10650.876419929202!2d31.201173882259877!3d30.062114218494212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1681439397863!5m2!1sen!2seg"
        className="map-container "
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maping

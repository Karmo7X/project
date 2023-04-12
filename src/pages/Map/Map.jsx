import React from 'react'
import Sidemenu from '../../component/sidemenu/Sidemenu'
import './map.css'

const Map = () => {
  return (
    <div className="map">
      <Sidemenu />
      <div className="map-contianer">
        <div className="container-fluid">
          <div className="maping">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3605393.987828092!2d30.17497624582853!3d28.058304769064886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1681336053194!5m2!1sar!2seg"
              width="1500"
              height="800"
              style={{border:"40"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map

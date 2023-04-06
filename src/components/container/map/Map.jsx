import React from 'react'
import './map.css'

const Map = () => {
  return (
    <section id="map">
        <div className="container">
            <h1 className="h1-style">Bản đồ</h1>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8195484274365!2d105.87552541478405!3d20.999869394140166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeaa17c35b81%3A0x79d8becf2f06f8dc!2sHanoi%20University%20of%20Business%20and%20Technology!5e0!3m2!1sen!2s!4v1664460416572!5m2!1sen!2s"
                    width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Map

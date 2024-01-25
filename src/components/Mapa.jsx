import React from "react";
import './Mapa.css';

const Mapa = () => {
    return (
        <div className='map' id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5344518263637!2d-58.56380912426139!3d-34.56534097296811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9e6bf36676f%3A0x35331b110b6ef282!2sAv.%20101%209%20de%20Julio%204136%2C%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1699391493815!5m2!1ses-419!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Mapa;
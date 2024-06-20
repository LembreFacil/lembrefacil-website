import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar o CSS
import { Carousel } from 'react-responsive-carousel';
import './style.css'; // Importar seu próprio CSS
import logo from '../../assets/logo 1.png';

const Carrossel = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} className="custom-carousel">
            <div>
                <img src={logo} alt="Image 1" />
                <p className="legend custom-legend">Legenda 1</p>
            </div>
            <div>
                <img src={logo} alt="Image 2" />
                <p className="legend custom-legend">Legenda 2</p>
            </div>
            <div>
                <img src={logo} alt="Image 3" />
                <p className="legend custom-legend">Legenda 3</p>
            </div>
        </Carousel>
    );
};

export default Carrossel;

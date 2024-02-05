import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bestOnSale } from '../../../constants/constants';
import './style.css'

const BestOnSales = () => {
    const slider = React.useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        
            <div className='content' >
            <button className='button_left' onClick={() => slider?.current?.slickPrev()}>left</button>
                <Slider style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%'}} ref={slider} {...settings}>
                
                    {bestOnSale.map(({ id, image, name, price }) => (
                        <div key={id} style={{ boxShadow: '100px' }} >
                            {image}
                            <div style={{ fontSize: '20px', fontWeight: 500, paddingTop: '10px' }}>
                                <p>{name}</p>
                                {price}
                            </div>
                        </div>
                    ))}
                    
                </Slider>
                <button className='button_right' onClick={() => slider?.current?.slickNext()}>right</button>
            </div>
       
    );
}

export default BestOnSales;


import React from 'react';
import slide01 from '../../../img/slider/slide_01.jpg'
import slide02 from '../../../img/slider/slide_02.jpg'
import slide03 from '../../../img/slider/slide_03.jpg'

const Slider_bs = () => {
    return (
        <div id="slider4" className="carousel slide mb-3" data-ride="carousel">
            <ol className="carousel-indicators">
                <li className="active" data-target="#slider4" data-slide-to="0"></li>
                <li data-target="#slider4" data-slide-to="1"></li>
                <li data-target="#slider4" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src={slide01} alt="First Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="header_font_slider">PREVENTAS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illo?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={slide02} alt="Second Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="header_font_slider">PREVENTAS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illo?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src={slide03} alt="Third Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="header_font_slider">PREVENTAS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illo?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider_bs;
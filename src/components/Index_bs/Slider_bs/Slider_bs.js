import React from 'react';

const Slider_bs = () => {
    return (
        <div id="slider4" className="carousel slide mb-5" data-ride="carousel">
            <ol className="carousel-indicators">
                <li className="active" data-target="#slider4" data-slide-to="0"></li>
                <li data-target="#slider4" data-slide-to="1"></li>
                <li data-target="#slider4" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src="/assets/img/slider/slide_01.jpg" alt="First Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="header_font_slider">PREVENTAS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illo?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="/assets/img/slider/slide_02.jpg" alt="Second Slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className="header_font_slider">PREVENTAS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illo?</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="/assets/img/slider/slide_03.jpg" alt="Third Slide" />
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
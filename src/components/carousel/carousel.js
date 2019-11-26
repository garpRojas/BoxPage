import React from 'react'
import Slide1 from '../../img/home-slider-1-slide-1.jpg'
import Slide2 from '../../img/home-slider-1-slide-2.jpg'
import Slide3 from '../../img/home-slider-1-slide-3.jpg'
import './slide.css'

const carousel = (props) => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={Slide2} alt="First slide"></img>
            <div className="slider-caption-container carousel-caption d-none d-md-block">
                <h5 className="slider-header fadeInUp animated">Manage Your Invesments Easily and Effectively</h5>
                <a className="slider-button fadeInUp animated">Get a Quote</a>
              </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Slide1} alt="Second slide"></img>
            <div className="slider-caption-container carousel-caption d-none d-md-block">
                <h5 className="slider-header fadeInUp animated">Manage Your Invesments Easily and Effectively</h5>
                <a className="slider-button fadeInUp animated">Get a Quote</a>
              </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Slide3} alt="Third slide"></img>
            <div className="slider-caption-container carousel-caption d-none d-md-block">
                <h5 className="slider-header fadeInUp animated">Manage Your Invesments Easily and Effectively</h5>
                <a className="slider-button fadeInUp animated">Get a Quote</a>
              </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
        </div>
        </div>
    )
}

export default carousel;
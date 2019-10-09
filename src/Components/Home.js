import React, { Component, Fragment } from 'react';
import Header from './Header/Header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { CarouselContainer } from './carouselCss/carouselStyle';

import foto from '../images/facebook_cover_photo_2.png';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <CarouselContainer>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            <div>
              <img className="center-align" src={foto} alt="projeto uem logo" />
            </div>
          </Carousel>
        </CarouselContainer>
      </Fragment>
    );
  }
}

export default Home;

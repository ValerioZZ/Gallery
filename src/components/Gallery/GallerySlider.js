import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors as gallerySelectors } from 'redux/modules/Gallery';

class GallerySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: props.gallery,
    }
  }
  
  render() {
    const { gallery } = this.props
    
    const sliderSettings = {
      className: "gallery__slick",
      arrows: false,
      dots: true,
      // appendDots: appendDots,
      dotsClass: "gallery__slick__dots",
      infinite: false,
      pauseOnHover: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      lazyLoad: true
    };

    return (
      <div className="gallerySlider">
        <h1>Gallery Images</h1>
        <div className="gallerySlider__slides">
          {gallery.slice(0,300).map((item, idx) => (
            <div className="gallerySlider__slides__tile" key={`gallery-${idx}`}><img src={item.thumbnailUrl} /></div>
          ))}
        </div>
      </div>
    );
  }
}

GallerySlider.propTypes = {
  gallery: PropTypes.array
}

const selectors = createStructuredSelector({
  gallery: gallerySelectors.gallerySelector,
});

const actions = {
};

export default connect(selectors, actions)(GallerySlider);


import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions as galleryActions, selectors as gallerySelectors } from 'redux/modules/Gallery';
import {GallerySlider} from 'components'
class Gallery extends React.Component {
  componentDidMount() {
    const { getGallery } = this.props;

    getGallery();
  }

  render() {
    return (
      <div className="gallery">
        <h1>Gallery Images</h1>
        <GallerySlider />
      </div>
    );
  }
}

Gallery.propTypes = {
  getGallery: PropTypes.func.isRequired,
}

const selectors = createStructuredSelector({
  gallery: gallerySelectors.gallerySelector,
});

const actions = {
  getGallery: galleryActions.getGallery,
};

export default connect(selectors, actions)(Gallery);


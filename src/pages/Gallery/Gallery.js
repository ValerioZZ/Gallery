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
    const { likesGallery } = this.props;

    return (
      <div className="gallery">
        <h1>Gallery Images</h1>
        <GallerySlider />
        <div className="gallery__likes">Favorite Images: <span>{Object.keys(likesGallery).length}</span></div>
      </div>
    );
  }
}

Gallery.propTypes = {
  likesGallery: PropTypes.object.isRequired,
}

const selectors = createStructuredSelector({
  likesGallery: gallerySelectors.likesGallerySelector,
});

const actions = {
  getGallery: galleryActions.getGallery,
};

export default connect(selectors, actions)(Gallery);


import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions as galleryActions, selectors as gallerySelectors } from 'redux/modules/Gallery';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getGallery } = this.props;

    getGallery();
  }

  render() {
    return (
      <div className="gallery">Gallery Images</div>
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


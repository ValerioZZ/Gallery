import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors as gallerySelectors } from 'redux/modules/Gallery';

class Dialog extends React.Component {

  render () {
    const { preview, setPreviewGallery } = this.props
    return (
      <div className="dialog">

      </div>
    )
  }
}

Dialog.propTypes = {
  setPreviewGallery: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired,
}

const selectors = createStructuredSelector({
  preview: gallerySelectors.previewSelector,
});

const actions = {
  setPreviewGallery: galleryActions.setPreviewStatus
};

export default Dialog;


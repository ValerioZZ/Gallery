import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions as galleryActions, selectors as gallerySelectors } from 'redux/modules/Gallery';

class Dialog extends React.Component {

  render () {
    const { preview, selectedGallery, setPreviewGallery } = this.props
    return (
      <div className="dialog">
        <img src={selectedGallery.url} />
        <div className="dialog__close-icon" onClick={() => setPreviewGallery(null)}/>
      </div>
    )
  }
}

Dialog.propTypes = {
  setPreviewGallery: PropTypes.func.isRequired,
  selectedGallery: PropTypes.object,
  preview: PropTypes.bool.isRequired,
}

const selectors = createStructuredSelector({
  preview: gallerySelectors.previewSelector,
  selectedGallery: gallerySelectors.selectedGallerySelector,
});

const actions = {
  setPreviewGallery: galleryActions.setPreviewStatus
};

export default connect(selectors, actions)(Dialog);



import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions as galleryActions, selectors as gallerySelectors } from 'redux/modules/Gallery';
import likeIcon from 'images/like.png';
import dislikeIcon from 'images/dislike.png';

class Dialog extends React.Component {

  render () {
    const { preview, selectedGallery, setPreviewGallery } = this.props
    return (
      <div className={classNames("dialog", {preview})}>
        <img src={selectedGallery.url} />
        <div className="dialog__close-icon" onClick={() => setPreviewGallery(null)}/>
        <div className="dialog__favorite"><img src={dislikeIcon} /></div>
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



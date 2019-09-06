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
    const { preview, selectedGallery, selectedLikeStatus, setPreviewGallery, setLikeGallery } = this.props
    return (
      <div className={classNames("dialog", {preview})}>
        <img src={selectedGallery.url} />
        <div className="dialog__close-icon" onClick={() => setPreviewGallery(null)}/>
        <div className="dialog__favorite" onClick={() => setLikeGallery({id: selectedGallery.id})}>
          {!selectedLikeStatus && (<img src={dislikeIcon}/>)}
          {selectedLikeStatus && (<img src={likeIcon}/>)}
        </div>
      </div>
    )
  }
}

Dialog.propTypes = {
  setPreviewGallery: PropTypes.func.isRequired,
  setLikeGallery: PropTypes.func.isRequired,
  selectedGallery: PropTypes.object,
  preview: PropTypes.bool.isRequired,
  selectedLikeStatus: PropTypes.bool.isRequired,
}

const selectors = createStructuredSelector({
  preview: gallerySelectors.previewSelector,
  selectedGallery: gallerySelectors.selectedGallerySelector,
  selectedLikeStatus: gallerySelectors.selectedLikeStatusSelector,
});

const actions = {
  setPreviewGallery: galleryActions.setPreviewStatus,
  setLikeGallery: galleryActions.likeGallery
};

export default connect(selectors, actions)(Dialog);



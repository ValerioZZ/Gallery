import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors as gallerySelectors } from 'redux/modules/Gallery';
import { Pagination } from "components";

class GallerySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 10,
      page: 1,
    }
  }

  handlePagination = (page) => {
    this.setState({page});
    console.log(page);
  }
  
  render() {
    const { page, rowsPerPage } = this.state;
    const { gallery } = this.props;

    return (
      <div className="gallerySlider">
        <div className="gallerySlider__slides">
          {gallery.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((item, idx) => (
            <div className="gallerySlider__slides__tile" key={`gallery-${idx}`}><img src={item.thumbnailUrl} /></div>
          ))}
        </div>
        <Pagination page={page} rowsPerPage={rowsPerPage} count={gallery.length} onChangePage={this.handlePagination} />
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


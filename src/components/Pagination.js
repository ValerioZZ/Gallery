import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  render() {
    const { count, page, rowsPerPage, onChangePage} = this.props;
    console.log("checkingPagenation", count, page, rowsPerPage)
    return (
      <div className="pagination">
        <div
          className="pagination__arrow-left"
          onClick={() => onChangePage(page > 1 ? page - 1 : 1)}
        />
        <div>{page}/{Math.ceil(count / rowsPerPage)}</div>
        <div
          className="pagination__arrow-right"
          onClick={() => onChangePage(page === Math.ceil(count / rowsPerPage) ? page : page + 1)}
        />
      </div>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
}

export default Pagination;


import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({count, page, rowsPerPage, onChangePage}) => (
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

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
}

export default Pagination;


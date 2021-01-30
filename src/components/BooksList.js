import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from './CategoryFilter';

const mapStateToProps = state => (
  { books: state.books, filter: state.filter }
);

const BooksList = ({
  books, filter, removeBook, changeFilter,
}) => {
  const handleRemove = book => {
    removeBook(book);
  };

  const handleFilterChange = category => {
    changeFilter(category);
  };

  const categoryFilter = () => {
    if (filter !== 'ALL') {
      return books.filter(b => b.category === filter);
    }
    return books;
  };

  return (
    <>
      <CategoryFilter filter={handleFilterChange} />
      {categoryFilter().map(b => <Book key={b.id} book={b} handleRemove={handleRemove} />)}
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { removeBook, changeFilter })(BooksList);

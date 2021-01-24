import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBook } from '../actions/index';

const mapStateToProps = state => (
  { books: state.books }
);

const BooksList = ({ books, removeBook }) => {
  const handleRemove = book => {
    removeBook(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Title</th>
          <th>Book Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {books.map(b => <Book key={b.id} book={b} handleRemove={handleRemove} />)}
      </tbody>
    </table>
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
};

export default connect(mapStateToProps, { removeBook })(BooksList);

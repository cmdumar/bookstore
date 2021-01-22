import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const mapStateToProps = state => (
  { books: state.books }
);

const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Book Title</th>
      <th>Book Category</th>
    </tr>
    {books.map(b => <Book key={b.id} book={b} />)}
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);

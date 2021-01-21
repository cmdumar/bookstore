import React from 'react';
import Book from './Book';

function BooksList() {
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Book Title</th>
        <th>Book Category</th>
      </tr>
      <tr>
        <Book book="hello" />
      </tr>
    </table>
  );
}

export default BooksList;

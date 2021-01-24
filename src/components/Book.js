import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => (
  <>
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={() => handleRemove(book)}>Remove book</button>
      </td>
    </tr>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;

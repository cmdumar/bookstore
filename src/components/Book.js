import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ book, handleRemove }) => (
  <>
    <div className="card">
      <div className="book-data">
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <p>Suzenne</p>

        <div className="btns">
          <button type="button" onClick={() => handleRemove(book)}>Comments</button>
          <button type="button" onClick={() => handleRemove(book)}>Remove</button>
          <button type="button" onClick={() => handleRemove(book)}>Edit</button>
        </div>
      </div>
      <div className="meta-data">
        <div className="progress">
          <div>Progress</div>
        </div>
        <div className="vertical-border" />
        <div className="chapter-data">
          <div>Current</div>
        </div>
      </div>
    </div>
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

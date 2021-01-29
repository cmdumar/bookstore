import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ book, handleRemove }) => (
  <>
    <div className="card">
      <div className="book-data">
        <p className="sans-serif">{book.category}</p>
        <h2>{book.title}</h2>
        <p className="blue-text">Suzenne</p>

        <div className="btns">
          <button type="button" onClick={() => handleRemove(book)}>Comments</button>
          <div className="line-2" />
          <button type="button" onClick={() => handleRemove(book)}>Remove</button>
          <div className="line-2" />
          <button type="button" onClick={() => handleRemove(book)}>Edit</button>
        </div>
      </div>
      <div className="meta-data">
        <div className="progress">
          <div className="oval" />
          <div>
            <h2>64%</h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="vertical-border" />
        <div className="chapter-data">
          <p className="current-text">Current Chapter</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
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

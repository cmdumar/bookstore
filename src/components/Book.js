import propTypes from 'prop-types';

function Book({ book }) {
  return (
    <div>
      Book
      {book}
    </div>
  );
}

Book.propTypes = {
  book: propTypes.string.isRequired,
};

export default Book;

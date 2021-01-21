const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

function createBook(book) {
  return {
    type: CREATE_BOOK,
    book,
  };
}

function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book,
  };
}

export { createBook, removeBook };

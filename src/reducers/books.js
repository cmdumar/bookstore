const initialState = {
  books: [],
};

const books = (state = initialState, action) => {
  let index;
  let books;
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      index = state.indexOf(action.book);
      books = state.slice();
      books.splice(index, 1);
      return books;
    default:
      return state;
  }
};

export default books;

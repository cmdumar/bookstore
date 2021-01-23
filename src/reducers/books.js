const reducer = (state = {}, action) => {
  const index = state.books.indexOf(action.book);
  const books = state.books.slice();
  switch (action.type) {
    case 'CREATE_BOOK':
      return { ...state, books: [...state.books, action.book] };
    case 'REMOVE_BOOK':
      books.splice(index, 1);
      return { ...state, books };
    default:
      return state;
  }
};

export default reducer;

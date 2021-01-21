function reducer(state = {}, action) {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { ...state, book: action.book };
    case 'REMOVE_BOOK':
      return { ...state };
    default:
      return state;
  }
}

export default reducer;

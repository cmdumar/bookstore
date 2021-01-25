const filter = (state = {}, action) => {
  if (action.type === 'CHANGE_FILTER') {
    return {
      ...state, filter: action.category,
    };
  }
  return {
    ...state, filter: 'ALL',
  };
};

export default filter;

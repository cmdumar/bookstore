import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/books';
import App from './components/App';

const randomID = () => {
  const min = Math.ceil(0);
  const max = Math.floor(99999999);
  return Math.floor(Math.random() * (max - min) + min);
};

const state = {
  books: [
    { id: randomID(), title: 'Norweigian Wood', category: 'History' },
    { id: randomID(), title: 'How To Stop Worrying', category: 'Learning' },
    { id: randomID(), title: 'A Short History Of The World', category: 'History' },
    { id: randomID(), title: 'Lord of The Rings', category: 'Sci-Fi' },
  ],
};

const store = createStore(reducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

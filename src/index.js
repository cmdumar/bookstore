import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';
import randomID from './helpers/randomID';
import './index.css';

const state = {
  books: [
    { id: randomID(), title: 'Norweigian Wood', category: 'History' },
    { id: randomID(), title: 'How To Stop Worrying', category: 'Learning' },
    { id: randomID(), title: 'A Short History Of The World', category: 'History' },
    { id: randomID(), title: 'Lord of The Rings', category: 'Sci-Fi' },
  ],
  filter: 'ALL',
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import randomID from '../helpers/randomID';
import './BooksForm.css';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSelect = e => {
    setCategory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title != null && category != null) {
      const book = { id: randomID(), title, category };
      createBook(book);
      setTitle('');
      setCategory('');
    }
  };

  return (
    <>
      <h2 className="add-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input name="title" type="text" onChange={handleChange} value={title} />
        </label>

        <select value={category} onChange={handleSelect}>
          {CATEGORIES.map(i => <option value={i} key={i}>{i}</option>)}
        </select>

        <input name="submit" type="submit" />
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
export { CATEGORIES };

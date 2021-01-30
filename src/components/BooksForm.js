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
    if (title !== '') {
      const book = { id: randomID(), title, category };
      createBook(book);
      setTitle('');
      setCategory('');
    }
  };

  return (
    <>
      <div className="line" />
      <h2 className="add-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="title"
          name="title"
          type="text"
          onChange={handleChange}
          value={title}
          placeholder="Book title"
        />
        <select value={category} onChange={handleSelect}>
          {CATEGORIES.map(i => <option value={i} key={i}>{i}</option>)}
        </select>

        <button name="submit" type="submit">SUBMIT</button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
export { CATEGORIES };

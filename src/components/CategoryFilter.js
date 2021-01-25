import PropTypes from 'prop-types';
import { useState } from 'react';
import { CATEGORIES } from './BooksForm';

function CategoryFilter({ filter }) {
  const [category, setCategory] = useState('ALL');

  const handleChange = e => {
    setCategory(e.target.value);
    filter(e.target.value);
  };

  return (
    <select value={category} onChange={handleChange}>
      {CATEGORIES.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default CategoryFilter;

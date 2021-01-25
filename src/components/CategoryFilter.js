import { CATEGORIES } from './BooksForm';

function CategoryFilter() {
  return (
    <select>
      <option value="ALL">ALL</option>
      {CATEGORIES.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}

export default CategoryFilter;

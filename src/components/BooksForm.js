const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">
        Title
        <input name="title" type="text" />
      </label>

      <select>
        {CATEGORIES.map(i => <option value={i} key={i}>{i}</option>)}
      </select>

      <input name="submit" type="submit" />
    </form>
  );
};

export default BooksForm;

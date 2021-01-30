import Navbar from './Navbar';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  </>
);

export default App;

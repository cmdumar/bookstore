import './Navbar.css';
import profile from '../assets/man-user.svg';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <h2>Bookstore CMS</h2>
        <ul className="nav-links">
          <li>Books</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className="profile-pic">
        <img src={profile} alt="profile" />
      </div>
    </nav>
  );
}

export default Navbar;

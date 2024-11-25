import './Header.scss';
import logo from '@images/museum-logo.svg';
import favoriteIcon from '@images/favoriteIcon.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Link to={'/favorites'} className="favorites">
          <img src={favoriteIcon} alt="favorite" />
          <span>Your favorites</span>
        </Link>
      </div>
    </header>
  );
}

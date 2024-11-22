import './Header.scss';
import logo from '@images/museum-logo.svg';
import favoriteIcon from '@images/favoriteIcon.svg';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <a className="favorites">
          <img src={favoriteIcon} alt="favorite" />
          <span>Your favorites</span>
        </a>
      </div>
    </header>
  );
}

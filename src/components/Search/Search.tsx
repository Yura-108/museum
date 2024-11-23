import './Search.scss';
import searchIcon from '@images/search.svg';

export default function Search() {
  return (
    <div id={'Search'}>
      <input placeholder={'Search Art, Artist, Work...'} type="text" />
      <button>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
}

import React from 'react';
import SearchComponent from '../ui/searchBar';
import './index.scss';

// interface HeaderProps {
//   title: string;
// }

// Header component
const Header = () => {
  return (
    <header className='header-container'>
      <div className='search-wrapper'>
        <SearchComponent placeholder="Search" />
      </div>
      <div className='profile-container'>
        <div className=''>Tim Cook</div>
        <div className='profile-pic'></div>
      </div>
    </header>
  );
};

export default Header;

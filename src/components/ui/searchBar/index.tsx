import React from 'react';
import searchIcon from '../../../assets/searchIcon.svg';
import './index.scss';

// Define the props interface
interface SearchComponentProps {
  placeholder: string;
}

// SearchComponent
const SearchComponent: React.FC<SearchComponentProps> = ({ placeholder }) => {
  return (
    <div className="search-container">
      <div className="search-icon">
        <img src={searchIcon} alt="Search" />
      </div>
      <input type="text" placeholder={placeholder} className="search-input" />
    </div>
  );
};

export default SearchComponent;

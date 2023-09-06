import { useState } from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import s from './style.module.css'



export function SearchBar({ onSubmit, searchItem }) {

  const [serchValue, setSearchValue] = useState('');
  
  function submit(e) {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      onSubmit(e.target.value);
      setSearchValue('');
    }
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={submit}
        className={s.input}
        type="text"
        value={serchValue}
        placeholder={`Search a ${searchItem} you may like`}
      />
    </>
  );
};

export default SearchBar;
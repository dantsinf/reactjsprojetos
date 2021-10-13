import React from 'react';
import useDebounce from './useDebounce';

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayvalue] = React.useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayvalue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <div>
      <input type="search" value={displayValue} onChange={handleChange} />
    </div>
  );
};

export default SearchInput;

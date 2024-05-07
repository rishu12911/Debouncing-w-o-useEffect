import React, { useRef } from "react";

const DebouncedSearchInput = () => {
  const searchInputRef = useRef(null);

  // Function to debounce
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Function to log search input
  const logSearchInput = (input) => {
    console.log("Search input:", input);
    // You can perform other operations here, such as making API calls
  };

  // Debounce the logSearchInput function with a delay of 500 milliseconds
  const debouncedLogSearchInput = debounce(logSearchInput, 500);

  // Event handler for input changes
  const handleInputChange = () => {
    const value = searchInputRef.current.value;
    debouncedLogSearchInput(value);
  };

  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DebouncedSearchInput;

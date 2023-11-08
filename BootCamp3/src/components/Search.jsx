import { useRef } from 'react';

function Search({ filterUpdate }) {
  // Update the input variable to use the useRef() hook
  // const input = null;
  const input = useRef(null);

  function handleChange() {
    // Update the value of the filter with the input from the textbox
    // Hint: You will need to use the "current" property of the input variable
    try {  
      filterUpdate(input.current.value);
    } catch (error) {
      console.log('Failed to update filter', error);
    }
  }

  return (
    // Add a ref attribute to the input tag
    // Add an onChange attribute to the input tag
    <form>
      <input 
        type = "text" 
        placeholder="Type to Filter Buildings"

        ref={input}
        onChange={handleChange}
        
      />
    </form>
  );
}
export default Search;

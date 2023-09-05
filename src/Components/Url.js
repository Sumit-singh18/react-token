import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Get the current URL
    const currentURL = window.location.href;

    // Create a URLSearchParams object to work with query parameters
    const params = new URLSearchParams(currentURL);

    if (params.has('yourQueryParamName')) {
      // Get the value of the query parameter
      const searchValue = params.get(currentURL);

      // Do something with the searchValue
      console.log('Query parameter value:', searchValue);
    } else {
      console.log('Query parameter does not exist in the URL.');
    }
  }, []);

  return (
    <div>
      Hi your Token
    </div>
  );
}

export default MyComponent;

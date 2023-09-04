// In Javascript

// Import the jsonwebtoken library if you installed it
// const jwt = require('jsonwebtoken');

// Replace 'yourTokenHere' with your actual JWT token
// const token = 'yourTokenHere';

// try {
// Decode the JWT token
//   const decodedToken = jwt.decode(token);

// Store the decoded token in local storage
//   localStorage.setItem('decodedToken', JSON.stringify(decodedToken));

//   console.log('Token decoded and stored in local storage:', decodedToken);
// } catch (error) {
//   console.error('Error decoding or storing the token:', error);
// }

// Replace 'yourTokenHere' with your actual JWT token
// const token = 'yourTokenHere';

// try {
//   // Split the token into its three parts (header, payload, signature)
//   const [header, payload, signature] = token.split('.');

//   // Decode the payload part (second part) of the JWT token
//   const decodedPayload = JSON.parse(atob(payload));

//   // Store the decoded payload in local storage
//   localStorage.setItem('decodedToken', JSON.stringify(decodedPayload));

//   console.log('Token decoded and stored in local storage:', decodedPayload);
// } catch (error) {
//   console.error('Error decoding or storing the token:', error);
// }

// In React

// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import decodedTokenReducer from './reducers/decodedTokenSlice';

// const store = configureStore({
//   reducer: {
//     decodedToken: decodedTokenReducer,
//   },
// });

// export default store;

// decodedTokenSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const decodedTokenSlice = createSlice({
//   name: 'decodedToken',
//   initialState: null,
//   reducers: {
//     setDecodedToken: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { setDecodedToken } = decodedTokenSlice.actions;
// export default decodedTokenSlice.reducer;

// actions.js
// actions.js
// import jwtDecode from 'jsonwebtoken';
// import { setDecodedToken } from './decodedTokenSlice';

// export const fetchToken = () => async (dispatch) => {
//   try {
//     // Replace this with your actual token fetching logic
//     const token = 'your-fake-jwt-token';

//     // Decode the JWT token
//     const decodedToken = jwtDecode(token);

//     // Dispatch the decoded token to Redux state
//     dispatch(setDecodedToken(decodedToken));

//     // Store the token in local storage
//     localStorage.setItem('jwtToken', token);
//   } catch (error) {
//     console.error('Error fetching or storing the token:', error);
//   }
// };

// TokenFetchButton.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchToken } from './actions';

// const TokenFetchButton = () => {
//   const dispatch = useDispatch();

//   const handleFetchToken = () => {
//     dispatch(fetchToken());
//   };

//   return (
//     <div>
//       <button onClick={handleFetchToken}>Fetch JWT Token</button>
//     </div>
//   );
// };

// export default TokenFetchButton;

// TokenInfo.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const TokenInfo = () => {
//   const decodedToken = useSelector((state) => state.decodedToken);

//   return (
//     <div>
//       <h2>Decoded Token:</h2>
//       <pre>{JSON.stringify(decodedToken, null, 2)}</pre>
//     </div>
//   );
// };

// export default TokenInfo;

// Integrate the TokenFetchButton and TokenInfo components into your application as needed.

// With these modifications, when you click the "Fetch JWT Token" button using the TokenFetchButton component, 
// the token will be fetched, decoded, and stored in Redux state. You can then access the decoded token in other components,
//  such as TokenInfo, for displaying or using its data.

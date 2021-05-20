// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = 'Click me';
  const labelText = 'Enter name:';

  return (
  <div>
    <label className="label" htmlFor="name">
      {labelText}
    </label>
    <input id="name" type="text" />
    {/* 기존 html 방식과 jsx의 차이점 */}
    {/* <button style="background-color: blue; color: white;">Submit</button> */}
    <button style={{backgroundColor: 'blue', color:'white'}}>
      {buttonText}
    </button>
  </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);
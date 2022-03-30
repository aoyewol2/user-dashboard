import './App.css';
import React from 'react';
import {Link} from "react-router-dom";

let nameInput = window.prompt("Enter your full name: ");

if (nameInput == '') {
  nameInput = 'stranger';
}

function formatName(user) {
  return nameInput;
}

const user = {
  name: nameInput
};

function App() {
  return (
    <div className= 'parent'>
      <div className= 'div1'>

        <div className="App">
          <div className='floaters'>
            <span>Settings</span>
            <span>Log out</span>
          </div>
        
          <h1>Hello, {formatName(user)}!</h1>

          <h2>Your dashboard</h2>

          <p>Welcome to your dashboard! Here you can find a summary of all your uploaded files and job offers.</p>

          <button>Applications (1)</button>
          <button>Offers (2)</button>
          <button>Interviews (0)</button>
          <button className='var-2'>Upload resume</button>  
        </div>

        <br></br>

        <div className="App">
          <h2>Job resources</h2>
          <p>Check back soon!</p>
        </div>

        <br></br>
      
        <div className="App">
          <h2>Month summary</h2>
          <p>Nothing yet!</p>
        </div>

      </div>

      <div className="div2">
      
        <div className='App'>
          <h2>🔔 Notifications</h2>
          <p>No new notifications.</p>

        </div>
      </div>

      <div>
        <span className='footer'>(c) 2022 Dasher</span>
      </div>

    </div>
    
    
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbarmenu from './components/navbar/Navbarmenu';
import Beds from './pages/home/furnishing/Beds';

function App() {
  return (
    <div className="App">
     <Navbarmenu/>
     <Beds/>
     <div>
      <div>
        Cart details
      </div>
     </div>
    </div>
  );
}

export default App;

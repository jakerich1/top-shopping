import React from "react";
import bg from './bg.jpg'
import hat from './hat.png'
import './Home.scss';
import { Link } from "react-router-dom";

function App() {
  return (
    <main style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.73)), url(${bg})` 
    }}>
        <div className='left'></div>
        <div className='right'>
            <div className='box'>
                <p>YOUR ONE STOP SHOP FOR THE FINEST QUALITY SPACE EX MERCH</p>
                <img src={hat} alt='hat'/>
                <Link to='/shop'>Visit our shop</Link>
            </div>
        </div>

    </main>
  );
}

export default App;

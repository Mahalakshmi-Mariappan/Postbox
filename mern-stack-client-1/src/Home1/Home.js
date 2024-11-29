import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleMenu = () => {
    const header = document.querySelector('#header');
    header.classList.toggle('show-menu');
    const left = document.querySelector('.header-left')
    left.classList.toggle('hide');

  };

  

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className="custom-section" id="header">
      <div className="con">
        <div className="header-left">
          <h2><img src="/logo-removebg-preview.png" width="60px" height="50px" alt=".."/>PostBox</h2>
        </div>
        <div className="header-right">
          <Link to="/Home"><h3>Home</h3></Link>
          <Link to="/Login"><h3>Login</h3></Link>         
          <Link to="/FormPage"><h3>SignUp</h3></Link>
        </div>
      </div>
      <div className="container">
        <div className="left-con">
          <p>
          Developed a messaging system integrated with a postbox. This application leverages React and Redux
          for state management, utilizing hooks like useState. 
            {showFullText && (
              <>
               It supports API calls and CRUD operations, with
               data stored in a MongoDB database.
              </>
            )}
          </p>
          <button onClick={toggleText}>{showFullText ? 'Show Less' : 'Read More'}</button>
        </div>
        <div className="right-con">
          <img src="/home-removebg-preview.png" alt="..."  />
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Home;

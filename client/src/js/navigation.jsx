import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-custom-50 bg-secondary nav-wrapper parent-nav navbar-light bg-light' data-toggle='collapse'
         data-target='.nav-collapse'>
      <button className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarText'
              aria-controls='navbarText'
              aria-expanded='false'
              aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to='/' className='nav-link navbar-custom-90'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='about' className='nav-link navbar-custom-90'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='favorites' className='nav-link navbar-custom-90'>Favorites</Link>
          </li>
          <li className='nav-item'>
            <Link to='computer' className='nav-link navbar-custom-90'>Computer</Link>
          </li>
          <li className='nav-item'>
            <Link to='cars' className='nav-link navbar-custom-90'>Cars</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      
      <div className = "container py-4 text-center">
      <p>Enjoy your shopping </p>
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase'>privacy policy</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>term of service</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase'>About SnapUp.</Link>
        </div>
         
      </div>
    </footer>
  )
}

export default Footer
"use client";
import React, { useState } from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const [sidenavWidth, setSidenavWidth] = useState('0');

  const openNav = () => {
    setSidenavWidth('250px');
  };

  const closeNav = () => {
    setSidenavWidth('0');
  };

  return (
    <div>
      <div className="p-3 bg-dark text-white">
        <div className="d-flex align-items-center">
          <div className="flex1"></div>
          <div className="flex2 text-center">
            <div><strong>Hello and welcome</strong></div>
          </div>
          <div className="flex1"></div>
        </div>
      </div>
      <div id="menuHolder">
        <div role="navigation" className={`sticky-top border-bottom border-top ${menuOpen ? 'drawMenu' : ''}`} id="mainNavigation">
          <div className="d-flex align-items-center">
            <div className="flex2">
            <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="/home">Home</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Conctact</a>
      </div>
      <span id='br' style={{ fontSize: '40px', cursor: 'pointer' }} onClick={openNav}>
        &#9776; 
      </span>
            
            
            </div>
            <div className="flex3 text-center" id="siteBrand">
              MY AWESOME SITE
            </div>
            <div className="flex2 text-end d-block d-md-none">
              <button className="whiteLink siteLink"><i className="fas fa-search"></i></button>
            </div>
            <div className="flex2 text-end d-none d-md-block">
             
             
           </div>
         
          </div>
        </div>
        </div>
        <div>
     
    </div>
  
  

  </div>)}


export default App;


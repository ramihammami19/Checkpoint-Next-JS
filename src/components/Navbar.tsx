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

  return (
    <div>
      <div className="p-3 bg-dark text-white">
        <div className="d-flex align-items-center">
          <div className="flex1"></div>
          <div className="flex2 text-center">
            <div><strong>hello and welcome</strong></div>
          </div>
          <div className="flex1"></div>
        </div>
      </div>
      <div id="menuHolder">
        <div role="navigation" className={`sticky-top border-bottom border-top ${menuOpen ? 'drawMenu' : ''}`} id="mainNavigation">
          <div className="d-flex align-items-center">
            <div className="flex2">
            <button
                className="whiteLink siteLink"
                style={{ borderRight: '1px solid #eaeaea' }}
                onClick={menuToggle} 
              >
                <i className="fas fa-bars me-2" ><Link  href="/home" >home</Link></i> 
              </button>
              <button onClick={()=>router.push("/contact")} className="whiteLink siteLink">Contact</button>
              <button  onClick={()=>router.push("/skills")} className="blackLink siteLink">Skills</button>
            
            </div>
            <div className="flex3 text-center" id="siteBrand">
              MY AWESOME SITE
            </div>
            <div className="flex2 text-end d-block d-md-none">
              <button className="whiteLink siteLink"><i className="fas fa-search"></i></button>
            </div>
         
          </div>
        </div>
        </div>
    
       
  </div>)}


export default App;


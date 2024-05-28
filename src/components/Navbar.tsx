"use client"

import React, { useState } from 'react';
import "./Navbar.css";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 const router = useRouter()
  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="p-3 bg-dark text-white">
        <div className="flexMain">
          <div className="flex1"></div>
          <div className="flex5 text-center">
            <div><strong><h1>hello and welcome </h1></strong></div>
          </div>
          <div className="flex1"></div>
        </div>
      </div>

      <div id="menuHolder">
        <div role="navigation" className="sticky-top border-bottom border-top" id="mainNavigation">
          <div className="flexMain">
            <div className="flex2">
              <button
                className="whiteLink siteLink"
                style={{ borderRight: '1px solid #eaeaea' }}
                onClick={menuToggle} 
              >
                <i className="fas fa-bars me-2" ><Link  href="/home" >home</Link></i> 
              </button>
            </div>
            <div className="flex3 text-center" id="siteBrand">
              MY AWESOME SITE
            </div>
            <div className="flex2 text-end d-block d-md-none">
              <button className="whiteLink siteLink"><i className="fas fa-search"></i></button>
            </div>
            <div className="flex2 text-end d-none d-md-block">
             
              <button onClick={()=>router.push("/contact")} className="whiteLink siteLink">Contact</button>
              <button  onClick={()=>router.push("/skills")} className="blackLink siteLink">Skills</button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div id="menuDrawer">
            <div className="p-4 border-bottom">
              <div className='row'>
                <div className="col">
                  <select className="noStyle">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="italian">Italian</option>
                    <option value="hebrew">Hebrew</option>
                  </select>
                </div>
                <div className="col text-end">
                  <i className="fas fa-times" role="button" onClick={menuToggle}></i>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="nav-menu-item"><i className="fas fa-home me-3"></i>Home</a>
              <a href="#" className="nav-menu-item"><i className="fab fa-product-hunt me-3"></i>Products</a>
              <a href="#" className="nav-menu-item"><i className="fas fa-search me-3"></i>Explore</a>
              <a href="#" className="nav-menu-item"><i className="fas fa-wrench me-3"></i>Services</a>
              <a href="#" className="nav-menu-item"><i className="fas fa-dollar-sign me-3"></i>Pricing</a>
              <a href="#" className="nav-menu-item"><i className="fas fa-file-alt me-3"></i>Blog</a>
              <a href="#" className="nav-menu-item"><i className="fas fa-building me-3"></i>About Us</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

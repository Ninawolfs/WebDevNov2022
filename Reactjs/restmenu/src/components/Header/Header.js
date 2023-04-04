import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <div>
      <div class="col-md-12 text-center  marb-35">
        <h1 class="header-h">Menu las carnes del Nahum</h1>
      </div>
      <div class="col-md-12 text-center" id="menu-filters">
        <Navigation />
      </div>
    </div>
  )
};

export default Header;
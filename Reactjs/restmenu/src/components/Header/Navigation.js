import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [menu, setMenu] = useState({
    menu1: false,
    menu2: false,
    menu3: false
  })
  return (
    <div>
      <ul>
        <li><Link to={'/todo'} onClick={() => setMenu({ menu1: true, menu2: false, menu3: false })} className={`filter ${menu.menu1 ? 'active' : ""}`} data-filter=".menu-restaurant">Dinner</Link></li>

        <li><Link to={'/breakfast'} onClick={() => setMenu({ menu1: false, menu2: true, menu3: false })} className={`filter ${menu.menu2 ? 'active' : ""}`} data-filter=".menu-restaurant">Breakfast</Link></li>

        <li><Link to={'/lunch'} onClick={() => setMenu({ menu1: false, menu2: false, menu3: true })} className={`filter ${menu.menu3 ? 'active' : ""}`} data-filter=".menu-restaurant">Lunch</Link></li>
      </ul>
    </div>
  )
};

export default Navigation;

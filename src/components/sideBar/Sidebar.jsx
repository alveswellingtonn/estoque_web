import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

import { FaHouseChimney, FaCartShopping, FaCartPlus} from "react-icons/fa6";



function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <Link to="/" className="link">
          <li className="sidebarListItem active">
          <FaHouseChimney className='sidebarListIcon'/>
            Home
          </li>
        </Link>
        <Link to="/product" className="link">
          <li className="sidebarListItem active">
          <FaCartShopping className='sidebarListIcon'/>
            Produto
          </li>
        </Link>
        <Link to="/new-product" className="link">
          <li className="sidebarListItem active">
          <FaCartPlus className='sidebarListIcon'/>
            Novo Produto
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
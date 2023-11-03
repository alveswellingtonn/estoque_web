import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

import {
  FaHouseChimney, FaCartShopping, FaCartPlus, FaBoxesStacked, FaChartLine, FaCirclePlus,
  FaFolderPlus, FaFolder, FaGrip, FaGripLines, FaListCheck, FaListUl, FaList, FaRectangleList,
  FaSquarePlus, FaTableList, FaRegRectangleList, FaRegSquarePlus
} from "react-icons/fa6";



function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <Link to="/" className="link">
          <li className="sidebarListItem active">
            <FaHouseChimney className='sidebarListIcon' />
            Home
          </li>
        </Link>
        <Link to="/product" className="link">
          <li className="sidebarListItem active">
            <FaBoxesStacked className='sidebarListIcon' />
            Produto
          </li>
        </Link>
        <Link to="/new-product" className="link">
          <li className="sidebarListItem active">
            <FaSquarePlus className='sidebarListIcon' />
            Cadastrar Produto
          </li>
        </Link>
        <Link to="/category" className="link">
          <li className="sidebarListItem active">
            <FaListUl className='sidebarListIcon' />
            Categorias
          </li>
        </Link>
        <Link to="/new-category" className="link">
          <li className="sidebarListItem active">
            <FaSquarePlus className='sidebarListIcon' />
            Cadastrar Categoria
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
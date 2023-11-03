import React from 'react';
import './Topbar.css';

// import logo from '../../img/estoque.png';
import inventory from '../../img/inventory.png';

function Topbar() {
    return (

        <header className='topbar'>

            <div className='logo_wrapper'>
                {/* <img src={logo} alt="logo" className='logo' /> */}
                <img src={inventory} alt="logo" className='logo' />
                <span className='text_logo'>Web System</span>
            </div>
            {/* <div>text</div> */}

        </header>
    )
}

export default Topbar
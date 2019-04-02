import React, { Component } from 'react';
import '../assets/styles/navbar.scss';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return ( 
            <div className='container'>
            <div className='navbar'>
            <Link to='/'><h1 className='navbar__title'> MiPark</h1></Link>
            </div>
           
            <div id="menuToggle">
            
                <input type="checkbox" />
            
                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                <Link to='/'><li>Home</li></Link>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Favourites</li></a>
                <a href="#"><li>Sign Out</li></a>
                </ul>
            </div>
         
         </div>
         );
    }
}
 
export default Navbar;
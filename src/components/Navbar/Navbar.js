import React, {useState} from 'react'
import './Navbar.css';
import {Button} from '../Button';


const Navbar = () => {
    const [icon, setIcon] = useState({clicked:false});

    const iconHandler = () => {
        setIcon({clicked: !icon.clicked});
    }
    return (
        <div>
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i class="fab fa-internet-explorer"></i>-corfy</h1>
                <div className="menu-icon" onClick={()=> iconHandler()}>
                    <i class={icon.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={icon.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="#" className="nav-links">Home</a></li>
                    <li><a href="#" className="nav-links">Services</a></li>
                    <li><a href="#" className="nav-links">Products</a></li>
                    <li><a href="#" className="nav-links">Contact us</a></li>
                    <li><a href="#" className="nav-links-mobile">Sign UP</a></li>


                </ul>
            <Button>Sign Up</Button>
            </nav>
        </div>
    )
}

export default Navbar

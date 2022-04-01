import React, { Component } from 'react';
import { NavItems } from '../NavItems/NavItems';
import '../Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state ={ clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
            
                <h1 className="navbar-logo"> <Link to="/">BB</Link> <i className="fas fa-dragon"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                            <Link to={item.url} className={item.cName}> {item.title} </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;
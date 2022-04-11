import React, { Component } from 'react';
import { NavItemsAdmin } from '../NavItems/NavItemsAdmin';
import '../Navbar.css';
import { Link } from 'react-router-dom';


class AdminNavBar extends Component {

    
    state = { clicked: false }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> Welcome, Admin</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItemsAdmin.map((item, index) => {
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

export default AdminNavBar;
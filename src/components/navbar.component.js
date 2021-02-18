import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import './navbar.component.css';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">IME Library</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/createbook" className="adminLink">Create Book</Link>
                </li>
                <li classname="navbar-item">
                <Link to="/records-list" className="adminLink">Records</Link>
                </li>
                <li classname="navbar-item">
                <Link to="/manage-book" className="adminLink">Manage Book</Link>
                </li>
                </ul>
                </div>
            </nav>
        )
    }
}
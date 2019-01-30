import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo ">Dashboard</a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger show-on-large"><i className="fa fa-bars"></i></a>
                        <ul id="nav-mobile" className="right hide-on-small-only">
                            <li><Link to="/"><i className="fa fa-users"></i>Home</Link></li>
                        </ul>
                        <ul className="sidenav" id="mobile-demo">
                            <li><Link to="/"><i className="fa fa-users"></i>Home</Link></li>
                            <li><Link to="/product/add"><i className="fa fa-users"></i>Add Product</Link></li>
                            <li><Link to="/carousel/add"><i className="fa fa-users"></i>Add Carousel</Link></li>
                            <li><Link to="/about"><i className="fa fa-users"></i>About</Link></li>

                        </ul>
                    </div>
                </nav>



            </div>
        )
    }
}
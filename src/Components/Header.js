import React from 'react';
import {
    Container
} from 'reactstrap';
import {Link} from "react-router-dom";



function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <Container>
                    <div className="navbar-brand" ><Link to="/" ><img src="https://img.icons8.com/nolan/50/blogger.png"/></Link></div>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link"> <Link to="/blogs">Blogs</Link> </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><Link to="/addblog">Add Blog</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link"><Link to="/contact">Contact</Link></div>
                        </li>
                        
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <div className="nav-link"><Link to="/login">Login</Link></div>
                            </li>
                            
                        </ul>
                    </div>
                </Container>
            </nav>
            
        </header>

    )
}

export default Header


import "./css/Navbar.css"
import { Link } from 'react-router-dom';

function NavBar() {
    return( 
    <nav className="navbar">
        <div className="navbar-brand">
            <p1 >Test</p1>
        </div>
        <div className="navbar-links">
            <Link to={"/"}><p1  className="nav-link">Home</p1></Link>
            <Link to = {"/"}><p1  className="nav-link">Profile</p1></Link>
            
        </div>
    </nav>
    )
}

export default NavBar
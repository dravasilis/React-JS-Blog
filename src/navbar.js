import './navbar.css'
import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Bill Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add a Blog</Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;
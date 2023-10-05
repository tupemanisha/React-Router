import "./Navbar.css"
import { Link } from "react-router-dom";
 export default function Navbar(){
    return(
        <div className="navbar">
            <h2 className="nav-brand" >ReactJs</h2>
            <Link className="nav-menu"to="/">Home</Link>
            <Link className="nav-menu"to="/About">About</Link>
            <Link className="nav-menu"to="/Contact">Contact</Link>

        </div>
    )
}
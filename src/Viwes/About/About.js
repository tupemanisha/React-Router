import "./About.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

export default function About () {
    return(
        <div className="footer-container">
            <Navbar/>
            <h1>About</h1>
            <p>
                This the the about page. You can write any information here...
            </p>
            <Footer/>
        </div>
    )
}



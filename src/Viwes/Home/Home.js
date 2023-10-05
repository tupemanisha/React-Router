import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

export default function Home() {
    return (
        <div className="home-container">
            <Navbar/>
            <h1>Home</h1>
            <p>This is the home page. it is a react component of the view.</p>
            <Footer/>
        </div>
    )
}
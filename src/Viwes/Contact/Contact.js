import "./Contact.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

export default function Contact() {
    return (
        <div className="contact-container">
            <Navbar/>
            <h1>Contact</h1>
            <p>This is the contact page.You can put your contact number here...</p>
            <Footer/>
        </div>
    )
}
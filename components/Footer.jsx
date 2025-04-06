import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Footer = () => {

    const navigate = useNavigate();
    
    const navigateToBlogs = () => {
        const blogsSection = document.getElementById("blogs");
        if (blogsSection) {
            blogsSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                const blogsSectionAfterLoad = document.getElementById("blogs");
                if (blogsSectionAfterLoad) {
                    blogsSectionAfterLoad.scrollIntoView({ behavior: "smooth" });
                }
            }, 1000); 
        }
    };

    const navigateToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                const contactSectionAfterLoad = document.getElementById("contact");
                if (contactSectionAfterLoad) {
                    contactSectionAfterLoad.scrollIntoView({ behavior: "smooth" });
                }
            }, 1000); 
        }
    };

    const navigateToHome = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
        }
    };

    return (
        <footer class="footer" id="contact">
        <div class="box-container">
            <div class="mainBox">
                <div class="content">
                    <a href="#"><img src={logo} alt=""/></a>
                    <h1 class="logoName"> A Fresh Tart </h1>
                </div>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus maxime quod.</p>

            </div>
            <div class="box">
                <h3>Quick links</h3>
                <Link to="/" onClick={navigateToHome}><i class="fas fa-arrow-right"></i>Home</Link>
                <Link to="/menu" ><i class="fas fa-arrow-right"></i>Menu</Link>

            </div>
            <div class="box">
                <h3>Extra links</h3>
                <Link to="/" onClick={navigateToBlogs} ><i class="fas fa-arrow-right"></i>Blogs</Link>
                <Link to="/" onClick={navigateToContact}><i class="fas fa-arrow-right"></i>Contact</Link>

            </div>
            <div class="box">
                <h3>Contact Info</h3>
                <a href="#"> <i class="fas fa-phone"></i>+92 3214105551</a>
                <a href="#"> <i class="fas fa-envelope"></i>romesaqadeer@gmail.com</a>
                <a href="#"> <i class="fas fa-phone"></i>+92 3208433967</a>
                <a href="#"> <i class="fas fa-envelope"></i>jawad.shahid70@outlook.com</a>

            </div>

        </div>
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
            <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="credit">
             © 2022 Romesa & Jawad. All Rights Reserved.
        </div>
    </footer>
    )
}

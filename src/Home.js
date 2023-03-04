import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <header>
                <div class="container">
                    <h1>CareLink Health</h1>
                    <div class="banner-overlay">
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <section class="hero">
                <div class="container">
                    <h2>Welcome to CareLink Health</h2>
                    <p>Your life is in safe hands.</p>
                </div>
            </section>
            <section class="benefits">
                <div class="container">
                    <h2 >Benefits of Our Services</h2>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Easy to use</li>
                        <li><i class="fas fa-check-circle"></i> Affordable</li>
                        <li><i class="fas fa-check-circle"></i> High quality</li>
                        <li><i class="fas fa-check-circle"></i> Reliable</li>
                    </ul>
                </div>
            </section>
            <section class="cta">
                <div class="container">
                    <h2>Ready to Get Started?</h2>
                    <p>Sign up today and get access to our amazing services!</p>
                    <button><Link to={{pathname: '/Login'}}>Get started</Link></button>
                </div>
            </section>
            <footer>
                <div class="container">
                    <p>&copy; 2023 CareLink Health. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home;
 // eslint-disable
import './assets/css/style.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            {/* <header>
                <div className="container">
                    <h1>CareLink Health</h1>
                    <div className="banner-overlay">
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

            <section className="hero">
                <div className="container">
                    <h2>Welcome to CareLink Health</h2>
                    <p>Your life is in safe hands.</p>
                </div>
            </section>
            <section className="benefits">
                <div className="container">
                    <h2 >Benefits of Our Services</h2>
                    <ul>
                        <li><i className="fas fa-check-circle"></i> Easy to use</li>
                        <li><i className="fas fa-check-circle"></i> Affordable</li>
                        <li><i className="fas fa-check-circle"></i> High quality</li>
                        <li><i className="fas fa-check-circle"></i> Reliable</li>
                    </ul>
                </div>
            </section>
            <section className="cta">
                <div className="container">
                    <h2>Ready to Get Started?</h2>
                    <p>Sign up today and get access to our amazing services!</p>
                    <button><Link to={{pathname: '/Login'}}>Get started</Link></button>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>&copy; 2023 CareLink Health. All rights reserved.</p>
                </div>
            </footer> */}

            {/* <head> */}
                <meta charSet="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                <title>Carelink Health</title>
                <meta content="" name="description"/>
                <meta content="" name="keywords"/>

                {/* <!-- Favicons --/> */}
                <link href="assets/img/favicon.png" rel="icon"/>
                <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

                {/* <!-- Google Fonts --> */}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

                {/* <!-- Vendor CSS Files --> */}
                <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
                <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
                <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
                <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
                <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

                {/* <!-- Template Main CSS File --> */}
                <link href="assets/css/style.css" rel="stylesheet"/>
            {/* </head> */}

            {/* <body> */}
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center justify-content-lg-between">

                    <h1 className="logo me-auto me-lg-0"><Link to={{pathname: '/'}}>CareLink <span>Health</span></Link></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#specialities">Our Specialities</a></li>
                        <li className="dropdown"><a href="#services"><span>Services</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                            <li><a href="#service1">Primary Care</a></li>
                            <li><a href="#service2">Urgent Care</a></li>
                            <li><a href="#service3">Virtual Care</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="appointment-page.html" className="get-started-btn scrollto">Get Appointment</a>

                    </div>
                </header>

                <section id="hero" className="d-flex align-items-center justify-content-center">
                    <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                        <h1>YOU COME FIRST</h1>
                        <h2>We're challenging conventions to drive innovation in science and medicine.</h2>
                        </div>
                    </div>

                    <div className="row gy-4 mt-5 justify-content-center">
                        <div className="col-xl-2 col-md-4">
                        <div className="icon-box">
                            <i className="ri-store-line"></i>
                            <h3><Link to={{pathname: '/Home'}}>More experience</Link></h3>

                        </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                        <div className="icon-box">
                            <i className="ri-bar-chart-box-line"></i>
                            <h3><Link to={{pathname: '/Home'}}>The right answers</Link></h3>

                        </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                        <div className="icon-box">
                            <i className="ri-calendar-todo-line"></i>
                            <h3><Link to={{pathname: '/Home'}}>You come first</Link></h3>

                        </div>
                        </div>
                    </div>

                    </div>
                </section>

                <main id="main">

                    {/* <!-- ======= About Section ======= --> */}
                    <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                        <h2>About</h2>
                        </div>

                        <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src="assets/img/northeastern-shillman-hall-study-place-scaled.jpeg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>What is Carelink Health?</h3>
                            <p className="fst-italic">
                            Brightest minds, together, for you.
                            </p>
                            <h4>Our Mission</h4>
                            <p className="fst-italic">
                            CareLink Health is committed to serving the community. We are dedicated to enhancing patient care, teaching and research, and taking a leadership role as an integrated health care system. 
                            We recognize that increasing value and continuously improving quality are essential to maintaining excellence.
                            </p>
                            <h3>Our Vision</h3>
                            <ul>
                            <li><i className="ri-check-double-line"></i> To dedicate ourselves to the delivery of superior care that is patient- and family-centered, accessible, and equitable. To provide a coordinated, cost-efficient, and transparent care model that will benefit patients across the continuum, from prevention to long-term. </li>
                            <li><i className="ri-check-double-line"></i> To touch the communities we serve, local or global, with sustainable improvements in the care we provide and with a keen focus on underserved populations.</li>
                            <li><i className="ri-check-double-line"></i> To lead in research that fosters collaboration, bringing discovery to the patient’s bedside, and sharing those successes with the world so future generations may benefit. </li>
                            <li><i className="ri-check-double-line"></i> To invest in education and training to nurture the next generation of leaders who can carry forward the lessons learned.</li>
                            </ul>
                        </div>
                        </div>

                    </div>
                    </section>
                    {/* <!-- End About Section --> */}

                    {/* <!-- ======= Specialities Section ======= --> */}
                    <section id="specialities" className="features">
                    <div className="container">

                        <div className="section-title">
                        <h2>Our Specialities</h2>
                        <p>See all our specialities</p>
                        </div>

                        <div className="row">
                        {/* <div className="image col-lg-6" style='background-image: url("assets/img/speciality/team.jpg");'></div> */}
                        <div className="image col-lg-6" style={{backgroundImage: `url("assets/img/speciality/team.jpg")`}}></div>
                        <div className="col-lg-6">
                            <div className="icon-box mt-5 mt-lg-0">
                            <i className="bx bxs-heart"></i>
                            <h4>Heart Hospital</h4>
                            <p>
                                The Heart Institute at Carelink Health is an integrated healthcare centre with experienced and skilled team of 
                                heart surgeons, cardiologists, and radiologists who work together to provide comprehensive and multidisciplinary 
                                care to patients suffering from various heart ailments. Our team of researchers, doctors, and dedicated nurses are 
                                equipped with latest technologies, such as unique hybrid operating suite, robotic heart surgery, and minimally invasive 
                                techniques that offers excellent precision and accuracy.</p>
                            </div>
                            <div className="icon-box mt-5">
                            <i className="bx bx-brain"></i>
                            <h4>Institute of Neurosciences</h4>
                            <p>
                                Institute of Neurosciences is an integrated institute with a dedicated team of doctors supported by the latest 
                                technology which aims to provide comprehensive and multidisciplinary care for disorders of the brain and spine. 
                                The institute has a team of highly qualified neurologists, neurosurgeons, neurointerventionists, neuro-anaesthetists, 
                                and dedicated neuro critical care specialists, neuropsychologist and neuropsychiatrists. The institute operates 
                                specialised clinics for brain tumours, spinal disorders, stroke, epilepsy, movement disorders and headaches.
                            </p>
                            </div>
                            <div className="icon-box mt-5">
                            <i className="bx bx-plus-medical"></i>
                            <h4>Cancer Institute</h4>
                            <p>The Cancer Institute comprises the Division of Medical and Haemato Oncology, Division of Radiation Oncology and 
                                multiple organ-specific surgical cancer divisions including Breast Services and Head and Neck Oncology. Our experienced 
                                and trained oncologists work-in-coordination with the surgeons across departments and specialties to provide best 
                                possible care to patients. We have advanced technologies such as CyberKnife VSI Robotic Radiosurgery, VMAT, IGRT, 
                                Tomotheraphy and other innovative diagnostic and imaging equipment. Our doctors make sure our patients the best 
                                possible treatment available.</p>
                            </div>
                            <div className="icon-box mt-5">
                            <i className="bx bxs-capsule"></i>
                            <h4>Internal Medicine</h4>
                            <p>our doctors are experienced and skilled at treating every patient who comes to our hospital. Our mission is to 
                                provide patient-centric quality care to treat a sick person. We focus on patient care in both our outpatient and 
                                inpatient departments.</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    </section>
                    {/* <!-- End Features Section --> */}


                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                        <h2>Our Services</h2>
                        <p>Services & Hospitals</p>
                        </div>

                        <div id="service1" className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bx-plus-medical"></i></div>
                            {/* <h4><a href="">Primary Care</a></h4> */}
                            <h4><Link to={{pathname: '/Home'}}>Primary Care</Link></h4>
                            <p>We offer preventive care, treatment for sick patients, and care for patients with chronic health conditions. </p>
                            </div>
                        </div>

                        <div id="service2" className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bxs-ambulance"></i></div>
                            <h4><Link to={{pathname: '/Home'}}>Urgent Care</Link></h4>

                            <p>Our medical staff treat a wide range of non-life threatening illnesses and injuries for adults and children three years of age or older on a walk-in basis.  </p>
                            </div>
                        </div>

                        <div id="service3" className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                            <div className="icon"><i className="bx bx-home-heart"></i></div>
                            <h4><Link to={{pathname: '/Home'}}>Virtual Care</Link></h4>
                            <p>We offer you the convenience of an office visit from the comfort of your own home.</p>
                            </div>
                        </div>

                        </div>

                    </div>
                    </section>
                    {/* <!-- End Services Section --> */}

                    {/* <!-- ======= Contact Section ======= --> */}
                    <section id="contact" className="contact">
                        <div className="container">
                            <div className="section-title">
                                <h2>Contact Us</h2>
                            </div>
                            <footer id="footer">
                                <div className="footer-top">
                                    <div className="container">
                                        <div className="row">
                                
                                            <div className="col-lg-3 col-md-6">
                                                <div className="footer-info">
                                                    <h3>CareLink Health<span>.</span></h3>
                                                    <p>
                                                        32 Fruit Street <br></br>
                                                        Boston, MA 02114<br></br> <br></br>
                                                        <strong>For queries contact: </strong> <br></br>call +1 5589 55488 55<br></br>
                                                        <strong>For emergency: </strong><br></br>call <strong>911 </strong>
                                                        immediately
                                                    </p>
                                                    {/* <div className="social-links mt-3">
                                                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                                    </div> */}
                                                </div>
                                            </div>
                                
                                            <div className="col-lg-2 col-md-6 footer-links">
                                                <h3>Feedback</h3>
                                                <p>
                                                    Have any complaints or suggestions?
                                                    Just tell us. We are here to help you with everything.<br></br>
                                                    <strong>exclusivehealth@carelink.health</strong>
                                                </p>
                                            </div>
                                
                                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                                <h3>Our Newsletter</h3>
                                                <p>Subscribe up here for our Newsletter</p>
                                                <form action="" method="post">
                                                    <input type="email" name="email"/>
                                                    <input type="submit" value="Subscribe"/>
                                                </form>                            
                                            </div>
                                
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="container">
                                    <div className="copyright">m
                                    &copy; Copyright <strong><span>CareLink Health</span></strong>. All Rights Reserved
                                    </div>
                                    <div className="credits">
                                    {/* <!-- All the links in the footer should remain intact. -->
                                    <!-- You can delete the links only if you purchased the pro version. -->
                                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/ --> */}
                                    Designed by CareLink.
                                    </div>
                                </div>
                            </footer>
                            {/* <!-- End Footer --> */}
                        
                        </div>
                    </section>
                    {/* <!-- End Contact Section --> */}

                    {/* <!-- ======= Cta Section ======= --> */}
                    <section id="cta" className="cta">
                    <div className="container">
                        <div className="text-center">
                        <p> Sign up today and get access to our amazing services</p>
                        <Link className="cta-btn" to= {{pathname: '/Login'}}>Get Started</Link>
                        </div>

                    </div>
                    </section>
                    {/* <!-- End Cta Section --> */}

                </main>
                {/* <!-- End #main --> */}


                {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
                <a href="/" className="back-to-top d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-short"></i>
                    </a>
                {/* <!-- Vendor JS Files --> */}
                <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
                <script src="assets/vendor/aos/aos.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/php-email-form/validate.js"></script>

                {/* <!-- Template Main JS File --> */}
                <script src="assets/js/main.js"></script>
            {/* </body> */}
        </div>
    )
}

export default Home;
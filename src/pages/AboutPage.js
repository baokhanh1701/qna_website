import AOS from 'aos';
import "../App.css";
import 'aos/dist/aos.css';
import { useContext } from "react";
import { userContext } from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
    const { isDark } = useContext(userContext);
    // const DevList = [
    //     {
    //         name: "Nguyen Kieu Bao Khanh",
    //         img: "/img/Einkaufswagen_(24140951728).jpg",
    //         describe: "Nguyen Kieu Bao Khanh",
    //     },
    //     {
    //         name: "Pham Tri Nhan",
    //         img: "/img/Nguyễn Kiều Bảo Khánh.jpg",
    //         describe: "Pham Tri Nhan",
    //     }
    // ]
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <div style={!isDark ? {
            backgroundImage: `url(${"https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg"})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment:"fixed"
        } : {
            backgroundImage: `url(${"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment:"fixed"
        }}>
            <div>
                <div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                        crossorigin="anonymous"></script>
                    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                    <script src="/index.js"></script>
                    <script>
                        AOS.init();
                    </script>
                    {/* <div class="position-fixed fixed-top header" id="myTopnav">
                        <a href="#top" class="logo">Live Q&A</a>
                        <div class="header-right">
                            <a href="#introduction" style={{color: "rgb(66, 133, 244)"}}>Introduction</a>
                            <a href="#overview" style={{color: "rgb(66, 133, 244)"}}>Overview</a>
                            <a href="#about" style={{color: "rgb(66, 133, 244)"}}>Features</a>
                            <a href="#contact" style={{color: "rgb(66, 133, 244)"}}>Contact</a>
                        </div>
                    </div> */}
                    <div class="container-fluid introduction p-5 bg-white bg-opacity-75 justify-content-center"
                        data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500"
                        id="introduction">
                        <div class="blob_circle move_right_animation"></div>
                        <h1 class="text-center text-lg-center p-4">Livify Q&A</h1>
                        <p class="text-center p-5">This tool is designed for you to give any question to your
                            speakers.</p>
                        <div class="container d-flex justify-content-center p-2">
                            <a href="#overview" type="button" class="btn btn-outline-primary m-2 p-4">Get Started</a>
                            <a href="#contact" type="button" class="btn btn-outline-dark m-2 p-4">Contact</a>
                        </div>
                        <div class="container d-flex">
                            <div class="square1"></div>
                        </div>
                    </div>
                    <div class="container-fluid overview justify-content-center align-items-center bg-black bg-opacity-50 p-5"
                        id="overview" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
                        data-aos-duration="1500">
                        <div class="container justify-content-center">
                            <div class="square opacity-25"></div>
                            <div class="container-fluid justify-content-center p-5">
                                <h1 class="text-center text-white">Overview</h1>
                                <p class="text-center d-flex p-5 text-white">While listening to webinars,
                                    there must be
                                    some questions that you cannot answer by yourself. We offer you the solution. Live Q&A gives you
                                    unlimited opportunities of
                                    making questions, satisfying your creativity and curiosity.</p>
                            </div>
                        </div>
                        <div class="container d-flex justify-content-center p-3">
                            <a type="button" href="/" class="btn btn-success p-4">Enter Current
                                Event
                                Session</a>
                        </div>
                    </div>
                    <div class="container-fluid about justify-content-center align-items-center bg-white bg-opacity-25 p-5"
                        id="about" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
                        data-aos-duration="1500">
                        <div class="container justify-content-center">
                            <div class="blob_circle float_animation"></div>
                            <div class="container-fluid justify-content-center p-3">
                                <h1 class="text-center p-3 text-black">Features and Development</h1>
                                <p class="text-center d-flex p-3 text-black">With Landing page, Login page
                                    and Q&A session,
                                    we offer you a great tool of questioning. Here at Live Q&A, users are able to post their
                                    question anonymously.</p>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Landing page</h5>
                                        <p class="card-text"> The first page you meet which introduce what is Live Q&A, as well as
                                            how to use it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Login page</h5>
                                        <p class="card-text">At this stage, you can identify yourself, or get in the Q&A session
                                            anonymously.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Q&A session</h5>
                                        <p class="card-text">The main part of this tool, where you can have as many questions as you
                                            like without any hesitation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid flex p-3 bg-black bg-opacity-75" id="contact" data-aos="fade-left"
                        data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                        <div class="container p-5">
                            <h1 class="text-center text-white p-3">Contact</h1>
                            <p class="text-center text-white p-2">If you have any question, feel free to
                                contact any of us via channels given below.</p>
                        </div>

                        <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body" style={{ position: "relative" }}>
                                        <h5 class="card-title">Tran Hoang Sa</h5>
                                        <p class="card-text mb-5"> Working at a startup company about artificial intelligence on
                                            pave.</p>
                                        <section class="mb-4" style={{ position: "absolute", bottom: "-10.4%", left: "62%" }}>
                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="#!" role="button"><i class="fab fa-github"></i></a>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body" style={{ position: "relative" }}>
                                        <h5 class="card-title">Pham Tri Nhan</h5>
                                        <p class="card-text">
                                            Student at Ho Chi Minh city University of Technology
                                        </p>
                                        <p class="card-text mb-5">
                                            Event Operation Organizer at Google Developer Student Clubs - HCMUT
                                        </p>
                                        <section class="mb-4" style={{ position: "absolute", bottom: "-10.4%", left: "62%" }}>
                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="https://www.facebook.com/nhan.phamtri2801/" role="button"><i
                                                    class="fab fa-facebook-f"></i></a>

                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="https://www.linkedin.com/in/nhan-phamtri/" role="button"><i
                                                    class="fab fa-linkedin-in"></i></a>

                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="https://github.com/TriNhan-Pham" role="button"><i
                                                    class="fab fa-github"></i></a>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-body" style={{ position: "relative" }}>
                                        <h5 class="card-title">Nguyen Kieu Bao Khanh</h5>
                                        <p class="card-text">
                                            Student at Ho Chi Minh city University of Technology
                                        </p>
                                        <p class="card-text mb-5">
                                            Event Operation Organizer at Google Developer Student Clubs - HCMUT
                                        </p>
                                        <section class="mb-4" style={{ position: "absolute", bottom: "-10.4%", left: "62%" }}>
                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

                                            <a class="btn btn-outline-light btn-floating m-1" style={{ color: "black", border: "black" }}
                                                href="#!" role="button"><i class="fab fa-github"></i></a>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;
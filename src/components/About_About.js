import 'bootstrap/dist/css/bootstrap.min.css';

const AboutAbout = () => {
    return (
        <div>
            <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossorigin="anonymous"></script>
            <div className="container-fluid about justify-content-center align-items-center bg-white bg-opacity-25 p-5"
                id="about" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
                data-aos-duration="1500">
                <div className="container justify-content-center">
                    <div className="blob_circle float_animation"></div>
                    <div className="container-fluid justify-content-center p-3">
                        <h1 className="text-center p-3 text-black">Features and Development</h1>
                        <p className="text-center d-flex p-3 text-black">With Landing page, Login page
                            and Q&A session,
                            we offer you a great tool of questioning. Here at Live Q&A, users are able to post their
                            question anonymously.</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/landing.jpg" className="card-img-top" alt="typical wireframe" />
                            <div className="card-body">
                                <h5 className="card-title">Landing page</h5>
                                <p className="card-text"> The first page you meet which introduce what is Live Q&A, as well as
                                    how to use it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/login.jpg" className="card-img-top" alt="landing" />
                            <div className="card-body">
                                <h5 className="card-title">Login page</h5>
                                <p className="card-text">At this stage, you can identify yourself, or get in the Q&A session
                                    anonymously.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/login.jpg" className="card-img-top" alt="session" />
                            <div className="card-body">
                                <h5 className="card-title">Q&A session</h5>
                                <p className="card-text">The main part of this tool, where you can have as many questions as you
                                    like without any hesitation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default AboutAbout;
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutAbout = () => {
    return (
        <div>
            <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossorigin="anonymous"></script>
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
                            <img src="/img/landing.jpg" class="card-img-top" alt="typical wireframe" />
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
                            <img src="/img/login.jpg" class="card-img-top" alt="landing" />
                            <div class="card-body">
                                <h5 class="card-title">Login page</h5>
                                <p class="card-text">At this stage, you can identify yourself, or get in the Q&A session
                                    anonymously.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="/img/login.jpg" class="card-img-top" alt="session" />
                            <div class="card-body">
                                <h5 class="card-title">Q&A session</h5>
                                <p class="card-text">The main part of this tool, where you can have as many questions as you
                                    like without any hesitation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default AboutAbout;
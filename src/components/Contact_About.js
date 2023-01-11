import 'bootstrap/dist/css/bootstrap.min.css';

const ContactAbout = () => {
    return (
        <div>
            <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

            <div className="container-fluid flex p-5 bg-black bg-opacity-75" id="contact" data-aos="fade-left"
                data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500">
                <div className="container p-5">
                    <h1 className="text-center text-white p-5">Contact</h1>
                    <p className="text-center text-white p-3" >If you have any question, feel free to
                        contact any of us via channels given below.</p>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/Tri_Nhan.jpg" className="card-img-top" alt="Pham Tri Nhan" />
                            <div className="card-body">
                                <h5 className="card-title">Pham Tri Nhan</h5>
                                <p className="card-text">
                                    Student at Ho Chi Minh city University of Technology
                                </p>
                                <p className="card-text mb-5">
                                    Event Operation Organizer at Google Developer Student Clubs - HCMUT
                                </p>
                                <section className="mb-4">
                                    <a className="btn btn-outline-light btn-floating m-1"
                                        href="https://www.facebook.com/nhan.phamtri2801/" role="button"><i
                                            className="fab fa-facebook-f"></i></a>

                                    <a className="btn btn-outline-light btn-floating m-1"
                                        href="https://www.linkedin.com/in/nhan-phamtri/" role="button"><i
                                            className="fab fa-linkedin-in"></i></a>

                                    <a className="btn btn-outline-light btn-floating m-1"
                                        href="https://github.com/TriNhan-Pham" role="button"><i
                                            className="fab fa-github"></i></a>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/Bao_Khanh.jpg" className="card-img-top"
                                alt="Nguyen Kieu Bao Khanh" />
                            <div className="card-body">
                                <h5 className="card-title">Nguyen Kieu Bao Khanh</h5>
                                <p className="card-text">
                                    Student at Ho Chi Minh city University of Technology
                                </p>
                                <p className="card-text mb-5">
                                    Event Operation Organizer at Google Developer Student Clubs - HCMUT
                                </p>
                                <section className="mb-4">
                                    <a className="btn btn-outline-light btn-floating m-1"
                                        href="#!" role="button"><i className="fab fa-facebook-f"></i></a>

                                    <a className="btn btn-outline-light btn-floating m-1"
                                        href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

                                    <a className="btn btn-outline-light btn-floating m-1"
                                        href="#!" role="button"><i className="fab fa-github"></i></a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactAbout;
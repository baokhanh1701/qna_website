import 'bootstrap/dist/css/bootstrap.min.css';

const OverviewAbout = () => {
    return (
        <div>
            <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossorigin="anonymous"></script>
            <div className="container-fluid overview justify-content-center align-items-center bg-black bg-opacity-50 p-5"
                id="overview" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"
                data-aos-duration="1500">
                <div className="container justify-content-center">
                    <div className="square opacity-25"></div>
                    <div className="container-fluid justify-content-center p-5">
                        <h1 className="text-center text-white">Overview</h1>
                        <p className="text-center d-flex p-5 text-white">While listening to webinars,
                            there must be
                            some questions that you cannot answer by yourself. We offer you the solution. Live Q&A gives you
                            unlimited opportunities of
                            making questions, satisfying your creativity and curiosity.</p>
                    </div>
                </div>
                <div className="container d-flex justify-content-center p-3">
                    <a type="button" href="/" className="btn btn-success p-4">Enter Current
                        Event
                        Session</a>
                </div>
            </div>
        </div>

    )
}

export default OverviewAbout;
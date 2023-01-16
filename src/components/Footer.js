const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white" id="footer">
            <div className="container p-4">
                <section className="">
                    <form className="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" className="form-control" />
                                    <label className="form-label">Your email address</label>
                                </div>
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        </footer>
    )
}

export default Footer;
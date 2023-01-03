import { Link } from "react-router-dom";
import { Navbar, Text, Button } from "@nextui-org/react";

const Footer = () => {
    return (
        <footer class="bg-dark text-center text-white" id="footer">
            <div class="container p-4">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-facebook-f"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-linkedin-in"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
                </section>
                <section class="">
                    <form action="">
                        <div class="row d-flex justify-content-center">
                            <div class="col-auto">
                                <p class="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div class="col-md-5 col-12">
                                <div class="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" class="form-control" />
                                    <label class="form-label" for="form5Example21">Your email address</label>
                                </div>
                            </div>

                            <div class="col-auto">
                                <button type="submit" class="btn btn-outline-light mb-4">
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
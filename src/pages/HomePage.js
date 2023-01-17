import { Container, Text, Button, Spacer, Textarea, Row, Col, Checkbox, NextUIProvider, Switch, changeTheme, useTheme } from "@nextui-org/react";
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { userContext } from "../App";
import QuestionBox from "../components/QuestionBox"
import { usePostQnA } from "../hooks/useLivify";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { createTheme, getDocumentTheme } from "@nextui-org/react";
import { Next } from "react-bootstrap/esm/PageItem";
// ..

const HomePage = () => {
    const navigate = useNavigate();
    const { username, showButton, isDark } = useContext(userContext);
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/firebase.User
    //             const uid = user.uid;
    //             // ...
    //             navigate("/");
    //             console.log("uid: ", uid)
    //         } else {
    //             // User is signed out
    //             // ...
    //             console.log("user is logged out")
    //         }
    //     });
    // }, []);
    const [question, setQuestion] = useState("");

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
        <Container align="center" style={!isDark ? {
            backgroundImage: `url(${"https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg"})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: "fixed"
        } : {
            backgroundImage: `url(${"https://images.unsplash.com/photo-1516575355332-d2934104e253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: "fixed"
        }}>
            <Text h1> Home </Text>
            Welcome to your Dashboard!
            <Container
                style={{ display: showButton ? 'block' : 'none' }}
                className="dashBoard">
                {/* Not Logged In */}
                Please sign in to use our services.
                <Spacer />
                <Container gap={0} position="center">
                    <Row>
                        <Col>
                            <Button
                                color="primary"
                                style={{ display: showButton ? 'block' : 'none' }}
                                onPress={() => { navigate("/login") }}>
                                Sign in/ Sign up
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* Logged In */}
            <Container
                position="center"
                style={{ display: showButton ? 'none' : 'block' }}
                className="questionView">
                <Spacer />
                <Text h2> Question View </Text>
                <Text p> Please type your question in the textarea below. </Text>
                <Spacer />
                <Container position="center" fluid align="center">
                    <Textarea
                        borderWeight="2px"
                        status="primary"
                        color="primary"
                        labelPlaceholder="Question"
                        size="xl"
                        width="70%"
                        onChange={(e) => {
                            setQuestion(e.target.value);
                        }}
                        data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500"
                    />
                    <Spacer x={12} />
                    <Checkbox color="primary" labelColor="primary" style={{ margin: "10px" }} >
                        Ask anonymously
                    </Checkbox>
                    <Button color="success"
                    >
                        Ask!
                    </Button>
                </Container>
                <QuestionBox />
            </Container>
            <Spacer />
        </Container>
    )
}
export default HomePage;
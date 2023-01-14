import { Container, Text, Button, Spacer, Textarea, Row, Col } from "@nextui-org/react";
import React, { useContext } from 'react';
import { useNavigate } from "react-router";
import { userContext } from "../App";

const HomePage = () => {
    const navigate = useNavigate();
    const { username, showButton } = useContext(userContext);

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
    return (
        <Container fluid>
            <Spacer />
            <Text h1> Dashboard </Text>
            Welcome to Your Dashboard, {username ? username : "Guest"}!
            <Container
                style={{ display: showButton ? 'block' : 'none' }}
                className="dashBoard">
                {/* Not Logged In */}
                Please sign in to use our services.
                <Container gap={0} position="center">
                    <Row>
                        <Col>
                            <Button
                                color="secondary"
                                style={{ display: showButton ? 'block' : 'none' }}
                                onPress={() => { navigate("/login") }}>
                                Sign in/ Sign up with email
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                color="success"
                                style={{ display: showButton ? 'block' : 'none' }}
                                onPress={() => { navigate("/signup") }}>
                                Sign in/ Sign up with Google
                            </Button>
                        </Col>
                    </Row>
                </Container>
                {/* Logged In */}
                <Container
                    position="center"
                    style={{ visibility: showButton ? 'visible' : 'visible' }}
                    className="questionView">
                    <Spacer />
                    <Text h2> Question View </Text>
                    <Text p> Please type your question in the textarea below. </Text>
                    <Spacer />
                    <Textarea
                        borderWeight="2px"
                        status="secondary"
                        color="secondary"
                        labelPlaceholder="Question"
                        size="xl"
                        fullWidth
                    />
                </Container>
            </Container>
            <Spacer />
        </Container>
    )
}
export default HomePage;
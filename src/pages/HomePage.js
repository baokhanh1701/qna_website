import { Container, Text, Button, Spacer, Textarea, Row, Col, Checkbox } from "@nextui-org/react";
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router";
import { userContext } from "../App";
import QuestionBox from "../components/QuestionBox"
import { usePostQnA } from "../hooks/useLivify";

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
    const [question, setQuestion] = useState("");

    return (
        <Container fluid align="center">
            <Spacer />
            <Text h1> Home </Text>
            Welcome to your Dashboard!
            <Container
                style={{ display: showButton ? 'block' : 'none' }}
                className="dashBoard">
                {/* Not Logged In */}
                Please sign in to use our services.
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
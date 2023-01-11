import { Container, Text, Button, Spacer, Textarea } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../api/firebase"
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                navigate("/");
                console.log("uid: ", uid)
            } else {
                // User is signed out
                // ...
                console.log("user is logged out")
            }
        });

    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out successfully");
        }).catch((error) => console.log(error));
    }

    return (
        <Container>
            <Container position="center" className="dashBoard">
                <Text h1> Dashboard </Text>
                {/* Not Logged In */}
                Please sign in to use our services.
                <Container position="center">
                    <Spacer />
                    <Button position="center" href="/login">Login/Signup</Button>
                    <Spacer />
                </Container>
                {/* Logged In */}
                <Container position="center" className="questionView">
                    <Spacer />
                    <Text h2> Question View </Text>
                    <Text p> Please type your question in the textarea below. </Text>
                    <Spacer />
                    <Textarea
                        borderWeight="2px"
                        borderColor="blue"
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
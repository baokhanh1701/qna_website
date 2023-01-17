import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar, Text, Button } from "@nextui-org/react";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import { userContext } from '../App';
import { Switch, changeTheme, useTheme } from '@nextui-org/react'

const Header = () => {
    const { setUserName, showButton, setShowButton, setUserLoggedIn } = useContext(userContext);
    const navigate = useNavigate();
    const { isDark } = useTheme();

    const handleChangeTheme = () => {
        const nextTheme = isDark ? 'light' : 'dark';
        window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
        changeTheme(nextTheme);
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out successfully");
            setShowButton(true);
            setUserName("Guest");

            setUserLoggedIn(null);
            localStorage.clear();
        }).catch((error) => console.log(error));
    }

    return (
        <Navbar isCompact isBordered variant="sticky">
            <Navbar.Brand>
                <Text h2>
                    Livify Q&A
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link href="/about"> About </Navbar.Link>
                <Navbar.Link href="/#"> Dashboard </Navbar.Link>
                <Navbar.Link
                    href="/eventlog"
                    style={{ display: showButton ? 'none' : 'block' }}
                > Event Log </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Navbar.Link href="/login"
                        style={{ display: showButton ? 'block' : 'none' }}
                    >
                        Login
                    </Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Button auto flat
                        style={{ display: showButton ? 'block' : 'none' }}
                        onPress={() => navigate("/signup")}>
                        Sign up
                    </Button>
                </Navbar.Item>
                <Navbar.Item>
                    <Button auto flat
                        style={{ display: showButton ? 'none' : 'block' }}
                        onPress={handleLogout}>
                        Sign out
                    </Button>
                </Navbar.Item>
                <Navbar.Item>
                    <Switch
                        checked={isDark}
                        onChange={handleChangeTheme}
                    />
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
export default Header;
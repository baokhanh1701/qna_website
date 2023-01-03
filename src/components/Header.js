import { Link } from "react-router-dom";
import { Navbar, Text, Button } from "@nextui-org/react";

const Header = () => {
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <Text h2>
                    <Link to="/">Livify Q&A</Link>
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/eventlog">Event Log</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/about">About</Link>
                </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat as={Link} href="#">
                        Login with Google
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
export default Header;
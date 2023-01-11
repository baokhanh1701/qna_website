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
                <Navbar.Link href="/#"> Dashboard </Navbar.Link>
                <Navbar.Link href="/eventlog"> Event Log </Navbar.Link>
                <Navbar.Link href="/about"> About </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Navbar.Link href="/login">
                        Login
                    </Navbar.Link>
                </Navbar.Item>
                <Navbar.Item>
                    <Button auto flat as={Link}>
                        <Navbar.Link href="/signup">
                            Sign Up    
                        </Navbar.Link> 
                    </Button>
                </Navbar.Item>
                <Navbar.Item>
                    <Button auto flat as={Link} className="hidden">
                        <Navbar.Link href="/signup">
                            Sign Out    
                        </Navbar.Link> 
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
export default Header;
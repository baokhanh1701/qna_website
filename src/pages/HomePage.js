import { Container, Text, Button } from "@nextui-org/react";

const HomePage = () => {
    
    return (
        <Container>
            <Container>
                <Text h1> Dashboard </Text>
                <Text p> Please login to start an event</Text>
                <Button>
                    Log in with Google
                </Button>
            </Container>
        </Container>
    )
}
export default HomePage;
import { Container, Grid, Text, Button } from "@nextui-org/react";

const HomePage = () => {
    
    return (
        <Container>
            <Container>
                <Text h1> MY DASHBOARD </Text>
                <Text h3> Please login to start an event</Text>
                <Button>
                    Log in with Google
                </Button>
            </Container>
        </Container>
    )
}
export default HomePage;
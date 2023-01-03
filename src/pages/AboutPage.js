import { Container, Text, Grid, Card, Row } from "@nextui-org/react";

const AboutPage = () => {
    const DevList = [
        {
            name: "Nguyen Kieu Bao Khanh",
            img: "../img/Nguyễn Kiều Bảo Khánh.jpg",
            describe: "Nguyen Kieu Bao Khanh",
        },
        {
            name: "Pham Tri Nhan",
            img: "../img/Nguyễn Kiều Bảo Khánh.jpg",
            describe: "Pham Tri Nhan",
        }
    ]
    return (
        <div>
            <Container>
                <Text h1> About Us </Text>
                <Text p>This is about us, two university students who so tired of HCMUT and decided to make this small web-app.</Text>
            </Container>

            <Grid.Container gap={2} justify="flex-start">
                {DevList.map((item, index) => (
                    <Grid md={3} sm={4} xs={6} key={index}>
                        <Card isPressable>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={item.img}
                                    objectFit="cover"
                                    width="100%"
                                    height={140}
                                    alt={item.name}
                                />
                            </Card.Body>
                            <Card.Footer css={{ justifyItems: "flex-start" }}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text b>{item.name}</Text>
                                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                        {item.describe}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </div>
    )
};
export default AboutPage;
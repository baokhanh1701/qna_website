import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";

const EventItem = (props) => {
    const { eventData } = props;
    const EventCard = ({ eventData }) => {
        return (
            <Card css={{ w: "100%", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            {eventData.isLive ? "Online" : "Offline"}
                        </Text>
                        <Text h3 color="black">
                            {eventData.name}
                        </Text>
                    </Col>
                </Card.Header>
                {/* <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={`https://picsum.photos/400/500`}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt={eventData.name}
                    />
                </Card.Body> */}
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Text color="#000" size={12}> Available Soon. </Text>
                            <Text color="#000" size={12}> Get notified. </Text>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button flat auto rounded color="secondary">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        More info.
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        );
    };
    return (
        <Grid md={3} sm={4} xs={6}>
            <EventCard eventData={eventData} />
        </Grid>
    )
}

export default EventItem;
import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";

const EventItem = (props) => {
    const { eventData } = props;
    const navigate = useNavigate();
    const EventCard = ({ eventData }) => {
        return (
            <Card isHoverable css={{ w: "auto", h: "400px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text
                            size={12}
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                            css={{ color: eventData.isLive ? "$green500" : "$red600" }}
                        >
                            {eventData.isLive ? "⦿ Online" : "⦿ Offline"}
                        </Text>
                        <Text h3 color="white">
                            {eventData.name}
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body
                    css={{ p: 0 }}>
                    <Card.Image
                        showSkeleton
                        src={`${eventData.img}`}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt={eventData.name}
                        css={{
                            filter: "blur(5px)"
                        }}
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff90",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1
                    }}
                >
                    <Row>
                        <Col>
                            <Text color="black" size={16}> {eventData.date.slice(0, 10)} </Text>
                            <Text
                                weight="bold"
                                color="black"
                                size={14}> {eventData.host} </Text>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <Button flat auto rounded color="secondary" onPress={()=> {
                                    navigate(`event/${eventData.id}`);
                                }}>
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
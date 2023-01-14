import React from "react";
import { Container, Text, Spacer, Card, Grid } from "@nextui-org/react";
import { useGetQnA } from "../hooks/useLivify";
// import questions from "../api/eventAPI_event-qna.json";

const QuestionBox = () => {
    const { questions } = useGetQnA();
    const EventQuestionMiniCard = ({ name, isAttendee, question }) => {
        return (
            // {
            //     "name": "Wilson Blick",
            //     "isAttendee": false,
            //     "question": "Quis corrupti alias natus sed consectetur. Doloribus excepturi accusamus doloremque porro maxime labore delectus aspernatur. Officia cupiditate veritatis. Fuga cupiditate officiis vel modi numquam delectus cumque vero porro. Recusandae necessitatibus magni autem at error doloremque voluptatum nulla odit. Consequatur ex nesciunt ipsam harum eligendi necessitatibus iure quas temporibus.",
            //     "id": "1"
            // }
            <Card isHoverable isPressable css={{
                p: "$1",
                mw: "700px",
                m: "$5"
            }}>
                <Card.Header>
                    <img
                        alt="nextui logo"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width="30px"
                        height="30px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={10}>
                            <Text h5 css={{ lineHeight: "$xs" }}>
                                {name}
                            </Text>
                        </Grid>
                        <Grid xs={10}>
                            <Text css={{
                                color: isAttendee ? "$accents8" : "$red600"
                            }}>
                                {isAttendee ? "@Attendee" : "@Organizer"}
                            </Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$1" }}>
                    <Text>
                        {question}
                    </Text>
                </Card.Body>
                {/* <Card.Footer>
                    
                </Card.Footer> */}
            </Card >
        )
    }

    return (
        <Container align="center">
            <Spacer />
            <Text h4> Question Box</Text>
            <Text p> On-going Questions </Text>
            <Container
                position="center"
                align="center"
                style={{ border: `2px` }}
            >
                {questions ? questions.map((q) => (
                    <EventQuestionMiniCard name={q.name} isAttendee={q.isAttendee} question={q.question} />
                )) : console.log(questions)}
                {/* <EventQuestionMiniCard username="Nguyen Kieu Bao Khanh" /> */}
            </Container>
        </Container>
    )
}

export default QuestionBox;
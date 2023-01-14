import React, { useState } from "react";
import { Container, Text, Image, Button, Modal } from "@nextui-org/react";

const EventInfo = ({ eventData }) => {
    // {
    //     "name": "Triple-buffered upward-trending synergy",
    //     "date": "2044-10-13T16:04:02.131Z",
    //     "location": "Kassulke Forges",
    //     "description": "Voluptatum quis est alias itaque soluta placeat provident labore eos. In perferendis voluptatem incidunt perferendis sit fuga commodi voluptas. Nemo similique corporis exercitationem ipsam ullam enim amet reprehenderit. Temporibus quod dolores.\nQuae eaque officia laudantium ipsum veritatis non quisquam. Recusandae alias ut sapiente illum dolor nam. Ea corrupti animi laudantium minima aut incidunt. Omnis inventore blanditiis minima nostrum illum.\nQuaerat et nihil id maiores sunt perspiciatis labore fuga. Perferendis dignissimos ipsum architecto maxime iure. Facere ad explicabo dicta.",
    //     "isLive": false,
    //     "numberOfAttendee": 45011,
    //     "host": "Dooley, Schoen and Willms",
    //     "img": "https://loremflickr.com/640/480/fashion",
    //     "id": "1"
    //    }
    const [isVisible, setIsVisible] = useState(false);
    const videos = ["https://www.youtube.com/embed/9bZkp7q19f0", "https://www.youtube.com/embed/dQw4w9WgXcQ"];
    let randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];

    return (
        <Container md>
            <Image
                src={eventData.img}
                objectFit="cover"
                width={300}
            />
            <Text h2> E: {eventData?.name}</Text>
            <Text h4> Description: {eventData?.description}</Text>
            <Button onClick={() => setIsVisible(true)}>Trailer</Button>
            <Modal
                closeButton
                blur
                width="650px"
                aria-labelledby="modal-title"
                open={isVisible}
                onClose={() => setIsVisible(false)}
            >
                <Modal.Header>
                    <Text>PROMOTE VIDEO: {eventData?.name}</Text>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="560"
                        height="315"
                        src={randomVideoUrl}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button>OK</Button>
                    <Button color="error" onClick={() => setIsVisible(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>)
}
export default EventInfo;
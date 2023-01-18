import { useEffect, useState } from 'react';
import { getEvents, getSingleEvent, getQuestionDatabase } from '../api/eventService';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export const useGetAllEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getEvents().then((results) => setEvents(results))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        events,
        loading,
    }
}

export const useGetOneEvent = (id) => {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getSingleEvent(id).then((res) => {
            setEvent(res);
            console.log(res);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return {
        event,
        loading,
    }
}

export const useGetQnA = () => {
    // const [questions, setQuestions] = useState([]);
    // useEffect(() => {
    //     getQuestionDatabase().then((res) => {
    //         setQuestions(res);
    //         console.log(questions);
    //     })
    // }, [])
    // return questions;
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getQuestionDatabase().then((results) => setQuestions(results))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        questions,
        loading,
    }
}

export const usePostQnA = (question, ifAnon) => {
    // {
    //     "name": "Wilson Blick",
    //     "isAttendee": false,
    //     "question": "Quis corrupti alias natus sed consectetur. Doloribus excepturi accusamus doloremque porro maxime labore delectus aspernatur. Officia cupiditate veritatis. Fuga cupiditate officiis vel modi numquam delectus cumque vero porro. Recusandae necessitatibus magni autem at error doloremque voluptatum nulla odit. Consequatur ex nesciunt ipsam harum eligendi necessitatibus iure quas temporibus.",
    //     "id": "1"
    //    }
    const [questionId, setQuestionId] = useState(null);
    useEffect(() => {
        const qnaObject = {
            name: `${ifAnon ? "Anonymous_User" : "User"}`,
            isAttendee: true,
            question: question,
            id: questionId,
        };
        axios.post('https://63b3df865901da0ab3893ffb.mockapi.io/api/v1/event-qna', qnaObject)
            .then((response) => {
                setQuestionId(response.data.id);
                console.log(response.data);
                console.log("Successfully upload the question!");
            })
            .catch(error => {
                console.log("Error: ", error);
            })
    }, []);
}
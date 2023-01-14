import { useEffect, useState } from 'react';
import { getEvents, getSingleEvent, getQuestionDatabase } from '../api/eventService';

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

export const useGetOneEvent = (event_id) => {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getSingleEvent(event_id).then((res) => {
            setEvent(res);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

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
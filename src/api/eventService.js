import axios from "axios";

export const API_URL = axios.create({
    baseURL: "https://63b3df865901da0ab3893ffb.mockapi.io/api/v1",
});
//Event Database
export const getEvents = async () => {
    const { data } = await API_URL.get(
        '/eventname'
    );
    return data;
}

export const getSingleEvent = async (event_id) => {
    const { data } = await API_URL.get(
        `/eventname/${event_id}`
    );
    return data;
}

//Forum Database
export const getQuestionDatabase = async () => {
    const { data } = await API_URL.get(
        `/event-qna`
    )
    return data;
}
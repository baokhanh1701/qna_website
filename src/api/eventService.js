import axios from "axios";

export const API_URL = axios.create({
    baseURL: "https://63b3df865901da0ab3893ffb.mockapi.io/api/v1",
});

export const useGetEvents = async () => {
    const { data } = await API_URL.get(
        `/eventname`
    );
    return data.results;
}

export const useGetSingleEvent = async (event_id) => {
    const { data } = await API_URL.get(
        `/eventname/${event_id}`
    );
    return data;
}
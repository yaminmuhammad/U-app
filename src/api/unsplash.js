import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 46wPIzwiAd2ldNIMS3udirLEvzSwznS77ipH5rx8kuI'
    }
})
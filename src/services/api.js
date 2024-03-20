import axios from "axios";


export const Api = {
    get(url) {
        return axios.get(`${process.env.REACT_APP_BORED_API}${url}`);
    }


};
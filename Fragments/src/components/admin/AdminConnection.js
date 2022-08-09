import axios from "axios";
import variables from "../important variables/variables";

const userAPI = () => {
    return {
        create: newRecord => axios.post(`${variables.API_URL}Admin/getUsersBySearch`, newRecord),
    }
}
import axios from "axios";
import variables from "../important variables/variables";

const getDataFromApi = ({ getNotes, personid }) => {
  const url = variables.API_URL;

  axios
    .get(`${url}Users/${personid}`)
    .then((response) => {
      getNotes(response.data);
    })
    .catch((error) => console.error(`Error: ${error}`));
};

export default getDataFromApi;

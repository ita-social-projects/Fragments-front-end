import axios from "axios";
import variables from "../components/important variables/variables";

const loginUser = (request) => {
  axios
    .post(`${variables.API_URL}Users/login`, request)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token);
    })
    .catch((error) => console.error(`Error: ${error}`));
};
const getUser = (token, setUser) => {
  if (token) {
    const options = {
      headers: { Authorization: `bearer ${token}` },
    };
    axios
      .get(`${variables.API_URL}Users/get-me`, options)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }
};
const addUser = (formData) => {
  console.log(formData)
  if (formData.id === 0){
    axios.post(`${variables.API_URL}Users/register`, formData)
          .catch(err => console.log(err))
        }
}
export { getUser, loginUser, addUser };

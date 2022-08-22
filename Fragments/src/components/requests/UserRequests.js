import axios from "axios";
import variables from "../important variables/variables";

const UserRequests = () => {
  return {
    create: (newRecord) =>
      axios.post(`${variables.API_URL}Users/register`, newRecord),
  };
};
const addUser = (formData) => {
  if (formData.id === 0) {
    UserRequests()
      .create(formData)
      .catch((err) => console.log(err));
  }
};

export default addUser;

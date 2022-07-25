import axios from "axios";
import variables from "../important variables/variables";

const userAPI = () => {
    return {
        create: newRecord => axios.post(`${variables.API_URL}Users/register`, newRecord),
    }
}
const addUser = (formData) => {
  if (formData.id === 0){
      userAPI().create(formData)
          .catch(err => console.log(err))
        }
}

export default addUser;
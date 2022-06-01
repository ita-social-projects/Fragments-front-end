import axios from "axios";

const userAPI = (url = 'https://localhost:44361/api/Users') => {
    return {
        create: newRecord => axios.post(url, newRecord),
        
    }
}
const addUser = (formData) => {
  if (formData.id === 0){
      userAPI().create(formData)
          .catch(err => console.log(err))
        }
}


export default addUser;
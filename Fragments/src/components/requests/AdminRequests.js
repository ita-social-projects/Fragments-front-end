import axios from "axios";
import variables from "../important variables/variables";

const AdminRequests = () => {
  return {
    read: () => axios.get(`${variables.API_URL}Admin/get-all`),
  };
};

export default AdminRequests;

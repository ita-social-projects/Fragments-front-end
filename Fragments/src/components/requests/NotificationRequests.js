import axios from "axios";
import variables from "../important variables/variables";

const NotificationRequests = () => {
  return {
    read: (options) =>
      axios.get(`${variables.API_URL}Notifications/getNotifications`, options),
    post: (notification, header) =>
      axios.post(
        `${variables.API_URL}Notifications/readMessage`,
        notification,
        { headers: header }
      ),
  };
};

export default NotificationRequests;

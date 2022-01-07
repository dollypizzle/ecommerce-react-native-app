import axios from "axios";

const instance = axios.create({
  baseURL: "https://noah-ninostyle-api.herokuapp.com",
});


export default instance;

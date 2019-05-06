import axios from "axios";

const api = axios.create({
  baseURL: "https://quebra-o-silencio.herokuapp.com/"
});

export default api;

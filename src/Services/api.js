import axios from "axios";

const instance = axios.create({
  baseURL: `https://virtserver.swaggerhub.com/ACHMADQIZWINI4_1/Immersive-Dashboard-Project/1.0.0/`,
});

export default {
  login: (body) =>
    instance({
      method: `POST,`,
      url: `login`,
    }),
};

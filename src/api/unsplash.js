import axios from "axios";

// for creating customized instance goto: https://axios-http.com/docs/instance

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 'keep-auth-key'",
    "Cache-Control": "No-Cache",
  },
});

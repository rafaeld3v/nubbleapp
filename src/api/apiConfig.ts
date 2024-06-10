import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:3333/",
  headers: {
    Authorization:
      "Bearer Mw.3g0pRpMgyWTb3DFsaZOnaqtL9DEJ4w8dp7aAx7FhxXlzBKjHZJsbhfooNwFW",
  },
});

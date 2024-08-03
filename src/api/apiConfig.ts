import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:3333/",
  headers: {
    Authorization:
      "Bearer Mw.7hbF-W_1Lt78eKRLPI6BOXE1Syg98s9-6PV2QFSpN7AxK9WmanzGSEo7q0gk",
  },
});

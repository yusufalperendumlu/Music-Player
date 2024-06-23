import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "f06659ad1a9c440db66d2341b87f992c";
const redirectUri = "http://localhost:5173";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default setClientToken;

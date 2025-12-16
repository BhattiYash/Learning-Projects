const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientId = "c54b4942fcd549d899d529ba7baf6d0e";
const redirectUri = "http://127.0.0.1:5173";
const scopes = ["user-library-read","playlist-read-private"];

export const loginEndpoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
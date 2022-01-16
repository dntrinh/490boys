import {
    auth as SpotifyAuth,
    remote as SpotifyRemote,
    ApiScope,
    ApiConfig,
} from "react-native-spotify-remote";
const dotenv = require('dotenv');

dotenv.config();
const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URL, SPOTIFY_TOKEN_REFRESH_URL, SPOTIFY_TOKEN_SWAP_URL } = process.env;

// Api Config object, replace with your own applications client id and urls
const spotifyConfig = {
    clientID: "SPOTIFY_CLIENT_ID",
    redirectURL: "SPOTIFY_REDIRECT_URL",
    tokenRefreshURL: "SPOTIFY_TOKEN_REFRESH_URL",
    tokenSwapURL: "SPOTIFY_TOKEN_SWAP_URL",
    scopes: [ApiScope.AppRemoteControlScope, ApiScope.UserFollowReadScope],
};

// Initialize the library and connect the Remote
// then play an epic song
export async function playEpicSong() {
    try {
        const session = await SpotifyAuth.authorize(spotifyConfig);
        await SpotifyRemote.connect(session.accessToken);
        await SpotifyRemote.playUri("spotify:track:6IA8E2Q5ttcpbuahIejO74");
        await SpotifyRemote.seek(58000);
    } catch (err) {
        console.error("Couldn't authorize with or connect to Spotify", err);
    }
}
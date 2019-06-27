import axios from 'axios';

const KEY = 'AIzaSyCUNDQtF2sPRYu-Zr9fHGwYa0kEV3JDjVU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
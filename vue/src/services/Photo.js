import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8080"
});

export default {
    getPhoto() {
        return http.get('/user_photos');
    },
    uploadPhoto(user_id, username, photo_url, description) {
        return http.post('/user_photos/add', { user_id, username, photo_url, description });
    }
}
import axios from "axios";

const axiosinstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGRlNTE4ZGM0OGM0NzY4YjYyZTE2YmU4NWNkOTdjMiIsIm5iZiI6MTcxNTI2NjAwNi4wODQsInN1YiI6IjY2M2NlMWQ2YWMwOGFhZDdhODFlZTkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IM0oZlUzHQwqo4hJ7WgQObQeKzURRSr2h7548hEXg0s'
    }
}) 

export default axiosinstance
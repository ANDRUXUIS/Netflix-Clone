import { API_KEY } from '../config/api.json';


const requests = [
    { id: 1, url: `trending/all/week?api_key=${API_KEY}&language=en-US`, title: "NETFLIX Originals" },
    { id: 2, url: `/discover/tv?api_key=${API_KEY}&with_network=213`, title: "Trending Now" },
    { id: 3, url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, title: "Top Rated" },
    { id: 4, url: `/discover/movie?api_key=${API_KEY}&with_genres=28`, title: "Action Movies" },
    { id: 5, url: `/discover/movie?api_key=${API_KEY}&with_genres=35`, title: "Comedy Movies" },
    { id: 6, url: `/discover/movie?api_key=${API_KEY}&with_genres=27`, title: "Horror Movies" },
    { id: 7, url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, title: "Romance Movies" },
    { id: 8, url: `/discover/movie?api_key=${API_KEY}&with_genres=99`, title: "Documentaries" }

]
export default requests;



export function filterMovies(movies) {
    const filteredMovies = movies.filter((m) => m.backdrop_path !== null);
    return filteredMovies;
}


export function makeImageUrl(movies) {
    return `https://image.tmdb.org/t/p/original//${movies.poster_path}`;
};


import https from './https'

const getMovies = async (page) => {
    return  await https.get("https://api.themoviedb.org/3/discover/movie?api_key="+ process.env.REACT_APP_API_KEY +"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + page)
}

const getMovie = async (id) => {
    return  await https.get("https://api.themoviedb.org/3/movie/"+ id +"?api_key="+ process.env.REACT_APP_API_KEY +"&language=en-US")
}

export default {
    getMovies,
    getMovie
}
// import axios here
const axios = require('axios').default
const dotenv = require('dotenv')
dotenv.config()
const api_key = process.env.API_KEY

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // axios(url)
    // .then(res => console.log(res))
    return axios(url)
}
// discoverMovie()

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return axios(url).then(result => result.data)  
}

const getMovieByIdFailure = () => {
  const fakeId = 5783
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  return axios(url)
  .then(res => res.data).catch(error => error.response.status)
}

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}
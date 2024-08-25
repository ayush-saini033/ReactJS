import axios from "axios";

const movieBaseUrl=" http://www.omdbapi.com/?i=tt3896198&apikey=60d35867"
// const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

const getTrendingVideos = axios.get(movieBaseUrl)
// console.log(getTrendingVideos);


export default{
    getTrendingVideos
}
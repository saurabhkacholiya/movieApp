import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?type=movie&apikey=a1b5f9ec&'
class NetworkUtils {
  static axiosInstance = axios.create({
    baseURL: `${baseURL}`,
  });
}

export default NetworkUtils;
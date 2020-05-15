import axios from 'axios';

const baseURL = 'http://www.omdbapi.com'
class NetworkUtils {
  static axiosInstance = axios.create({
    baseURL: `${baseURL}`,
  });
}

export default NetworkUtils;
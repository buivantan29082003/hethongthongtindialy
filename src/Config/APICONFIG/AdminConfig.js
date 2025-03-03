import axios from 'axios';
const apiAdmin = axios.create({
  baseURL: 'http://localhost:8080/admin', 
});



export default apiAdmin;
import Axios from 'axios';

function ServiceBase() {
  this.get = (api, params) => {
    return Axios.get(api, params);
  };
  this.post = (api, params) => {
    return Axios.post(api, params);
  };
  this.put = (api, params) => {
    return Axios.post(api, params);
  };
}
export default new ServiceBase();

// const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });

// export default api;
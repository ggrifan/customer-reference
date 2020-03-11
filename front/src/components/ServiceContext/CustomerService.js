import axios from 'axios';

export default class CustomerService {
  _url = `${process.env.REACT_APP_API_BASE_URL}/customer`;

  getAll = () => {
    return axios.get(`${this._url}`).then(res => res.data);
  };

  getById = (id) => {
    return axios.get(`${this._url}/${id}`).then(res => res.data);
  };
}
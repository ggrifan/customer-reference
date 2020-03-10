export default class CustomerService {
  _url = `${process.env.REACT_APP_API_BASE_URL}/customer`;

  getAll = () => {
    return fetch(`${this._url}`, {method: 'GET'})
  };

  getById = (id) => {
    return fetch(`${this._url}/${id}`, {method: 'GET'});
  };
}
import React from "react";
import Table from "react-bootstrap/Table";
import { withCustomerService } from "../ServiceContext";

class CustomerDetails extends React.Component {
  state = {
    data: null
  };

  labels = {
    name: 'Название',
    inn: 'ИНН',
    kpp: 'КПП',
    ceoFullName: 'ФИО руководителя',
    phone: 'Телефон'
  };

  componentDidMount() {
    const {id, customerService} = this.props;
    customerService.getById(id)
      .then(data => this.setState({data}))
      .catch(reason => console.log(`Fail on get customer with ID=${id}`));
  }

  render() {
    const data = {...this.state.data};
    data['ceoFullName'] = `${data.ceoLastName} ${data.ceoFirstName} ${data.ceoMiddleName}`;

    const bodyRows = Object.keys(this.labels)
      .map(key =>
        <tr key={key}>
          <td>{this.labels[key]}</td>
          <td>{data[key]}</td>
        </tr>
      );

    return (
      <div className='mt-4'>
        <h5 className='text-center'>Просмотр информации по клиенту</h5>

        <Table bordered className='mt-4' variant='light'>
          <tbody>
          {bodyRows}
          </tbody>
        </Table>
      </div>
    );
  }

}

export default withCustomerService(CustomerDetails);
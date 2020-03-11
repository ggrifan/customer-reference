import React from 'react';
import { withCustomerService } from "../ServiceContext";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { withRouter } from 'react-router-dom';

class CustomerList extends React.Component {
  state = {
    customers: []
  };

  componentDidMount() {
    const {customerService} = this.props;
    customerService.getAll()
      .then(customers => {
        this.setState({customers});
      })
      .catch(reason => console.log(`Fail on get customers: ${reason}`));
  }

  selectCustomer = (id) => {
    const {history} = this.props;
    history.push(`/customer/${id}`);
  };

  render() {
    const {customers} = this.state;

    const list = customers.map(({id, name}) => {
      return (
        <ListGroupItem
          key={id}
          action
          variant='light'
          onClick={() => this.selectCustomer(id)}>{name}</ListGroupItem>
      );
    });

    return (
      <div>
        <h5 className='py-3 text-center'>Список клиентов</h5>
        <ListGroup>
          {list}
        </ListGroup>
      </div>
    );
  }
}

export default withRouter(withCustomerService(CustomerList));
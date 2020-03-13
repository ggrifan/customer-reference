import React from 'react';
import { withCustomerService } from "../ServiceContext";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { withRouter } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import AddCustomerForm from "../AddCustomerForm";

class CustomerList extends React.Component {
  state = {
    customers: [],
    search: null
  };

  componentDidMount() {
    this.getAllCustomers();
  }

  getAllCustomers = () => {
    const {customerService} = this.props;
    customerService.getAll()
      .then(customers => {
        this.setState({customers});
      })
      .catch(e => console.log(`Fail on get all customers: ${e}`));
  };

  addCustomer = (newCustomer) => {
    const {customerService} = this.props;
    customerService.add(newCustomer)
      .then(_ => {
        this.getAllCustomers();
      })
      .catch(e => {
        console.log(`Fail on add new customer: ${e}`);
      });
  };

  selectCustomer = (id) => {
    const {history} = this.props;
    history.push(`/customer/${id}`);
  };

  deleteCustomer = (id) => {
    const {customerService} = this.props;
    customerService.delete(id)
      .then(_ => {
        this.getAllCustomers();
      })
      .catch(e => {
        console.log(`Fail on delete customer: ${e}`);
      });
  };

  onSearchChange = (event) => {
    this.setState({search: event.target.value});
  };

  render() {
    const {search} = this.state;
    const customers = [...this.state.customers];
    const filtered = !!search ?
      customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
      : customers;

    const list = filtered.map(({id, name}) => {
      return (
          <ListGroupItem
            as='li'
            key={id}
            action
            variant='light'
            className='d-flex justify-content-between align-items-center py-2 px-3'
            style={{userSelect: 'none'}}
            onClick={() => this.selectCustomer(id)}>
              {name}
              <Button className='d-inline-block'
                      variant='outline-danger'
                      onClick={(e) => {
                        e.stopPropagation();
                        this.deleteCustomer(id);
                      }}>
                <FontAwesomeIcon icon={faTrash}/>
              </Button>
          </ListGroupItem>
      );
    });

    return (
      <div>
        <h5 className='py-3 text-center'>Список клиентов</h5>
        <Row className='my-3'>
          <Col className='justify-content-between d-flex'>
            <AddCustomerForm addCustomer={this.addCustomer} />
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={this.onSearchChange}/>
            </Form>
          </Col>
        </Row>
        <ListGroup>
          {list}
        </ListGroup>
      </div>
    );
  }
}

export default withRouter(withCustomerService(CustomerList));
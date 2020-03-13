import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";

import './AddCustomerForm.css';


function AddCustomerForm(props) {
  const {addCustomer} = props;

  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [inn, setInn] = useState('');
  const [kpp, setKpp] = useState('');
  const [ceoFirstName, setCEOFirstName] = useState('');
  const [ceoMiddleName, setCEOMiddleName] = useState('');
  const [ceoLastName, setCEOLastName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setName('');
    setInn('');
    setKpp('');
    setCEOFirstName('');
    setCEOMiddleName('');
    setCEOLastName('');
    setPhone('');
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newCustomer = {
      name: name ? name : null,
      inn: inn ? inn : null,
      kpp: kpp ? kpp : null,
      ceoFirstName: ceoFirstName ? ceoFirstName : null,
      ceoMiddleName: ceoMiddleName ? ceoMiddleName : null,
      ceoLastName: ceoLastName ? ceoLastName : null,
      phone: phone ? phone : null,
    };
    handleClose();
    resetForm();
    addCustomer(newCustomer);
  };

  return (
    <>
      <Button variant='outline-secondary'
              onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={show}
             onHide={handleClose}
             dialogClassName='modal-80w'>
        <ModalHeader className='justify-content-center'>
          <ModalTitle>Создание клиента</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup as={Row} controlId="ctrlName">
              <FormLabel column sm={2}>Название</FormLabel>
              <Col sm={10}>
                <FormControl type="text"
                             placeholder="Название компании"
                             value={name}
                             onChange={(e) => setName(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="ctrlInn">
              <FormLabel column sm={2}>ИНН</FormLabel>
              <Col sm={10}>
                <FormControl type="text"
                             placeholder="ИНН"
                             value={inn}
                             onChange={(e) => setInn(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="ctrlKpp">
              <FormLabel column sm={2}>КПП</FormLabel>
              <Col sm={10}>
                <FormControl type="text"
                             placeholder="КПП"
                             value={kpp}
                             onChange={(e) => setKpp(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="ctrlCEOLastName">
              <FormLabel column sm={2}>Фамилия</FormLabel>
              <Col sm={10}>
                <FormControl type="text"
                             placeholder="Фамилия руководителя"
                             value={ceoLastName}
                             onChange={(e) => setCEOLastName(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="ctrlCEOFirstName">
              <FormLabel column sm={2}>Имя</FormLabel>
              <Col sm={10}>
                <FormControl type="text"
                             placeholder="Имя руководителя"
                             value={ceoFirstName}
                             onChange={(e) => setCEOFirstName(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="ctrlCEOMiddleName">
              <FormLabel column sm={2}>Отчество</FormLabel>
              <Col sm={10}>
                <FormControl type="text"
                             placeholder="Отчество руководителя"
                             value={ceoMiddleName}
                             onChange={(e) => setCEOMiddleName(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="ctrlPhone">
              <FormLabel column sm={2}>Телефон</FormLabel>
              <Col sm={10}>
                <FormControl type="text"
                             placeholder="Телефон"
                             value={phone}
                             onChange={(e) => setPhone(e.target.value)}/>
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="ctrlButtons">
              <Col sm={12} className='d-flex justify-content-center pt-4'>
                <Button type='submit'
                        variant="outline-success"
                        className='mx-3'>
                  Ок
                </Button>
                <Button variant="outline-danger"
                        className='mx-3'
                        onClick={handleClose}>
                  Отмена
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default AddCustomerForm;
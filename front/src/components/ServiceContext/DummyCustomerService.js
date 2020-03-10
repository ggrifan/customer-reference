export default class DummyCustomerService {
  _customers = [
    {
      id: 1,
      name: 'Company 1',
      inn: '000000000001',
      kpp: '000000001',
      ceoFirstName: 'ceoFirstName 1',
      ceoMiddleName: 'ceoMiddleName 1',
      ceoLastName: 'ceoLastName 1',
      phone: '9101408891',
    },
    {
      id: 2,
      name: 'Company 2',
      inn: '000000000002',
      kpp: '000000002',
      ceoFirstName: 'ceoFirstName2',
      ceoMiddleName: 'ceoMiddleName2',
      ceoLastName: 'ceoLastName2',
      phone: '9101408892',
    },
    {
      id: 3,
      name: 'Company 3',
      inn: '000000000003',
      kpp: '000000003',
      ceoFirstName: 'ceoFirstName3',
      ceoMiddleName: 'ceoMiddleName3',
      ceoLastName: 'ceoLastName3',
      phone: '9101408893',
    },
    {
      id: 4,
      name: 'Company 4',
      inn: '000000000004',
      kpp: '000000004',
      ceoFirstName: 'ceoFirstName4',
      ceoMiddleName: 'ceoMiddleName4',
      ceoLastName: 'ceoLastName4',
      phone: '9101408894',
    },
    {
      id: 5,
      name: 'Company 5',
      inn: '000000000005',
      kpp: '000000005',
      ceoFirstName: 'ceoFirstName5',
      ceoMiddleName: 'ceoMiddleName5',
      ceoLastName: 'ceoLastName5',
      phone: '9101408895',
    }
  ];

  getAll = async () => {
    return this._customers;
  };

  getById = async (id) => {
    return this._customers.find(c => c.id === id);
  };
}
import CustomerService from './CustomerService';
import DummyCustomerService from './DummyCustomerService';

import {
  withCustomerService,
  withCustomerServiceProvider,
  CustomerServiceProvider,
  CustomerServiceConsumer
} from './CustomerServiceContext';

export {
  CustomerService,
  DummyCustomerService,
  withCustomerService,
  withCustomerServiceProvider,
  CustomerServiceProvider,
  CustomerServiceConsumer
};
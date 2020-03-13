package org.demo.customerreference.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import org.springframework.stereotype.Service;
import org.demo.customerreference.model.Customer;
import org.demo.customerreference.repository.CustomerRepository;

@Service
public class CustomerService {

  private CustomerRepository repository;

  public CustomerService(CustomerRepository repository) {
    this.repository = repository;
  }

  public List<Customer> findAll() {
    return StreamSupport.stream(repository.findAll().spliterator(), false).collect(Collectors.toList());
  }

  public Customer findById(Long id) {
    return repository.findById(id).orElse(null);
  }

  public Customer add(Customer customer) {
    return repository.save(customer);
  }

  public void delete(Long id) {
    repository.deleteById(id);
  }
}

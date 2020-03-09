package org.demo.customerreference.controller;

import java.util.List;
import org.demo.customerreference.service.CustomerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.demo.customerreference.model.Customer;

@RestController
@RequestMapping("/customer")
public class CustomerController {
  private CustomerService service;

  public CustomerController(CustomerService service) {
    this.service = service;
  }

  @GetMapping
  public List<Customer> findAll() {
    return service.findAll();
  }

  @GetMapping("/{id}")
  public Customer findById(@PathVariable Long id) {
    return service.findById(id);
  }
}

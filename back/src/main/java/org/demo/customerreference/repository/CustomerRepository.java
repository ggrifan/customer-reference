package org.demo.customerreference.repository;

import org.demo.customerreference.model.Customer;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

  @Override
  @Query("SELECT id, name FROM customer")
  Iterable<Customer> findAll();
}

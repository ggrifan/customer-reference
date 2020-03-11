package org.demo.customerreference.repository;

import org.demo.customerreference.model.Customer;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

  @Override
  @Query(value = "SELECT id, name FROM customer", rowMapperClass = Mapper.class)
  Iterable<Customer> findAll();

  class Mapper extends BeanPropertyRowMapper<Customer> {

    public Mapper() {
      super(Customer.class);
    }
  }
}

package org.demo.customerreference.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

/**
 * Customer model for database operations
 */
@Data
@Builder
public class Customer {

  /**
   * ID
   */
  @Id
  private Long id;

  /**
   * Company name
   */
  private String name;

  /**
   * INN
   */
  private String inn;

  /**
   * KPP
   */
  private String kpp;

  /**
   * CEO first name
   */
  private String ceoFirstName;

  /**
   * CEO middle name
   */
  private String ceoMiddleName;

  /**
   * CEO last name
   */
  private String ceoLastName;

  /**
   * Phone number
   */
  private String phone;
}

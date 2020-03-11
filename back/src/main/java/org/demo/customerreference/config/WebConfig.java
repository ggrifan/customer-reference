package org.demo.customerreference.config;

import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {
  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        String[] allowedMethods = Stream.of(
            HttpMethod.HEAD,
            HttpMethod.GET,
            HttpMethod.POST,
            HttpMethod.PUT,
            HttpMethod.DELETE
        ).map(Enum::name).collect(Collectors.toList()).toArray(new String[]{});

        registry.addMapping("/**")
            .allowedMethods(allowedMethods)
            .allowedOrigins("*");
//            .allowedOrigins("http://localhost");
      }
    };
  }
}

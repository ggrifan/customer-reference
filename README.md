# Customer Reference

### Project has 2 subprojects:

- `back` - backend server based on Spring Boot Framework
- `front` - frontend SPA based on React

### Back
`back` is using PostgreSQL batabase.
Before run application use should create a database.

>Application will use `customer-reference` database name by default.

Under the hood backend uses liquibase to initialize database (create table and fill it with test data).

Run back (run command at project root directory)
```
# for Windows
gradlew :back:bootRun

# for Linux
gradlew.bat :back:bootRun
```

##### Default server port:
```
server.port=8080
```

##### Default database setting:
```
spring.datasource.url=jdbc:postgresql://localhost:5432/customer-reference
spring.datasource.username=postgres
spring.datasource.password=postgres
```

See `application.properties` for other settings.

### Front
Before run application install npm packages
```
cd front
npm install
```

Run application in development mode
```
npm start
```

You can change API base url of backend in `.env.development.local` file
```
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

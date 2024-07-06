For Backend:-

I have choose MVC(Model-View-Controller) Architecture, The reason behind choosing this architecture, because MVC architecture is a popular design pattern for building robust and scalable backend systems.

In MVC,

Model: It represent the Database Schema and business logic of the application. Basically it manages data, logic, and rules of the application.
View: View layer is responsible for rendering the data from the model in a user-friendly format.
Controller: Controller layer works as an intermediary between the Model and View. It handles user input, processes it with the model, and returns the output display.

But for backend there is no view layer,

In backend code all the business logic are goes inside controller folder,
All the database related stubs are goes inside Model folder like database schema,
Inside routes folder we define API routes by using this routes we can access any particular API for performing the action.
All configuration related stubs are goes inside config folder like database configuration, server configuration and swagger configuration.

I have also configure Swagger API docs for API documentation the API url for accessing the Swagger API docs is "/api-docs".

Test Account :-
email :- test@gmail.com
password :- Test@123

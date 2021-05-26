# Lab 26 - 401 JavaScript

## RESTy-API

### Author: Jason Taisey

### Links and Resources

[Github](https://github.com/JTaisey389/RESTy-API)
[Pull-Requests](https://github.com/JTaisey389/RESTy-API/pulls?q=is%3Apr+is%3Aclosed)

### User Stories

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
- As a user, I want to enter the URL to a REST API and select the REST method to use to access it
- As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested
- And as developers, here are the high level development tasks that address the above end user requirements

- Create a visually appealing site with a Header, Footer, and a large content area
- Create a form that asks for a URL
- Create buttons that let the user choose from the REST methods (get, post, put, delete)
- When the form is filled out, and the button is clicked, display the URL and the method chosen

- Day Two User Stories:

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
- As a user, I want to see the results returned from an API request in my browser in a readable format

### Application Flow:

1. User enters an API URL
2. Chooses a REST Method
2. Clicks the “Go” button
3. Application fetches data from the URL given, with the method specified
4. Displays the response headers and results separately
5. Both headers and results should be “pretty printed” JSON


### UML

![UML](Assets/Resty_API.jpg)
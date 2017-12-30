# Installation

> npm install

# Run

> node app.js

# Links

=> Global Route

- http://localhost:5000/api

=> This route will generate the token for authentication

- http://localhost:5000/api/login

=> This route will verify the token and based on that it will redirect to the secured page
 
- http://localhost:5000/api/posts

# Instructions

- To generate the token post the above second link into the postman. This will ganarate the token.
- Then use the above third link to get the posts routes data. Here it will first get the response as a Forbidden. To get the posts data we need to verify the token first. So to do that go to the Headers tab inside the postman then put "Authorization" as a key and inside the value put "bearer <generated_token>"
- Then try again to post the third link. I'll give the response as a user data along with IssuedAt and ExpiresIn time.


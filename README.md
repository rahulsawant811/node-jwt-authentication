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

- To generate the token, use post method for the second link into the postman. This will ganarate the token.
- Then use the above third link to get the posts data. Here it will first give the response as a Forbidden. To get the valid posts data we need to verify the token first. So to do that go to the "Headers" tab inside the postman and put "Authorization" as a key field and inside the value field put "bearer <generated_token>"
- Then try again to post the third link. I'll give the response as a post data along with IssuedAt and ExpiresIn time.


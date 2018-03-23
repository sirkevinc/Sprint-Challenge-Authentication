
## Answers

**1.** 
Middleware is software that sits between the route handler and the client. It is what first handles the request and then passes the response to the handler. Middleware is also able to choose to send the response back in different ways.

Sessions in Express is a session middleware that allows the client to store a cookie from the server. This cookie contains client specific information. Every time the client makes a request to the server, the server can see the information in the cookie and respond appropriately.

Bcrypt is a library that allows us to hash passwords and check passwords. There are many options available that we can take advantage of to make our passwords even more secure such as cost and the ability to add salt.

JWT stands for JSON Web Token. These tokens can be used for authentication. Each token contains a header, payload and signature. The header contains information about the type of token and the hashing algorithm it will use. The payload contains the information. The signature is a combination of the encoded header, payload, secret and is also hashed. JSON Web Tokens can be stored on local storage when an action such as logging in is performed. When trying to access a restricted page, the user sends the JWT in the header, the server verifies the JWT and displays the correct information for that user.

**2.** 
In order to prevent attacks, bcrypt allows us to increase the cost which allows us to limit the total number of hashes possible within a certain amount of time. This prevents an attacker from simply attempting to use a large library of potential passwords and hashing them all because at that point, the amount of time that would be needed to successfully find a password would not be feasible.

**3.**
The three parts of the JSON Web Token are the header, payload and signature. The header contains information about the type of token and the hashing algorithm it will use. The payload contains the information. The signature is a combination of the encoded header, payload, secret and is also hashed.

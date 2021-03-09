# Warbler Solution

## Getting started

1.  In the `warbler-server` folder

    * `npm install`
    * `nodemon` (if installed) or `node index.js`

2.  In the `warbler-client` folder

    * `npm install`
    * `npm start`

# set up git for this

warbler2

## .gitignore

```
node_modules
.DS_Store
.env 
```

# ensureCorrectUser

try once again to get the token

if(decoded && decoded.id)

url is /api/users/:id/messages

:id 2 tries to make a messages for :id 4

what happens ?

this will prevent users from tampering with other users information

# this is the idea of authorization

where are we actually going to use this middleware

index.js, import it

```
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
```

use it before you get to messagesRoutes in middleware

```
app.use(
  "/api/users/:id/messages",
  loginRequired,
  ensureCorrectUser,
  messagesRoutes
);
```

## create a new user

``` 
http POST localhost:8081/api/auth/signup username=hacker password=hacker email=hacker@hacker.com
```

# the idea of Authorization



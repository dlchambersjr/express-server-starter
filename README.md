
[![Build Status](TBD)](TBD)

# Express Server Starter

## Installation

1. Clone the "repo" to your local system.
2. Change to the newly created repo folder.
2. ```npm i``` to load the dependencies found in ```package.json.```
3. Create a ```.env``` file in the root folder and include the following:
  * ```PORT=3000```
  
  * other environment variables as needed
3. Run ```npm start``` in the command line from the root folder to launch the server

## Dependencies

### First Party
* node.js
* nodemon

### Third Party
* babel-env 
* babel-eslint
* babel-polyfill
* babel-register 
* dotenv 
* express
* jsonwebtoken

### Local Modules
* index.js - entry point for server
* server.js - primary server code

## Local Middleware
* 404.js - HTTP 404 Route Not Found handler
* error.js - Error handler for non HTTP response code errors.

## Rendered Pages
The following pages are rendered with ESJ
* 404.ejs - User friendly NOT FOUND response
* error.ejs - User friendly error reporting


## Testing
* 






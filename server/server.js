// Returns the createApplication function in express.js
const express = require('express'); // NOTE: "express" here is NOT a relative direcoty! It's a module name!
									// REF: How does Node.js and require() look for modules? 
									// https://www.bennadel.com/blog/2169-where-does-node-js-and-require-look-for-modules.htm

const app = express();				// Instantiate an Express application.

// Returns a middlware func that Serves Static Files in Express
const fileServerMiddleware = express.static('public'); // static() arg: specifies the directory from which to serve static assets. 
													   // The directory is relative to the directory from where you launch your node process. (i.e. usually the project directory)

// Mount the middleware on the app
app.use('/', fileServerMiddleware);		// first arg: the base URL of any HTTP request
app.listen(3000, ()=>{console.log('App started on port 3000');});


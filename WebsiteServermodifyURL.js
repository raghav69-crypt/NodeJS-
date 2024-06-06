const http = require("http"); // Importing the 'http' module to create an HTTP server
const fs = require('fs');
const port = process.env.PORT || 3005; // Setting the port number to an environment variable or defaulting to 3003

// Creating an HTTP server
const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html"); // Setting the response header to indicate the content type is HTML

    console.log(req.url); // Logging the request URL

    if(req.url == '/') { // If the request URL is the root
        res.statusCode = 200; // Set status code to 200 (OK)
        res.end('<h1>This is Raghavcode <p>qwertyui</p>'); // Send HTML response
    } 
    else if(req.url == '/about') { // If the request URL is '/about'
        res.statusCode = 200; // Set status code to 200 (OK)
        res.end('<h1>This is Raghavcode on URL modified <p>qwertyui</p>'); // Send HTML response
    } 
    else if(req.url == '/runninghtml') { // If the request URL is '/about'
        res.statusCode = 200; // Set status code to 200 (OK)
        const data = fs.readFileSync("runninghtmlonserver.html");
        res.end(data.tostring()); // Send HTML response
    } 
    else { // For any other request URL
        res.statusCode = 404; // Set status code to 404 (Not Found)
        res.end('<h1>Not Found <p>Page is not found on the server</p>'); // Send HTML response indicating page not found
    }
});


// Server starts listening on the specified port
server.listen(port, () => {
    console.log(`Server is listening at ${port}`); // Log a message indicating the server is listening on the specified port
});

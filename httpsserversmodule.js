const http = require("http"); // Importing the 'http' module which helps in creating HTTP servers
// const {console} = require("console");
const port = process.env.PORT || 3001; // Setting up the port number where the server will listen. It uses the port provided by the environment variable 'PORT' or defaults to port 3001 if not provided

// Creating a server instance
const server = http.createServer((req , res)=>{
    // console.log(req);
    res.statusCode = 200; // Setting the status code of the response to 200, which means 'OK'
    res.setHeader("Content-type" , "text/html") // Setting the response header to indicate that the content type is HTML
    res.end('<h1> this is raghavcode <p>qwertyui </p>'); // Sending a response with HTML content
})

// Server listening on a port
server.listen(port , ()=>{
    console.log('Server is listening at ${port}'); // Logging a message indicating that the server is listening on the specified port
})

//var express = require("express");

//var path = require("path");
//var app = express();

// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7500;



// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
//   });
  
//   app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
//   });

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}



// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
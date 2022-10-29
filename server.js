// Importing the http module
const http = require("http");
const fs = require("fs");

const bodyScript = "<!-- script:body -->";
let indexHtml = fs.readFileSync("./index.html", { encoding: "utf8" });
indexHtml = indexHtml.replace(bodyScript, `<script src="www/${process.argv[2]}.js"></script>`);

// Creating server 
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(indexHtml);
        res.end();
    } else {
        fs.readFile(__dirname + req.url, function (err,data) {
            if (err) {
              res.writeHead(404);
              res.end(JSON.stringify(err));
              return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }
})
  
// Server listening to port 3000
server.listen((3000), () => {
    console.log("Server is Running");
})
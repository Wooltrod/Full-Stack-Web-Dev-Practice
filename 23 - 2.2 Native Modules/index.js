const fs = require("fs"); //fs (File System) module passed in as a string

fs.writeFile("message.txt", "Hello from Node.js!", (err) =>{
    if (err) throw err;
    console.log("The file has been saved!");
});
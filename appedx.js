const express = require("express");

const path = require("path");

const app = express();

/*const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));*/

app.listen(3080, () => {
    console.log("El servidor 3080 está corriendo");
});

app.get("/index", (req, res) => {
    let htmlPath= path.resolve(__dirname, "./index.html");
    res.sendFile(htmlPath);
});
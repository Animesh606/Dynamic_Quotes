const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.render("index", {
        name : "Animesh",
        time : "morning"
    });
})
app.listen(port);
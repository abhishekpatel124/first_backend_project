const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {mkdir public\javascripts, public\stylesheets
//     res.send("Hello World!");
// });
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("main");
});

app.get("/stylesheets/style.css", (req, res) => {
    res.send("Hello World!");
});


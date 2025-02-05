const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const path = require('path');


app.get('/', (req, res) => {
    return res.render('index');
});

app.get('/index', (req, res) => {
    return res.render('index');
});

app.get('/charts', (req, res) => {
    return res.render('chart');
});

app.get('/widgets', (req, res) => {
    return res.render('widgets');
});

app.get('/tables', (req, res) => {
    return res.render('tables');
});

app.get('/grid', (req, res) => {
    return res.render('grid');
});

// app.get('/form-basic', (req, res) => {
//     return res.render('form-basic');
// });

app.get('/pages-buttons', (req, res) => {
    return res.render('pages-buttons');
});

// app.get('/icon-material', (req, res) => {
//     return res.render('icon-material');
// });


app.listen(port, (err) => {
    if (!err) {
        console.log("Server Start Properly...");
        console.log("http://localhost:" + port);
    }
});
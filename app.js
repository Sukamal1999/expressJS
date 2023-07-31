const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title" placeholder="Product Title"><br>
            <input type="text" name="size" placeholder="Product Size"><br>
            <button type="submit">Add Product</button>
        </form>
    `);
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.send(`<h1>Product Title: ${req.body.title}</h1><h2>Product Size: ${req.body.size}</h2>`);
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

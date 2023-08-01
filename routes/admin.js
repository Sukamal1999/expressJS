const express = require('express');
const router = express.Router();

//  /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send(`
        <form action="/admin/product" method="POST">
            <input type="text" name="title" placeholder="Product Title"><br>
            <input type="text" name="size" placeholder="Product Size"><br>
            <button type="submit">Add Product</button>
        </form>
    `);
});

//  /admin/add-product => POST
router.post('/product', (req, res, next) => {
    console.log(req.body);
    //res.send(`<h1>Product Title: ${req.body.title}</h1><h2>Product Size: ${req.body.size}</h2>`);
    res.redirect('/');
});

module.exports = router;

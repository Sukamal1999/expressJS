const express = require('express');

const app = express();

app.use((req, res, next) => {
    
    console.log('In the middlewear!');

    next();
});

app.use((req, res, next) => {
    
    console.log('In another middlewear!');

    res.send('<h1> Helli From Express!</h1>');

});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
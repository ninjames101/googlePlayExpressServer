const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8000;
app.use(morgan('common'));


app.get('/apps', (req, res) => {

});

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
})

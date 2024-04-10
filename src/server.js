/* bài tập 1 */
const express = require('express');
var router =require('../router/routers.js');
const app = express();
// const hostname = '127.0.0.1';
const port = 3000;
var bodyParser = require('body-parser');
var checkAdmin = require('../middleware/checkId.js')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const server = app.get('/checkAdmin', (next, req, res)=> {
  res.send("hoho");
})

app.use('/api/v1/todos', router);
// app.use('api/v1/todos')

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


module.exports = checkAdmin





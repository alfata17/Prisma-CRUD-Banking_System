const express = require('express');
const app = express();
const port = 3000

const routers = require('./router')

//perlu ditambahkan sesuatu untuk bisa 
//menambahkan data
app.use(express.json())

app.use(routers);

app.listen(port, () => 
    console
      .log(`Server run at http://localhost:${port}
    `))

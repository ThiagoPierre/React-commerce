const express = require("express");
/* const bodyParser = require("body-parser");
const cors = require("cors"); */
const mongoose = require("mongoose");
const UserRouter = require('./routes/user.router')

mongoose.connect('mongodb://localhost:27017/ecommercetest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

// Apenas para rodar na porta escolhida
app.listen(3333, () => {
    console.log("Rodando na porta 3333")
})


// Middleware, na rota API, utiliza o arquivo UserRouter(sempre vai conectar em /api/something)
app.use('/api', UserRouter)

app.get("/", (req, res) => {
    response.json({
        message: "Hello World"
    });
});

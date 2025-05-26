const express = require("express");
require("dotenv").config();
require("./config/db");
const routes = require("./routes");

const server = express();

server.use("/v1",routes);

server.use((err, req, res, next) => {
    console.error(err.stack); // Optional: for debugging
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
});

const PORT = process.env.PORT || 5000;
server.listen(process.env.PORT || 5000,()=>{
    console.log(`Server Is Listening On --> http://localhost:${PORT}`);
})
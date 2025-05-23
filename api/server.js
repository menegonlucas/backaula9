require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const loginRoutes = require('./src/routes/login');
const postsRoutes = require('./src/routes/posts');

app.use(express.json());
app.use(cors());

app.use(loginRoutes);
app.use(postsRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
})
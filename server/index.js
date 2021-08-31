const path = require('path');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8081);
app.use(express.static(path.resolve(__dirname, '../my-app/build')));

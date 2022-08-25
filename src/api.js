const express = require('express');
const LoginRoutes = require('./routes/loginRoutes');
// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', LoginRoutes);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

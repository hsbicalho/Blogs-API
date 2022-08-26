const express = require('express');
const LoginRoutes = require('./routes/loginRoutes');
const UserRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// ...
app.use('/login', LoginRoutes);
app.use('/user', UserRoutes);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

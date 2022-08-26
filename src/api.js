const express = require('express');
const CategoryRoutes = require('./routes/categoryRoutes');
const UserRoutes = require('./routes/userRoutes');
const LoginRoutes = require('./routes/loginRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());

// ...
app.use('/login', LoginRoutes);
app.use('/user', UserRoutes);
app.use('/categories', CategoryRoutes);
app.use('/post', postRoutes);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

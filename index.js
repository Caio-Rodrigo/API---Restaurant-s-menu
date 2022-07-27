require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/Database/database');
const user = require('./src/User/routes/user.routes');
const auth = require('./src/Auth/routes/auth.routes');
const menu = require('./src/Menu/routes/menu.Route');
const swagger = require('./src/Swagger/swagger.routes');

const port = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/Auth', auth);
app.use('/User', user);
app.use('/Menu', menu);
app.use('/swagger', swagger);

app.listen(port, () =>
	console.log(`Server listening on http://localhost:${port}`),
);

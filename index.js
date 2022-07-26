require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/Database/database');
const userRoutes = require('./src/User/routes/user.routes')

const port = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/', userRoutes);

app.listen(port, () =>
	console.log(`Server listening on http://localhost:${port}`),
);

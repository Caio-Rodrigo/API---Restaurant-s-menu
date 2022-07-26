require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/Database/database');

const port = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.listen(port, () =>
	console.log(`Server listening on http://localhost:${port}`),
);

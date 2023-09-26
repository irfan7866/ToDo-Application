const express = require('express');
const database = require("./DB/databaseConnection")
const app = express();
const PORT = 4000;
const cors = require('cors');
const helmet = require('helmet');

app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(cors());

const userRoutes = require('./Routes/userRoute');
app.use('/api/user', userRoutes);

const listRoutes = require('./Routes/listRoute');
app.use('/api/list', listRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
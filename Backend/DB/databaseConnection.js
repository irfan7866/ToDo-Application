const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/todo';

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Successfully connected with MongoDB");
}).catch((error)=>{
    console.log(error);
});
// Dependencies
const express = require('express');
const morgan = require('morgan');
const app = express();

// Routes
const user = require('./routes/user');
const employee = require('./routes/employee');

// Middlewares
const auth = require('./middlewares/auth');
const notfound = require('./middlewares/notfound');
const index = require('./middlewares/index');
const cors = require('./middlewares/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", index);
app.use("/user", user);
//app.use(auth);
app.use("/employee", employee);
app.use(notfound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
})
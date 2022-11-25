const express = require('express');
const usersRouter = require('./users/users.router');

const PORT = 9000;
const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

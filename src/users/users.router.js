const { getAllUsers, postUser, getUser } = require('./users.services');

const usersRouter = require('express').Router();

usersRouter.get('/', getAllUsers);
usersRouter.post('/', postUser);
usersRouter.get('/:id', getUser);

module.exports = usersRouter;
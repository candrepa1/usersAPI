const isBodyCorrect = require("../isBodyCorrect");
const { findAllUsers, createUser, findUser } = require("./users.controllers")

const getAllUsers = (req, res) => {
    const users = findAllUsers();
    res.status(200).json(users);
}

const postUser = (req, res) => {
    const userInfo = req.body;
    if(isBodyCorrect(userInfo)) {
        const user = createUser(userInfo);
        res.status(200).json(user);
    } else {
        res.status(400).json({message: 'Invalid data', fields: {first_name: 'string', last_name: 'string', email: 'string', password: 'string', birthday: 'YYYY/MM/DD'}})
    }
}

const getUser = (req, res) => {
    const {id} = req.params;
    const user = findUser(id);
    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({message: 'User not found'})
    }
}

module.exports = {
    getAllUsers, 
    postUser, 
    getUser
}
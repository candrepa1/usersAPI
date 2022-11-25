const usersDB = [];
let id = 1;

const findAllUsers = () => usersDB;

const createUser = (userInfo) => {
    const user = {id: id++, ...userInfo};
    usersDB.push(user);

    return user;
}

const findUser = (userId) => {
    const user = usersDB.find(({id}) => id == userId);

    return user;
}

module.exports = {
    findAllUsers, 
    createUser, 
    findUser
}
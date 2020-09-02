let users = [
    {id: 1, name: "Dima", age: 22},
    {id: 2, name: "Inna", age: 33}
];

module.exports = {
    fetchAll: () => {
        return users;
    },

    getUserByName: (name) => {
        return users.find(u => u.name === name);
},
    removeUserByName: (name) => {
        return users.find(u => u.name === name);
    },

    create: (userObject) => {
        const lastUserId = users[users.length - 1].id + 1;
        users.push({ id: lastUserId, ...userObject });

        return { id: lastUserId, ...userObject}
    }
};

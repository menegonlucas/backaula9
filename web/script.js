import api from './api.js';

const login = () => {
    api
    .post("/login", {
        user: "usuario@gmail.com",
        psw: "a1b2@b3c4"
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });
}

login();
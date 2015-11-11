//"use strict";
let login = (username, pw) => {
    if (username !== 'admin' || pw !== 'radical') {
        console.log("login incorrect");
    }
};

login("admin", "test");

const mongoose = require('mongoose'),
    CONFIG = require('../config'),
    db = mongoose.connection

mongoose.connect(CONFIG.URL, {
    useNewUrlParser: true
})

db.once('open', () => {
    console.log("Connected to Server");
}).on('error', (err) => {
    console.log("CONNECTION FAILED!");
    console.log(err);
});


module.exports = (router) => {
    const AccountsController =
        require('./controller/AccountsController')(mongoose);

    router
        .post('/api/register', AccountsController.Register)
        .post('/api/login', AccountsController.Login)
}
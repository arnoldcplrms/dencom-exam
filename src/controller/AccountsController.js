const bcrypt = require('bcrypt'),
    saltRounds = 10

const errorHandler = (error, res) => {
        console.log(error);
        res.status(500).send({
            err: error
        })
    },
    HashPassword = async(data) => {
        let salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(data, salt);
    }

module.exports = (mongoose) => {
    const AccountsDAL =
        require('../data_access/AccountsDataAccess')(mongoose);

    return {
        async Register(req, res) {
            try {
                let password = await HashPassword(req.body.Password);
                req.body.Password = password;
                await AccountsDAL.Register(req);
                res.send({
                    message: `Inserted succesfully`
                });
            } catch (error) {
                errorHandler(error, res);
            }
        },
        async Login(req, res) {
            try {
                const isAuthorized = await AccountsDAL.Login(req)
                isAuthorized ?
                    res.send({
                        message: 'Welcome user'
                    }) :
                    res.status(400).send({
                        message: 'Invalid username or password.'
                    });
            } catch (error) {
                errorHandler(error, res);
            }
        }
    }
}
const Account = require('../model/Accounts');
const bcrypt = require('bcrypt');
module.exports = (mongoose) => {
    return {
        async Register(req) {
            const body = req.body;
            await new Account({
                _id: new mongoose.Types.ObjectId(),
                FirstName: body.FirstName,
                LastName: body.LastName,
                MiddleName: body.MiddleName,
                UserName: body.UserName,
                Password: body.Password,
            }).save();
        },
        async Login(req) {
            let res;
            let data = req.body;
            const account = await Account.findOne({
                UserName: data.UserName
            }).exec();

            (account &&
                await bcrypt.compare(data.Password, account.Password)) ?
            res = true: res = false;

            return res;
        }
    }
}
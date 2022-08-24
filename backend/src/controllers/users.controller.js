const usersCtrl = {};

const UserModel = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await UserModel.find()
    res.json(users)
}

/* usersCtrl.getUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    res.json(user)
} */

usersCtrl.createUser = async (req, res) => {
    console.log(req.body)
    const user = new UserModel(req.body)
    await user.save()
    res.json({
        status: 'User Saved'
    })
}

usersCtrl.deleteUser = async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id)
    res.json({
        status: 'User Deleted'
    })
}




module.exports = usersCtrl;
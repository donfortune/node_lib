const user = require('/Users/mac/node_libApi/models/userModel.js');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        res.json({
            status: 'fail',
            message: error
        })
    }
    
}

exports.addUser = async (req, res) => {
    try {
        console.log(req.body);
        const newUser = await user.create(req.body);
        console.log('User added successfully');
        res.status(201).json({
            status: 'success',
            data: {
                newUser
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}


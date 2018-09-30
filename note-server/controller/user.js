const {Router} = require("express");
const router = Router();
const userModel = require('../model/user');

router.post('/user', async(req, res) => {
    try {
        const {username, password, email} = req.body;
        const data = await userModel.create({username, password, email});
        console.log(data);
        res.json({
            code: 200,
        })

    } catch(err) {
        next(err)
    }

});

module.exports = router;
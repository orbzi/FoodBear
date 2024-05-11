const express = require('express');
const router = express.Router();
const User = require('../models/User');

//this is being created to add/create data in the DB through a model designed through mongoose and node
//a post request will be written

router.post("/createuser", async (req, resp) => {
    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.email.location
        })

        resp.json({ success: true });
    }
    catch (error) {
        console.log(error);
        resp.json({ success: false });

    }

});

module.exports = router;
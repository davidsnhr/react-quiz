const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.post('/users', async(req, res) => {
    const user = new User(req.body);
    try {
        console.log(req.body);
        await user.save();

       // const token = await user.generateAuthToken();
        res.status(201).send({user});
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = router;
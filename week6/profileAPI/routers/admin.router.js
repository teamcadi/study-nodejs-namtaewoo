const { images } = require('../database/images.db');
const { users } = require('../database/user.db');

const router = require('express').Router();

router.get('/users', async (req,res)=>{
    res.status(200).json(users);
});
router.get('/images', async (req,res)=>{
    res.status(200).json(images);
});

module.exports = router;
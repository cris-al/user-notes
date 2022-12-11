const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {SECRET_JWT} = process.env;
const {User, Note} = require('../db.js');

const router = Router();
var userLogId = 0;

router.get('/users', async (req, res)=>{
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});
router.post('/user/login', async (req, res)=>{
    const {email, password} = req.body;
    
    try {
        if(!email) return res.json({success: false, msg: 'email is require...'});
        if(!password) return res.json({success: false, msg: 'password is require...'});
        
        let user = await User.findOne({where: {email: email}});

        if(!user) return res.json({success: false, msg: 'email is not found...'});
        
        let passwordCorrect = await bcryptjs.compare(password, user.password);

        if(!passwordCorrect) return res.json({success: false, msg: 'incorrect user or password...'});
        
        const payload = {email: user.email, name: user.name}
        const token = jwt.sign(payload, SECRET_JWT, {expiresIn: '1d'});
        
        userLogId = user.id;
        res.json({success: true, msg: 'successfully..', data:{user, token}});

    } catch (error) {
        console.log(error);
    }
});
router.post('/user/register', async (req,res)=>{
    let {email, password, name, lastName} = req.body;
    try {
        if(!email) return res.status(404).json({success: false, msg: 'email is require...'});
        if(!password) return res.status(404).json({success: false, msg: 'password is require...'});
        if(!name) return res.status(404).json({success: false, msg: 'name is require...'});
        if(!lastName) return res.status(404).json({success: false, msg: 'lastName is require...'});
        
        let salt = await bcryptjs.genSalt(10);
        password = await bcryptjs.hash(password,salt);
        
        await User.create({email, name, password, lastName});
        res.status(200).json({success: true, msg: 'successfully...'});

    } catch (error) {
        console.log(error);
    }
});
router.get('/user/:id/notes', async (req, res)=>{
    const id = req.params.id;
    try {
        if(!id) res.status(404).json({msg: 'id is require...'})
        const user = await User.findByPk(id);
        
        if(!user) res.status(404).json({msg: 'user is not found...'});
        
        const userNote = await Note.findAll({where: {userId: id}})
        res.json(userNote);

    } catch (error) {
        console.log(error);
    }
});
router.post('/notes/create', async (req, res)=>{
    const {title, contents} = req.body;
    
    try {
        if(!title) res.json({msg: 'title is require...'});
        if(!contents) res.json({msg: 'contents is require...'});

        const note = await Note.create({title, contents, userId: userLogId});
        res.json(note);
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;

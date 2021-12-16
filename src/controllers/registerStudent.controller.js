const express = require('express');

require("dotenv").config();
const jwt = require("jsonwebtoken");

const { body , validationResult } = require('express-validator');
const router = express.Router();

const RegisterStudent = require('../models/registerStudent.model');


const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
  };
  
router.post('/',
  body('first_Name')
  .notEmpty()
  .withMessage('This field is required'),
  body('last_name')
  .notEmpty()
  .withMessage('This field is required') ,
  body('email')
  .custom(async (value) => {
      const isEmail =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
     if(!isEmail){
        throw new error('Please enter proper email address')
     }
      return true;
    })
  .notEmpty()
  .withMessage('This field is required'),
  body('password')
  .isLength({min:8, max:16})
  .notEmpty()
  .withMessage('Password must be between 4 to 16 characters'),
  body('mobile')
  .isLength({min:10, max:10})
  .notEmpty()
  .withMessage('This field is required') ,
  body('preference')
  .notEmpty()
  .withMessage('This field is required') ,
  body('howfind')
  .notEmpty()
  .withMessage('This field is required') ,
  body('lookingFor')
  .notEmpty()
  .withMessage('This field is required') ,
  async (req, res) => {

     const errors = validationResult(req);

    if(!errors.isEmpty()){

      let newError = errors.array().map(({msg,param, location})=>{
        return{
        [param]:msg,
        }
      
      });
      return res.status(400).json({errors:newError});
    }

    try {
      
      let user = await RegisterStudent.findOne({ email: req.body.email }).lean().exec();
      if (user)
        return res.status(400).json({
          status: "failed",
          message: " Please provide a different email address",
        });
  
      user = await RegisterStudent.create({
                    first_Name : req.body.first_Name,
                    last_name : req.body.last_name,
                    email :req.body.email,
                    password : req.body.password,
                    mobile : req.body.mobile,
                    city : req.body.city,
                    preference :req.body.preference,
                    howfind :req.body.howfind,
                    lookingFor :req.body.lookingFor,
                    affilate :req.body.affilate,
                });
  
      const token = newToken(user);
      res.status(201).json({ user, token });

    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });
  
  module.exports = router;

router.get('/registerAsStudent' , async ( req,res) => {
    try{
        const registerStudent = await RegisterStudent.find().lean().exec();
        // res.status(201).send(registerStudent)
        return res.render('register/registerAsStudent',{
      
        })

    }catch (e) {
        res.status(401).json(
            {
                status : 'Failed' ,
                message : e.message,
            });
    }
})

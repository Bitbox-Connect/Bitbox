import express  from "express";
const router=express.Router;
import userController from '../Controllers/Controller.js'

router.get('/login',userController.userLogin)
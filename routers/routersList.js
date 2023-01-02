const express=require('express');
const router=express.Router();
const fs = require('fs');
const getIdController=require('../controllers/searc')
const getNameController=require('../controllers/searc')
const getLnameController=require('../controllers/searc')
const allUsersController=require('../controllers/searc')
router.get('/getId',getIdController.getId)

router.get('/getFname',getNameController.getName)

router.get('/getLname', getLnameController.getLname)

router.get('/allUsers', allUsersController.allUsers)
 
module.exports=router    
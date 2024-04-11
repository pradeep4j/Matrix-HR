import express from "express";
import { isAdmin,protectRoute } from '../middlewares/authMiddleware.js';
import axios from 'axios'; //here axios only used to validate reCaptcha
import {createNameRate} from '../controllers/liseRegController/NameRate.js';
import { upload } from "../middlewares/multerConfig.js";
//console.log(upload);


// const storage = multer.memoryStorage();
  
// var upload = multer({ storage: storage })
const router = express.Router();

router.post('/namerateCreate',protectRoute, createNameRate);
// router.post('/searchUsersRecords/:id',protectRoute,isAdmin,searchUsersRecordsNav);
// router.get('/confirmuser/:token',confirmuser);       
// router.delete('/delete/:id',deleteUsers);

export default router;

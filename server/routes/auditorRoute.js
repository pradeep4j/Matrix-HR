import express from "express";
import { isAdmin,protectRoute } from '../middlewares/authMiddleware.js';
import axios from 'axios'; //here axios only used to validate reCaptcha
import {login,logout,catCreate,catGettting,catEditById,deleteCat,stateGetting,gettingUser,notificationCreate,createUser,editUser,deleteUser,gettingCompany,gettingBranch,gettingCompliances,gettingCompliancesAll,createBranch,createCompany,createCompliances,gettingNotification,gettingCompliancesById,gettingCompliancesOnCreate,updateCompliancesById,complianceApporve,gettingCompliancesReject,complianceReject,complianceFilter,complianceRejectedFilter,gettingCompliancesAllFilter,checkListCreate,checkListFind,updateChecklistsById,checklistOnCreateegetting,gettingchecklistById,checklistAllgetting,checklistApporve,checkListAllFilter,checkListCreateFilter,checklistApprovegetting,checkListApproveFilter,checklistOnRejectegetting,rejectChecklist,checkListRejectedFilter,gettingchecklistAllCompliance,complianceApproveFilter} from '../controllers/Auditor.js';
import {createNameRate} from '../controllers/liseRegController/NameRate.js';
import { upload } from "../middlewares/multerConfig.js";
//console.log(upload);


// const storage = multer.memoryStorage();
  
// var upload = multer({ storage: storage })
const router = express.Router();

router.post('/login',login); 
router.get('/logout',logout);
router.post('/catCreate',protectRoute,catCreate);
router.get('/catGettting',protectRoute,catGettting);
router.get('/stateGetting',protectRoute,stateGetting);
router.get('/gettingUser',protectRoute,gettingUser);
router.post('/notificationCreate', upload.single("document"),protectRoute,notificationCreate);
router.get('/gettingNotification',protectRoute, gettingNotification);
router.get('/comapany/:comany/:state/:date',protectRoute,notificationCreate);
router.post('/userCreate',protectRoute, createUser )


// router.post('/add-user',createUsers); //router.route('/add-user').post(protectRoute,createUsers); both the ways will work
router.put('/editUser/:id',protectRoute,editUser);
//router.route('/editUser/:id').put(protectRoute,editUser);  //this way of request routes is also be taken 
router.delete('/deleteUser/:id',protectRoute,deleteUser);
// router.put('/update-user-profile/:id',protectRoute,updateUsersProfileById);
router.put('/catEditById/:id',protectRoute,catEditById);
router.delete('/deleteCat/:id',protectRoute,deleteCat);
router.get('/gettingCompany',protectRoute, gettingCompany);
router.get('/gettingBranch',protectRoute, gettingBranch);
router.post('/createBranch',protectRoute, createBranch);
router.post('/createCompany',protectRoute, createCompany);
router.post('/createCompliances',upload.fields([{ name: 'image' }, { name: 'document' }]),protectRoute, createCompliances);
router.get('/gettingCompliances',protectRoute, gettingCompliances);
router.get('/gettingCompliancesAll',protectRoute, gettingCompliancesAll);
router.get('/gettingCompliancesOnCreate',protectRoute, gettingCompliancesOnCreate);
router.get('/gettingCompliancesById/:id',protectRoute,gettingCompliancesById);
router.put('/updateCompliancesById/:id',upload.fields([{ name: 'image' }, { name: 'document' }]),protectRoute,updateCompliancesById);
router.patch('/complianceApporve',protectRoute,complianceApporve);
router.patch('/complianceReject',protectRoute,complianceReject);
router.post('/complianceApproveFilter', protectRoute,complianceApproveFilter );
router.post('/gettingCompliancesFilter', protectRoute,complianceFilter );
router.post('/gettingCompliancesAllFilter', protectRoute,gettingCompliancesAllFilter);
router.post('/gettingCompliancesRejetFilter', protectRoute,complianceRejectedFilter);
router.get('/gettingCompliancesReject',protectRoute, gettingCompliancesReject);
router.post('/checkListCreate', upload.fields([{ name: 'image' }, { name: 'document' }]) ,protectRoute, checkListCreate)
router.get('/checkListGetting',protectRoute, checkListFind);
router.put('/updateChecklistsById/:id',upload.fields([{ name: 'image' }, { name: 'document' }]),protectRoute,updateChecklistsById);
router.get('/checklistOnCreateegetting',protectRoute, checklistOnCreateegetting);
router.get('/gettingchecklistById/:id',protectRoute,gettingchecklistById);
router.get('/checklistAllgetting',protectRoute, checklistAllgetting);
router.get('/checklistApprovegetting',protectRoute, checklistApprovegetting)
router.patch('/checklistApporve',protectRoute,checklistApporve);
router.post('/checkListAllFilter',protectRoute, checkListAllFilter)
router.post('/checkListApproveFilter',protectRoute, checkListApproveFilter)
router.post('/checkListCreateFilter',protectRoute, checkListCreateFilter)
router.get('/checklistOnRejectegetting',protectRoute, checklistOnRejectegetting) 
router.patch('/rejectChecklist',protectRoute, rejectChecklist)
router.post('/checkListRejectedFilter',protectRoute, checkListRejectedFilter)
router.get('/gettingchecklistAllCompliance',protectRoute, gettingchecklistAllCompliance)
router.use((req, res, next) => {
    console.log(`In router: ${req.method}:${req.originalUrl}`);
    next();
});
// router.post('/searchUsersRecords/:id',protectRoute,isAdmin,searchUsersRecordsNav);
// router.get('/confirmuser/:token',confirmuser);       
// router.delete('/delete/:id',deleteUsers);

export default router;

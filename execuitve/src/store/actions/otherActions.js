import { auditoreGet,catCreate,catGet,catEdit,catDelete,gettingState,gettingUser,NotificationCreate,gettingNotification,userCreate,editUser,userDelete,createChecklist,gettingChecklist,gettingCompany,gettingBranch,createBranch,createCompany,createCompliances,gettingCompliances,gettingCompliancesById,gettingCompliancesOnCreate,complianceApporve,gettingCompliancesReject,complianceReject,updateCompliancesById,gettingCompliancesAll,gettingCompliancesFilter,gettingCompliancesAllFilter,gettingCompliancesRejetFilter,updateChecklistsById,checklistOnCreateegetting,gettingchecklistById,checklistAllgetting,checklistApporve,gettingchecklistAllFilter,gettingchecklistOnCreateFilter,checklistApprovegetting,gettingchecklistOnApproveFilter,checklistOnRejectegetting,rejectChecklist,gettingchecklistOnrejectFilter,gettingchecklistAllCompliance,gettingcomplianceOnApproveFilter,gettingChecklistOnCreate,createLiseReg,gettingAuditDetail} from "../../routes/api";

// import { namerateCreate} from "../../routes/lisregapi";
import { toast } from 'react-toastify';
import {
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
    CATEGORY_REQUEST_GET,
    CATEGORY_SUCCESS_GET,
    AUDITOR_REQUEST_GET,
    AUDITOR_SUCCESS_GET,
    AUDITOR_GET_FAIL,
    CATEGORY_GET_FAIL,
    CATEGORY_REQUEST_EDIT,
    CATEGORY_SUCCESS_EDIT,
    CATEGORY_EDIT_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    STATE_REQUEST_GET,
    STATE_SUCCESS_GET,
    STATE_GET_FAIL,
    USER_REQUEST_GET,
    USER_SUCCESS_GET,
    USER_GET_FAIL,
    NOTFICATION_CREATE_REQUEST,
    NOTFICATION_CREATE_SUCCESS,
    NOTFICATION_CREATE_FAIL,
    NOTFICATION_REQUEST_GET,
    NOTFICATION_SUCCESS_GET,
    NOTFICATION_GET_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_REQUEST_EDIT,
    USER_SUCCESS_EDIT,
    USER_EDIT_FAIL,
    CHECKLIST_CREATE_REQUEST,
    CHECKLIST_CREATE_SUCCESS,
    CHECKLIST_CREATE_FAIL,
    CHECKLIST_REQUEST_GET,
    CHECKLIST_SUCCESS_GET,
    CHECKLIST_GET_FAIL,
    CHECKLIST_REQUEST_UPDATE_BYID,
    CHECKLIST_SUCCESS_UPDATE_BYID,
    CHECKLIST_FAIL_UPDATE_BYID,
    CHECKLIST_REQUEST_GET_CREATE,
    CHECKLIST_SUCCESS_GET_CREATE,
    CHECKLIST_GET_FAIL_CREATE,
    CHECKLIST_REQUEST_GET_BYID,
    CHECKLIST_SUCCESS_GET_BYID,
    CHECKLIST_FAIL_GET_BYID,
    CHECKLIST_REQUEST_GET_ALL,
    CHECKLIST_SUCCESS_GET_ALL,
    CHECKLIST_GET_FAIL_ALL,
    CHECKLIST_REQUEST_GET_APPROVE_PAGE,
    CHECKLIST_SUCCESS_GET_APPROVE_PAGE,
    CHECKLIST_GET_FAIL_APPROVE_PAGE,
    CHECKLIST_REQUEST_GET_APPROVE,
    CHECKLIST_SUCCESS_GET_APPROVE,
    CHECKLIST_REQUEST_GET_APPROVE_FAIL,
    CHECKLIST_REQUEST_ALL_FILTER,
    CHECKLIST_SUCCESS_ALL_FILTER,
    CHECKLIST_ALL_FAIL_FILTER,
    CHECKLIST_REQUEST_CREATE_FILTER,
    CHECKLIST_SUCCESS_CREATE_FILTER,
    CHECKLIST_ALL_CREATE_FILTER,
    CHECKLIST_REQUEST_APPROVE_FILTER,
    CHECKLIST_SUCCESS_APPROVE_FILTER,
    CHECKLIST_ALL_APPROVE_FILTER,
    CHECKLIST_REQUEST_GET_REJECT,
    CHECKLIST_SUCCESS_GET_REJECT,
    CHECKLIST_GET_FAIL_REJECT,
    CHECKLIST_REQUEST_REJECT,
    CHECKLIST_SUCCESS_REJECT,
    CHECKLIST_REQUEST_REJECT_FAIL,
    CHECKLIST_REQUEST_REJECT_FILTER,
    CHECKLIST_SUCCESS_REJECT_FILTER,
    CHECKLIST_ALL_REJECT_FILTER,
    CHECKLIST_REQUEST_All_COMPLIANCE,
    CHECKLIST_SUCCESS_All_COMPLIANCE,
    CHECKLIST_FAIL_All_COMPLIANCE,
    AUDIT_REQUEST_All_DETAIL,
    AUDIT_SUCCESS_All_DETAIL,
    AUDIT_FAIL_All_DETAIL,
    BRANCH_REQUEST_GET,
    BRANCH_SUCCESS_GET,
    BRANCH_GET_FAIL,
    COMPANY_REQUEST_GET,
    COMPANY_SUCCESS_GET,
    COMPANY_GET_FAIL,
    COMPLIANCE_REQUEST_GET,
    COMPLIANCE_SUCCESS_GET,
    COMPLIANCE_GET_FAIL,
    COMPLIANCE_REQUEST_GET_ALL,
    COMPLIANCE_SUCCESS_GET_ALL,
    COMPLIANCE_GET_FAIL_ALL,
    COMPLIANCE_REQUEST_GET_CREATE,
    COMPLIANCE_SUCCESS_GET_CREATE,
    COMPLIANCE_GET_FAIL_CREATE,
    COMPLIANCE_REQUEST_GET_BYID,
    COMPLIANCE_SUCCESS_GET_BYID,
    COMPLIANCE_FAIL_GET_BYID,
    COMPLIANCE_REQUEST_UPDATE_BYID,
    COMPLIANCE_SUCCESS_UPDATE_BYID,
    COMPLIANCE_FAIL_UPDATE_BYID,
    COMPLIANCE_REQUEST_GET_APPROVE,
    COMPLIANCE_SUCCESS_GET_APPROVE,
    COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
    COMPLIANCE_REQUEST_GET_REJECT,
    COMPLIANCE_SUCCESS_GET_REJECT,
    COMPLIANCE_REQUEST_GET_REJECT_FAIL,
    COMPLIANCE_REQUEST_REJECT_FILTER,
    COMPLIANCE_SUCCESS_REJECT_FILTER,
    COMPLIANCE_REJECT_FAIL_FILTER,
    COMPLIANCE_REQUEST_APPROVE_FILTER,
    COMPLIANCE_SUCCESS_APPROVE_FILTER,
    COMPLIANCE_APPROVE_FAIL_FILTER,
    COMPLIANCE_REQUEST_GET_FILTER,
    COMPLIANCE_SUCCESS_GET_FILTER,
    COMPLIANCE_GET_FAIL_FILTER,
    COMPLIANCE_REQUEST_REJECT,
    COMPLIANCE_SUCCESS_REJECT,
    COMPLIANCE_REQUEST_REJECT_FAIL,
    COMPLIANCE_SUCCESS_GET_ALL_FILTER,
    COMPLIANCE_REQUEST_GET_ALL_FILTER,
    COMPLIANCE_GET_FAIL_ALL_FILTER,
    BRANCH_CREATE_REQUEST,
    BRANCH_CREATE_SUCCESS,
    BRANCH_CREATE_FAIL,
    COMPANY_CREATE_REQUEST,
    COMPANY_CREATE_SUCCESS,
    COMPANY_CREATE_FAIL,
    COMPLIANCE_CREATE_REQUEST,
    COMPLIANCE_CREATE_SUCCESS,
    COMPLIANCE_CREATE_FAIL,
    NAMERATE_CREATE_REQUEST,
    NAMERATE_CREATE_SUCCESS,
    NAMERATE_CREATE_FAIL,
    DOC_CREATE_REQUEST,
    DOC_CREATE_SUCCESS,
    DOC_CREATE_FAIL
} from "../actiontypes/otherConstants";
export const categoryCreate = (postbody) => async (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST });

                await catCreate(postbody).then(response=>{
                dispatch({ type: CATEGORY_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Category is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                "Category is already exists!" });
                        toast.error('Category is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const categoryEdit = (postbody,id) => async (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST_EDIT });
                await catEdit(postbody,id).then(response=>{
                
                dispatch({ type: CATEGORY_SUCCESS_EDIT, payload: response.data });    
           //   alert(response.data); return;
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Category is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: CATEGORY_EDIT_FAIL,
                                payload:
                                "Category is already exists!" });
                        toast.error('Category is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CATEGORY_EDIT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                        
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}      
export const auditorGet = () => async (dispatch) => {
        dispatch({ type: AUDITOR_REQUEST_GET });
                await auditoreGet().then(response=>{
                dispatch({ type: AUDITOR_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: AUDITOR_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDITOR_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const categoryGet = () => async (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST_GET });
                await catGet().then(response=>{
                dispatch({ type: CATEGORY_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: CATEGORY_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const deleteCategory = (id) => async (dispatch) => {
        dispatch({ type: CATEGORY_DELETE_REQUEST });
                await catDelete(id).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const stateGets = () => async (dispatch) => {
        dispatch({ type: STATE_REQUEST_GET });

                await gettingState().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: STATE_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: STATE_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: STATE_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const usersCreates = (postbody) => async (dispatch) => {
        dispatch({ type: USER_CREATE_REQUEST });

                await userCreate(postbody).then(response=>{
                dispatch({ type: USER_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('User is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: USER_CREATE_FAIL,
                                payload:
                                "User is already exists!" });
                        toast.error('User is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: USER_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const usersGet = () => async (dispatch) => {
        dispatch({ type: USER_REQUEST_GET });

                await gettingUser().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: USER_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: USER_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: USER_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const userEdit = (postbody,id) => async (dispatch) => {
        dispatch({ type: USER_REQUEST_EDIT });
                await editUser(postbody,id).then(response=>{
                dispatch({ type: USER_SUCCESS_EDIT, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('User is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: USER_EDIT_FAIL,
                                payload:
                                "Email is already exists!" });
                        toast.error('Email is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: USER_EDIT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                }
                }).catch(error =>{
                        dispatch({
                                type: USER_EDIT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const deleteUser = (id) => async (dispatch) => {
        dispatch({ type: CATEGORY_DELETE_REQUEST });
                await userDelete(id).then(response=>{
                dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                      
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                });  
     
}
export const createNotification = (postbody) => async (dispatch) => {
        dispatch({ type: NOTFICATION_CREATE_REQUEST });

                await NotificationCreate(postbody).then(response=>{
                dispatch({ type: NOTFICATION_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Notification is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: NOTFICATION_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: NOTFICATION_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const getNotification = () => async (dispatch) => {
        dispatch({ type: NOTFICATION_REQUEST_GET });

                await gettingNotification().then(response=>{
                dispatch({ type: NOTFICATION_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: NOTFICATION_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: NOTFICATION_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                         
                });  
}
export const branchGet = () => async (dispatch) => {
        dispatch({ type: BRANCH_REQUEST_GET });
                await gettingBranch().then(response=>{
                dispatch({ type: BRANCH_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: BRANCH_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: BRANCH_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                });  
}
export const companyGet = () => async (dispatch) => {
        dispatch({ type: COMPANY_REQUEST_GET });
                await gettingCompany().then(response=>{
                dispatch({ type: COMPANY_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const branchCreates = (postbody) => async (dispatch) => {
        dispatch({ type: BRANCH_CREATE_REQUEST });
                await createBranch(postbody).then(response=>{
                dispatch({ type: BRANCH_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Branch is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: USER_CREATE_FAIL,
                                payload:
                                "Branch is already exists!" });
                        toast.error('Branch is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: BRANCH_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: BRANCH_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                        
                });  
}
export const companyCreates = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANY_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANY_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Company is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: COMPANY_CREATE_FAIL,
                                payload:
                                "Company is already exists!" });
                        toast.error('Company is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: COMPANY_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                         
                });  
}
export const complianceCreate = (postbody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_CREATE_REQUEST });

                await createCompliances(postbody).then(response=>{
                dispatch({ type: COMPLIANCE_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Compliance is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: COMPLIANCE_CREATE_FAIL,
                                payload:
                                "Compliance for this Act is already exists!" });
                        toast.error('Compliance for this Act is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                });  
}
export const compliancesGet = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET });
                await gettingCompliances().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: COMPLIANCE_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const compliancesFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_FILTER });
                await gettingCompliancesFilter(postBody).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                   
                });  
}
export const complianceAllFiltering = (postBody) => async (dispatch) => {
        // alert('all')
        dispatch({ type: COMPLIANCE_REQUEST_GET_ALL_FILTER });

                await gettingCompliancesAllFilter(postBody).then(response=>{
                        
                dispatch({ type: COMPLIANCE_SUCCESS_GET_ALL_FILTER, payload: response.data });    
                // alert(JSON.stringify(response.data))
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_ALL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_ALL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const compliancesGetAll = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_ALL });

                await gettingCompliancesAll().then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_ALL, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_ALL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                });  
}
export const compliancesGetonCreate = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_CREATE });

                await gettingCompliancesOnCreate().then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_CREATE, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_CREATE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                        
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_CREATE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                });  
}
export const compliancesGetByid = (id) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_BYID });

                await gettingCompliancesById(id).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_FAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_FAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });      
}
export const complianceUpdateById = (postbody,id) => async (dispatch) => {

        dispatch({ type: COMPLIANCE_REQUEST_UPDATE_BYID });
                await updateCompliancesById(postbody,id).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_UPDATE_BYID, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Compliance is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: COMPLIANCE_FAIL_UPDATE_BYID,
                                payload:
                                "Compliance is already exists!" });
                        toast.error('Compliance is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_FAIL_UPDATE_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_FAIL_UPDATE_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const compliancesSaveandApprove = (data) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_APPROVE });

                await complianceApporve(data).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('All Compliace is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const compliancesGetOnreject = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_REJECT });

                await gettingCompliancesReject().then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('All Compliace is Approved Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const compliancesReject = (data) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_REJECT });

                await complianceReject(data).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('All Compliace is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REQUEST_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                       
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REQUEST_REJECT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const compliancesRejectFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_REJECT_FILTER });

                await gettingCompliancesRejetFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: COMPLIANCE_SUCCESS_REJECT_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REJECT_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REJECT_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const compliancesApproveFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_APPROVE_FILTER });

                await gettingcomplianceOnApproveFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: COMPLIANCE_SUCCESS_APPROVE_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_APPROVE_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_APPROVE_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistCreate = (postbody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_CREATE_REQUEST });

                await createChecklist(postbody).then(response=>{
                dispatch({ type: CHECKLIST_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Check List is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: CHECKLIST_CREATE_FAIL,
                                payload:
                                "Check List for this Act is already exists!" });
                        toast.error('Check List for this Act is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetonCreate = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_CREATE });

                await checklistOnCreateegetting().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_CREATE, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_CREATE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL_CREATE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGettting = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET });

                await gettingChecklist().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: USER_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistUpdateById = (postbody,id) => async (dispatch) => {

        dispatch({ type: CHECKLIST_REQUEST_UPDATE_BYID });
                await updateChecklistsById(postbody,id).then(response=>{
                
                dispatch({ type: CHECKLIST_SUCCESS_UPDATE_BYID, payload: response.data });    
           //   alert(response.data); return;
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Checklist is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: CHECKLIST_FAIL_UPDATE_BYID,
                                payload:
                                "Checklist is already exists!" });
                        toast.error('Checklist is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_FAIL_UPDATE_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                        
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_FAIL_UPDATE_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetByid = (id) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_BYID });

                await gettingchecklistById(id).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type:  CHECKLIST_FAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:  CHECKLIST_FAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetAll = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_ALL });

                await checklistAllgetting().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_ALL, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_ALL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetApprove = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_APPROVE_PAGE });

                await checklistApprovegetting().then(response=>{ 
  
                dispatch({ type: CHECKLIST_SUCCESS_GET_APPROVE_PAGE, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_APPROVE_PAGE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL_APPROVE_PAGE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistsReject = (data) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_REJECT });

                await rejectChecklist(data).then(response=>{
                dispatch({ type: CHECKLIST_SUCCESS_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('All Checklist is Rejected Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_REQUEST_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_REQUEST_REJECT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistSaveandApprove = (data) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_APPROVE });

                await checklistApporve(data).then(response=>{
                dispatch({ type: CHECKLIST_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('All Checklist is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistsAllFilter = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_ALL_FILTER });

                await gettingchecklistAllFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_ALL_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistCreateFilters = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_CREATE_FILTER });

                await gettingchecklistOnCreateFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_CREATE_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_CREATE_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_CREATE_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistsApproveFilter = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_APPROVE_FILTER });

                await gettingchecklistOnApproveFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_APPROVE_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_APPROVE_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_APPROVE_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetOnreject = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_REJECT });

                await checklistOnRejectegetting().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_REJECT,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL_REJECT,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistRejectFilter = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_REJECT_FILTER });

                await gettingchecklistOnrejectFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_REJECT_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_REJECT_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_REJECT_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const compliancesAllForChecklist = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_All_COMPLIANCE });

                await gettingchecklistAllCompliance(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_All_COMPLIANCE, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_FAIL_All_COMPLIANCE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_FAIL_All_COMPLIANCE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
     
}
export const auditGetDataAll = (postBody) => async (dispatch) => {
        dispatch({ type: AUDIT_REQUEST_All_DETAIL });

                await gettingAuditDetail(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: AUDIT_SUCCESS_All_DETAIL, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: AUDIT_FAIL_All_DETAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDIT_FAIL_All_DETAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
     
}
export const nameRateCreate = (postbody) => async (dispatch) => {
        dispatch({ type: NAMERATE_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: NAMERATE_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Licence/Registration data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: NAMERATE_CREATE_FAIL,
                                payload:
                                "Licence/Registration Name already exists!" });
                        toast.error('Licence/Registration Name is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: NAMERATE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: NAMERATE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                      
                });  
}
export const documentCollection = (postbody) => async (dispatch) => {
        dispatch({ type: DOC_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: DOC_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Document Colletion data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: DOC_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: DOC_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
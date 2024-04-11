import axios from 'axios';
import {getToken} from '../utils/localStorage'
const URL = 'http://localhost:8000/api/admin'; 

//const URL = 'http://103.160.107.21:8000/api/admin'; 
axios.defaults.withCredentials = true;  
///api of users starts
export const login = async(data) => {
   return await axios.post(`${URL}/login`,data);
}
export const logout = async() => {
    return await axios.get(`${URL}/logout`);
}
export const auditoreGet = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/auditoreGet`,config);
}
export const catCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/catCreate`,data,config);
}
export const catGet = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/catGettting`,config);
}
export const catEdit = async(data,id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.put(`${URL}/catEditById/${id}`,data,config);
}
export const catDelete = async(id) => {  //all users except logged in user
    return await axios.delete(`${URL}/deleteCat/${id}`);
}
export const userCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/userCreate`,data,config);
}
export const editUser = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/editUser/${id}`,data,config);
}
export const userDelete = async(id) => {  //all users except logged in user
    return await axios.delete(`${URL}/deleteUser/${id}`);
}

export const gettingState = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/stateGetting`,config);
}
export const gettingUser = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingUser`,config);
}
export const NotificationCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/notificationCreate`,data,config);
}
export const gettingNotification = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingNotification`,config);
}
export const createChecklist = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
      // alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/checkListCreate`,data,config);
}
export const gettingChecklist = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checkListGetting`,config);
}
export const gettingCompany = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompany`,config);
}
export const gettingBranch = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingBranch`,config);
}
export const allUsers = async(id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/allUsers/${id}`,config);
}
export const searchUsers = async(data,loggedUserId) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/searchUsersRecords/${loggedUserId}`,data,config);
}
export const gettingCompliancesById = async(id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesById/${id}`,config);
}
export const deleteUser = async(id) => {
    return await axios.delete(`${URL}/delete/${id}`);
}

export const createBranch = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/createBranch`,data,config);
}  
export const createCompany = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/createCompany`,data,config);
}
export const createCompliances = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/createCompliances`,data,config);
}
export const gettingCompliances = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliances`,config);
}
export const gettingCompliancesAll = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesAll`,config);
}
export const gettingCompliancesFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
  //  alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesFilter`,postBody,config);
}
export const gettingCompliancesRejetFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesRejetFilter`,postBody,config);
}
export const gettingCompliancesAllFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //  alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesAllFilter`,postBody,config);
}
export const gettingcomplianceOnApproveFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/complianceApproveFilter`,postBody,config);
}
export const checklistOnRejectegetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    // alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/checklistOnRejectegetting`,config);
}
export const gettingCompliancesOnCreate = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesOnCreate`,config);
}
export const updateCompliancesById = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/updateCompliancesById/${id}`,data,config);
}
export const complianceApporve = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/complianceApporve`,data,config);
}
export const gettingCompliancesReject = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.get(`${URL}/gettingCompliancesReject`,config);
}
export const complianceReject = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/complianceReject`,data,config);
}
export const updateChecklistsById = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/updateChecklistsById/${id}`,data,config);
}
export const checklistOnCreateegetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistOnCreateegetting`,config);
}
export const gettingchecklistById = async(id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
   // alert(JSON.stringify(id)); return;
    return await axios.get(`${URL}/gettingchecklistById/${id}`,config);
}
export const checklistAllgetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistAllgetting`,config);
}
export const checklistApprovegetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistApprovegetting`,config);
}
export const checklistApporve = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/checklistApporve`,data,config);
}
export const checkListAllFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListAllFilter`,postBody,config);
}
export const gettingchecklistAllFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListAllFilter`,postBody,config);
}
export const gettingchecklistOnCreateFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListCreateFilter`,postBody,config);
}
export const gettingchecklistOnApproveFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListApproveFilter`,postBody,config);
}
export const rejectChecklist = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/rejectChecklist`,data,config);
}
export const gettingchecklistOnrejectFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListRejectedFilter`,postBody,config);
}
export const gettingchecklistAllCompliance = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingchecklistAllCompliance`,config);
}
export const gettingAuditDetail = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingAuditDetail`,config);
}
export const createLiseReg = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/createLiseReg`,data,config);
}   
///api of users endcomplianceReject
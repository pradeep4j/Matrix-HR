import {
    AUDITOR_REQUEST_GET,
    AUDITOR_SUCCESS_GET,
    AUDITOR_GET_FAIL,    
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
    CATEGORY_REQUEST_GET,
    CATEGORY_SUCCESS_GET,
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
    COMPLIANCE_REQUEST_GET_FILTER,
    COMPLIANCE_SUCCESS_GET_FILTER,
    COMPLIANCE_GET_FAIL_FILTER,
    COMPLIANCE_REQUEST_REJECT_FILTER,
    COMPLIANCE_SUCCESS_REJECT_FILTER,
    COMPLIANCE_REJECT_FAIL_FILTER,
    COMPLIANCE_REQUEST_APPROVE_FILTER,
    COMPLIANCE_SUCCESS_APPROVE_FILTER,
    COMPLIANCE_APPROVE_FAIL_FILTER,
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
export const auditorReducer = (state= {}, action) => {
        switch(action.type) {
        case AUDITOR_REQUEST_GET: return { loading:true };
        case AUDITOR_SUCCESS_GET: return { loading:false, auditorInfo: action.payload };
        case AUDITOR_GET_FAIL: return { loading:false, error: action.payload };
        default: return state;
}
}     
export const categoryReducer = (state= {}, action) => {
    switch(action.type) {
            case CATEGORY_REQUEST: return { loading:true };
            case CATEGORY_SUCCESS: return { loading:false, catGetInfo: action.payload };
            case CATEGORY_FAIL: return { loading:false, error: action.payload };
            default: return state;
    }
}
export const categoryGetReducer = (state= {}, action) => {
  switch(action.type) {
          case CATEGORY_REQUEST_GET: return { loading:true };
          case CATEGORY_SUCCESS_GET: return { loading:false, categoryInfo: action.payload };
          case CATEGORY_GET_FAIL: return { loading:false, error: action.payload };
          default: return state;
  }
}
export const categoryEditReducer = (state= {}, action) => {
  switch(action.type) {
          case CATEGORY_REQUEST_EDIT: return { loading:true };
          case CATEGORY_SUCCESS_EDIT: return { loading:false, categoryEditInfo: action.payload };
          case CATEGORY_EDIT_FAIL: return { loading:false, error: action.payload };
          default: return state;
  }
}
export const categoryDeleteReducer = (state= {}, action) => {
        switch (action.type) {
                case CATEGORY_DELETE_REQUEST:
                        return { loadings: true };
                case CATEGORY_DELETE_SUCCESS:
                        return { loadings: false, categoryDeleteInfo: action.payload };
                case CATEGORY_DELETE_FAIL:
                        return { loadings: false, error: action.payload };
                default:
                        return state;
      
        }
}
export const stateGetReducer = (state= {}, action) => {
        switch(action.type) {
                case STATE_REQUEST_GET: return { loadings:true };
                case STATE_SUCCESS_GET: return { loadings:false, stateInfo: action.payload };
                case STATE_GET_FAIL: return { loadings:false, error: action.payload };
                default: return state;
        }
}
export const userGetReducer = (state= {}, action) => {
        switch(action.type) {
                case USER_REQUEST_GET: return { loadingu:true };
                case USER_SUCCESS_GET: return { loadingu:false, usersInfo: action.payload };
                case USER_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const notificationCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case NOTFICATION_CREATE_REQUEST: return { loading:true };
                case NOTFICATION_CREATE_SUCCESS: return { loading:false, notificatioInfo: action.payload };
                case NOTFICATION_CREATE_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}
export const notificationGetReducer = (state= {}, action) => {
        switch(action.type) {
                case NOTFICATION_REQUEST_GET: return { loadingu:true };
                case NOTFICATION_SUCCESS_GET: return { loadingu:false, notificationInfo: action.payload };
                case NOTFICATION_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const userCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case USER_CREATE_REQUEST: return { loading:true };
                case USER_CREATE_SUCCESS: return { loading:false, userCreateInfo: action.payload };
                case USER_CREATE_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}
export const userEditReducer = (state= {}, action) => {
        switch(action.type) {
                case USER_REQUEST_EDIT: return { loading:true };
                case USER_SUCCESS_EDIT: return { loading:false, userEditInfo: action.payload };
                case USER_EDIT_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}

export const branchGetReducer = (state= {}, action) => {
        switch(action.type) {
                case BRANCH_REQUEST_GET: return { loadingu:true };
                case BRANCH_SUCCESS_GET: return { loadingu:false, branchInfo: action.payload };
                case BRANCH_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const companyGetReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_REQUEST_GET: return { loadingu:true };
                case COMPANY_SUCCESS_GET: return { loadingu:false, companyInfo: action.payload };
                case COMPANY_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}

export const companyCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_CREATE_REQUEST: return { loading:true };
                case COMPANY_CREATE_SUCCESS: return { loading:false, companyCreateInfo: action.payload };
                case COMPANY_CREATE_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}
export const complianceCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_CREATE_REQUEST: return { loadingCompliance:true };
                case COMPLIANCE_CREATE_SUCCESS: return { loadingCompliance:false, complianceCreateInfo: action.payload };
                case COMPLIANCE_CREATE_FAIL: return { loadingCompliance:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET: return { loadingu:false, complianceInfo: action.payload };
                case COMPLIANCE_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetAllReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_ALL: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_ALL: return { loadingu:false, complianceInfoAll: action.payload };
                case COMPLIANCE_GET_FAIL_ALL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetOnCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_CREATE: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_CREATE: return { loadingu:false, complianceInfoOnCreate: action.payload };
                case COMPLIANCE_GET_FAIL_CREATE: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_BYID: return { loadingg:true };
                case COMPLIANCE_SUCCESS_GET_BYID: return { loadingg:false, complianceInfoId: action.payload };
                case COMPLIANCE_FAIL_GET_BYID: return { loadingg:false, error: action.payload };
                default: return state;
        }
}
export const complianceUpdateByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_UPDATE_BYID: return { loadingupdate:true };
                case COMPLIANCE_SUCCESS_UPDATE_BYID: return { loadingupdate:false, complianceInfoUpdateId: action.payload };
                case COMPLIANCE_FAIL_UPDATE_BYID: return { loadingupdate:false, error: action.payload };
                default: return state;
        }
}
export const complianceApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_APPROVE: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_APPROVE: return { loadingu:false, complianceApporve: action.payload };
                case COMPLIANCE_REQUEST_GET_APPROVE_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_REJECT: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_REJECT: return { loadingu:false, complianceReject: action.payload };
                case COMPLIANCE_REQUEST_GET_REJECT_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceRejectedReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_REJECT: return { loadingu:true };
                case COMPLIANCE_SUCCESS_REJECT: return { loadingu:false, complianceRejected: action.payload };
                case COMPLIANCE_REQUEST_REJECT_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceFilterCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_FILTER: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_FILTER: return { loadingu:false, complianceGetFilterInfo: action.payload };
                case COMPLIANCE_GET_FAIL_FILTER: return { loadingu:false, error: action.payload };
                default: return state;
        }
}   
export const complianceFilterAllReducer = (state= {}, action) => {
        // alert(JSON.stringify(action.payload))
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_ALL_FILTER: return { loadingallFilter:true };
                case COMPLIANCE_SUCCESS_GET_ALL_FILTER: return { loadingallFilter:false, complianceGetAllFilterInfo: action.payload };
                case COMPLIANCE_GET_FAIL_ALL_FILTER: return { loadingallFilter:false, error: action.payload };
                default: return state;
        }
} 
export const complianceFilterRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_REJECT_FILTER: return { loadingu:true };
                case COMPLIANCE_SUCCESS_REJECT_FILTER: return { loadingu:false, complianceRejectFilterInfo: action.payload };
                case COMPLIANCE_REJECT_FAIL_FILTER: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceFilterApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_APPROVE_FILTER: return { loadingap:true };
                case COMPLIANCE_SUCCESS_APPROVE_FILTER: return { loadingap:false, complianceApproveFilterInfo: action.payload };
                case COMPLIANCE_APPROVE_FAIL_FILTER: return { loadingap:false, error: action.payload };
                default: return state;
        }
}
export const checklistReducer = (state= {}, action) => {  ///createchecklist
        switch(action.type) {
                case CHECKLIST_CREATE_REQUEST: return { loadingChecklist:true };
                case CHECKLIST_CREATE_SUCCESS: return { loadingChecklist:false, checklistInfo: action.payload };
                case CHECKLIST_CREATE_FAIL: return { loadingChecklist:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET: return { loadingu:true };
                case CHECKLIST_SUCCESS_GET: return { loadingu:false, checklistGetInfo: action.payload };
                case CHECKLIST_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistUpdateByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_UPDATE_BYID: return { loadingu:true };
                case CHECKLIST_SUCCESS_UPDATE_BYID: return { loadingu:false, checklistInfoUpdateId: action.payload };
                case CHECKLIST_FAIL_UPDATE_BYID: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetOnCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_CREATE: return { loadingoncreate:true };
                case CHECKLIST_SUCCESS_GET_CREATE: return { loadingoncreate:false, checklistInfoOnCreate: action.payload };
                case CHECKLIST_GET_FAIL_CREATE: return { loadingoncreate:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_BYID: return { loadingg:true };
                case CHECKLIST_SUCCESS_GET_BYID: return { loadingg:false, checklistInfoId: action.payload };
                case CHECKLIST_FAIL_GET_BYID: return { loadingg:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetAllReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_ALL: return { loadingall:true };
                case CHECKLIST_SUCCESS_GET_ALL: return { loadingall:false, checklistInfoAll: action.payload };
                case CHECKLIST_GET_FAIL_ALL: return { loadingall:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_APPROVE_PAGE: return { loadingApprove:true };
                case CHECKLIST_SUCCESS_GET_APPROVE_PAGE: return { loadingApprove:false, checklistInfoApprove: action.payload };
                case CHECKLIST_GET_FAIL_APPROVE_PAGE: return { loadingApprove:false, error: action.payload };
                default: return state;
        }
}
export const checklistApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_APPROVE: return { loadingu:true };
                case CHECKLIST_SUCCESS_GET_APPROVE: return { loadingu:false, checklistApporve: action.payload };
                case CHECKLIST_REQUEST_GET_APPROVE_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistFilterAllReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_ALL_FILTER: return { loadingu:true };
                case CHECKLIST_SUCCESS_ALL_FILTER: return { loadingu:false, checklistAllFilter: action.payload };
                case CHECKLIST_ALL_FAIL_FILTER: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistFilterCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_CREATE_FILTER: return { loadingcreatefilter:true };
                case CHECKLIST_SUCCESS_CREATE_FILTER: return { loadingcreatefilter:false, checklistInfoFilter: action.payload };
                case CHECKLIST_ALL_CREATE_FILTER: return { loadingcreatefilter:false, error: action.payload };
                default: return state;
        }
}

export const checklistFilterApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_APPROVE_FILTER: return { loadingapp:true };
                case CHECKLIST_SUCCESS_APPROVE_FILTER: return { loadingapp:false, checklistApproveFilter: action.payload };
                case CHECKLIST_ALL_APPROVE_FILTER: return { loadingapp:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetOnRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_REJECT: return { loadingu:true };
                case CHECKLIST_SUCCESS_GET_REJECT: return { loadingu:false, checklistInfoOnReject: action.payload };
                case CHECKLIST_GET_FAIL_REJECT: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistRejectedReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_REJECT: return { loadingu:true };
                case CHECKLIST_SUCCESS_REJECT: return { loadingu:false, checklistRejected: action.payload };
                case CHECKLIST_REQUEST_REJECT_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistFilterRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_REJECT_FILTER: return { loadingreject:true };
                case CHECKLIST_SUCCESS_REJECT_FILTER: return { loadingreject:false, checklistRejectinfo: action.payload };
                case CHECKLIST_ALL_REJECT_FILTER: return { loadingreject:false, error: action.payload };
                default: return state;
        }
}
export const checklistAllComplianceReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_All_COMPLIANCE: return { loadingallcomp:true };
                case CHECKLIST_SUCCESS_All_COMPLIANCE: return { loadingallcomp:false, checklistAllComp: action.payload };
                case CHECKLIST_FAIL_All_COMPLIANCE: return { loadingallcomp:false, error: action.payload };
                default: return state;
        }
}
export const auditAllReducer = (state= {}, action) => {
        switch(action.type) {
                case AUDIT_REQUEST_All_DETAIL: return { loadingallAudit:true };
                case AUDIT_SUCCESS_All_DETAIL: return { loadingallAudit:false, getAllAudit: action.payload };
                case AUDIT_FAIL_All_DETAIL: return { loadingallAudit:false, error: action.payload };
                default: return state;
        }
}
export const namerateCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case NAMERATE_CREATE_REQUEST: return { loadingCompliance:true };
                case NAMERATE_CREATE_SUCCESS: return { loadingCompliance:false, namerateCreateInfo: action.payload };
                case NAMERATE_CREATE_FAIL: return { loadingCompliance:false, error: action.payload };
                default: return state;
        }
}
export const docCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case DOC_CREATE_REQUEST: return { loadingdoc:true };
                case DOC_CREATE_SUCCESS: return { loadingdoc:false, docCreateInfo: action.payload };
                case DOC_CREATE_FAIL: return { loadingdoc:false, error: action.payload };
                default: return state;
        }
}

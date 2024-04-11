import React, { useState, useEffect, useRef } from 'react';
// import {Space} from "antd";
// import {EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined } from '@ant-design/icons';
import { categoryGet, stateGets, companytab1create, companytab2create, companytab3create, companytab4create,companytab5create,companytab6create,companytab7create, } from "../../store/actions/otherActions";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import Companyprofile from './Companyprofile';
import DynamicHTMLGeneratorB1 from './DynamicGenerator/DynamicHTMLGeneratorB1'
import DynamicHTMLGeneratorB2 from './DynamicGenerator/DynamicHTMLGeneratorB2'
import DynamicHTMLGeneratorB3 from './DynamicGenerator/DynamicHTMLGeneratorB3'
import DynamicHTMLGeneratorC1 from './DynamicGenerator/DynamicHTMLGeneratorC1'
import DynamicHTMLGeneratorC2 from './DynamicGenerator/DynamicHTMLGeneratorC2'
import DynamicHTMLGeneratorC3 from './DynamicGenerator/DynamicHTMLGeneratorC3'
import DynamicHTMLGeneratorC4 from './DynamicGenerator/DynamicHTMLGeneratorC4'
import DynamicHTMLGeneratorD1 from './DynamicGenerator/DynamicHTMLGeneratorD1'
import DynamicHTMLGeneratorD2 from './DynamicGenerator/DynamicHTMLGeneratorD2'
import DynamicHTMLGeneratorD3FL from './DynamicGenerator/DynamicHTMLGeneratorD3FL'
import DynamicHTMLGeneratorD3NSP from './DynamicGenerator/DynamicHTMLGeneratorD3NSP'
import DynamicHTMLGeneratorD3OTP from './DynamicGenerator/DynamicHTMLGeneratorD3OTP'
import DynamicHTMLGeneratorD3WOE from './DynamicGenerator/DynamicHTMLGeneratorD3WOE'
import DynamicHTMLGeneratorD3TD from './DynamicGenerator/DynamicHTMLGeneratorD3TD'
import DynamicHTMLGeneratorD3MSME from './DynamicGenerator/DynamicHTMLGeneratorD3MSME'
import DynamicHTMLGeneratorD3BOCW from './DynamicGenerator/DynamicHTMLGeneratorD3BOCW'
import DynamicHTMLGeneratorD3IMW from './DynamicGenerator/DynamicHTMLGeneratorD3IMW'
import DynamicHTMLGeneratorF1 from './DynamicGenerator/DynamicHTMLGeneratorF1'
import DynamicHTMLGeneratorF1RLicense from './DynamicGenerator/DynamicHTMLGeneratorF1RLicense'
import DynamicHTMLGeneratorF1FL from './DynamicGenerator/DynamicHTMLGeneratorF1FL'
import DynamicHTMLGeneratorF1FP from './DynamicGenerator/DynamicHTMLGeneratorF1FP'
import DynamicHTMLGeneratorF54NSP from './DynamicGenerator/DynamicHTMLGeneratorF54NSP'
import DynamicHTMLGeneratorF54OTP from './DynamicGenerator/DynamicHTMLGeneratorF54OTP'
import DynamicHTMLGeneratorF54WOE from './DynamicGenerator/DynamicHTMLGeneratorF54WOE'
import DynamicHTMLGeneratorF54TL from './DynamicGenerator/DynamicHTMLGeneratorF54TL'
import DynamicHTMLGeneratorGCC from './DynamicGenerator/DynamicHTMLGeneratorGCC'
import Loading from '../../components/layout/Loading';
const CompanyEdit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myRefSubcodes = useRef(null);
    const myRefSubcodesESI = useRef(null);
    const myRefSubcodesLabour = useRef(null);
    const myRefBranch = useRef(null);
    const myRefF1Labour = useRef(null);
    const myRefGLabour = useRef(null);
    const myRefGCLRA = useRef(null);
    const createCompanytab1 = useSelector((state) => state.createCompanytab1);
    const { loadingtab1,companytab1CreateInfo } = createCompanytab1; 
    const createCompanytab2 = useSelector((state) => state.createCompanytab2);
    const { loadingtab2,companytab2CreateInfo } = createCompanytab2;
    const createCompanytab3 = useSelector((state) => state.createCompanytab3);
    const { loadingtab3,companytab3CreateInfo } = createCompanytab3;
    const createCompanytab4 = useSelector((state) => state.createCompanytab4);
    const { loadingtab4,companytab4CreateInfo } = createCompanytab4;
    const createCompanytab5 = useSelector((state) => state.createCompanytab5);
    const { loadingtab5,companytab5CreateInfo } = createCompanytab5;
    const createCompanytab6 = useSelector((state) => state.createCompanytab6);
    const { loadingtab6,companytab6CreateInfo } = createCompanytab6;
    const createCompanytab7 = useSelector((state) => state.createCompanytab7);
    const { loadingtab7,companytab7CreateInfo } = createCompanytab7;
    const [category, setCategory] = useState('')
    const [state, setState] = useState('')
    const [isDisabled, setIsDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState('pills-home-tab1');
    const handleTabClick = (tabId) => {
        setTimeout(() => {
            setActiveTab(tabId);  // Update the active tab state when a tab is clicked
        }, 10000);
        
    };
    const myElementRefTab1 = useRef(null);
    const myElementRefTab2 = useRef(null);
    const myElementRefTab3 = useRef(null);
    const myElementRefTab4 = useRef(null);
    const myElementRefTab5 = useRef(null);
    const myElementRefTab6 = useRef(null);
    const myElementRefTab7 = useRef(null);
    // const noofdir = useRef(null);
    // const [dirno,setdirno] = useState('');
    // const setdirnof = () => {
    //     setdirno(noofdir.current.value);
    // }
    const [formData, setFormData] = useState([]);
    const [formData1, setFormData1] = useState([]);
    const [formData2, setFormData2] = useState([]);
    const [formData3, setFormData3] = useState([]);
    const [formData4, setFormData4] = useState([]);
    const [formData5, setFormData5] = useState([]);
    const [formData6, setFormData6] = useState([]);
    const [formData7, setFormData7] = useState([]);
    const [formData8, setFormData8] = useState([]);
    const [formData9, setFormData9] = useState([]);
    const [formData10, setFormData10] = useState([]);
    const [formData11, setFormData11] = useState([]);
    const [formData12, setFormData12] = useState([]);
    const [formData13, setFormData13] = useState([]);
    const [formData14, setFormData14] = useState([]);
    const [formData15, setFormData15] = useState([]);
    const [formData16, setFormData16] = useState([]);
    const [formData17, setFormData17] = useState([]);
    const [formData18, setFormData18] = useState([]);
    const [formData19, setFormData19] = useState([]);
    const [formData20, setFormData20] = useState([]);
    const [formData21, setFormData21] = useState([]);
    const [formData22, setFormData22] = useState([]);
    const [formData23, setFormData23] = useState([]);
    const [formData24, setFormData24] = useState([]);
    const [formData25, setFormData25] = useState([]);
    console.log(formData1)
    //tab1
    const [companyname,setcompanyname] = useState('');
    const [companydetails,setcompanydetails] = useState('');
    const [companyimage,setcompanyimage] = useState('');
    const [companyremark,setcompanyremark] = useState('');
    const [companyaddress,setcompanyaddress] = useState('');
    const [companystate,setcompanystate] = useState('');
    const [companydistrict,setcompanydistrict] = useState('');
    const [companypin,setcompanypin] = useState('');
    const [comapnyaddressdetails,setcomapnyaddressdetails] = useState('');
    const [companyaddressimage,setcompanyaddressimage] = useState('');
    const [companyaddressremark,setcompanyaddressremark] = useState('');
    const [companytype,setcompanytype] = useState('');
    const [companytypedetails,setcompanytypedetails] = useState('');
    const [companytypeimage,setcompanytypeimage] = useState('');
    const [companytyperemark,setcompanytyperemark] = useState('');
    const [companycategory,setcompanycategory] = useState('');
    const [companycategorydetails,setcompanycategorydetails] = useState('');
    const [companycategoryimage,setcompanycategoryimage] = useState('');
    const [companycategoryremark,setcompanycategoryremark] = useState('');
    const [companynatureofbusiness,setcompanynatureofbusiness] = useState('');
    const [companynatureofbusinessdetails,setcompanynatureofbusinessdetails] = useState('');
    const [companynatureofbusinessimage,setcompanynatureofbusinessimage] = useState('');
    const [companynatureofbusinessremark,setcompanynatureofbusinessremark] = useState('');
    //tab2
    const [companyregistration,setcompanyregistration] = useState('');
    const [companyregistrationdetails,setcompanyregistrationdetails] = useState('');
    const [companyregistrationimage,setcompanyregistrationimage] = useState('');
    const [companyregistrationremark,setcompanyregistrationremark] = useState('');
    const [companycin,setcompanycin] = useState('');
    const [companycindetails,setcompanycindetails] = useState('');
    const [companyciniamge,setcompanyciniamge] = useState('');
    const [companycinremark,setcompanycinremark] = useState('');
    const [companyissuedplace,setcompanyissuedplace] = useState('');
    const [companyissuedplacedetails,setcompanyissuedplacedetails] = useState('');
    const [companyissuedplaceimage,setcompanyissuedplaceimage] = useState('');
    const [companyissuedplaceremark,setcompanyissuedplaceremark] = useState('');
    const [companyauthority,setcompanyauthority] = useState('');
    const [companyauthoritydetails,setcompanyauthoritydetails] = useState('');
    const [companyauthorityimage,setcompanyauthorityimage] = useState('');
    const [companyauthorityremark,setcompanyauthorityremark] = useState('');
    const [companyregistrationdate,setcompanyregistrationdate] = useState('');
    const [companytan,setcompanytan] = useState('');
    const [companytandetails,setcompanytandetails] = useState('');
    const [companytanimage,setcompanytanimage] = useState('');
    const [companytanremark,setcompanytanremark] = useState('');
    const [companytin,setcompanytin] = useState('');
    const [companypan,setcompanypan] = useState('');
    const [companypandetails,setcompanypandetails] = useState('');
    const [companypanimage,setcompanypanimage] = useState('');
    const [companypanremark,setcompanypanremark] = useState('');
    const [companytindetails,setcompanytindetails] = useState('');
    const [companytinimage,setcompanytinimage] = useState('');
    const [companytinremark,setcompanytinremark] = useState('');
    const [companygst,setcompanygst] = useState('');
    const [companygstdetails,setcompanygstdetails] = useState('');
    const [companygstimage,setcompanygstimage] = useState('');
    const [companygstremark,setcompanygstremark] = useState('');
    //tab4
    const [pfnumber,setpfnumber] = useState('');
    const [pfdetails,setpfdetails] = useState('');
    const [pfimage,setpfimage] = useState('');
    const [pfdremark,setpfdremark] = useState('');
    const [doc,setdoc] = useState('');
    const [pfaddress,setpfaddress] = useState('');
    const [pfstate,setpfstate] = useState('');
    const [pfdistrict,setpfdistrict] = useState('');
    const [pfpin,setpfpin] = useState('');
    const [pfaddressdetails,setpfaddressdetails] = useState('');
    const [pfaddressimage,setpfaddressimage] = useState('');
    const [pfaddressremark,setpfaddressremark] = useState('');
    const [esinumber,setesinumber] = useState('');
    const [esidetails,setesidetails] = useState('');
    const [esiimage,setesiimage] = useState('');
    const [esidremark,setesidremark] = useState('');
    const [esidoc,setesidoc] = useState('');
    const [esiaddress,setesiaddress] = useState('');
    const [esistate,setesistate] = useState('');
    const [esidistrict,setesidistrict] = useState('');
    const [esipin,setesipin] = useState('');
    const [esiaddressdetails,setesiaddressdetails] = useState('');
    const [esiaddressimage,setesiaddressimage] = useState('');
    const [esiaddressremark,setesiaddressremark] = useState('');
    const [registrationD3,setregistrationD3] = useState('');
    const [registrationD3details,setregistrationD3details] = useState('');
    const [registrationD3image,setregistrationD3image] = useState('');
    const [registrationD3remark,setregistrationD3remark] = useState('');
    const [doregistrationD3,setdoregistrationD3] = useState('');
    const [doeregistrationD3,setdoeregistrationD3] = useState('');
    const [doddrregistrationD3,setdoddrregistrationD3] = useState('');
    const [managernameD3,setmanagernameD3] = useState('');
    const [managernameD3details,setmanagernameD3details] = useState('');
    const [managernameD3image,setmanagernameD3image] = useState('');
    const [managernameD3remark,setmanagernameD3remark] = useState('');
    const [noeD3,setnoeD3] = useState('');
    const [noemD3,setnoemD3] = useState('');
    const [noefD3,setnoefD3] = useState('');
    const [issueauthfD3,setissueauthfD3] = useState('');
    const [issueauthfD3details,setissueauthfD3details] = useState('');
    const [issueauthfD3image,setissueauthfDimage] = useState('');
    const [issueauthfD3remark,setissueauthfD3remark] = useState('');
    const [fpD3,setfpD3] = useState('');
    const [fpD3details,setfpD3details] = useState('');
    const [fpD3image,setfpD3image] = useState('');
    const [fpD3remark,setfpD3remark] = useState('');
    const [doapp,setdoapp] = useState('');
    const [issueauthfpD3,setissueauthfpD3] = useState('');
    const [issueauthfpD3details,setissueauthfpD3details] = useState('');
    const [issueauthfpD3image,setissueauthfpD3image] = useState('');
    const [issueauthfpD3remark,setissueauthfpD3remark] = useState('');
    const [powerfpD3,setpowerfpD3] = useState('');
    const [powerfpD3details,setpowerfpD3details] = useState('');
    const [powerfpD3image,setpowerfpD3image] = useState('');
    const [powerfpD3remark,setpowerfpD3remark] = useState('');
    const [powerhpfpD3,setpowerhpfpD3] = useState('');
    const [powerhpfpD3details,setpowerhpfpD3details] = useState('');
    const [powerhpfpD3image,setpowerhpfpD3image] = useState('');
    const [powerhpfpD3remark,setpowerhpfpD3remark] = useState('');
    const [registrationlwfD3,setregistrationlwfD3] = useState('');
    const [registrationlwfD3details,setregistrationlwfD3details] = useState('');
    const [registrationlwfD3image,setregistrationlwfD3image] = useState('');
    const [registrationlwfD3remark,setregistrationlwfD3remark] = useState('');
    const [doregistrationlwfD3,setdoregistrationlwfD3] = useState('');
    const [registrationptrD3,setregistrationptrD3] = useState('');
    const [registrationptrD3details,setregistrationptrD3details] = useState('');
    const [registrationptrD3image,setregistrationptrD3image] = useState('');
    const [registrationptrD3remark,setregistrationptrD3remark] = useState('');
    const [doregistrationptrD3,setdoregistrationptrD3] = useState('');
    //tab5
    const [isEngaged, setIsEngaged] = useState('')
    const [contLabRegNoE, setContLabRegNoE] = useState('')
    const [contLabRegNoEDet, setContLabRegNoEDet] = useState('')
    const [contLabRegNoEFile, setContLabRegNoEFile] = useState('')
    const [contLabRegNoERemark, setContLabRegNoERemark] = useState('')
    const [dateOfRegistrationE, setDateOfRegistrationE] = useState('')
    const [dateOfRegEDet, setDateOfRegEDet] = useState('')
    const [dateOfRegEFile, setDateOfRegEFile] = useState('')
    const [dateOfRegERemark, setDateOfRegERemark] = useState('')
    const [noOfContractEmployeesE, setNoOfContractEmployeesE] = useState('')
    const [noOfContractEmpEDet, setNoOfContractEmpEDet] = useState('')
    const [noOfContractEmpEFile, setNoOfContractEmpEFile] = useState('')
    const [noOfContractEmpERemark, setNoOfContractEmpERemark] = useState('')
    const [noOfContractorsE, setNoOfContractorsE] = useState('')
    const [noOfContractorsDetE, setNoOfContractorsDetE] = useState('')
    const [noOfContractorsEFile, setNoOfContractorsEFile] = useState('')
    const [noOfContractorsERemark, setNoOfContractorsERemark] = useState('')
    const [nameOfContractorE1, setNameOfContractorE1] = useState('')
    const [nameOfContractorsE1Det, setNameOfContractorsE1Det] = useState('')
    const [nameOfContractorsE1File, setNameOfContractorsE1File] = useState('')
    const [nameOfContractorsE1Remark, setNameOfContractorsE1Remark] = useState('')
    const [nameOfEstablishmentE1, setNameOfEstablishmentE1] = useState('')
    const [nameOfEstablishmentE1Det, setNameOfEstablishmentE1Det] = useState('')
    const [nameOfEstablishmentE1File,setNameOfEstablishmentE1File] = useState('')
    const [nameOfEstablishmentE1Remark, setNameOfEstablishmentE1Remark] = useState('')
    const [addresseE1, setAddressE1] = useState('')
    const [stateE1, setStateE1] = useState('')
    const [districtE1, setDistrictE1] = useState('')
    const [pinE1, setpinE1] = useState('')
    const [detailsE1, setDetailsE1] = useState('')
    const [imageE1, setImageE1] = useState('')
    const [remarkE1, setremarkE1] = useState('')
    const [regAddContractorE1Det, setRegAddContractorE1Det] = useState('')
    const [regAddContractorE1File, setRegAddContractorE1File] = useState('')
    const [regAddContractorE1Remark, setRegAddContractorE1Remark] = useState('')
    const [agreementExpiryDateE2, setAgreementExpiryDateE2] = useState('')
    const [agreementExpiryDateE2Det, setAgreementExpiryDateE2Det] = useState('')
    const [agreementExpiryDateE2File, setAgreementExpiryDateE2File] = useState('')
    const [agreementExpiryDateE2Remark, setAgreementExpiryDateE2Remark] = useState('')
    const [agreementRenewalDateE2, setAgreementRenewalDateE2] = useState('')
    const [agreementRenewalDateE2Det, setAgreementRenewalDateE2Det] = useState('')
    const [agreementRenewalDateE2DetFile, setAgreementRenewalDateE2DetFile] = useState('')
    const [agreementRenewalDateE2Remark, setAgreementRenewalDateE2Remark] = useState('')
    const [natureOfWorkAgreementE2, setNatureOfWorkAgreementE2] = useState('')
    const [natureOfWorkAgreementE2Det, setNatureOfWorkAgreementE2Det] = useState('')
    const [natureOfWorkAgreementE2File, setNatureOfWorkAgreementE2File] = useState('')
    const [natureOfWorkAgreementE2Remark, setNatureOfWorkAgreementE2Remark] = useState('')
    const [noOfEmpDeployedAgreementE2, setNoOfEmpDeployedAgreementE2] = useState('')
    const [noOfEmpDeployedAgreementE2Det, setNoOfEmpDeployedAgreementE2Det] = useState('')
    const [noOfEmpDeployedAgreementE2File, setNoOfEmpDeployedAgreementE2File] = useState('')
    const [noOfEmpDeployedAgreementE2Remark, setNoOfEmpDeployedAgreementE2Remark] = useState('')
    const [companyTypeLabourE3, setCompanyTypeLabourE3] = useState('')
    const [companyTypeLabourE3Det, setCompanyTypeLabourE3Det] = useState('')
    const [companyTypeLabourE3File, setCompanyTypeLabourE3File] = useState('')
    const [companyTypeLabourE3Remark, setCompanyTypeLabourE3Remark] = useState('')
    const [contractLabourLicNoE3, setContractLabourLicNoE3] = useState('')
    const [contractLabourLicNoE3Det, setContractLabourLicNoE3Det] = useState('')
    const [contractLabourLicNoE3File, setContractLabourLicNoE3File] = useState('')
    const [contractLabourLicNoE3Remark, setContractLabourLicNoE3Remark] = useState('')
    const [contractLicDateE3, setContractLicDateE3] = useState('')
    const [contractLicDateE3Det, setContractLicDateE3Det] = useState('')
    const [contractLicDateE3File, setContractLicDateE3File] = useState('')
    const [contractLicDateE3Remark, setContractLicDateE3Remark] = useState('')
    const [contractExpiryDateE3, setContractExpiryDateE3] = useState('')
    const [contractExpiryDateE3Det, setContractExpiryDateE3Det] = useState('')
    const [contractExpiryDateE3File, setContractExpiryDateE3File] = useState('')
    const [contractExpiryDateE3Remark, setContractExpiryDateE3Remark] = useState('')
    const [contractRenewalDueDateE3, setContractRenewalDueDateE3] = useState('')
    const [contractRenewalDueDateE3Det, setContractRenewalDueDateE3Det] = useState('')
    const [contractRenewalDueDateE3File, setContractRenewalDueDateE3File] = useState('')
    const [contractRenewalDueDateE3Remark, setContractRenewalDueDateE3Remark] = useState('')
    const [noOfWorkersContractE3, setNoOfWorkersContractE3] = useState('')
    const [noOfWorkersContractE3Det, setNoOfWorkersContractE3Det] = useState('')
    const [noOfWorkersContractE3File, setNoOfWorkersContractE3File] = useState('')
    const [noOfWorkersContractE3Remark, setNoOfWorkersContractE3Remark] = useState('')
    const [panContractorsE3, setPanContractorsE3] = useState('')
    const [panContractorsE3Det, setPanContractorsE3Det] = useState('')
    const [panContractorsE3File, setPanContractorsE3File] = useState('')
    const [panContractorsE3Remark, setPanContractorsE3Remark] = useState('')
    const [gstContractorsE3, setGstContractorsE3] = useState('')
    const [gstContractorsE3Det, setGstContractorsE3Det] = useState('')
    const [gstContractorsE3File, setGstContractorsE3File] = useState('')
    const [gstContractorsE3Remark, setGstContractorsE3Remark] = useState('')
    const [pfRegContractorsE3, setPfRegContractorsE3] = useState('')
    const [pfRegContractorsE3Det, setPfRegContractorsE3Det] = useState('')
    const [pfRegContractorsE3File, setPfRegContractorsE3File] = useState('')
    const [pfRegContractorsE3Remark, setPfRegContractorsE3Remark] = useState('')
    const [esicRegContractorsE3, setEsicRegContractorsE3] = useState('')
    const [esicRegContractorsE3Det, setEsicRegContractorsE3Det] = useState('')
    const [esicRegContractorsE3File, setEsicRegContractorsE3File] = useState('')
    const [esicRegContractorsE3Remark, setEsicRegContractorsE3Remark] = useState('')
    const [shopsandEstContractorsE3, setShopsandEstContractorsE3] = useState('')
    const [shopsandEstContractorsE3Det, setShopsandEstContractorsE3Det] = useState('')
    const [shopsandEstContractorsE3File, setShopsandEstContractorsE3File] = useState('')
    const [shopsandEstContractorsE3Remark, setShopsandEstContractorsE3Remark] = useState('')
    const [lwfRegContractorsE3, setLwfRegContractorsE3] = useState('')
    const [lwfRegContractorsE3Det, setLwfRegContractorsE3Det] = useState('')
    const [lwfRegContractorsE3File, setLwfRegContractorsE3File] = useState('')
    const [lwfRegContractorsE3Remark, setLwfRegContractorsE3Remark] = useState('')
    const [profTaxContractorsE3, setProfTaxContractorsE3] = useState('')
    const [profTaxContractorsE3Det, setProfTaxContractorsE3Det] = useState('')
    const [profTaxContractorsE3File, setProfTaxContractorsE3File] = useState('')
    const [profTaxContractorsE3Remark, setProfTaxContractorsE3Remark] = useState('')
    //tab6
    const [branchaddress, setBranchAddress] = useState('')
    const [branchstate, setBranchState] = useState('')
    const [branchdistrict, setBranchDistrict] = useState('')
    const [branchpin, setBranchPin] = useState('')
    const [branchNameF, setBranchNameF] = useState('')
    const [branchNameFDet, setBranchNameFDet] = useState('')
    const [branchNameFFile, setBranchNameFFile] = useState('')
    const [branchNameFRemark, setBranchNameFRemark] = useState('')
    const [isFactorySEF, setIsFactorySEF] = useState('')
    const [contractorAddBranchFDet, setContractorAddBranchFDet] = useState('')
    const [contractorAddBranchFFile, setContractorAddBranchFFile] = useState('')
    const [contractorAddBranchFRemark, setContractorAddBranchFRemark] = useState('')
    const [branchOpeningDateF, setBranchOpeningDateF] = useState('')
    const [branchOpeningDateFDet, setBranchOpeningDateFDet] = useState('')
    const [branchOpeningDateFFile, setBranchOpeningDateFFile] = useState('')
    const [branchOpeningDateFRemark, setBranchOpeningDateFRemark] = useState('')
    const [noOfEmpBranchF, setNoOfEmpBranchF] = useState('')
    const [noOfEmpBranchFDet, setNoOfEmpBranchFDet] = useState('')
    const [noOfEmpBranchFFile, setNoOfEmpBranchFFile] = useState('')
    const [noOfEmpBranchFRemark, setNoOfEmpBranchFRemark] = useState('')
    const [managerNameF1, setManagerNameF1] = useState('')
    const [managerNameF1Det, setManagerNameF1Det] = useState('')
    const [managerNameF1File, setManagerNameF1File] = useState('')
    const [managerNameF1Remark, setManagerNameF1Remark] = useState('')
    const [managerMobNoF1, setManagerMobNoF1] = useState('')
    const [managerMobNoF1Det, setManagerMobNoF1Det] = useState('')
    const [managerMobNoF1File, setManagerMobNoF1File] = useState('')
    const [managerMobNoF1Remark, setManagerMobNoF1Remark] = useState('')
    const [managerEmailF1, setManagerEmailF1] = useState('')
    const [managerEmailF1Det, setManagerEmailF1Det] = useState('')
    const [managerEmailF1File, setManagerEmailF1File] = useState('')
    const [managerEmailF1Remark, setManagerEmailF1Remark] = useState('')
    const [managerAadharNoF1, setManagerAadharNoF1] = useState('')
    const [managerAadharNoF1Det, setManagerAadharNoF1Det] = useState('')
    const [managerAadharNoF1File, setManagerAadharNoF1File] = useState('')
    const [managerAadharNoF1Remark, setManagerAadharNoF1Remark] = useState('')
    const [managerPanF1, setManagerPanF1] = useState('')
    const [managerPanF1Det, setManagerPanF1Det] = useState('')
    const [managerPanF1File, setManagerPanF1File] = useState('')
    const [managerPanF1Remark, setManagerPanF1Remark] = useState('')
    const [shopsEstLicenseF2, setShopsEstLicenseF2] = useState('')
    const [shopsEstLicenseF2Det, setShopsEstLicenseF2Det] = useState('')
    const [shopsEstLicenseF2File, setShopsEstLicenseF2File] = useState('')
    const [shopsEstLicenseF2Remark, setShopsEstLicenseF2Remark] = useState('')
    const [numberF2, setNumberF2] = useState('')
    const [numberF2Det, setNumberF2Det] = useState('')
    const [numberF2File, setNumberF2File] = useState('')
    const [numberF2Remark, setNumberF2Remark] = useState('')
    const [regDateF2, setRegDateF2] = useState('')
    const [regDateF2Det, setRegDateF2Det] = useState('')
    const [regDateF2File, setRegDateF2File] = useState('')
    const [regDateF2Remark, setRegDateF2Remark] = useState('')
    const [expiryDateF2, setExpiryDateF2] = useState('')
    const [expiryDateF2Det, setExpiryDateF2Det] = useState('')
    const [expiryDateF2File, setExpiryDateF2File] = useState('')
    const [expiryDateF2Remark, setExpiryDateF2Remark] = useState('')
    const [renewalDateF2, setRenewalDateF2] = useState('')
    const [renewalDateF2Det, setRenewalDateF2Det] = useState('')
    const [renewalDateF2File, setRenewalDateF2File] = useState('')
    const [renewalDateF2Remark, setRenewalDateF2Remark] = useState('')
    const [managerNameF2, setManagerNameF2] = useState('')
    const [managerNameF2Det, setManagerNameF2Det] = useState('')
    const [managerNameF2File, setManagerNameF2File] = useState('')
    const [managerNameF2Remark, setManagerNameF2Remark] = useState('')
    const [noOfEmployeesF2, setNoOfEmployeesF2] = useState('')
    const [noOfEmployeesF2Det, setNoOfEmployeesF2Det] = useState('')
    const [noOfEmployeesF2File, setNoOfEmployeesF2File] = useState('')
    const [noOfEmployeesF2Remark, setNoOfEmployeesF2Remark] = useState('')
    const [maleF2, setMaleF2] = useState('')
    const [maleF2Det, setMaleF2Det] = useState('')
    const [maleF2File, setMaleF2File] = useState('')
    const [maleF2Remark, setMaleF2Remark] = useState('')
    const [femaleF2, setFemaleF2] = useState('')
    const [femaleF2Det, setFemaleF2Det] = useState('')
    const [femaleF2File, setFemaleF2File] = useState('')
    const [femaleF2Remark, setFemaleF2Remark] = useState('')
    const [issuingAuthorityF2, setIssuingAuthorityF2] = useState('')
    const [issuingAuthorityF2Det, setIssuingAuthorityF2Det] = useState('')
    const [issuingAuthorityF2File, setIssuingAuthorityF2File] = useState('')
    const [issuingAuthorityF2Remark, setIssuingAuthorityF2Remark] = useState('')
    const [numberF3, setNumberF3] = useState('')
    const [numberF3Det, setNumberF3Det] = useState('')
    const [numberF3File, setNumberF3File] = useState('')
    const [numberF3Remark, setNumberF3Remark] = useState('')
    const [regDateF3, setRegDateF3] = useState('')
    const [regDateF3Det, setRegDateF3Det] = useState('')
    const [regDateF3File, setRegDateF3File] = useState('')
    const [regDateF3Remark, setRegDateF3Remark] = useState('')
    const [expiryDateF3, setExpiryDateF3] = useState('')
    const [expiryDateF3Det, setExpiryDateF3Det] = useState('')
    const [expiryDateF3File, setExpiryDateF3File] = useState('')
    const [expiryDateF3Remark, setExpiryDateF3Remark] = useState('')
    const [renewalDateF3, setRenewalDateF3] = useState('')
    const [renewalDateF3Det, setRenewalDateF3Det] = useState('')
    const [renewalDateF3File, setRenewalDateF3File] = useState('')
    const [renewalDateF3Remark, setRenewalDateF3Remark] = useState('')
    const [managerNameF3, setManagerNameF3] = useState('')
    const [managerNameF3Det, setManagerNameF3Det] = useState('')
    const [managerNameF3File, setManagerNameF3File] = useState('')
    const [managerNameF3Remark, setManagerNameF3Remark] = useState('')
    const [noOfEmployeesF3, setNoOfEmployeesF3] = useState('')
    const [noOfEmployeesF3Det, setNoOfEmployeesF3Det] = useState('')
    const [noOfEmployeesF3File, setNoOfEmployeesF3File] = useState('')
    const [noOfEmployeesF3Remark, setNoOfEmployeesF3Remark] = useState('')
    const [maleF3, setMaleF3] = useState('')
    const [maleF3Det, setMaleF3Det] = useState('')
    const [maleF3File, setMaleF3File] = useState('')
    const [maleF3Remark, setMaleF3Remark] = useState('')
    const [femaleF3, setFemaleF3] = useState('')
    const [femaleF3Det, setFemaleF3Det] = useState('')
    const [femaleF3File, setFemaleF3File] = useState('')
    const [femaleF3Remark, setFemaleF3Remark] = useState('')
    const [issuingAuthorityF3, setIssuingAuthorityF3] = useState('')
    const [issuingAuthorityF3Det, setIssuingAuthorityF3Det] = useState('')
    const [issuingAuthorityF3File, setIssuingAuthorityF3File] = useState('')
    const [issuingAuthorityF3Remark, setIssuingAuthorityF3Remark] = useState('')
    const [numberF4, setNumberF4] = useState('')
    const [numberF4Det, setNumberF4Det] = useState('')
    const [numberF4File, setNumberF4File] = useState('')
    const [numberF4Remark, setNumberF4Remark] = useState('')
    const [regDateF4, setRegDateF4] = useState('')
    const [regDateF4Det, setRegDateF4Det] = useState('')
    const [regDateF4File, setRegDateF4File] = useState('')
    const [regDateF4Remark, setRegDateF4Remark] = useState('')
    const [issuingAuthorityF4, setIssuingAuthorityF4] = useState('')
    const [issuingAuthorityF4Det, setIssuingAuthorityF4Det] = useState('')
    const [issuingAuthorityF4File, setIssuingAuthorityF4File] = useState('')
    const [issuingAuthorityF4Remark, setIssuingAuthorityF4Remark] = useState('')
    const [numberF5, setNumberF5] = useState('')
    const [numberF5Det, setNumberF5Det] = useState('')
    const [numberF5File, setNumberF5File] = useState('')
    const [numberF5Remark, setNumberF5Remark] = useState('')
    const [regDateF5, setRegDateF5] = useState('')
    const [regDateF5Det, setRegDateF5Det] = useState('')
    const [regDateF5File, setRegDateF5File] = useState('')
    const [regDateF5Remark, setRegDateF5Remark] = useState('')
    const [issuingAuthorityF5, setIssuingAuthorityF5] = useState('')
    const [issuingAuthorityF5Det, setIssuingAuthorityF5Det] = useState('')
    const [issuingAuthorityF5File, setIssuingAuthorityF5File] = useState('')
    const [issuingAuthorityF5Remark, setIssuingAuthorityF5Remark] = useState('')
    const [isContractLabourEngagedF5, setIsContractLabourEngagedF5] = useState('')
    const [contractLabRegNoF5, setContractLabRegNoF5] = useState('')
    const [contractLabRegNoF5Det, setContractLabRegNoF5Det] = useState('')
    const [contractLabRegNoF5File, setContractLabRegNoF5File] = useState('')
    const [contractLabRegNoF5Remark, setContractLabRegNoF5Remark] = useState('')
    const [coOfContractEmpF5, setCoOfContractEmpF5] = useState('')
    const [regDateContractorF5, setRegDateContractorF5] = useState('')
    const [regDateContractorF5Det, setRegDateContractorF5Det] = useState('')
    const [regDateContractorF5File, setRegDateContractorF5File] = useState('')
    const [regDateContractorF5Remark, setRegDateContractorF5Remark] = useState('')
    const [noOfContractEmpF5, setNoOfContractEmpF5] = useState('')
    const [noOfContractEmpF5Det, setNoOfContractEmpF5Det] = useState('')
    const [noOfContractEmpF5File, setNoOfContractEmpF5File] = useState('')
    const [noOfContractEmpF5Remark, setNoOfContractEmpF5Remark] = useState('')
    const [noOfContractorsF5, setNoOfContractorsF5] = useState('')
    const [noOfContractorsF5Det, setNoOfContractorsF5Det] = useState('')
    const [noOfContractorsF5File, setNoOfContractorsF5File] = useState('')
    const [noOfContractorsF5Remark, setNoOfContractorsF5Remark] = useState('')
    const [contractorNameF51, setContractorNameF51] = useState('')
    const [contractorNameF51Det, setContractorNameF51Det] = useState('')
    const [contractorNameF51File, setContractorNameF51File] = useState('')
    const [contractorNameF51Remark, setContractorNameF51Remark] = useState('')
    const [establishmentNameF51, setEstablishmentNameF51] = useState('')
    const [establishmentNameF51Det, setEstablishmentNameF51Det] = useState('')
    const [establishmentNameF51File, setEstablishmentNameF51File] = useState('')
    const [establishmentNameF51Remark, setEstablishmentNameF51Remark] = useState('')
    const [regAddContractorF51Det, setRegAddContractorF51Det] = useState('')
    const [regisocontractaddress, setregisocontractaddress] = useState('')
    const [regisocontractstate, setregisocontractstate] = useState('')
    const [regisocontractdistrict, setregisocontractdistrict] = useState('')
    const [regisocontractpin, setregisocontractpin] = useState('')
    const [regAddContractorF51File, setRegAddContractorF51File] = useState('')
    const [regAddContractorF51Remark, setRegAddContractorF51Remark] = useState('')
    const [expiryDateF52, setExpiryDateF52] = useState('')
    const [expiryDateF52Det, setExpiryDateF52Det] = useState('')
    const [expiryDateF52File, setExpiryDateF52File] = useState('')
    const [expiryDateF52Remark, setExpiryDateF52Remark] = useState('')
    const [renewalDateF52, setRenewalDateF52] = useState('')
    const [renewalDateF52Det, setRenewalDateF52Det] = useState('')
    const [renewalDateF52File, setRenewalDateF52File] = useState('')
    const [renewalDateF52Remark, setRenewalDateF52Remark] = useState('')
    const [natureOfWorkF52, setNatureOfWorkF52] = useState('')
    const [natureOfWorkF52Det, setNatureOfWorkF52Det] = useState('')
    const [natureOfWorkF52File, setNatureOfWorkF52File] = useState('')
    const [natureOfWorkF52Remark, setNatureOfWorkF52Remark] = useState('')
    const [noOfEmpDeployedF52, setNoOfEmpDeployedF52] = useState('')
    const [noOfEmpDeployedF52Det, setNoOfEmpDeployedF52Det] = useState('')
    const [noOfEmpDeployedF52File, setNoOfEmpDeployedF52File] = useState('')
    const [noOfEmpDeployedF52Remark, setNoOfEmpDeployedF52Remark] = useState('')
    const [companyTypeF53, setCompanyTypeF53] = useState('')
    const [companyTypeF53Det, setCompanyTypeF53Det] = useState('')
    const [companyTypeF53File, setCompanyTypeF53File] = useState('')
    const [companyTypeF53Remark, setCompanyTypeF53Remark] = useState('')
    const [contractLabLicNoF53, setContractLabLicNoF53] = useState('')
    const [contractLabLicNoF53Det, setContractLabLicNoF53Det] = useState('')
    const [contractLabLicNoF53File, setContractLabLicNoF53File] = useState('')
    const [contractLabLicNoF53Remark, setContractLabLicNoF53Remark] = useState('')
    const [licenseDateF53, setLicenseDateF53] = useState('')
    const [licenseDateF53Det, setLicenseDateF53Det] = useState('')
    const [licenseDateF53File, setLicenseDateF53File] = useState('')
    const [licenseDateF53Remark, setLicenseDateF53Remark] = useState('')
    const [expiryDateF53, setExpiryDateF53] = useState('')
    const [expiryDateF53Det, setExpiryDateF53Det] = useState('')
    const [expiryDateF53File, setExpiryDateF53File] = useState('')
    const [expiryDateF53Remark, setExpiryDateF53Remark] = useState('')
    const [renewalDateF53, setRenewalDateF53] = useState('')
    const [renewalDateF53Det, setRenewalDateF53Det] = useState('')
    const [renewalDateF53File, setRenewalDateF53File] = useState('')
    const [renewalDateF53Remark, setRenewalDateF53Remark] = useState('')
    const [noOfWorkerF53, setNoOfWorkerF53] = useState('')
    const [noOfWorkerF53Det, setNoOfWorkerF53Det] = useState('')
    const [noOfWorkerF53File, setNoOfWorkerF53File] = useState('')
    const [noOfWorkerF53Remark, setNoOfWorkerF53Remark] = useState('')
    const [panF53, setPanF53] = useState('')
    const [panF53Det, setPanF53Det] = useState('')
    const [panF53File, setPanF53File] = useState('')
    const [panF53Remark, setPanF53Remark] = useState('')
    const [gstF53, setGstF53] = useState('')
    const [gstF53Det, setGstF53Det] = useState('')
    const [gstF53File, setGstF53File] = useState('')
    const [gstF53Remark, setGstF53Remark] = useState('')
    const [pfRegF53, setPfRegF53] = useState('')
    const [pfRegF53Det, setPfRegF53Det] = useState('')
    const [pfRegF53File, setPfRegF53File] = useState('')
    const [pfRegF53Remark, setPfRegF53Remark] = useState('')
    const [esicRegF53, setEsicRegF53] = useState('')
    const [esicRegF53Det, setEsicRegF53Det] = useState('')
    const [esicRegF53File, setEsicRegF53File] = useState('')
    const [esicRegF53Remark, setEsicRegF53Remark] = useState('')
    const [shopsEstF53, setShopsEstF53] = useState('')
    const [shopsEstF53Det, setShopsEstF53Det] = useState('')
    const [shopsEstF53File, setShopsEstF53File] = useState('')
    const [shopsEstF53Remark, setShopsEstF53Remark] = useState('')
    const [lwfRegF53, setLwfRegF53] = useState('')
    const [lwfRegF53Det, setLwfRegF53Det] = useState('')
    const [lwfRegF53File, setLwfRegF53File] = useState('')
    const [lwfRegF53Remark, setLwfRegF53Remark] = useState('')
    const [profTaxF53, setProfTaxF53] = useState('')
    const [profTaxF53Det, setProfTaxF53Det] = useState('')
    const [profTaxF53File, setProfTaxF53File] = useState('')
    const [profTaxF53Remark, setProfTaxF53Remark] = useState('')
    const [number54, setNumber54] = useState('')
    const [number54Det, setNumber54Det] = useState('')
    const [number54File, setNumber54File] = useState('')
    const [number54Remark, setNumber54Remark] = useState('')
    const [regDate54, setRegDate54] = useState('')
    const [regDate54Det, setRegDate54Det] = useState('')
    const [regDate54File, setRegDate54File] = useState('')
    const [regDate54Remark, setRegDate54Remark] = useState('')
    const [expiryDate54, setExpiryDate54] = useState('')
    const [expiryDate54Det, setExpiryDate54Det] = useState('')
    const [expiryDate54File, setExpiryDate54File] = useState('')
    const [expiryDate54Remark, setExpiryDate54Remark] = useState('')
    const [renewalDate54, setRenewalDate54] = useState('')
    const [renewalDate54Det, setRenewalDate54Det] = useState('')
    const [renewalDate54File, setRenewalDate54File] = useState('')
    const [renewalDate54Remark, setRenewalDate54Remark] = useState('')
    const [issuingAuthority54, setIssuingAuthority54] = useState('')
    const [issuingAuthority54Det, setIssuingAuthority54Det] = useState('')
    const [issuingAuthority54File, setIssuingAuthority54File] = useState('')
    const [issuingAuthority54Remark, setIssuingAuthority54Remark] = useState('')
    const [number55, setNumber55] = useState('')
    const [number55Det, setNumber55Det] = useState('')
    const [number55File, setNumber55File] = useState('')
    const [number55Remark, setNumber55Remark] = useState('')
    const [regDate55, setRegDate55] = useState('')
    const [regDate55Det, setRegDate55Det] = useState('')
    const [regDate55File, setRegDate55File] = useState('')
    const [regDate55Remark, setRegDate55Remark] = useState('')
    const [expiryDate55, setExpiryDate55] = useState('')
    const [expiryDate55Det, setExpiryDate55Det] = useState('')
    const [expiryDate55File, setExpiryDate55File] = useState('')
    const [expiryDate55Remark, setExpiryDate55Remark] = useState('')
    const [renewalDate55, setRenewalDate55] = useState('')
    const [renewalDate55Det, setRenewalDate55Det] = useState('')
    const [renewalDate55File, setRenewalDate55File] = useState('')
    const [renewalDate55Remark, setRenewalDate55Remark] = useState('')
    const [issuingAuthoritye55, setIssuingAuthoritye55] = useState('')
    const [issuingAuthoritye55Det, setIssuingAuthoritye55Det] = useState('')
    const [issuingAuthoritye55File, setIssuingAuthoritye55File] = useState('')
    const [issuingAuthoritye55Remark, setIssuingAuthoritye55Remark] = useState('')
    const [number56, setNumber56] = useState('')
    const [number56Det, setNumber56Det] = useState('')
    const [number56File, setNumber56File] = useState('')
    const [number56Remark, setNumber56Remark] = useState('')
    const [regDate56, setRegDate56] = useState('')
    const [regDate56Det, setRegDate56Det] = useState('')
    const [regDate56File, setRegDate56File] = useState('')
    const [regDate56Remark, setRegDate56Remark] = useState('')
    const [expiryDate56, setExpiryDate56] = useState('')
    const [expiryDate56Det, setExpiryDate56Det] = useState('')
    const [expiryDate56File, setExpiryDate56File] = useState('')
    const [expiryDate56Remark, setExpiryDate56Remark] = useState('')
    const [renewalDate56, setRenewalDate56] = useState('')
    const [renewalDate56Det, setRenewalDate56Det] = useState('')
    const [renewalDate56File, setRenewalDate56File] = useState('')
    const [renewalDate56Remark, setRenewalDate56Remark] = useState('')
    const [issuingAuthority56, setIssuingAuthority56] = useState('')
    const [issuingAuthority56Det, setIssuingAuthority56Det] = useState('')
    const [issuingAuthority56File, setIssuingAuthority56File] = useState('')
    const [issuingAuthority56Remark, setIssuingAuthority56Remark] = useState('')
    const [number57, setNumber57] = useState('')
    const [number57Det, setNumber57Det] = useState('')
    const [number57File, setNumber57File] = useState('')
    const [number57Remark, setNumber57Remark] = useState('')
    const [regDate57, setRegDate57] = useState('')
    const [regDate57Det, setRegDate57Det] = useState('')
    const [regDate57File, setRegDate57File] = useState('')
    const [regDate57Remark, setRegDate57Remark] = useState('')
    const [expiryDate57, setExpiryDate57] = useState('')
    const [expiryDate57Det, setExpiryDate57Det] = useState('')
    const [expiryDate57File, setExpiryDate57File] = useState('')
    const [expiryDate57Remark, setExpiryDate57Remark] = useState('')
    const [renewalDate57, setRenewalDate57] = useState('')
    const [renewalDate57Det, setRenewalDate57Det] = useState('')
    const [renewalDate57File, setRenewalDate57File] = useState('')
    const [renewalDate57Remark, setRenewalDate57Remark] = useState('')
    const [issuingAuthority57, setIssuingAuthority57] = useState('')
    const [issuingAuthority57Det, setIssuingAuthority57Det] = useState('')
    const [issuingAuthority57File, setIssuingAuthority57File] = useState('')
    const [issuingAuthority57Remark, setIssuingAuthority57Remark] = useState('')
    //tab7
    const [g12ncw,setg12ncw] = useState('')
    const [g12ncwdet,setg12ncwdet] = useState('')
    const [g12ncwimage,setg12ncwimage] = useState('')
    const [g12ncwremark,setg12ncwremark] = useState('')
    const [g12ncwdate,setg12ncwdate] = useState('')
    const [g12ncwdatevalid,setg12ncwdatevalid] = useState('')
    const [g12ncwnow,setg12ncwnow] = useState('')
    const [g12ncwcoe,setg12ncwcoe] = useState('')
    const [g12ncwcoedet,setg12ncwcoedet] = useState('')
    const [g12ncwcoeimage,setg12ncwcoeimage] = useState('')
    const [g12ncwcoeremark,setg12ncwcoeremark] = useState('')
    const [g13form,setg13form] = useState('')
    const [g13formdet,setg13formdet] = useState('')
    const [g13formimage,setg13formimage] = useState('')
    const [g13formremark,setg13formremark] = useState('')
    const [g13form5date,setg13form5date] = useState('')
    const [g13form5dateofcommence,setg13form5dateofcommence] = useState('')
    const [g13form5licenece,setg13form5licenece] = useState('')
    const [g13form5licenecedet,setg13form5licenecedet] = useState('')
    const [g13form5liceneceimage,setg13form5liceneceimage] = useState('')
    const [g13form5liceneceremark,setg13form5liceneceremark] = useState('')
    const [g13form5licensedol,setg13form5licensedol] = useState('');
    const [g13form5licensedolvalid,setg13form5licensedolvalid] = useState('');
    const [g13form5licensedoldor,setg13form5licensedoldor] = useState('');
    const [g13form5licenseworkers,setg13form5licenseworkers] = useState('');
    const [g13form5licensemanresp,setg13form5licensemanresp] = useState('');
    const [g14dcwc,setg14dcwc] = useState('');
    const [g14dncc,setg14dncc] = useState('');
    const [g14dars,setg14dars] = useState('');
    const [g14dls,setg14dls] = useState('');
    const [g13form5licensefee,setg13form5licensefee] = useState('');
    const [g13form5licensefeedet,setg13form5licensefeedet] = useState('');
    const [g13form5licensefeeimage,setg13form5licensefeeimage] = useState('');
    const [g13form5licensefeeremark,setg13form5licensefeeremark] = useState('');
    const [g13form5securityfee,setg13form5securityfee] = useState('');
    const [g13form5securityfeedet,setg13form5securityfeedet] = useState('');
    const [g13form5securityfeeimage,setg13form5securityfeeimage] = useState('');
    const [g13form5securityfeeremark,setg13form5securityfeeremark] = useState('');
    // const [companyB1email,setcompanyB1email] = useState('');
    // const [companyB1mobileremark,setcompanyB1mobileremark] = useState('');
    // const [companyB1mobile,setcompanyB1mobile] = useState('');
    // const [companyB1mobiledetail,setcompanyB1mobiledetail] = useState('');
    // const [companyB1emailremark,setcompanyB1emailremark] = useState('');
    // const [companyB1emaildetails,setcompanyB1emaildetails] = useState('');       
    const catGet = useSelector((state) => state.catGet);
    const { loading, categoryInfo, error } = catGet;
    const getState = useSelector((state) => state.getState);
    const { loadings, stateInfo } = getState;
    const handleSubmitTab1= async (e) => {
        e.preventDefault();
        const formDataTab1 = new FormData();
        formDataTab1.append("companyname",companyname);
        formDataTab1.append("companydetails",companydetails);
        formDataTab1.append("companyimage",companyimage);
        formDataTab1.append("companyremark",companyremark);
        formDataTab1.append("companyaddress",companyaddress);
        formDataTab1.append("companystate",companystate);
        formDataTab1.append("companydistrict",companydistrict);
        formDataTab1.append("companypin",companypin);
        formDataTab1.append("comapnyaddressdetails",comapnyaddressdetails);
        formDataTab1.append("companyaddressimage",companyaddressimage);
        formDataTab1.append("companyaddressremark",companyaddressremark);
        formDataTab1.append("companytype",companytype);
        formDataTab1.append("companytypedetails",companytypedetails);
        formDataTab1.append("companytypeimage",companytypeimage);
        formDataTab1.append("companytyperemark",companytyperemark);
        formDataTab1.append("companycategory",companycategory);
        formDataTab1.append("companycategorydetails",companycategorydetails);
        formDataTab1.append("companycategoryimage",companycategoryimage);
        formDataTab1.append("companycategoryremark",companycategoryremark);
        formDataTab1.append("companynatureofbusiness",companynatureofbusiness);
        formDataTab1.append("companynatureofbusinessdetails",companynatureofbusinessdetails);
        formDataTab1.append("companynatureofbusinessimage",companynatureofbusinessimage);
        formDataTab1.append("companynatureofbusinessremark",companynatureofbusinessremark);
        dispatch(companytab1create(formDataTab1))
        const elementtab2 = myElementRefTab2.current; 
        handleTabClick(elementtab2.id);
    }
    const handleSubmitTab2 = async (e) => {
        e.preventDefault();

        const formDataTab2 = new FormData();
        formDataTab2.append("companyregistration",companyregistration);
        formDataTab2.append("companyregistrationdetails",companyregistrationdetails);
        formDataTab2.append("companyregistrationimage",companyregistrationimage);
        formDataTab2.append("companyregistrationremark",companyregistrationremark);
        formDataTab2.append("companycin",companycin);
        formDataTab2.append("companycindetails",companycindetails);
        formDataTab2.append("companyciniamge",companyciniamge);
        formDataTab2.append("companycinremark",companycinremark);
        formDataTab2.append("companyissuedplace",companyissuedplace);
        formDataTab2.append("companyissuedplacedetails",companyissuedplacedetails);
        formDataTab2.append("companyissuedplaceimage",companyissuedplaceimage);
        formDataTab2.append("companyissuedplaceremark",companyissuedplaceremark);
        formDataTab2.append("companyauthority",companyauthority);
        formDataTab2.append("companyauthoritydetails",companyauthoritydetails);
        formDataTab2.append("companyauthorityimage",companyauthorityimage);
        formDataTab2.append("companyauthorityremark",companyauthorityremark);
        formDataTab2.append("companyregistrationdate",companyregistrationdate);
        formDataTab2.append("companypan",companypan);
        formDataTab2.append("companypandetails",companypandetails);
        formDataTab2.append("companypanimage",companypanimage);
        formDataTab2.append("companypanremark",companypanremark);
        formDataTab2.append("companytan",companytan);
        formDataTab2.append("companytandetails",companytandetails);
        formDataTab2.append("companytanimage",companytanimage);
        formDataTab2.append("companytanremark",companytanremark);
        formDataTab2.append("companytin",companytin);
        formDataTab2.append("companytindetails",companytindetails);
        formDataTab2.append("companytinimage",companytinimage);
        formDataTab2.append("companytinremark",companytinremark);        
        formDataTab2.append("companygst",companygst);
        formDataTab2.append("companygstdetails",companygstdetails);
        formDataTab2.append("companygstimage",companygstimage);
        formDataTab2.append("companygstremark",companygstremark);
        formData.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab2.append(`RegistrationB1[${index}][${key}]`, value);
            });
        });
        formData1.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab2.append(`RegistrationB2[${index}][${key}]`, value);
            });
        });
        formData2.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab2.append(`RegistrationB3[${index}][${key}]`, value);
            });
        });
        dispatch(companytab2create(formDataTab2))
        const elementtab3 = myElementRefTab3.current; 
        handleTabClick(elementtab3.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitTab3 = async (e) => {
        e.preventDefault();

        const formDataTab3 = new FormData();
        formData3.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab3.append(`ClientcontactC1[${index}][${key}]`, value);
            });
        });
        formData4.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab3.append(`ClientcontactC2[${index}][${key}]`, value);
            });
        });
        formData5.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab3.append(`ClientcontactC3[${index}][${key}]`, value);
            });
        });
        formData6.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab3.append(`ClientcontactC4[${index}][${key}]`, value);
            });
        });
        dispatch(companytab3create(formDataTab3))
        const elementtab4 = myElementRefTab4.current; 
        handleTabClick(elementtab4.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitTab4 = async (e) => {
        e.preventDefault();

        const formDataTab4 = new FormData();
        formDataTab4.append("pfnumber",pfnumber);
        formDataTab4.append("pfdetails",pfdetails);
        formDataTab4.append("pfimage",pfimage);
        formDataTab4.append("pfdremark",pfdremark);
        formDataTab4.append("doc",doc);
        formDataTab4.append("pfaddress",pfaddress);
        formDataTab4.append("pfstate",pfstate);
        formDataTab4.append("pfdistrict",pfdistrict);
        formDataTab4.append("pfpin",pfpin);
        formDataTab4.append("pfaddressdetails",pfaddressdetails);
        formDataTab4.append("pfaddressimage",pfaddressimage);
        formData7.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD1PFsubcodes[${index}][${key}]`, value);
            });
        });
        formDataTab4.append("esinumber",esinumber);
        formDataTab4.append("esidetails",esidetails);
        formDataTab4.append("esiimage",esiimage);
        formDataTab4.append("esidremark",esidremark);
        formDataTab4.append("esidoc",esidoc);
        formDataTab4.append("esiaddress",esiaddress);
        formDataTab4.append("esistate",esistate);
        formDataTab4.append("esidistrict",esidistrict);
        formDataTab4.append("esipin",esipin);
        formDataTab4.append("esiaddressdetails",esiaddressdetails);
        formDataTab4.append("esiaddressimage",esiaddressimage);
        formDataTab4.append("esiaddressremark",esiaddressremark);
        formData8.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD1ESIsubcodes[${index}][${key}]`, value);
            });
        });        
        formDataTab4.append("registrationD3",registrationD3);
        formDataTab4.append("registrationD3details",registrationD3details);
        formDataTab4.append("registrationD3image",registrationD3image);
        formDataTab4.append("registrationD3remark",registrationD3remark);
        formDataTab4.append("doregistrationD3",doregistrationD3);        
        formDataTab4.append("doeregistrationD3",doeregistrationD3);
        formDataTab4.append("doddrregistrationD3",doddrregistrationD3);
        formDataTab4.append("managernameD3",managernameD3);
        formDataTab4.append("managernameD3details",managernameD3details);
        formDataTab4.append("managernameD3image",managernameD3image);
        formDataTab4.append("managernameD3remark",managernameD3remark);
        formDataTab4.append("noeD3",noeD3);
        formDataTab4.append("noemD3",noemD3);
        formDataTab4.append("noefD3",noefD3);
        formDataTab4.append("issueauthfD3",issueauthfD3);
        formDataTab4.append("issueauthfD3details",issueauthfD3details);
        formDataTab4.append("issueauthfD3image",issueauthfD3image);
        formDataTab4.append("issueauthfD3remark",issueauthfD3remark);
        formData9.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3FL[${index}][${key}]`, value);
            });
        });         
        formDataTab4.append("fpD3",fpD3);
        formDataTab4.append("fpD3details",fpD3details);
        formDataTab4.append("fpD3image",fpD3image);
        formDataTab4.append("fpD3remark",fpD3remark);
        formDataTab4.append("doapp",doapp);
        formDataTab4.append("issueauthfpD3",issueauthfpD3);
        formDataTab4.append("issueauthfpD3details",issueauthfpD3details);
        formDataTab4.append("issueauthfpD3image",issueauthfpD3image);
        formDataTab4.append("issueauthfpD3remark",issueauthfpD3remark);
        formDataTab4.append("powerfpD3",powerfpD3);
        formDataTab4.append("powerfpD3details",powerfpD3details);
        formDataTab4.append("powerfpD3image",powerfpD3image);
        formDataTab4.append("powerfpD3remark",powerfpD3remark);
        formDataTab4.append("powerhpfpD3",powerhpfpD3);
        formDataTab4.append("powerhpfpD3details",powerhpfpD3details);
        formDataTab4.append("powerhpfpD3image",powerhpfpD3image);
        formDataTab4.append("powerhpfpD3remark",powerhpfpD3remark);
        formDataTab4.append("registrationlwfD3",registrationlwfD3);
        formDataTab4.append("registrationlwfD3details",registrationlwfD3details);
        formDataTab4.append("registrationlwfD3image",registrationlwfD3image);
        formDataTab4.append("registrationlwfD3remark",registrationlwfD3remark);
        formDataTab4.append("doregistrationlwfD3",doregistrationlwfD3);
        formDataTab4.append("registrationptrD3",registrationptrD3);
        formDataTab4.append("registrationptrD3details",registrationptrD3details);
        formDataTab4.append("registrationptrD3image",registrationptrD3image);
        formDataTab4.append("registrationptrD3remark",registrationptrD3remark);
        formDataTab4.append("doregistrationptrD3",doregistrationptrD3);
        formData10.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3NSP[${index}][${key}]`, value);
            });
        });   
        formData11.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3OTP[${index}][${key}]`, value);
            });
        });
        formData12.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3WOE[${index}][${key}]`, value);
            });
        });     
        formData13.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3TD[${index}][${key}]`, value);
            });
        });      
        formData14.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3MSME[${index}][${key}]`, value);
            });
        });     
        formData15.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3BOCW[${index}][${key}]`, value);
            });
        });         
        formData16.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3IMW[${index}][${key}]`, value);
            });
        });                   
        dispatch(companytab4create(formDataTab4))
        const elementtab5 = myElementRefTab5.current; 
        handleTabClick(elementtab5.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitTab5 = async (e) => {
        e.preventDefault();

        const formDataTab5 = new FormData();
        formDataTab5.append("contLabRegNoE",contLabRegNoE);
        formDataTab5.append("contLabRegNoEDet",contLabRegNoEDet);
        formDataTab5.append("contLabRegNoEFile",contLabRegNoEFile);
        formDataTab5.append("contLabRegNoERemark",contLabRegNoERemark);
        formDataTab5.append("dateOfRegistrationE",dateOfRegistrationE);
        formDataTab5.append("dateOfRegEDet",dateOfRegEDet);
        formDataTab5.append("dateOfRegEFile",dateOfRegEFile);
        formDataTab5.append("dateOfRegERemark",dateOfRegERemark);
        formDataTab5.append("noOfContractEmployeesE",noOfContractEmployeesE);
        formDataTab5.append("noOfContractEmpEDet",noOfContractEmpEDet);
        formDataTab5.append("noOfContractEmpEFile",noOfContractEmpEFile);
        formDataTab5.append("noOfContractEmpERemark",noOfContractEmpERemark);
        formDataTab5.append("nameOfContractorE1",nameOfContractorE1);
        formDataTab5.append("nameOfContractorsE1Det",nameOfContractorsE1Det);
        formDataTab5.append("nameOfContractorsE1File",nameOfContractorsE1File);
        formDataTab5.append("nameOfContractorsE1Remark",nameOfContractorsE1Remark);
        formDataTab5.append("nameOfEstablishmentE1",nameOfEstablishmentE1);
        formDataTab5.append("nameOfEstablishmentE1Det",nameOfEstablishmentE1Det);
        formDataTab5.append("nameOfEstablishmentE1File",nameOfEstablishmentE1File);
        formDataTab5.append("nameOfEstablishmentE1Remark",nameOfEstablishmentE1Remark);
        formDataTab5.append("imageE1",imageE1);
        formDataTab5.append("agreementExpiryDateE2",agreementExpiryDateE2);
        formDataTab5.append("agreementRenewalDateE2",agreementRenewalDateE2);
        formDataTab5.append("natureOfWorkAgreementE2",natureOfWorkAgreementE2);
        formDataTab5.append("natureOfWorkAgreementE2Det",natureOfWorkAgreementE2Det);
        formDataTab5.append("natureOfWorkAgreementE2File",natureOfWorkAgreementE2File);
        formDataTab5.append("natureOfWorkAgreementE2Remark",natureOfWorkAgreementE2Remark);
        formDataTab5.append("noOfEmpDeployedAgreementE2",noOfEmpDeployedAgreementE2);
        formDataTab5.append("noOfEmpDeployedAgreementE2Det",noOfEmpDeployedAgreementE2Det);        
        formDataTab5.append("noOfEmpDeployedAgreementE2File",noOfEmpDeployedAgreementE2File);
        formDataTab5.append("noOfEmpDeployedAgreementE2Remark",noOfEmpDeployedAgreementE2Remark);
        formDataTab5.append("companyTypeLabourE3",companyTypeLabourE3);
        formDataTab5.append("companyTypeLabourE3Det",companyTypeLabourE3Det);
        formDataTab5.append("companyTypeLabourE3File",companyTypeLabourE3File);
        formDataTab5.append("companyTypeLabourE3Remark",companyTypeLabourE3Remark);
        formDataTab5.append("contractLabourLicNoE3",contractLabourLicNoE3);
        formDataTab5.append("contractLabourLicNoE3Det",contractLabourLicNoE3Det);
        formDataTab5.append("contractLabourLicNoE3File",contractLabourLicNoE3File);
        formDataTab5.append("contractLabourLicNoE3Remark",contractLabourLicNoE3Remark);
        formDataTab5.append("contractLicDateE3",contractLicDateE3);
        formDataTab5.append("contractLicDateE3Det",contractLicDateE3Det);
        formDataTab5.append("contractLicDateE3File",contractLicDateE3File);
        formDataTab5.append("contractLicDateE3Remark",contractLicDateE3Remark);
        formDataTab5.append("contractExpiryDateE3",contractExpiryDateE3);
        formDataTab5.append("contractRenewalDueDateE3",contractRenewalDueDateE3);
        formDataTab5.append("noOfWorkersContractE3",noOfWorkersContractE3);
        formDataTab5.append("panContractorsE3",panContractorsE3);
        formDataTab5.append("panContractorsE3Det",panContractorsE3Det);
        formDataTab5.append("panContractorsE3File",panContractorsE3File);
        formDataTab5.append("panContractorsE3Remark",panContractorsE3Remark);
        formDataTab5.append("gstContractorsE3",gstContractorsE3);
        formDataTab5.append("gstContractorsE3Det",gstContractorsE3Det);
        formDataTab5.append("gstContractorsE3File",gstContractorsE3File);
        formDataTab5.append("gstContractorsE3Remark",gstContractorsE3Remark);
        formDataTab5.append("pfRegContractorsE3",pfRegContractorsE3);
        formDataTab5.append("pfRegContractorsE3Det",pfRegContractorsE3Det);
        formDataTab5.append("pfRegContractorsE3File",pfRegContractorsE3File);
        formDataTab5.append("pfRegContractorsE3Remark",pfRegContractorsE3Remark);
        formDataTab5.append("esicRegContractorsE3",esicRegContractorsE3);
        formDataTab5.append("esicRegContractorsE3Det",esicRegContractorsE3Det);
        formDataTab5.append("esicRegContractorsE3File",esicRegContractorsE3File);
        formDataTab5.append("esicRegContractorsE3Remark",esicRegContractorsE3Remark);
        formDataTab5.append("shopsandEstContractorsE3",shopsandEstContractorsE3);
        formDataTab5.append("shopsandEstContractorsE3Det",shopsandEstContractorsE3Det);
        formDataTab5.append("shopsandEstContractorsE3File",shopsandEstContractorsE3File);
        formDataTab5.append("shopsandEstContractorsE3Remark",shopsandEstContractorsE3Remark);
        formDataTab5.append("lwfRegContractorsE3",lwfRegContractorsE3);
        formDataTab5.append("lwfRegContractorsE3Det",lwfRegContractorsE3Det);
        formDataTab5.append("lwfRegContractorsE3File",lwfRegContractorsE3File);
        formDataTab5.append("lwfRegContractorsE3Remark",lwfRegContractorsE3Remark);
        formDataTab5.append("profTaxContractorsE3",profTaxContractorsE3);
        formDataTab5.append("profTaxContractorsE3Det",profTaxContractorsE3Det);
        formDataTab5.append("profTaxContractorsE3File",profTaxContractorsE3File);
        formDataTab5.append("profTaxContractorsE3Remark",profTaxContractorsE3Remark);
        dispatch(companytab5create(formDataTab5))
        const elementtab6 = myElementRefTab6.current; 
        handleTabClick(elementtab6.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitTab6 = async (e) => {
        e.preventDefault();

        const formDataTab6 = new FormData();
        formData17.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F1branch[${index}][${key}]`, value);
            });
        });   
        formDataTab6.append("branchaddress",branchaddress);
        formDataTab6.append("branchstate",branchstate);
        formDataTab6.append("branchdistrict",branchdistrict);
        formDataTab6.append("branchpin",branchpin);
        formDataTab6.append("contractorAddBranchFDet",contractorAddBranchFDet);
        formDataTab6.append("contractorAddBranchFFile",contractorAddBranchFFile);
        formDataTab6.append("contractorAddBranchFRemark",contractorAddBranchFRemark);
        formDataTab6.append("branchOpeningDateF",branchOpeningDateF);
        formDataTab6.append("noOfEmpBranchF",noOfEmpBranchF);
        formDataTab6.append("managerNameF1",managerNameF1);
        formDataTab6.append("managerNameF1Det",managerNameF1Det);
        formDataTab6.append("managerNameF1File",managerNameF1File);
        formDataTab6.append("managerNameF1Remark",managerNameF1Remark);
        formDataTab6.append("managerMobNoF1",managerMobNoF1);
        formDataTab6.append("managerMobNoF1Det",managerMobNoF1Det);
        formDataTab6.append("managerMobNoF1Remark",managerMobNoF1Remark);
        formDataTab6.append("managerEmailF1",managerEmailF1);
        formDataTab6.append("managerEmailF1Det",managerEmailF1Det);
        formDataTab6.append("managerEmailF1Remark",managerEmailF1Remark);
        formDataTab6.append("managerAadharNoF1",managerAadharNoF1);
        formDataTab6.append("managerAadharNoF1Det",managerAadharNoF1Det);
        formDataTab6.append("managerAadharNoF1File",managerAadharNoF1File);
        formDataTab6.append("managerAadharNoF1Remark",managerAadharNoF1Remark);
        formDataTab6.append("managerPanF1",managerPanF1);
        formDataTab6.append("managerPanF1Det",managerPanF1Det);
        formDataTab6.append("managerPanF1File",managerPanF1File);
        formDataTab6.append("managerPanF1Remark",managerPanF1Remark);
        formDataTab6.append("shopsEstLicenseF2",shopsEstLicenseF2);
        formDataTab6.append("shopsEstLicenseF2Det",shopsEstLicenseF2Det);        
        formDataTab6.append("shopsEstLicenseF2File",shopsEstLicenseF2File);
        formDataTab6.append("shopsEstLicenseF2Remark",shopsEstLicenseF2Remark);
        formData18.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F1RLicense[${index}][${key}]`, value);
            });
        });   
        formData19.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F1FL[${index}][${key}]`, value);
            });
        });   
        formData20.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F1FP[${index}][${key}]`, value);
            });
        }); 
        formDataTab6.append("contractLabRegNoF5",contractLabRegNoF5);
        formDataTab6.append("contractLabRegNoF5Det",contractLabRegNoF5Det);
        formDataTab6.append("contractLabRegNoF5File",contractLabRegNoF5File);
        formDataTab6.append("contractLabRegNoF5Remark",contractLabRegNoF5Remark);
        formDataTab6.append("regDateContractorF5",regDateContractorF5);
        formDataTab6.append("coOfContractEmpF5",coOfContractEmpF5);
        formDataTab6.append("noOfContractorsF5",noOfContractorsF5);
        formDataTab6.append("contractorNameF51",contractorNameF51);
        formDataTab6.append("contractorNameF51Det",contractorNameF51Det);
        formDataTab6.append("contractorNameF51File",contractorNameF51File);
        formDataTab6.append("contractorNameF51Remark",contractorNameF51Remark);
        formDataTab6.append("establishmentNameF51",establishmentNameF51);
        formDataTab6.append("establishmentNameF51Det",establishmentNameF51Det);
        formDataTab6.append("establishmentNameF51File",establishmentNameF51File);
        formDataTab6.append("establishmentNameF51Remark",establishmentNameF51Remark);
        formDataTab6.append("regisocontractaddress",regisocontractaddress);
        formDataTab6.append("regisocontractstate",regisocontractstate);
        formDataTab6.append("regisocontractdistrict",regisocontractdistrict);
        formDataTab6.append("regisocontractpin",regisocontractpin);
        formDataTab6.append("regAddContractorF51Det",regAddContractorF51Det);
        formDataTab6.append("regAddContractorF51File",regAddContractorF51File);
        formDataTab6.append("regAddContractorF51Remark",regAddContractorF51Remark);
        formDataTab6.append("expiryDateF52",expiryDateF52);
        formDataTab6.append("renewalDateF52",renewalDateF52);
        formDataTab6.append("natureOfWorkF52",natureOfWorkF52);
        formDataTab6.append("natureOfWorkF52Det",natureOfWorkF52Det);
        formDataTab6.append("natureOfWorkF52File",natureOfWorkF52File);
        formDataTab6.append("natureOfWorkF52Remark",natureOfWorkF52Remark);
        formDataTab6.append("noOfEmpDeployedF52",companyTypeF53);
        formDataTab6.append("renewalDateF52",renewalDateF52);
        formDataTab6.append("companyTypeF53Det",companyTypeF53Det);
        formDataTab6.append("companyTypeF53File",companyTypeF53File);
        formDataTab6.append("companyTypeF53Remark",companyTypeF53Remark);
        formDataTab6.append("contractLabLicNoF53",contractLabLicNoF53);
        formDataTab6.append("contractLabLicNoF53Det",contractLabLicNoF53Det);
        formDataTab6.append("contractLabLicNoF53File",contractLabLicNoF53File);
        formDataTab6.append("contractLabLicNoF53Remark",contractLabLicNoF53Remark);
        formDataTab6.append("licenseDateF53",licenseDateF53);
        formDataTab6.append("expiryDateF53",expiryDateF53);
        formDataTab6.append("renewalDateF53",renewalDateF53);
        formDataTab6.append("noOfWorkerF53",noOfWorkerF53);
        formDataTab6.append("panF53",panF53);
        formDataTab6.append("panF53Det",panF53Det);
        formDataTab6.append("panF53File",panF53File);
        formDataTab6.append("panF53Remark",panF53Remark);
        formDataTab6.append("gstF53",gstF53);
        formDataTab6.append("gstF53Det",gstF53Det);
        formDataTab6.append("gstF53File",gstF53File);
        formDataTab6.append("gstF53Remark",gstF53Remark);
        formDataTab6.append("pfRegF53",pfRegF53);
        formDataTab6.append("pfRegF53Det",pfRegF53Det);
        formDataTab6.append("pfRegF53File",pfRegF53File);
        formDataTab6.append("pfRegF53Remark",pfRegF53Remark);
        formDataTab6.append("esicRegF53",esicRegF53);
        formDataTab6.append("esicRegF53Det",esicRegF53Det);
        formDataTab6.append("esicRegF53File",esicRegF53File);
        formDataTab6.append("esicRegF53Remark",esicRegF53Remark);
        formDataTab6.append("shopsEstF53",shopsEstF53);
        formDataTab6.append("shopsEstF53Det",shopsEstF53Det);
        formDataTab6.append("shopsEstF53File",shopsEstF53File);
        formDataTab6.append("shopsEstF53Remark",shopsEstF53Remark);
        formDataTab6.append("lwfRegF53",lwfRegF53);
        formDataTab6.append("lwfRegF53Det",lwfRegF53Det);
        formDataTab6.append("lwfRegF53File",lwfRegF53File);
        formDataTab6.append("lwfRegF53Remark",lwfRegF53Remark);
        formDataTab6.append("profTaxF53",profTaxF53);
        formDataTab6.append("profTaxF53Det",profTaxF53Det);
        formDataTab6.append("profTaxF53File",profTaxF53File);
        formDataTab6.append("profTaxF53Remark",profTaxF53Remark);

        formData21.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F54NSP[${index}][${key}]`, value);
            });
        }); 
        formData22.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F54OTP[${index}][${key}]`, value);
            });
        }); 
        formData23.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F54WOE[${index}][${key}]`, value);
            });
        }); 
        formData24.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab6.append(`F54TL[${index}][${key}]`, value);
            });
        });         
        dispatch(companytab6create(formDataTab6))
        const elementtab7 = myElementRefTab7.current; 
        handleTabClick(elementtab7.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitTab7 = async (e) => {
        e.preventDefault();

        const formDataTab7 = new FormData();
        formData25.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab7.append(`GCC4TL[${index}][${key}]`, value);
            });
        });   
        formDataTab7.append("g12ncw",g12ncw);
        formDataTab7.append("g12ncwdet",g12ncwdet);
        formDataTab7.append("g12ncwimage",g12ncwimage);
        formDataTab7.append("g12ncwremark",g12ncwremark);
        formDataTab7.append("g12ncwdate",g12ncwdate);
        formDataTab7.append("g12ncwdatevalid",g12ncwdatevalid);
        formDataTab7.append("g12ncwnow",g12ncwnow);
        formDataTab7.append("g12ncwcoe",g12ncwcoe);
        formDataTab7.append("g12ncwcoedet",g12ncwcoedet);
        formDataTab7.append("g12ncwcoeimage",g12ncwcoeimage);
        formDataTab7.append("g12ncwcoeremark",g12ncwcoeremark);
        formDataTab7.append("g13form",g13form);

        formDataTab7.append("g13formdet",g13formdet);
        formDataTab7.append("g13formimage",g13formimage);
        formDataTab7.append("g13formremark",g13formremark);
        formDataTab7.append("g13form5date",g13form5date);
        formDataTab7.append("g13form5dateofcommence",g13form5dateofcommence);
        formDataTab7.append("g13form5licenece",g13form5licenece);
        formDataTab7.append("g13form5licenecedet",g13form5licenecedet);
        formDataTab7.append("g13form5liceneceimage",g13form5liceneceimage);
        formDataTab7.append("g13form5liceneceremark",g13form5liceneceremark);
        formDataTab7.append("g13form5licensedol",g13form5licensedol);
        formDataTab7.append("g13form5licensedolvalid",g13form5licensedolvalid);
        formDataTab7.append("g13form5licensedoldor",g13form5licensedoldor);
        formDataTab7.append("g13form5licenseworkers",g13form5licenseworkers);
        formDataTab7.append("g13form5licensemanresp",g13form5licensemanresp);
        formDataTab7.append("g13form5licensefee",g13form5licensefee);
        formDataTab7.append("g13form5licensefeedet",g13form5licensefeedet);
        formDataTab7.append("g13form5licensefeeimage",g13form5licensefeeimage);        
        formDataTab7.append("g13form5licensefeeremark",g13form5licensefeeremark);
        formDataTab7.append("g13form5securityfee",g13form5securityfee);
        formDataTab7.append("g13form5securityfeedet",g13form5securityfeedet);
        formDataTab7.append("g13form5securityfeeimage",g13form5securityfeeimage);
        formDataTab7.append("g13form5securityfeeremark",g13form5securityfeeremark);
        formDataTab7.append("g14dcwc",g14dcwc);
        formDataTab7.append("g14dncc",g14dncc);
        formDataTab7.append("g14dars",g14dars);
        formDataTab7.append("g14dls",g14dls);
        dispatch(companytab7create(formDataTab7))
        // const elementtab4 = myElementRefTab5.current; 
        // handleTabClick(elementtab4.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    useEffect(() => {
        dispatch(categoryGet());
        dispatch(stateGets())
    }, [dispatch]);
    const showSubcodes = () => {
        myRefSubcodes.current.style.display = 'none'
    }
    const noshowSubcodes = () => {
        setFormData7([]);
        myRefSubcodes.current.style.display = 'inline'
    }
    const showSubcodesESI = () => {
        myRefSubcodesESI.current.style.display = 'none'
    }
    const noshowSubcodesESI = () => {
        setFormData8([]);
        myRefSubcodesESI.current.style.display = 'inline'
    }
    const showLabour = () => {
        myRefSubcodesLabour.current.style.display = 'none'
    }
    const noshowLabour = () => {
        // setFormData7([]);
        myRefSubcodesLabour.current.style.display = 'inline'
    }
    const showbranch = () => {
        myRefBranch.current.style.display = 'none'
    }
    const noshowbranch = () => {
        // setFormData7([]);
        myRefBranch.current.style.display = 'inline'
    }
    const showf1show = () => {
        myRefF1Labour.current.style.display = 'none'
    }
    const noshowf1show = () => {
        // setFormData7([]);
        myRefF1Labour.current.style.display = 'inline'
    }
    const showgshow = () => {
        myRefGLabour.current.style.display = 'none'
    }
    const noshowgshow = () => {
        setFormData25([]);
        myRefGLabour.current.style.display = 'inline'
    }
    const showgclrashow = () => {
        myRefGCLRA.current.style.display = 'none'
    }
    const noshowgclrashow = () => {
        // setFormData25([]);
        myRefGCLRA.current.style.display = 'inline'
    }
    const createnew = () => {
        setTimeout(() => {
            // const elementTab1 = myElementRefTab1.current;
            // if (elementTab1) {
            //     elementTab1.click();
            // }
            // setFormData([]);
            // setFormData1([]);
            // setFormData2([]);
            // setFormData3([]);
            // setFormData4([]);
            // setFormData5([]);
            // setFormData6([]);
            // setFormData7([]);
            // setFormData8([]);
            // setFormData9([]);
            // setFormData10([]);
            // setFormData11([]);
            // setFormData12([]);
            // setFormData13([]);
            // setFormData14([]);
            // setFormData15([]);
            // setFormData16([]);
            // setFormData17([]);
            // setFormData18([]);
            // setFormData19([]);
            // setFormData20([]);
            // setFormData21([]);
            // setFormData22([]);
            // setFormData23([]);
            // setFormData24([]);
            // setFormData25([]);
            // console.log(formData1)
            // //tab1
            // setcompanyname('');
            // setcompanydetails('');
            // setcompanyimage('');
            // setcompanyremark('');
            // setcompanyaddress('');
            // setcompanystate('');
            // setcompanydistrict('');
            // setcompanypin('');
            // setcomapnyaddressdetails('');
            // setcompanyaddressimage('');
            // setcompanyaddressremark('');
            // setcompanytype('');
            // setcompanytypedetails('');
            // setcompanytypeimage('');
            // setcompanytyperemark('');
            // setcompanycategory('');
            // setcompanycategorydetails('');
            // setcompanycategoryimage('');
            // setcompanycategoryremark('');
            // setcompanynatureofbusiness('');
            // setcompanynatureofbusinessdetails('');
            // setcompanynatureofbusinessimage('');
            // setcompanynatureofbusinessremark('');
            // setcompanyregistration('');
            // setcompanyregistrationdetails('');
            // setcompanyregistrationimage('');
            // setcompanyregistrationremark('');
            // setcompanycin('');
            // setcompanycindetails('');
            // setcompanyciniamge('');
            // setcompanycinremark('');
            // setcompanyissuedplace('');
            // setcompanyissuedplacedetails('');
            // setcompanyissuedplaceimage('');
            // setcompanyissuedplaceremark('');
            // setcompanyauthority('');
            // setcompanyauthoritydetails('');
            // setcompanyauthorityimage('');
            // setcompanyauthorityremark('');
            // setcompanyregistrationdate('');
            // setcompanytan('');
            // setcompanytandetails('');
            // setcompanytanimage('');
            // setcompanytanremark('');
            // setcompanytin('');
            // setcompanypan('');
            // setcompanypandetails('');
            // setcompanypanimage('');
            // setcompanypanremark('');
            // setcompanytindetails('');
            // setcompanytinimage('');
            // setcompanytinremark('');
            // setcompanygst('');
            // setcompanygstdetails('');
            // setcompanygstimage('');
            // setcompanygstremark('');
            // setpfnumber('');
            // setpfdetails('');
            // setpfimage('');
            // setpfdremark('');
            // setdoc('');
            // setpfaddress('');
            // setpfstate('');
            // setpfdistrict('');
            // setpfpin('');
            // setpfaddressdetails('');
            // setpfaddressimage('');
            // setpfaddressremark('');
            // setesinumber('');
            // setesidetails('');
            // setesiimage('');
            // setesidremark('');
            // setesidoc('');
            // setesiaddress('');
            // setesistate('');
            // setesidistrict('');
            // setesipin('');
            // setesiaddressdetails('');
            // setesiaddressimage('');
            // setesiaddressremark('');
            // setregistrationD3('');
            // setregistrationD3details('');
            // setregistrationD3image('');
            // setregistrationD3remark('');
            // setdoregistrationD3('');
            // setdoeregistrationD3('');
            // setdoddrregistrationD3('');
            // setmanagernameD3('');
            // setmanagernameD3details('');
            // setmanagernameD3image('');
            // setmanagernameD3remark('');
            // setnoeD3('');
            // setnoemD3('');
            // setnoefD3('');
            // setissueauthfD3('');
            // setissueauthfD3details('');
            // setissueauthfDimage('');
            // setissueauthfD3remark('');
            // setfpD3('');
            // setfpD3details('');
            // setfpD3image('');
            // setfpD3remark('');
            // setdoapp('');
            // setissueauthfpD3('');
            // setissueauthfpD3details('');
            // setissueauthfpD3image('');
            // setissueauthfpD3remark('');
            // setpowerfpD3('');
            // setpowerfpD3details('');
            // setpowerfpD3image('');
            // setpowerfpD3remark('');
            // setpowerhpfpD3('');
            // setpowerhpfpD3details('');
            // setpowerhpfpD3image('');
            // setpowerhpfpD3remark('');
            // setregistrationlwfD3('');
            // setregistrationlwfD3details('');
            // setregistrationlwfD3image('');
            // setregistrationlwfD3remark('');
            // setdoregistrationlwfD3('');
            // setregistrationptrD3('');
            // setregistrationptrD3details('');
            // setregistrationptrD3image('');
            // setregistrationptrD3remark('');
            // setdoregistrationptrD3('');

            // setIsEngaged('')
            // setContLabRegNoE('')
            // setContLabRegNoEDet('')
            // setContLabRegNoEFile('')
            // setContLabRegNoERemark('')
            // setDateOfRegistrationE('')
            // setDateOfRegEDet('')
            // setDateOfRegEFile('')
            // setDateOfRegERemark('')
            // setNoOfContractEmployeesE('')
            // setNoOfContractEmpEDet('')
            // setNoOfContractEmpEFile('')
            // setNoOfContractEmpERemark('')
            // setNoOfContractorsE('')
            // setNoOfContractorsDetE('')
            // setNoOfContractorsEFile('')
            // setNoOfContractorsERemark('')
            // setNameOfContractorE1('')
            // setNameOfContractorsE1Det('')
            // setNameOfContractorsE1File('')
            // setNameOfContractorsE1Remark('')
            // setNameOfEstablishmentE1('')
            // setNameOfEstablishmentE1Det('')
            // setNameOfEstablishmentE1File('')
            // setNameOfEstablishmentE1Remark('')
            // setAddressE1('')
            // setStateE1('')
            // setDistrictE1('')
            // setpinE1('')
            // setDetailsE1('')
            // setImageE1('')
            // setremarkE1('')
            // setRegAddContractorE1Det('')
            // setRegAddContractorE1File('')
            // setRegAddContractorE1Remark('')
            // setAgreementExpiryDateE2('')
            // setAgreementExpiryDateE2Det('')
            // setAgreementExpiryDateE2File('')
            // setAgreementExpiryDateE2Remark('')
            // setAgreementRenewalDateE2('')
            // setAgreementRenewalDateE2Det('')
            // setAgreementRenewalDateE2DetFile('')
            // setAgreementRenewalDateE2Remark('')
            // setNatureOfWorkAgreementE2('')
            // setNatureOfWorkAgreementE2Det('')
            // setNatureOfWorkAgreementE2File('')
            // setNatureOfWorkAgreementE2Remark('')
            // setNoOfEmpDeployedAgreementE2('')
            // setNoOfEmpDeployedAgreementE2Det('')
            // setNoOfEmpDeployedAgreementE2File('')
            // setNoOfEmpDeployedAgreementE2Remark('')
            // setCompanyTypeLabourE3('')
            // setCompanyTypeLabourE3Det('')
            // setCompanyTypeLabourE3File('')
            // setCompanyTypeLabourE3Remark('')
            // setContractLabourLicNoE3('')
            // setContractLabourLicNoE3Det('')
            // setContractLabourLicNoE3File('')
            // setContractLabourLicNoE3Remark('')
            // setContractLicDateE3('')
            // setContractLicDateE3Det('')
            // setContractLicDateE3File('')
            // setContractLicDateE3Remark('')
            // setContractExpiryDateE3('')
            // setContractExpiryDateE3Det('')
            // setContractExpiryDateE3File('')
            // setContractExpiryDateE3Remark('')
            // setContractRenewalDueDateE3('')
            // setContractRenewalDueDateE3Det('')
            // setContractRenewalDueDateE3File('')
            // setContractRenewalDueDateE3Remark('')
            // setNoOfWorkersContractE3('')
            // setNoOfWorkersContractE3Det('')
            // setNoOfWorkersContractE3File('')
            // setNoOfWorkersContractE3Remark('')
            // setPanContractorsE3('')
            // setPanContractorsE3Det('')
            // setPanContractorsE3File('')
            // setPanContractorsE3Remark('')
            // setGstContractorsE3('')
            // setGstContractorsE3Det('')
            // setGstContractorsE3File('')
            // setGstContractorsE3Remark('')
            // setPfRegContractorsE3('')
            // setPfRegContractorsE3Det('')
            // setPfRegContractorsE3File('')
            // setPfRegContractorsE3Remark('')
            // setEsicRegContractorsE3('')
            // setEsicRegContractorsE3Det('')
            // setEsicRegContractorsE3File('')
            // setEsicRegContractorsE3Remark('')
            // setShopsandEstContractorsE3('')
            // setShopsandEstContractorsE3Det('')
            // setShopsandEstContractorsE3File('')
            // setShopsandEstContractorsE3Remark('')
            // setLwfRegContractorsE3('')
            // setLwfRegContractorsE3Det('')
            // setLwfRegContractorsE3File('')
            // setLwfRegContractorsE3Remark('')
            // setProfTaxContractorsE3('')
            // setProfTaxContractorsE3Det('')
            // setProfTaxContractorsE3File('')
            // setProfTaxContractorsE3Remark('')

            // setBranchAddress('')
            // setBranchState('')
            // setBranchDistrict('')
            // setBranchPin('')
            // setBranchNameF('')
            // setBranchNameFDet('')
            // setBranchNameFFile('')
            // setBranchNameFRemark('')
            // setIsFactorySEF('')
            // setContractorAddBranchFDet('')
            // setContractorAddBranchFFile('')
            // setContractorAddBranchFRemark('')
            // setBranchOpeningDateF('')
            // setBranchOpeningDateFDet('')
            // setBranchOpeningDateFFile('')
            // setBranchOpeningDateFRemark('')
            // setNoOfEmpBranchF('')
            // setNoOfEmpBranchFDet('')
            // setNoOfEmpBranchFFile('')
            // setNoOfEmpBranchFRemark('')
            // setManagerNameF1('')
            // setManagerNameF1Det('')
            // setManagerNameF1File('')
            // setManagerNameF1Remark('')
            // setManagerMobNoF1('')
            // setManagerMobNoF1Det('')
            // setManagerMobNoF1File('')
            // setManagerMobNoF1Remark('')
            // setManagerEmailF1('')
            // setManagerEmailF1Det('')
            // setManagerEmailF1File('')
            // setManagerEmailF1Remark('')
            // setManagerAadharNoF1('')
            // setManagerAadharNoF1Det('')
            // setManagerAadharNoF1File('')
            // setManagerAadharNoF1Remark('')
            // setManagerPanF1('')
            // setManagerPanF1Det('')
            // setManagerPanF1File('')
            // setManagerPanF1Remark('')
            // setShopsEstLicenseF2('')
            // setShopsEstLicenseF2Det('')
            // setShopsEstLicenseF2File('')
            // setShopsEstLicenseF2Remark('')
            // setNumberF2('')
            // setNumberF2Det('')
            // setNumberF2File('')
            // setNumberF2Remark('')
            // setRegDateF2('')
            // setRegDateF2Det('')
            // setRegDateF2File('')
            // setRegDateF2Remark('')
            // setExpiryDateF2('')
            // setExpiryDateF2Det('')
            // setExpiryDateF2File('')
            // setExpiryDateF2Remark('')
            // setRenewalDateF2('')
            // setRenewalDateF2Det('')
            // setRenewalDateF2File('')
            // setRenewalDateF2Remark('')
            // setManagerNameF2('')
            // setManagerNameF2Det('')
            // setManagerNameF2File('')
            // setManagerNameF2Remark('')
            // setNoOfEmployeesF2('')
            // setNoOfEmployeesF2Det('')
            // setNoOfEmployeesF2File('')
            // setNoOfEmployeesF2Remark('')
            // setMaleF2('')
            // setMaleF2Det('')
            // setMaleF2File('')
            // setMaleF2Remark('')
            // setFemaleF2('')
            // setFemaleF2Det('')
            // setFemaleF2File('')
            // setFemaleF2Remark('')
            // setIssuingAuthorityF2('')
            // setIssuingAuthorityF2Det('')
            // setIssuingAuthorityF2File('')
            // setIssuingAuthorityF2Remark('')
            // setNumberF3('')
            // setNumberF3Det('')
            // setNumberF3File('')
            // setNumberF3Remark('')
            // setRegDateF3('')
            // setRegDateF3Det('')
            // setRegDateF3File('')
            // setRegDateF3Remark('')
            // setExpiryDateF3('')
            // setExpiryDateF3Det('')
            // setExpiryDateF3File('')
            // setExpiryDateF3Remark('')
            // setRenewalDateF3('')
            // setRenewalDateF3Det('')
            // setRenewalDateF3File('')
            // setRenewalDateF3Remark('')
            // setManagerNameF3('')
            // setManagerNameF3Det('')
            // setManagerNameF3File('')
            // setManagerNameF3Remark('')
            // setNoOfEmployeesF3('')
            // setNoOfEmployeesF3Det('')
            // setNoOfEmployeesF3File('')
            // setNoOfEmployeesF3Remark('')
            // setMaleF3('')
            // setMaleF3Det('')
            // setMaleF3File('')
            // setMaleF3Remark('')
            // setFemaleF3('')
            // setFemaleF3Det('')
            // setFemaleF3File('')
            // setFemaleF3Remark('')
            // setIssuingAuthorityF3('')
            // setIssuingAuthorityF3Det('')
            // setIssuingAuthorityF3File('')
            // setIssuingAuthorityF3Remark('')
            // setNumberF4('')
            // setNumberF4Det('')
            // setNumberF4File('')
            // setNumberF4Remark('')
            // setRegDateF4('')
            // setRegDateF4Det('')
            // setRegDateF4File('')
            // setRegDateF4Remark('')
            // setIssuingAuthorityF4('')
            // setIssuingAuthorityF4Det('')
            // setIssuingAuthorityF4File('')
            // setIssuingAuthorityF4Remark('')
            // setNumberF5('')
            // setNumberF5Det('')
            // setNumberF5File('')
            // setNumberF5Remark('')
            // setRegDateF5('')
            // setRegDateF5Det('')
            // setRegDateF5File('')
            // setRegDateF5Remark('')
            // setIssuingAuthorityF5('')
            // setIssuingAuthorityF5Det('')
            // setIssuingAuthorityF5File('')
            // setIssuingAuthorityF5Remark('')
            // setIsContractLabourEngagedF5('')
            // setContractLabRegNoF5('')
            // setContractLabRegNoF5Det('')
            // setContractLabRegNoF5File('')
            // setContractLabRegNoF5Remark('')
            // setCoOfContractEmpF5('')
            // setRegDateContractorF5('')
            // setRegDateContractorF5Det('')
            // setRegDateContractorF5File('')
            // setRegDateContractorF5Remark('')
            // setNoOfContractEmpF5('')
            // setNoOfContractEmpF5Det('')
            // setNoOfContractEmpF5File('')
            // setNoOfContractEmpF5Remark('')
            // setNoOfContractorsF5('')
            // setNoOfContractorsF5Det('')
            // setNoOfContractorsF5File('')
            // setNoOfContractorsF5Remark('')
            // setContractorNameF51('')
            // setContractorNameF51Det('')
            // setContractorNameF51File('')
            // setContractorNameF51Remark('')
            // setEstablishmentNameF51('')
            // setEstablishmentNameF51Det('')
            // setEstablishmentNameF51File('')
            // setEstablishmentNameF51Remark('')
            // setRegAddContractorF51Det('')
            // setregisocontractaddress('')
            // setregisocontractstate('')
            // setregisocontractdistrict('')
            // setregisocontractpin('')
            // setRegAddContractorF51File('')
            // setRegAddContractorF51Remark('')
            // setExpiryDateF52('')
            // setExpiryDateF52Det('')
            // setExpiryDateF52File('')
            // setExpiryDateF52Remark('')
            // setRenewalDateF52('')
            // setRenewalDateF52Det('')
            // setRenewalDateF52File('')
            // setRenewalDateF52Remark('')
            // setNatureOfWorkF52('')
            // setNatureOfWorkF52Det('')
            // setNatureOfWorkF52File('')
            // setNatureOfWorkF52Remark('')
            // setNoOfEmpDeployedF52('')
            // setNoOfEmpDeployedF52Det('')
            // setNoOfEmpDeployedF52File('')
            // setNoOfEmpDeployedF52Remark('')
            // setCompanyTypeF53('')
            // setCompanyTypeF53Det('')
            // setCompanyTypeF53File('')
            // setCompanyTypeF53Remark('')
            // setContractLabLicNoF53('')
            // setContractLabLicNoF53Det('')
            // setContractLabLicNoF53File('')
            // setContractLabLicNoF53Remark('')
            // setLicenseDateF53('')
            // setLicenseDateF53Det('')
            // setLicenseDateF53File('')
            // setLicenseDateF53Remark('')
            // setExpiryDateF53('')
            // setExpiryDateF53Det('')
            // setExpiryDateF53File('')
            // setExpiryDateF53Remark('')
            // setRenewalDateF53('')
            // setRenewalDateF53Det('')
            // setRenewalDateF53File('')
            // setRenewalDateF53Remark('')
            // setNoOfWorkerF53('')
            // setNoOfWorkerF53Det('')
            // setNoOfWorkerF53File('')
            // setNoOfWorkerF53Remark('')
            // setPanF53('')
            // setPanF53Det('')
            // setPanF53File('')
            // setPanF53Remark('')
            // setGstF53('')
            // setGstF53Det('')
            // setGstF53File('')
            // setGstF53Remark('')
            // setPfRegF53('')
            // setPfRegF53Det('')
            // setPfRegF53File('')
            // setPfRegF53Remark('')
            // setEsicRegF53('')
            // setEsicRegF53Det('')
            // setEsicRegF53File('')
            // setEsicRegF53Remark('')
            // setShopsEstF53('')
            // setShopsEstF53Det('')
            // setShopsEstF53File('')
            // setShopsEstF53Remark('')
            // setLwfRegF53('')
            // setLwfRegF53Det('')
            // setLwfRegF53File('')
            // setLwfRegF53Remark('')
            // setProfTaxF53('')
            // setProfTaxF53Det('')
            // setProfTaxF53File('')
            // setProfTaxF53Remark('')
            // setNumber54('')
            // setNumber54Det('')
            // setNumber54File('')
            // setNumber54Remark('')
            // setRegDate54('')
            // setRegDate54Det('')
            // setRegDate54File('')
            // setRegDate54Remark('')
            // setExpiryDate54('')
            // setExpiryDate54Det('')
            // setExpiryDate54File('')
            // setExpiryDate54Remark('')
            // setRenewalDate54('')
            // setRenewalDate54Det('')
            // setRenewalDate54File('')
            // setRenewalDate54Remark('')
            // setIssuingAuthority54('')
            // setIssuingAuthority54Det('')
            // setIssuingAuthority54File('')
            // setIssuingAuthority54Remark('')
            // setNumber55('')
            // setNumber55Det('')
            // setNumber55File('')
            // setNumber55Remark('')
            // setRegDate55('')
            // setRegDate55Det('')
            // setRegDate55File('')
            // setRegDate55Remark('')
            // setExpiryDate55('')
            // setExpiryDate55Det('')
            // setExpiryDate55File('')
            // setExpiryDate55Remark('')
            // setRenewalDate55('')
            // setRenewalDate55Det('')
            // setRenewalDate55File('')
            // setRenewalDate55Remark('')
            // setIssuingAuthoritye55('')
            // setIssuingAuthoritye55Det('')
            // setIssuingAuthoritye55File('')
            // setIssuingAuthoritye55Remark('')
            // setNumber56('')
            // setNumber56Det('')
            // setNumber56File('')
            // setNumber56Remark('')
            // setRegDate56('')
            // setRegDate56Det('')
            // setRegDate56File('')
            // setRegDate56Remark('')
            // setExpiryDate56('')
            // setExpiryDate56Det('')
            // setExpiryDate56File('')
            // setExpiryDate56Remark('')
            // setRenewalDate56('')
            // setRenewalDate56Det('')
            // setRenewalDate56File('')
            // setRenewalDate56Remark('')
            // setIssuingAuthority56('')
            // setIssuingAuthority56Det('')
            // setIssuingAuthority56File('')
            // setIssuingAuthority56Remark('')
            // setNumber57('')
            // setNumber57Det('')
            // setNumber57File('')
            // setNumber57Remark('')
            // setRegDate57('')
            // setRegDate57Det('')
            // setRegDate57File('')
            // setRegDate57Remark('')
            // setExpiryDate57('')
            // setExpiryDate57Det('')
            // setExpiryDate57File('')
            // setExpiryDate57Remark('')
            // setRenewalDate57('')
            // setRenewalDate57Det('')
            // setRenewalDate57File('')
            // setRenewalDate57Remark('')
            // setIssuingAuthority57('')
            // setIssuingAuthority57Det('')
            // setIssuingAuthority57File('')
            // setIssuingAuthority57Remark('')

            // setg12ncw('')
            // setg12ncwdet('')
            // setg12ncwimage('')
            // setg12ncwremark('')
            // setg12ncwdate('')
            // setg12ncwdatevalid('')
            // setg12ncwnow('')
            // setg12ncwcoe('')
            // setg12ncwcoedet('')
            // setg12ncwcoeimage('')
            // setg12ncwcoeremark('')
            // setg13form('')
            // setg13formdet('')
            // setg13formimage('')
            // setg13formremark('')
            // setg13form5date('')
            // setg13form5dateofcommence('')
            // setg13form5licenece('')
            // setg13form5licenecedet('')
            // setg13form5liceneceimage('')
            // setg13form5liceneceremark('')
            // setg13form5licensedol('');
            // setg13form5licensedolvalid('');
            // setg13form5licensedoldor('');
            // setg13form5licenseworkers('');
            // setg13form5licensemanresp('');
            // setg14dcwc('');
            // setg14dncc('');
            // setg14dars('');
            // setg14dls('');
            // setg13form5licensefee('');
            // setg13form5licensefeedet('');
            // setg13form5licensefeeimage('');
            // setg13form5licensefeeremark('');
            // setg13form5securityfee('');
            // setg13form5securityfeedet('');
            // setg13form5securityfeeimage('');
            // setg13form5securityfeeremark('');


        }, 2000);
    }
    return (
<React.Fragment>
    <div className='dashboard_wrapper'>
        <div className="container">
            <div className="row">
    <div className="col-lg-12">
        <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
            <li className="nav-item col-md-6 col-lg-3 col-12 border-end border-md-bottom" role="presentation">
                <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">  Company Profile</button>
            </li>
            <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={createnew}> Create New</button>
            </li>
            <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false"> Company Interection</button>
            </li>
            <li className="nav-item col-md-6 col-lg-3 col-12" role="presentation">
                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill" data-bs-toggle="pill" data-bs-target="#reject-tab" type="button" role="tab" aria-controls="reject-tab" aria-selected="false"> Assign Compliances</button>
            </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">
                    <Companyprofile />
                </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                            <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-creat" data-bs-toggle="pill" data-bs-target="#pills-home-creat" type="button" role="tab" aria-controls="pills-home-creat" aria-selected="true"> Profile </button>
                            </li>
                            <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab-creat-li" data-bs-toggle="pill" data-bs-target="#pills-profile-creat-li" type="button" role="tab" aria-controls="pills-profile-creat-li" aria-selected="false">Licenses</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home-creat" role="tabpanel" aria-labelledby="pills-home-tab-creat">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ul className="nav nav-pills mb-3 bg-light rounded-top overflow-hidden" id="pills-tab" role="tablist">
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                            <button className={`nav-link ${activeTab === 'pills-home-tab1' ? 'active' : ''} w-100 rounded-0 text-dark`}  id="pills-home-tab1" ref={myElementRefTab1}  data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true" onClick={(e) => {handleTabClick('pills-home-tab1')}} disabled={isDisabled}>General</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                            <button className={`nav-link ${activeTab === 'pills-profile-tab2' ? 'active' : ''} w-100 rounded-0 text-dark`} id="pills-profile-tab2" ref={myElementRefTab2} data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false"  onClick={(e) => {handleTabClick('pills-profile-tab2')}} disabled={isDisabled}>Registration Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'creative-tab3' ? 'active' : ''} w-100 rounded-0 text-dark`} id="creative-tab3" ref={myElementRefTab3} data-bs-toggle="pill" data-bs-target="#creative-pill3" type="button" role="tab" aria-controls="creative-pill3" aria-selected="false" onClick={(e) => {handleTabClick('creative-tab3')}} disabled={isDisabled}> Client Information</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab4' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab4" ref={myElementRefTab4} data-bs-toggle="pill" data-bs-target="#reject-tab4" type="button" role="tab" aria-controls="reject-tab4" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab4')}} disabled={isDisabled}>Other Registration Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab5' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab5" ref={myElementRefTab5} data-bs-toggle="pill" data-bs-target="#reject-tab5" type="button" role="tab" aria-controls="reject-tab5" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab5')}} disabled={isDisabled}>Labour Contractor Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab6' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab6" ref={myElementRefTab6} data-bs-toggle="pill" data-bs-target="#reject-tab6" type="button" role="tab" aria-controls="reject-tab6" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab6')}} disabled={isDisabled}>Branch Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab7' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab7" ref={myElementRefTab7} data-bs-toggle="pill" data-bs-target="#reject-tab7" type="button" role="tab" aria-controls="reject-tab7" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab7')}} disabled={isDisabled}>Company Contractor Details</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className={`tab-pane ${activeTab === 'pills-home-tab1' ? 'active' : ''} fade show`} id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                                                <div className='row'>
                                                    <div className="col-md-12 col-lg-9 mb-3">
                                                        <label for="" className="form-label">Write a name of the company as per registration</label>
                                                        <input type="text" className='form-control' placeholder='Write a name of the company as per registration' />
                                                    </div>
                                                    <div className="col-md-12 col-lg-3">
                                                    <label for="" className="form-label">Add More Branches</label>
                                                        <button className='btn btn-primary w-100'><AddCircleOutlineIcon /> Add More Branches</button>
                                                    </div>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                        <form name="firsttab" method="post" onSubmit={handleSubmitTab1}>      
                                                            <table className="table  creat_tbl">
                                                                <thead>
                                                                    <tr >
                                                                        <th>Title</th>
                                                                        <th>Details</th>
                                                                        <th>Upload</th>
                                                                        <th>Remark</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>A. General</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <label class="form-label">Name of the company as per registration</label>
                                                                            <input type="text" class="form-control" placeholder="Company" name="companyname"
                                                                            id="companyname" value={companyname} onChange={(e)=>setcompanyname(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        {/* <br />  */}
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" name="companydetails" id="companydetails" value={companydetails}  onChange={(e)=>setcompanydetails(e.target.value)} class="form-control" placeholder="Write here" />
                                                                        </td>
                                                                        <td>
                                                                            <div >
                                                                                <div class="form-group files1" >
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*" style={{ height:'10px' }} name="companyimage" id="companyimage" 
                                                                                    onChange={(e) => setcompanyimage(e.target.files[0])} 
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" name="companyremark" id="companyremark" value={companyremark} onChange={(e)=>setcompanyremark(e.target.value)} class="form-control" placeholder="Write here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <label class="form-label">Register Address of the Company</label>
                                                                            
                                                                            <table>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="Address" name="companyaddress" value={companyaddress} id="companyaddress" onChange={(e)=>setcompanyaddress(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                    {/* <input type="text" class="form-control" placeholder="State" name="companystate" id="companystate" value={companystate} onChange={(e)=>setcompanystate(e.target.value)} required/> */}
                                                                                    <select className="form-select" aria-label="Default select example" id="state" name="state" value={companystate} onChange={(e)=>setcompanystate(e.target.value)} required>
                                                                                            <option value="">Select State</option>
                                                                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                            <option value={item._id}>{item.name}</option>
                                                                                        )};
                                                                                    </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="District" name="companydistrict" id="companydistrict" value={companydistrict} onChange={(e)=>setcompanydistrict(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="number" class="form-control" placeholder="PIN" name="companypin" id="companypin" value={companypin} onChange={(e)=>setcompanypin(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="comapnyaddressdetails" id="comapnyaddressdetails" value={comapnyaddressdetails} onChange={(e)=>setcomapnyaddressdetails(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="companyaddressimage" id="companyaddressimage" 
                                                                                    onChange={(e) => setcompanyaddressimage(e.target.files[0])}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companyaddressremark" id="companyaddressremark" value={companyaddressremark}
                                                                                    onChange={(e) => setcompanyaddressremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <div class="dropdown">
                                                                                <label class="form-label">
                                                                                    Type of the Company
                                                                                </label>
                                                                                <div  aria-labelledby="dropdownMenuButton">
                                                                                    <select class="form-select" name="companytype" id="companytype" value={companytype}
                                                                                    onChange={(e) => setcompanytype(e.target.value)} required>
                                                                                        <option value="">Type of the Company</option>
                                                                                        <option value="1">Private Limited Company</option>
                                                                                        <option value="2">Public Limited Company</option>
                                                                                        <option value="3">Sole Proprietorship</option>
                                                                                        <option value="4">Partnership</option>
                                                                                        <option value="5">Limited Liability Partnership (LLP)</option>
                                                                                        <option value="6">Non-Government Organization (NGO)</option>
                                                                                        <option value="7">One Person Company (OPC)</option>
                                                                                        <option value="8">Others</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companytypedetails" id="companytypedetails" value={companytypedetails}
                                                                                    onChange={(e) => setcompanytypedetails(e.target.value)}/>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="companytypeimage" id="companytypeimage" 
                                                                                    onChange={(e) => setcompanytypeimage(e.target.files[0])}
                                                                                    required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companytyperemark" id="companytyperemark" value={companytyperemark}
                                                                                    onChange={(e) => setcompanytyperemark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td>
                                                                            <div class ="dropdown">
                                                                            <label class="form-label">Select a Category</label>
                                                                                <select className="form-select" aria-label="Default select example" id="companycategory" name="companycategory" onChange={(e)=>setcompanycategory(e.target.value)} value={companycategory} required>
                                                                                    <option value="">Select Category of the Company</option>
                                                                                    {categoryInfo != 'undefind' && categoryInfo?.length > 0 && categoryInfo.map(item => 
                                                                                        <option value={item._id}>{item.name}</option>
                                                                                    )};
                                                                                    
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companycategorydetails" id="companycategorydetails" value={companycategorydetails}
                                                                                    onChange={(e) => setcompanycategorydetails(e.target.value)}/>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*" 
                                                                                    id="companycategoryimage" 
                                                                                    name="companycategoryimage" 
                                                                                     style={{ height:'10px' }}
                                                                                    onChange={(e) => {setcompanycategoryimage(e.target.files[0])}} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companycategoryremark" id="companycategoryremark" value={companycategoryremark}
                                                                                    onChange={(e) => setcompanycategoryremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="dropdown">
                                                                            <label class="form-label">Select nature of buisness</label>
                                                                                <div  aria-labelledby="dropdownMenuButton">
                                                                                    <select class="form-select" id="companynatureofbusiness" name="companynatureofbusiness" onChange={(e)=>setcompanynatureofbusiness(e.target.value)} value={companynatureofbusiness} required>
                                                                                        <option value="">Nature of the Business</option>
                                                                                        <option value="1">Shop and Establishment</option>
                                                                                        <option value="2">Mines</option>
                                                                                        <option value="3">IT</option>
                                                                                        <option value="4">Airport</option>
                                                                                        <option value="5">Hospital</option>
                                                                                        <option value="6">Registered Society</option>
                                                                                        <option value="7">Registered Trust</option>
                                                                                        <option value="8">Petrol Bank</option>
                                                                                        <option value="9">BFSI</option>
                                                                                        <option value="10">nsurance Servies</option>
                                                                                        <option value="11">Factory</option>
                                                                                        <option value="12">Construction</option>
                                                                                        <option value="13">Online Marketing</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companynatureofbusinessdetails" id="companynatureofbusinessdetails" value={companynatureofbusinessdetails}
                                                                                    onChange={(e) => setcompanynatureofbusinessdetails(e.target.value)}/>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    id="companynatureofbusinessimage" 
                                                                                    name="companynatureofbusinessimage"  
                                                                                    
                                                                                    onChange={(e) => {setcompanynatureofbusinessimage(e.target.files[0])}} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companynatureofbusinessremark" id="companynatureofbusinessremark" value={companynatureofbusinessremark}
                                                                                    onChange={(e) => setcompanynatureofbusinessremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab1 && <Loading /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </tbody>
                                                            </table>
                                                            </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`tab-pane ${activeTab === 'pills-profile-tab2' ? 'active ' : ''} fade show `}  id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                                            <form name="secondtab" method="post" onSubmit={handleSubmitTab2}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>B. Details of Registration</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">Select Company registration</label>
                                                                            <div class="dropdown">
                                                                            <select class="form-select" id="companyregistration" name="companyregistration" onChange={(e)=>setcompanyregistration(e.target.value)} value={companyregistration} required>
                                                                                        <option value="">Select Company registration</option>
                                                                                        <option value="1">Shop and Establishment</option>
                                                                                        <option value="2">Mines</option>
                                                                                        <option value="3">IT</option>
                                                                                        <option value="4">Airport</option>
                                                                                        <option value="5">Hospital</option>
                                                                                        <option value="6">Registered Society</option>
                                                                                        <option value="7">Registered Trust</option>
                                                                                        <option value="8">Petrol Bank</option>
                                                                                        <option value="9">BFSI</option>
                                                                                        <option value="10">nsurance Servies</option>
                                                                                        <option value="11">Factory</option>
                                                                                        <option value="12">Construction</option>
                                                                                        <option value="13">Online Marketing</option>
                                                                                    </select>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companyregistrationdetails" id="companyregistrationdetails" value={companyregistrationdetails}
                                                                                    onChange={(e) => setcompanyregistrationdetails(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*" id="companyregistrationimage" 
                                                                                    name="companyregistrationimage" style={{ height:'10px' }} 
                                                                                    onChange={(e) => {setcompanyregistrationimage(e.target.files[0])}}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companyregistrationremark" id="companyregistrationremark" value={companyregistrationremark}
                                                                                    onChange={(e) => setcompanyregistrationremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <label class="form-label">CIN Number</label>
                                                                            <input type="text" class="form-control" placeholder="CIN Number" name="companycin" id="companycin" value={companycin}
                                                                                    onChange={(e) => setcompanycin(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companycindetails" id="companycindetails" value={companycindetails}
                                                                                    onChange={(e) => setcompanycindetails(e.target.value)}/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*"   style={{ height:'10px' }}
                                                                                id="companyciniamge" 
                                                                                name="companyciniamge"  
                                                                                
                                                                                onChange={(e) => {setcompanyciniamge(e.target.files[0])}}
                                                                                required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companycinremark" id="companycinremark" value={companycinremark}
                                                                                    onChange={(e) => setcompanycinremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">Issued Place</label>
                                                                            <input type="text" class="form-control" placeholder="Issued Place" name="companyissuedplace" id="companyissuedplace" value={companyissuedplace}
                                                                                    onChange={(e) => setcompanyissuedplace(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companyissuedplacedetails" id="companyissuedplacedetails" value={companyissuedplacedetails}
                                                                                    onChange={(e) => setcompanyissuedplacedetails(e.target.value)}/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}
                                                                                id="companyissuedplaceimage" 
                                                                                name="companyissuedplaceimage" 
                                                                                 
                                                                                onChange={(e) => {setcompanyissuedplaceimage(e.target.files[0])}} required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companyissuedplaceremark" id="companyissuedplaceremark" value={companyissuedplaceremark}
                                                                                    onChange={(e) => setcompanyissuedplaceremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">Issuing Authority</label>
                                                                            <input type="text" class="form-control" placeholder="Issuing Authority" name="companyauthority" id="companyauthority" value={companyauthority}
                                                                                    onChange={(e) => setcompanyauthority(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companyauthoritydetails" id="companyauthoritydetails" value={companyauthoritydetails}
                                                                                    onChange={(e) => setcompanyauthoritydetails(e.target.value)}/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}
                                                                                id="companyauthorityimage" 
                                                                                name="companyauthorityimage" 
                                                                                
                                                                                onChange={(e) => {setcompanyauthorityimage(e.target.files[0])}} required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companyauthorityremark" id="companyauthorityremark" value={companyauthorityremark}
                                                                                    onChange={(e) => setcompanyauthorityremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                            <label class="form-label">Registration Date</label>
                                                                            <input type="date" class="form-control" placeholder="Type here" name="companyregistrationdate" id="companyregistrationdate" value={companyregistrationdate}
                                                                                    onChange={(e) => setcompanyregistrationdate(e.target.value)} required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">PAN Number</label>
                                                                            <input type="text" class="form-control" placeholder="PAN Number" name="companypan" id="companypan" value={companypan}
                                                                                    onChange={(e) => setcompanypan(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companypandetails" id="companypandetails" value={companyauthoritydetails}
                                                                                    onChange={(e) => setcompanypandetails(e.target.value)}/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}
                                                                                id="companypanimage" 
                                                                                name="companypanimage" 
                                                                                 
                                                                                onChange={(e) => {setcompanypanimage(e.target.files[0])}}
                                                                                
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companypanremark" id="companypanremark" value={companyauthorityremark}
                                                                                    onChange={(e) => setcompanypanremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">TAN Number</label>
                                                                            <input type="text" class="form-control" placeholder="TAN Number" name="companytan" id="companytan" value={companytan}
                                                                                    onChange={(e) => setcompanytan(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companytandetails" id="companytandetails" value={companytandetails}
                                                                                    onChange={(e) => setcompanytandetails(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                id="companytanimage" 
                                                                                name="companytanimage" 
                                                                                 
                                                                                onChange={(e) => {setcompanytanimage(e.target.files[0])}} required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companytanremark" id="companytanremark" value={companytanremark}
                                                                                    onChange={(e) => setcompanytanremark(e.target.value)} />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">TIN Number</label>
                                                                            <input type="text" class="form-control" placeholder="TIN Number" name="companytin" id="companytin" value={companytin}
                                                                                    onChange={(e) => setcompanytin(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companytindetails" id="companytindetails" value={companytindetails}
                                                                                    onChange={(e) => setcompanytindetails(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}
                                                                                id="companytinimage" 
                                                                                name="companytanimage" 
                                                                                
                                                                                onChange={(e) => {setcompanytinimage(e.target.files[0])}}
                                                                                required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companytinremark" id="companytinremark" value={companytinremark}
                                                                                    onChange={(e) => setcompanytinremark(e.target.value)} />
                                                                        </td>
                                                                    </tr>                                              
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">GST Number</label>
                                                                            <input type="text" class="form-control" placeholder="GST Number" name="companygst" id="companygst" value={companygst}
                                                                                    onChange={(e) => setcompanygst(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Details" name="companygstdetails" id="companygstdetails" value={companygstdetails}
                                                                                    onChange={(e) => setcompanygstdetails(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" multiple="" accept="image/*"  class="form-control" style={{ height:'10px' }}
                                                                                id="companygstimage" 
                                                                                name="companygstimage" 
                                                                                
                                                                                onChange={(e) => {setcompanygstimage(e.target.files[0])}}
                                                                                required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companygstremark" id="companygstremark" value={companygstremark}
                                                                                    onChange={(e) => setcompanygstremark(e.target.value)} />
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                                <table className="table  creat_tbl">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={4}>
                                                                                <h4>B.1 Details of Directors and Authorized person</h4>
                                                                            </td>
                                                                        </tr>
                                                                        <DynamicHTMLGeneratorB1 formData={formData} setFormData={setFormData}/>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                                <table className="table  creat_tbl">
                                                                    <tbody>
                                                                        <tr >
                                                                            
                                                                            <td colSpan={4}>
                                                                                <h4>B.2 Authorized persons to Apply for Licencense/Registration </h4>
                                                                            </td>
                                                                        </tr>
                                                                        <DynamicHTMLGeneratorB2 formData={formData1} setFormData={setFormData1}/>
                                                                        
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                        <div className="table-responsive">
                                                        <table className="table  creat_tbl">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={4}>
                                                                                <h4>B.3 Persons Responsible for Compliance Activities</h4>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4" >
                                                                                <DynamicHTMLGeneratorB3  formData={formData2} setFormData={setFormData2}/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4" >
                                                                                <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                    <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab2 && <Loading /> }
                                                                                </div>
                                                                            </td>
                                                                        </tr> 
                                                                        </tbody>
                                                                    </table>
                                                            </div>			
                                                    </div>
                                                </div>
                                            </div>
                                            </form>
                                            </div>

                                            <div className={`tab-pane ${activeTab === 'creative-tab3' ? 'active' : ''} fade show`} id="creative-pill3" role="tabpanel" aria-labelledby="creative-tab3">
                                            <form name="thirdtab" method="post" onSubmit={handleSubmitTab3}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                        
                                                            <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>C. Client Contact and Communication</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <DynamicHTMLGeneratorC1 formData={formData3} setFormData={setFormData3}/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-12 col-lg-12">
                                                    <div className="card p-3 position-relative">
                                                        
                                                        <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>C.1. MIS</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <DynamicHTMLGeneratorC2 formData={formData4} setFormData={setFormData4}/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-12 col-lg-12">
                                                    <div className="card p-3 position-relative">
                                                        <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>C.2. Compliance Executives</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <DynamicHTMLGeneratorC3 formData={formData5} setFormData={setFormData5}/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-12 col-lg-12">
                                                    <div className="card p-3 position-relative">
                                                        <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>C.3. Escalation</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={4}>
                                                                            <DynamicHTMLGeneratorC4 formData={formData6} setFormData={setFormData6}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab3 && <Loading /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                            <div className={`tab-pane ${activeTab === 'reject-tab4' ? 'active' : ''} fade show`} id="reject-tab4" role="tabpanel" aria-labelledby="reject-tab4"> {/*remember*/}
                                            <form name="fourthtab" method="post" onSubmit={handleSubmitTab4}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                                {/* <table className="table  creat_tbl"> */}
                                                                <h4>D. Other Registration Details</h4>
                                                                    <h4>D.1. PF Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="" className="form-label">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="pfnumber" id="pfnumber" 
                                                                        value={pfnumber}
                                                                        onChange={(e) => setpfnumber(e.target.value)}placeholder="Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="" className="form-label">Details</label>
                                                                        <input type="text" class="form-control" name="pfdetails" id="pfdetails" value={pfdetails}
                                                                                    onChange={(e) => setpfdetails(e.target.value)}
                                                                        placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="pfimage" class="form-control" multiple="" accept="image/*" id="pfimage" style={{ height:'10px' }}
                                                                                
                                                                                onChange={(e) => {setpfimage(e.target.files[0])}} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="" className="form-label">Remark</label>
                                                                        <input type="text" class="form-control" name="pfdremark" id="pfdremark" value={pfdremark}
                                                                                    onChange={(e) => setpfdremark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Coverage</label>
                                                                        <input type="date" class="form-control" name="doc" id="doc" 
                                                                        value={doc}
                                                                        onChange={(e) => setdoc(e.target.value)} 
                                                                        placeholder="Date of Agreement and validity" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                        <label for="">Office Address as per Registration</label>
                                                                            
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input type="text" class="form-control" placeholder="Address" name="pfaddress" value={pfaddress} id="pfaddress" onChange={(e)=>setpfaddress(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        {/* <input type="text" class="form-control" placeholder="State" name="pfstate" id="pfstate" value={pfstate} onChange={(e)=>setpfstate(e.target.value)} required/> */}
                                                                                        <select className="form-select" aria-label="Default select example" id="state" name="state" value={pfstate} onChange={(e)=>setpfstate(e.target.value)} required>
                                                                                            <option value="">Select State</option>
                                                                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                            <option value={item._id}>{item.name}</option>
                                                                                        )};
                                                                                    </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="District" name="pfdistrict" id="pfdistrict" value={pfdistrict} onChange={(e)=>setpfdistrict(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="number" class="form-control" placeholder="PIN" name="pfpin" id="pfpin" value={pfpin} onChange={(e)=>setpfpin(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="pfaddressdetails" id="pfaddressdetails" value={pfaddressdetails} onChange={(e)=>setpfaddressdetails(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="pfaddressimage" id="pfaddressimage" 
                                                                                    onChange={(e) => setpfaddressimage(e.target.files[0])}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="pfaddressremark" id="pfaddressremark" value={pfaddressremark}
                                                                                    onChange={(e) => setpfaddressremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='align-middle'>
                                                                        <td>
                                                                        <label for="">Is PF Subcodes Available?</label>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="4" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowSubcodes}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showSubcodes} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                    </tr>
                                                                </table>
                                                                                                                                                                                        <div style={{ display:'none' }} 
                                                                ref={myRefSubcodes}>       
                                                                <table className="table  creat_tbl">    

                                                                    <DynamicHTMLGeneratorD1 formData={formData7} setFormData={setFormData7}/>
                                                                </table>
                                                                </div>
                                                                <h4>D.2. ESI Registration</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="" className="form-label">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="esinumber" id="esinumber" 
                                                                        value={esinumber}
                                                                        onChange={(e) => setesinumber(e.target.value)}placeholder="Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="" className="form-label">Details</label>
                                                                        <input type="text" class="form-control" name="esidetails" id="esidetails" value={esidetails}
                                                                                    onChange={(e) => setesidetails(e.target.value)}
                                                                        placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="esiimage" class="form-control" multiple="" accept="image/*" id="esiimage" style={{ height:'10px' }}
                                                                                
                                                                                onChange={(e) => {setesiimage(e.target.files[0])}}
                                                                                required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="" className="form-label">Remark</label>
                                                                        <input type="text" class="form-control" name="esidremark" id="esidremark" value={esidremark}
                                                                                    onChange={(e) => setesidremark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Coverage</label>
                                                                        <input type="date" class="form-control" name="esidoc" id="esidoc" 
                                                                        value={esidoc}
                                                                        onChange={(e) => setesidoc(e.target.value)} 
                                                                        placeholder="Date of Agreement and validity" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                        <label for="">Office Address as per Registration</label>
                                                                            
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input type="text" class="form-control" placeholder="Address" name="esiaddress" value={esiaddress} id="esiaddress" onChange={(e)=>setesiaddress(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        {/* <input type="text" class="form-control" placeholder="State" name="esistate" id="esistate" value={esistate} onChange={(e)=>setesistate(e.target.value)} required/> */}
                                                                                        <select className="form-select" aria-label="Default select example" id="state" name="state" value={esistate} onChange={(e)=>setesistate(e.target.value)} required>
                                                                                            <option value="">Select State</option>
                                                                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                            <option value={item._id}>{item.name}</option>
                                                                                        )};
                                                                                    </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="District" name="esidistrict" id="esidistrict" value={esidistrict} onChange={(e)=>setesidistrict(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="number" class="form-control" placeholder="PIN" name="esipin" id="esipin" value={esipin} onChange={(e)=>setesipin(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Details</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="esiaddressdetails" id="esiaddressdetails" value={esiaddressdetails} onChange={(e)=>setesiaddressdetails(e.target.value)} />
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="esiaddressimage" id="esiaddressimage" 
                                                                                    onChange={(e) => setesiaddressimage(e.target.files[0])}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="esiaddressremark" id="esiaddressremark" value={esiaddressremark}
                                                                                    onChange={(e) => setesiaddressremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='align-middle'>
                                                                        <td>
                                                                        <label for="">Is ESI Subcodes Available?</label>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="4" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowSubcodesESI}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showSubcodesESI} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                    </tr>
                                                                </table>
                                                                                                                                                                                                <div style={{ display:'none' }} 
                                                                ref={myRefSubcodesESI}>       
                                                                {/* <table className="table  creat_tbl">     */}

                                                                    <DynamicHTMLGeneratorD2 formData={formData8} setFormData={setFormData8}/>
                                                                {/* </table> */}
                                                                </div>
                                                                    <h4>D.3. Shop and Establishment Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="registrationD3" id="registrationD3" 
                                                                        value={registrationD3}
                                                                        onChange={(e) => setregistrationD3(e.target.value)}placeholder="Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="registrationD3details"id="registrationD3details"
                                                                        value={registrationD3details} 
                                                                        onChange={(e) => setregistrationD3details(e.target.value)}placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="registrationD3image" class="form-control" multiple="" accept="image/*" id="registrationD3image" style={{ height:'10px' }}
                                                                                    
                                                                                    onChange={(e) => {setregistrationD3image(e.target.files[0])}} 
                                                                                    required/>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="registrationD3remark" id="registrationD3remark"
                                                                        value={registrationD3remark} 
                                                                        onChange={(e) => setregistrationD3remark(e.target.value)}placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="doregistrationD3" id="doregistrationD3"
                                                                        value={doregistrationD3} 
                                                                        onChange={(e) => setdoregistrationD3(e.target.value)} placeholder="Date of Registration" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="doregistrationD3details" id="doregistrationD3details"
                                                                        value={doregistrationD3details} 
                                                                        onChange={(e) => setdoregistrationD3details(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="doregistrationD3image" class="form-control" multiple="" accept="image/*" id="doregistrationD3image" style={{ height:'10px' }}
                                                                                    value={doregistrationD3image}
                                                                                    onChange={(e) => {setdoregistrationD3image(e.target.files[0])}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="doregistrationD3remark" id="doregistrationD3remark"
                                                                        value={doregistrationD3remark} 
                                                                        onChange={(e) => setdoregistrationD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Expiry</label>
                                                                        <input type="date" class="form-control" name="doeregistrationD3" id="doeregistrationD3"
                                                                        value={doeregistrationD3} 
                                                                        onChange={(e) => setdoeregistrationD3(e.target.value)} placeholder="Date of Expiry"/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Due Date of Renewal</label>
                                                                        <input type="date" class="form-control" name="doddrregistrationD3" id="doddrregistrationD3"
                                                                        value={doddrregistrationD3} 
                                                                        onChange={(e) => setdoddrregistrationD3(e.target.value)}placeholder="Due Date of Renewal"/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Manager Name on the License</label>
                                                                        <input type="text" class="form-control" name="managernameD3" id="managernameD3"
                                                                        value={managernameD3} 
                                                                        onChange={(e) => setmanagernameD3(e.target.value)} placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="managernameD3details" id="managernameD3details"
                                                                        value={managernameD3details} 
                                                                        onChange={(e) => setmanagernameD3details(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="managernameD3image" id="managernameD3image"
                                                                                    
                                                                                    onChange={(e) => setmanagernameD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="managernameD3remark" id="managernameD3remark"
                                                                        value={managernameD3remark} 
                                                                        onChange={(e) => setmanagernameD3remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Employees</label>
                                                                        <input type="number" class="form-control" name="noeD3" id="noeD3"
                                                                        value={noeD3} 
                                                                        onChange={(e) => setnoeD3(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Male</label>
                                                                        <input type="number" class="form-control" name="noemD3" id="noemD3"
                                                                        value={noemD3} 
                                                                        onChange={(e) => setnoemD3(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4"> 
                                                                        <label for="">Female</label>
                                                                        <input type="number" class="form-control" name="noefD3" id="noefD3"
                                                                        value={noefD3} 
                                                                        onChange={(e) => setnoefD3(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Issuing Authority</label>
                                                                        <input type="text" class="form-control" name="issueauthfD3" id="issueauthfD3"
                                                                        value={issueauthfD3} 
                                                                        onChange={(e) => setissueauthfD3(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="issueauthfD3details" id="issueauthfD3details"
                                                                        value={issueauthfD3details} 
                                                                        onChange={(e) => setissueauthfD3details(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="issueauthfD3image" id="issueauthfD3image"
                                                                                    
                                                                                    onChange={(e) => setissueauthfDimage(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="issueauthfD3remark" id="issueauthfD3remark"
                                                                        value={issueauthfD3remark} 
                                                                        onChange={(e) => setissueauthfD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.3.1. Factory License</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3FL formData={formData9} setFormData={setFormData9} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.3.1.1. Factory Plan</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">License Number</label>
                                                                        <input type="text" class="form-control" name="fpD3" id="fpD3"
                                                                        value={fpD3} 
                                                                        onChange={(e) => setfpD3(e.target.value)} placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="fpD3details"id="fpD3details"
                                                                        value={fpD3details} 
                                                                        onChange={(e) => setfpD3details(e.target.value)}placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="fpD3image"id="fpD3image"
                                                                                    
                                                                                    onChange={(e) => setfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="fpD3remark"id="fpD3remark"
                                                                        value={fpD3remark} 
                                                                        onChange={(e) => setfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Approval</label>
                                                                        <input type="date" class="form-control" name="doapp" id="doapp" 
                                                                        value={doapp}
                                                                        onChange={(e) => setdoapp(e.target.value)} 
                                                                        placeholder="Date of Approval"/>
                                                                        </td>
                                                                            {/*<td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Issuing Authority</label>
                                                                        <input type="text" class="form-control" name="issueauthfpD3" id="issueauthfpD3"
                                                                        value={issueauthfpD3} 
                                                                        onChange={(e) => setissueauthfpD3(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="issueauthfpD3details" id="issueauthfpD3details"
                                                                        value={issueauthfpD3details} 
                                                                        onChange={(e) => setissueauthfpD3details(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                    name="issueauthfpD3image" id="issueauthfpD3image"
                                                                                    
                                                                                    onChange={(e) => setissueauthfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="issueauthfpD3remark" id="issueauthfpD3remark"
                                                                        value={issueauthfpD3remark} 
                                                                        onChange={(e) => setissueauthfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Power-KW</label>
                                                                        <input type="text" class="form-control" name="powerfpD3" id="powerfpD3"
                                                                        value={powerfpD3} 
                                                                        onChange={(e) => setpowerfpD3(e.target.value)}  placeholder="KW" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="powerfpD3details" id="powerfpD3details"
                                                                        value={powerfpD3details} 
                                                                        onChange={(e) => setpowerfpD3details(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}
                                                                                    name="powerfpD3image" id="powerfpD3image"
                                                                                    
                                                                                    onChange={(e) => setpowerfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="powerfpD3remark" id="powerfpD3remark"
                                                                        value={powerfpD3remark} 
                                                                        onChange={(e) => setpowerfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Power-HP</label>
                                                                        <input type="text" class="form-control" name="powerhpfpD3" id="powerhpfpD3"
                                                                        value={powerhpfpD3} 
                                                                        onChange={(e) => setpowerhpfpD3(e.target.value)}  placeholder="KW" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="powerhpfpD3details" id="powerhpfpD3details"
                                                                        value={powerhpfpD3details} 
                                                                        onChange={(e) => setpowerhpfpD3details(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}
                                                                                    name="powerhpfpD3image" id="powerhpfpD3image"
                                                                                    
                                                                                    onChange={(e) => setpowerhpfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="powerhpfpD3remark" id="powerhpfpD3remark"
                                                                        value={powerhpfpD3remark} 
                                                                        onChange={(e) => setpowerhpfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.4. LWF Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="registrationlwfD3" id="registrationlwfD3" 
                                                                        value={registrationlwfD3}
                                                                        onChange={(e) => setregistrationlwfD3(e.target.value)}placeholder="Registration Number"/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="registrationlwfD3details" id="registrationlwfD3details"
                                                                        value={registrationlwfD3details} 
                                                                        onChange={(e) => setregistrationlwfD3details(e.target.value)}placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="registrationlwfD3image" class="form-control" multiple="" accept="image/*" id="registrationlwfD3image" style={{ height:'10px' }}
                                                                                    
                                                                                    onChange={(e) => {setregistrationlwfD3image(e.target.files[0])}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="registrationlwfD3remark" id="registrationlwfD3remark"
                                                                        value={registrationlwfD3remark} 
                                                                        onChange={(e) => setregistrationlwfD3remark(e.target.value)}placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="doregistrationlwfD3" id="doregistrationlwfD3"
                                                                        value={doregistrationlwfD3} 
                                                                        onChange={(e) => setdoregistrationlwfD3(e.target.value)} placeholder="Date of Registration"/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="doregistrationD3details" id="doregistrationD3details"
                                                                        value={doregistrationD3details} 
                                                                        onChange={(e) => setdoregistrationD3details(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="doregistrationD3image" class="form-control" multiple="" accept="image/*" id="doregistrationD3image" style={{ height:'10px' }}
                                                                                    value={doregistrationD3image}
                                                                                    onChange={(e) => {setdoregistrationD3image(e.target.files[0])}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="doregistrationD3remark" id="doregistrationD3remark"
                                                                        value={doregistrationD3remark} 
                                                                        onChange={(e) => setdoregistrationD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.5. Professional Tax Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="registrationptrD3" id="registrationptrD3" 
                                                                        value={registrationptrD3}
                                                                        onChange={(e) => setregistrationptrD3(e.target.value)}placeholder="Registration Number"/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="registrationptrD3details" id="registrationptrD3details"
                                                                        value={registrationptrD3details} 
                                                                        onChange={(e) => setregistrationptrD3details(e.target.value)}placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="registrationptrD3image" class="form-control" multiple="" accept="image/*" id="registrationptrD3image" style={{ height:'10px' }}
                                                                                    
                                                                                    onChange={(e) => {setregistrationptrD3image(e.target.files[0])}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="registrationptrD3remark" id="registrationptrD3remark"
                                                                        value={registrationptrD3remark} 
                                                                        onChange={(e) => setregistrationptrD3remark(e.target.value)}placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="doregistrationptrD3" id="doregistrationptrD3"
                                                                        value={doregistrationptrD3} 
                                                                        onChange={(e) => setdoregistrationptrD3(e.target.value)} placeholder="Date of Registration"/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="doregistrationD3details" id="doregistrationD3details"
                                                                        value={doregistrationD3details} 
                                                                        onChange={(e) => setdoregistrationD3details(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="doregistrationD3image" class="form-control" multiple="" accept="image/*" id="doregistrationD3image" style={{ height:'10px' }}
                                                                                    value={doregistrationD3image}
                                                                                    onChange={(e) => {setdoregistrationD3image(e.target.files[0])}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="doregistrationD3remark" id="doregistrationD3remark"
                                                                        value={doregistrationD3remark} 
                                                                        onChange={(e) => setdoregistrationD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.6. Night Shift Permission</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3NSP formData={formData10} setFormData={setFormData10} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.7. OT Permission</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3OTP formData={formData11} setFormData={setFormData11} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.8. Weekly Off Exemption</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3WOE formData={formData12} setFormData={setFormData12} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.9. Trade License </h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3TD formData={formData13} setFormData={setFormData13} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.10. MSME </h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3MSME formData={formData14} setFormData={setFormData14} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.11. BOCW</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3BOCW formData={formData15} setFormData={setFormData15} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.12. Interstate Migrant Workmen</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td colspan="4">
                                                                            <DynamicHTMLGeneratorD3IMW formData={formData16} setFormData={setFormData16} />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab4 && <Loading /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                    </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                            <div className={`tab-pane ${activeTab === 'reject-tab5' ? 'active' : ''} fade show`} id="reject-tab5" role="tabpanel" aria-labelledby="reject-tab5"> {/**remember */}
                                            <form name="fifthtab" method="post" onSubmit={handleSubmitTab5}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                            <h4>E. Details of the Labour Contractors</h4>
                                                            <table className="table  creat_tbl"> 
                                                                    <tr className='align-middle'>
                                                                        <td>
                                                                        <label for="">Is Contract Labour Engaged?</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="4" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowLabour}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showLabour} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                    </tr>
                                                                </table>
                                                                <div style={{ display:'none' }} 
                                                                    ref={myRefSubcodesLabour}>       
                                                                <table className="table  creat_tbl">   
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Contract Labour Registration Number</label>
                                                                        <input type="text" class="form-control" name="contLabRegNoE" id="contLabRegNoE" 
                                                                        onChange={(e)=>setContLabRegNoE(e.target.value)} placeholder="Contract Labour Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="contLabRegNoEDet" id="contLabRegNoEDet" 
                                                                        onChange={(e)=>setContLabRegNoEDet(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="contLabRegNoEFile" id="contLabRegNoEFile" class="form-control" accept="image/*" style={{ height:'10px' }}
                                                                                    onChange={(e)=>setContLabRegNoEFile(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="contLabRegNoERemark" id="contLabRegNoERemark" onChange={(e)=>setContLabRegNoERemark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4"> 
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="dateOfRegistrationE" id="dateOfRegistrationE" onChange={(e)=>setDateOfRegistrationE(e.target.value)} placeholder="Date of Registration" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control"  name="dateOfRegEDet" id="dateOfRegEDet" onChange={(e)=>setDateOfRegEDet(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="dateOfRegEFile" id="dateOfRegEFile" class="form-control" multiple="" accept="image/*"  style={{ height: '10px' }} onChange={(e)=>setDateOfRegEFile(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remarks</label>
                                                                        <input type="text" class="form-control" name="dateOfRegERemark" id="dateOfRegERemark" onChange={(e)=>setDateOfRegERemark(e.target.value)} placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Contract Employees</label>
                                                                        <input type="number" class="form-control" name="noOfContractEmployeesE" id="noOfContractEmployeesE" onChange={(e)=>setNoOfContractEmployeesE(e.target.value)}placeholder="Number of Contract Employees" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="noOfContractEmpEDet" id="noOfContractEmpEDet" onChange={(e)=>setNoOfContractEmpEDet(e.target.value)}placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="noOfContractEmpEFile" id="noOfContractEmpEFile" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setNoOfContractEmpEFile(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="noOfContractEmpERemark" id="noOfContractEmpERemark" onChange={(e)=>setNoOfContractEmpERemark(e.target.value)}placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Contractors</label>
                                                                        <input type="number" class="form-control" name="noOfContractorsE" id="noOfContractorsE" onChange={(e)=>setNoOfContractorsE(e.target.value)} placeholder="Number of Contractors" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control"  name="noOfContractorsDetE" id="noOfContractorsDetE" onChange={(e)=>setNoOfContractorsDetE(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" name="noOfContractorsEFile" id="noOfContractorsEFile"  multiple="" accept="image/*"  style={{ height: '10px' }}
                                                                                            onChange={(e)=>setNoOfContractorsEFile(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="noOfContractorsERemark" id="noOfContractorsERemark" onChange={(e)=>setNoOfContractorsERemark(e.target.value)}placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                </table>
                                                                </div>
                                                                <h4>E.1. Details of the Labor Contractotrs</h4>
                                                                <table className="table  creat_tbl">
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Name of the Contractor</label>
                                                                    <input type="text" class="form-control" name="nameOfContractorE1" id="nameOfContractorE1" onChange={(e)=>setNameOfContractorE1(e.target.value)} placeholder="Name of the Contractor" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="nameOfContractorsE1Det" id="nameOfContractorsE1Det" onChange={(e)=>setNameOfContractorsE1Det(e.target.value)}placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                        <div class="form-group files1">
                                                                            <input type="file" name="nameOfContractorsE1File" id="nameOfContractorsE1File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                            onChange={(e)=>setNameOfContractorsE1File(e.target.files[0])} required
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="nameOfContractorsE1Remark" id="nameOfContractorsE1Remark" onChange={(e)=>setNameOfContractorsE1Remark(e.target.value)}placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Name of the Establishment</label>
                                                                    <input type="text" class="form-control" name="nameOfEstablishmentE1" id="nameOfEstablishmentE1" onChange={(e)=>setNameOfEstablishmentE1(e.target.value)} placeholder="Name of the Establishment" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="nameOfEstablishmentE1Det" id="nameOfEstablishmentE1Det" onChange={(e)=>setNameOfEstablishmentE1Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="nameOfEstablishmentE1File" id="nameOfEstablishmentE1File" class="form-control" multiple="" accept="image/*"  style={{ height: '10px' }}
                                                                                onChange={(e)=>setNameOfEstablishmentE1File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="nameOfEstablishmentE1Remark" id="nameOfEstablishmentE1Remark" onChange={(e)=>setNameOfEstablishmentE1Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Registered Address of the Contractor</label>
                                                                    <table>
                                                                        <tr>
                                                                            <td>
                                                                                <input type="text" class="form-control" 
                                                                                placeholder="Address" 
                                                                                value={addresseE1}
                                                                                onChange={(e)=>setAddressE1(e.target.value)} 
                                                                                name="addresseE1"  
                                                                                id="addresseE1"
                                                                                required/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                {/* <input type="text" class="form-control" 
                                                                                placeholder="State" 
                                                                                value={stateE1}
                                                                                onChange={(e)=>setStateE1(e.target.value)} 
                                                                                name="stateE1"  
                                                                                id="stateE1" 
                                                                                required/> */}
                                                                                <select className="form-select" aria-label="Default select example"  name="stateE1"  
                                                                                id="stateE1"  value={stateE1} onChange={(e)=>setStateE1(e.target.value)} required>
                                                                                        <option value="">Select State</option>
                                                                                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                        <option value={item._id}>{item.name}</option>
                                                                                    )};
                                                                                </select>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <input type="text" class="form-control" 
                                                                                placeholder="District" 
                                                                                value={districtE1}
                                                                                onChange={(e)=>setDistrictE1(e.target.value)} 
                                                                                name="districtE1"  
                                                                                id="districtE1"  
                                                                                required/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <input type="number" class="form-control" 
                                                                                placeholder="PIN" 
                                                                                value={pinE1}
                                                                                onChange={(e)=>setpinE1(e.target.value)} 
                                                                                name="pinE1"  
                                                                                id="pinE1"  
                                                                                required/>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="detailsE1" id="detailsE1" value={detailsE1}
                                                                    onChange={(e)=>setDetailsE1(e.target.value)}
                                                                    placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="imageE1" class="form-control" multiple="" accept="image/*" id="imageE1" style={{ height:'10px' }}
                                                                                onChange={(e) => {setImageE1(e.target.files[0])}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="remarkE1" id="remarkE1" value={remarkE1}
                                                                    onChange={(e)=>setremarkE1(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                                <h4>E.2. Agreement Date</h4>
                                                                <table className="table  creat_tbl">
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Date of Expiry</label>
                                                                    <input type="date" class="form-control" name="agreementExpiryDateE2" id="agreementExpiryDateE2" onChange={(e)=>setAgreementExpiryDateE2(e.target.value)}  placeholder="Date of Expiry"/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Due date of Renewal</label>
                                                                    <input type="date" class="form-control" name="agreementRenewalDateE2" id="agreementRenewalDateE2" onChange={(e)=>setAgreementRenewalDateE2(e.target.value)} placeholder="Due date of Renewal"/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                        <div class="form-group files1">
                                                                            <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                            onChange={(e) => {handleProductImageUpload(e)}}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Nature of Work</label>
                                                                    <input type="text" class="form-control" name="natureOfWorkAgreementE2" id="natureOfWorkAgreementE2" onChange={(e)=>setNatureOfWorkAgreementE2(e.target.value)} placeholder="Nature of Work" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="natureOfWorkAgreementE2Det" id="natureOfWorkAgreementE2Det" onChange={(e)=>setNatureOfWorkAgreementE2Det(e.target.value)}placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="natureOfWorkAgreementE2File" id="natureOfWorkAgreementE2File" class="form-control"  multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                onChange={(e)=>setNatureOfWorkAgreementE2File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="natureOfWorkAgreementE2Remark" id="natureOfWorkAgreementE2Remark" onChange={(e)=>setNatureOfWorkAgreementE2Remark(e.target.value)}placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Number of Employees Deployed</label>
                                                                    <input type="number" class="form-control" name="noOfEmpDeployedAgreementE2" id="noOfEmpDeployedAgreementE2" onChange={(e)=>setNoOfEmpDeployedAgreementE2(e.target.value)} placeholder="Number of Employees Deployed" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="noOfEmpDeployedAgreementE2Det" id="noOfEmpDeployedAgreementE2Det" onChange={(e)=>setNoOfEmpDeployedAgreementE2Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="noOfEmpDeployedAgreementE2File" id="noOfEmpDeployedAgreementE2File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                onChange={(e)=>setNoOfEmpDeployedAgreementE2File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control"  name="noOfEmpDeployedAgreementE2Remark" id="noOfEmpDeployedAgreementE2Remark" onChange={(e)=>setNoOfEmpDeployedAgreementE2Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>

                                                                </table>
                                                                <h4>E.3. Contractors Registration Details</h4>
                                                                <table className="table  creat_tbl">
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Select Type of the Company</label>
                                                                    <div class="dropdown">
                                                                        <div class="form-group">
                                                                        <select class="form-control" name="companyTypeLabourE3" id="companyTypeLabourE3" onChange={(e)=>setCompanyTypeLabourE3(e.target.value)} required>
                                                                            <option>Private Limited Company</option>
                                                                            <option>Public Limited Company</option>
                                                                            <option>Sole Proprietorship</option>
                                                                            <option>Partnership</option>
                                                                            <option>Limited Liability Partnership (LLP)</option>
                                                                            <option>Non-Government Organization (NGO)</option>
                                                                            <option>One Person Company (OPC) Others</option>
                                                                        </select>
                                                                        </div>
                                                                    </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="companyTypeLabourE3Det" id="companyTypeLabourE3Det" onChange={(e)=>setCompanyTypeLabourE3Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                        <div class="form-group files1">
                                                                            <input type="file" name="companyTypeLabourE3File" id="companyTypeLabourE3File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                            onChange={(e)=>setCompanyTypeLabourE3File(e.target.files[0])}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="companyTypeLabourE3Remark" id="companyTypeLabourE3Remark" onChange={(e)=>setCompanyTypeLabourE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Contract Labour License Number</label>
                                                                    <input type="text" class="form-control" name="contractLabourLicNoE3" id="contractLabourLicNoE3" onChange={(e)=>setContractLabourLicNoE3(e.target.value)} placeholder="Contract Labour License Number" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="contractLabourLicNoE3Det" id="contractLabourLicNoE3Det" onChange={(e)=>setContractLabourLicNoE3Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"name="contractLabourLicNoE3File" id="contractLabourLicNoE3File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                onChange={(e)=>setContractLabourLicNoE3File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="contractLabourLicNoE3Remark" id="contractLabourLicNoE3Remark" onChange={(e)=>setContractLabourLicNoE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">License Date</label>
                                                                    <input type="date" class="form-control" name="contractLicDateE3" id="contractLicDateE3" onChange={(e)=>setContractLicDateE3(e.target.value)}  placeholder="License Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="contractLicDateE3Det" id="contractLicDateE3Det" onChange={(e)=>setContractLicDateE3Det(e.target.value)}  placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                        <div class="form-group files1">
                                                                            <input type="file" name="contractLicDateE3File" id="contractLicDateE3File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                            onChange={(e)=>setContractLicDateE3File(e.target.files[0])} required
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="contractLicDateE3Remark" id="contractLicDateE3Remark" onChange={(e)=>setContractLicDateE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Date of Expiry</label>
                                                                    <input type="date" class="form-control" name="contractExpiryDateE3" id="contractExpiryDateE3" onChange={(e)=>setContractExpiryDateE3(e.target.value)}  placeholder="Date of Expiry" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Due Date of Renewal</label>
                                                                    <input type="date" class="form-control" name="contractRenewalDueDateE3" id="contractRenewalDueDateE3" onChange={(e)=>setContractRenewalDueDateE3(e.target.value)} placeholder="Due Date of Renewal"/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Number of Workers as per the License</label>
                                                                    <input type="number" class="form-control" name="noOfWorkersContractE3" id="noOfWorkersContractE3" onChange={(e)=>setNoOfWorkersContractE3(e.target.value)}placeholder="Number of Workers as per the License" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">PAN</label>
                                                                    <input type="text" class="form-control" name="panContractorsE3" id="panContractorsE3" onChange={(e)=>setPanContractorsE3(e.target.value)}  placeholder="PAN" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="panContractorsE3Det" id="panContractorsE3Det" onChange={(e)=>setPanContractorsE3Det(e.target.value)}  placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="panContractorsE3File" id="panContractorsE3File" class="form-control" multiple="" accept="image/*"  style={{ height: '10px' }}
                                                                                onChange={(e)=>setPanContractorsE3File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="panContractorsE3Remark" id="panContractorsE3Remark" onChange={(e)=>setPanContractorsE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">GST</label>
                                                                    <input type="text" class="form-control" name="gstContractorsE3" id="gstContractorsE3" onChange={(e)=>setGstContractorsE3(e.target.value)} placeholder="GST" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="gstContractorsE3Det" id="gstContractorsE3Det" onChange={(e)=>setGstContractorsE3Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="gstContractorsE3File" id="gstContractorsE3File" class="form-control" multiple="" accept="image/*"  style={{ height: '10px' }}
                                                                                onChange={(e)=>setGstContractorsE3File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="gstContractorsE3Remark" id="gstContractorsE3Remark" onChange={(e)=>setGstContractorsE3Remark(e.target.value)}  placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">PF Registration</label>
                                                                    <input type="text" class="form-control" name="pfRegContractorsE3" id="pfRegContractorsE3" onChange={(e)=>setPfRegContractorsE3(e.target.value)}  placeholder="PF Registration" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="pfRegContractorsE3Det" id="pfRegContractorsE3Det" onChange={(e)=>setPfRegContractorsE3Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                        <div class="form-group files1">
                                                                            <input type="file" 
                                                                            accept="image/*" name="pfRegContractorsE3File" id="pfRegContractorsE3File" class="form-control" multiple=""  className="file-upload" style={{ height: '10px' }}
                                                                            onChange={(e)=>setPfRegContractorsE3File(e.target.files[0])} required
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="pfRegContractorsE3Remark" id="pfRegContractorsE3Remark" onChange={(e)=>setPfRegContractorsE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">ESIC Registration</label>
                                                                    <input type="text" class="form-control" name="esicRegContractorsE3" id="esicRegContractorsE3" onChange={(e)=>setEsicRegContractorsE3(e.target.value)}placeholder="ESIC Registration" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="esicRegContractorsE3Det" id="esicRegContractorsE3Det" onChange={(e)=>setEsicRegContractorsE3Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="esicRegContractorsE3File" id="esicRegContractorsE3File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                 onChange={(e)=>setEsicRegContractorsE3File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="esicRegContractorsE3Remark" id="esicRegContractorsE3Remark" onChange={(e)=>setEsicRegContractorsE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Shops and Establishment</label>
                                                                    <input type="text" class="form-control" name="shopsandEstContractorsE3" id="shopsandEstContractorsE3" onChange={(e)=>setShopsandEstContractorsE3(e.target.value)} placeholder="Shops and Establishment" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="shopsandEstContractorsE3Det" id="shopsandEstContractorsE3Det" onChange={(e)=>setShopsandEstContractorsE3Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="shopsandEstContractorsE3File" id="shopsandEstContractorsE3File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                onChange={(e)=>setShopsandEstContractorsE3File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="shopsandEstContractorsE3Remark" id="shopsandEstContractorsE3Remark" onChange={(e)=>setShopsandEstContractorsE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">LWF Registration</label>
                                                                    <input type="text" class="form-control" name="lwfRegContractorsE3" id="lwfRegContractorsE3" onChange={(e)=>setLwfRegContractorsE3(e.target.value)} placeholder="LWF Registration" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="lwfRegContractorsE3Det" id="lwfRegContractorsE3Det" onChange={(e)=>setLwfRegContractorsE3Det(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="lwfRegContractorsE3File" id="lwfRegContractorsE3File" class="form-control" multiple="" accept="image/*"  style={{ height: '10px' }}
                                                                                onChange={(e)=>setLwfRegContractorsE3File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="lwfRegContractorsE3Remark" id="lwfRegContractorsE3Remark" onChange={(e)=>setLwfRegContractorsE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Professional Tax</label>
                                                                    <input type="text" class="form-control"name="profTaxContractorsE3" id="profTaxContractorsE3" onChange={(e)=>setProfTaxContractorsE3(e.target.value)}placeholder="Professional Tax" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="profTaxContractorsE3Det" id="profTaxContractorsE3Det" onChange={(e)=>setProfTaxContractorsE3Det(e.target.value)}placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="profTaxContractorsE3File" id="profTaxContractorsE3File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                onChange={(e)=>setProfTaxContractorsE3File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <label class="form-label">Remarks</label>
                                                                        <input type="text" class="form-control" name="profTaxContractorsE3Remark" id="profTaxContractorsE3Remark" onChange={(e)=>setProfTaxContractorsE3Remark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                        <td colspan="4" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab5 && <Loading /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                            <div className={`tab-pane ${activeTab === 'reject-tab6' ? 'active ' : ''} fade show `} id="reject-tab6" role="tabpanel" aria-labelledby="reject-tab6"> {/**remember */}
                                            <form name="sixthtab" method="post" onSubmit={handleSubmitTab6}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">

                                                            <h4>F. Details of the Branch's(1)</h4>
                                                                <DynamicHTMLGeneratorF1 formData={formData17} setFormData={setFormData17} />
                                                                <table className="table  creat_tbl">
                                                                    <tr className='align-middle'>
                                                                        <td colspan="4">
                                                                        <label for="">Is Factory or S&E</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="4" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowbranch}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showbranch} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                </tr>
                                                                </table>
                                                                <div style={{ display:'none' }} 
                                                                        ref={myRefBranch}>       
                                                                <table className="table  creat_tbl">
                                                                  <tr>
                                                                    <td> 
                                                                    <table className="table  creat_tbl"> 
                                                                        <tr>
                                                                            <td>
                                                                            <label for="">Registered Address of the Contractor</label>
                                                                            <input type="text" class="form-control"  name="branchaddress" id="branchaddress" onChange={(e)=>setBranchAddress(e.target.value)} placeholder="Address" required/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                            {/* <input type="text" class="form-control" 
                                                                            name="branchstate" id="branchstate" onChange={(e)=>setBranchState(e.target.value)}
                                                                            placeholder="State" required/> */}
                                                                            <select className="form-select" aria-label="Default select example"  name="branchstate"  
                                                                                id="branchstate"    value={branchstate} onChange={(e)=>setBranchState(e.target.value)} required>
                                                                                        <option value="">Select State</option>
                                                                                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                        <option value={item._id}>{item.name}</option>
                                                                                    )};
                                                                                </select>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                            <input type="text" class="form-control"  name="branchdistrict" id="branchdistrict" onChange={(e)=>setBranchDistrict(e.target.value)} placeholder="District" required/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                            <input type="number" class="form-control" name="branchpin" id="branchpin" onChange={(e)=>setBranchPin(e.target.value)} placeholder="PIN" required/>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                   </td>  
                                                                   <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="contractorAddBranchFDet" id="contractorAddBranchFDet" onChange={(e)=>setContractorAddBranchFDet(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="contractorAddBranchFFile" id="contractorAddBranchFFile" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setContractorAddBranchFFile(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="contractorAddBranchFRemark" id="contractorAddBranchFRemark" onChange={(e)=>setContractorAddBranchFRemark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Opening</label>
                                                                        <input type="date" class="form-control" name="branchOpeningDateF" id="branchOpeningDateF" onChange={(e)=>setBranchOpeningDateF(e.target.value)}  placeholder="Date of Opening"/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Employees</label>
                                                                        <input type="number" class="form-control" name="noOfEmpBranchF" id="noOfEmpBranchF" onChange={(e)=>setNoOfEmpBranchF(e.target.value)} placeholder="Number of Employees" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                  </table> 
                                                                </div>      
                                                                <h4>F.1. Manager Details</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Name of the Manager</label>
                                                                        <input type="text" class="form-control" name="managerNameF1" id="managerNameF1" onChange={(e)=>setManagerNameF1(e.target.value)} placeholder="Manager Details" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="managerNameF1Det" id="managerNameF1Det" onChange={(e)=>setManagerNameF1Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="managerNameF1File" id="managerNameF1File" class="form-control" multiple="" accept="image/*"  style={{ height: '10px' }}
                                                                                            onChange={(e)=>setManagerNameF1File(e.target.files[0])}
                                                                                    required/>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="managerNameF1Remark" id="managerNameF1Remark" onChange={(e)=>setManagerNameF1Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Mobile Number</label>
                                                                        <input type="number" class="form-control" name="managerMobNoF1" id="managerMobNoF1" onChange={(e)=>setManagerMobNoF1(e.target.value)}  placeholder="Mobile Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="managerMobNoF1Det" id="managerMobNoF1Det" onChange={(e)=>setManagerMobNoF1Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="managerMobNoF1Remark" id="managerMobNoF1Remark" onChange={(e)=>setManagerMobNoF1Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Email</label>
                                                                        <input type="email" class="form-control" name="managerEmailF1" id="managerEmailF1" onChange={(e)=>setManagerEmailF1(e.target.value)}  placeholder="Email" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="managerEmailF1Det" id="managerEmailF1Det" onChange={(e)=>setManagerEmailF1Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="managerEmailF1Remark" id="managerEmailF1Remark" onChange={(e)=>setManagerEmailF1Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Aadhaar Number</label>
                                                                        <input type="text" class="form-control" name="managerAadharNoF1" id="managerAadharNoF1" onChange={(e)=>setManagerAadharNoF1(e.target.value)} placeholder="Aadhar Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="managerAadharNoF1Det" id="managerAadharNoF1Det" onChange={(e)=>setManagerAadharNoF1Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="managerAadharNoF1File" id="managerAadharNoF1File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                    onChange={(e)=>setManagerAadharNoF1File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="managerAadharNoF1Remark" id="managerAadharNoF1Remark" onChange={(e)=>setManagerAadharNoF1Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">PAN</label>
                                                                        <input type="text" class="form-control" name="managerPanF1" id="managerPanF1" onChange={(e)=>setManagerPanF1(e.target.value)} placeholder="PAN" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="managerPanF1Det" id="managerPanF1Det" onChange={(e)=>setManagerPanF1Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="managerPanF1File" id="managerPanF1File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                    onChange={(e)=>setManagerPanF1File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="managerPanF1Remark" id="managerPanF1Remark" onChange={(e)=>setManagerPanF1Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <h4>F.2. Details of Registration & Licenses</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Shops and Establishment License</label>
                                                                        <input type="text" class="form-control" name="shopsEstLicenseF2" id="shopsEstLicenseF2" onChange={(e)=>setShopsEstLicenseF2(e.target.value)}  placeholder="Shops and Establishment License" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="shopsEstLicenseF2Det" id="shopsEstLicenseF2Det" onChange={(e)=>setShopsEstLicenseF2Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="shopsEstLicenseF2File" id="shopsEstLicenseF2File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                    onChange={(e)=>setShopsEstLicenseF2File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control"  name="shopsEstLicenseF2Remark" id="shopsEstLicenseF2Remark" onChange={(e)=>setShopsEstLicenseF2Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <DynamicHTMLGeneratorF1RLicense formData={formData18} setFormData={setFormData18} />
                                                                <h4>F.3. Factory License </h4>
                                                                <DynamicHTMLGeneratorF1FL formData={formData19} setFormData={setFormData19} />
                                                                <h4>F.4. Factory Plan</h4>
                                                                <DynamicHTMLGeneratorF1FP formData={formData20} setFormData={setFormData20} />
                                                                <h4>F.5. Details of the Labour Contractors</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr className='align-middle'>
                                                                        <td colspan="4">
                                                                        <label for="">Is Contract labour Engaged(Yes/No)</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="4" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowf1show}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showf1show} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                </tr>
                                                                </table>
                                                                <div style={{ display:'none' }} 
                                                                        ref={myRefF1Labour}> 
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Contract Labour Registration Number</label>
                                                                        <input type="text" class="form-control" name="contractLabRegNoF5" id="contractLabRegNoF5" onChange={(e)=>setContractLabRegNoF5(e.target.value)}  placeholder="Contract Labour Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="contractLabRegNoF5Det" id="contractLabRegNoF5Det" onChange={(e)=>setContractLabRegNoF5Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="contractLabRegNoF5File" id="contractLabRegNoF5File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                    onChange={(e)=>setContractLabRegNoF5File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control"name="contractLabRegNoF5Remark" id="contractLabRegNoF5Remark" onChange={(e)=>setContractLabRegNoF5Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="regDateContractorF5" id="regDateContractorF5" onChange={(e)=>setRegDateContractorF5(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Contract Employee</label>
                                                                        <input type="number" class="form-control" name="coOfContractEmpF5" id="coOfContractEmpF5" onChange={(e)=>setCoOfContractEmpF5(e.target.value)} placeholder="Number of Contract Employee" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Contractors</label>
                                                                        <input type="number" class="form-control" name="noOfContractorsF5" id="noOfContractorsF5" onChange={(e)=>setNoOfContractorsF5(e.target.value)} placeholder="Number of Contractors" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                </table>
                                                                </div>
                                                                <h4>F.5.1. Details of the Labour Contractors</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Name of the Contractor</label>
                                                                        <input type="text" class="form-control" name="contractorNameF51" id="contractorNameF51" onChange={(e)=>setContractorNameF51(e.target.value)}  placeholder="Name of the Contractor" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="contractorNameF51Det" id="contractorNameF51Det" onChange={(e)=>setContractorNameF51Det(e.target.value)}placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="contractorNameF51File" id="contractorNameF51File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                    onChange={(e)=>setContractorNameF51File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="contractorNameF51Remark" id="contractorNameF51Remark" onChange={(e)=>setContractorNameF51Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Name of the Establishment</label>
                                                                        <input type="text" class="form-control" name="establishmentNameF51" id="establishmentNameF51" onChange={(e)=>setEstablishmentNameF51(e.target.value)}  placeholder="Name of the Establishment" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="establishmentNameF51Det" id="establishmentNameF51Det" onChange={(e)=>setEstablishmentNameF51Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" nname="establishmentNameF51File" id="establishmentNameF51File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setEstablishmentNameF51File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="establishmentNameF51Remark" id="establishmentNameF51Remark" onChange={(e)=>setEstablishmentNameF51Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Registered Address of the Contractor</label>
                                                                    <table className="table  creat_tbl"> 
                                                                    <tr>   
                                                                        <td>
                                                                        <input type="text" class="form-control" name="regisocontractaddress" id="regisocontractaddress"
                                                                        onChange={(e)=>setregisocontractaddress(e.target.value)} placeholder="Address" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        {/* <input type="text" class="form-control" name="regisocontractstate" id="regisocontractstate" onChange={(e)=>setregisocontractstate(e.target.value)} placeholder="State" required/> */}
                                                                        <select className="form-select" aria-label="Default select example"  name="regisocontractstate"  
                                                                                id="regisocontractstate"    value={regisocontractstate} onChange={(e)=>setregisocontractstate(e.target.value)} required>
                                                                                        <option value="">Select State</option>
                                                                                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                        <option value={item._id}>{item.name}</option>
                                                                                    )};
                                                                                </select>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="regisocontractdistrict" id="regisocontractdistrict" onChange={(e)=>setregisocontractdistrict(e.target.value)} placeholder="District" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <input type="number" class="form-control" name="regisocontractpin" id="regisocontractpin" onChange={(e)=>setregisocontractpin(e.target.value)} placeholder="PIN" required/>
                                                                        </td>
                                                                    </tr>    
                                                                    </table>
                                                                    </td>

                                                                    <td><label for="">Details</label>
                                                                        <input type="text" class="form-control" name="regAddContractorF51Det" id="regAddContractorF51Det" onChange={(e)=>setRegAddContractorF51Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="regAddContractorF51File" id="regAddContractorF51File" class="form-control" 
                                                                                 /*    value={regAddContractorF51File} */       multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setRegAddContractorF51File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="regAddContractorF51Remark" id="regAddContractorF51Remark" onChange={(e)=>setRegAddContractorF51Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <h4>F.5.2. Agreement Date</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Expiry</label>
                                                                        <input type="date" class="form-control" name="expiryDateF52" id="expiryDateF52" onChange={(e)=>setExpiryDateF52(e.target.value)}  placeholder="Date of Expiry" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Due Date for Renewal</label>
                                                                        <input type="date" class="form-control" name="renewalDateF52" id="renewalDateF52" onChange={(e)=>setRenewalDateF52(e.target.value)}  placeholder="Due Date for Renewal" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Nature of Work</label>
                                                                        <input type="text" class="form-control" name="natureOfWorkF52" id="natureOfWorkF52" value={natureOfWorkF52} onChange={(e)=>setNatureOfWorkF52(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="natureOfWorkF52Det" id="natureOfWorkF52Det" onChange={(e)=>setNatureOfWorkF52Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="natureOfWorkF52File" id="natureOfWorkF52File" class="form-control" /*value={natureOfWorkF52File} */multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setNatureOfWorkF52File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="natureOfWorkF52Remark" id="natureOfWorkF52Remark" onChange={(e)=>setNatureOfWorkF52Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Employees Deployed</label>
                                                                        <input type="number" class="form-control"  name="noOfEmpDeployedF52" id="noOfEmpDeployedF52" onChange={(e)=>setNoOfEmpDeployedF52(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                       {/* <td>
                                                                         <label for="">Number of Employees Deployed</label>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                </table>
                                                                <h4>F.5.3. Contractors Registration Details</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Type of the Company</label>
                                                                        <input type="text" class="form-control"  name="companyTypeF53" id="companyTypeF53" onChange={(e)=>setCompanyTypeF53(e.target.value)}  placeholder="Type of the Company" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="companyTypeF53Det" id="companyTypeF53Det" onChange={(e)=>setCompanyTypeF53Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="companyTypeF53File" id="companyTypeF53File" class="form-control" /*value={companyTypeF53File} */multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setCompanyTypeF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control"name="companyTypeF53Remark" id="companyTypeF53Remark" onChange={(e)=>setCompanyTypeF53Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Contract Labour License Number</label>
                                                                        <input type="text" class="form-control" name="contractLabLicNoF53" id="contractLabLicNoF53" onChange={(e)=>setContractLabLicNoF53(e.target.value)} placeholder="Contract Labour License Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="contractLabLicNoF53Det" id="contractLabLicNoF53Det" onChange={(e)=>setContractLabLicNoF53Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="contractLabLicNoF53File" id="contractLabLicNoF53File" class="form-control" /*value={contractLabLicNoF53File} */multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setContractLabLicNoF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" nname="contractLabLicNoF53Remark" id="contractLabLicNoF53Remark" onChange={(e)=>setContractLabLicNoF53Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">License Date</label>
                                                                        <input type="date" class="form-control" name="licenseDateF53" id="licenseDateF53" onChange={(e)=>setLicenseDateF53(e.target.value)}  placeholder="License Date" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Date of Expiry</label>
                                                                        <input type="date" class="form-control"  name="expiryDateF53" id="expiryDateF53" onChange={(e)=>setExpiryDateF53(e.target.value)}  placeholder="Date of Expiry" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Due Date for Renewal</label>
                                                                        <input type="date" class="form-control" name="renewalDateF53" id="renewalDateF53" onChange={(e)=>setRenewalDateF53(e.target.value)} placeholder="Due Date for Renewal" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                        <label for="">Number of Workers as per the License</label>
                                                                        <input type="number" class="form-control"name="noOfWorkerF53" id="noOfWorkerF53" onChange={(e)=>setNoOfWorkerF53(e.target.value)}  placeholder="Number of Workers as per the License" required/>
                                                                        </td>
                                                                        {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                    onChange={(e) => {handleProductImageUpload(e)}}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                        </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">PAN</label>
                                                                        <input type="text" class="form-control" name="panF53" id="panF53" onChange={(e)=>setPanF53(e.target.value)} placeholder="PAN" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="panF53Det" id="panF53Det" onChange={(e)=>setPanF53Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="panF53File" id="panF53File" class="form-control" /*value={panF53File}*/ multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                onChange={(e)=>setPanF53File(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="panF53Remark" id="panF53Remark" onChange={(e)=>setPanF53Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">GST</label>
                                                                        <input type="text" class="form-control" name="gstF53" id="gstF53" onChange={(e)=>setGstF53(e.target.value)} placeholder="GST" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="gstF53Det" id="gstF53Det" onChange={(e)=>setGstF53Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"name="gstF53File" id="gstF53File" class="form-control"  multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setGstF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="gstF53Remark" id="gstF53Remark" onChange={(e)=>setGstF53Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">PF Registration</label>
                                                                        <input type="text" class="form-control" name="pfRegF53" id="pfRegF53" onChange={(e)=>setPfRegF53(e.target.value)}  placeholder="PF Registration" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="pfRegF53Det" id="pfRegF53Det" onChange={(e)=>setPfRegF53Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="pfRegF53File" id="pfRegF53File" class="form-control"  multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setPfRegF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="pfRegF53Remark" id="pfRegF53Remark" onChange={(e)=>setPfRegF53Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">ESIC Registration</label>
                                                                        <input type="text" class="form-control" name="esicRegF53" id="esicRegF53" onChange={(e)=>setEsicRegF53(e.target.value)}  placeholder="ESIC Registration" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="esicRegF53Det" id="esicRegF53Det" onChange={(e)=>setEsicRegF53Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="esicRegF53File" id="esicRegF53File" class="form-control"  multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setEsicRegF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="esicRegF53Remark" id="esicRegF53Remark" onChange={(e)=>setEsicRegF53Remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Shops and Establishment</label>
                                                                        <input type="text" class="form-control" name="shopsEstF53" id="shopsEstF53" onChange={(e)=>setShopsEstF53(e.target.value)}  placeholder="Shops and Establishment" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="shopsEstF53Det" id="shopsEstF53Det" onChange={(e)=>setShopsEstF53Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="shopsEstF53File" id="shopsEstF53File" class="form-control"  multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setShopsEstF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="shopsEstF53Remark" id="shopsEstF53Remark" onChange={(e)=>setShopsEstF53Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">LWF Registration</label>
                                                                        <input type="text" class="form-control" name="lwfRegF53" id="lwfRegF53" onChange={(e)=>setLwfRegF53(e.target.value)}  placeholder="LWF Registration" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control" name="lwfRegF53Det" id="lwfRegF53Det" onChange={(e)=>setLwfRegF53Det(e.target.value)} placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="lwfRegF53File" id="lwfRegF53File" class="form-control"  multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setLwfRegF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="lwfRegF53Remark" id="lwfRegF53Remark" onChange={(e)=>setLwfRegF53Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Professional Tax</label>
                                                                        <input type="text" class="form-control" name="profTaxF53" id="profTaxF53" onChange={(e)=>setProfTaxF53(e.target.value)}  placeholder="Professional Tax" required/>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Details</label>
                                                                        <input type="text" class="form-control"name="profTaxF53Det" id="profTaxF53Det" onChange={(e)=>setProfTaxF53Det(e.target.value)}  placeholder="Details"/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="profTaxF53File" id="profTaxF53File" class="form-control" multiple="" accept="image/*" style={{ height: '10px' }}
                                                                                            onChange={(e)=>setProfTaxF53File(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="profTaxF53Remark" id="profTaxF53Remark" onChange={(e)=>setProfTaxF53Remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <h4>F.5.4 Night Shift Permission</h4>
                                                                <DynamicHTMLGeneratorF54NSP formData={formData21} setFormData={setFormData21}/>
                                                                <h4>F.5.5 OT Permission</h4>
                                                                <DynamicHTMLGeneratorF54OTP formData={formData22} setFormData={setFormData22}/>
                                                                
                                                                <h4>F.5.6 Weekly Off Exemption</h4>
                                                                <DynamicHTMLGeneratorF54WOE formData={formData23} setFormData={setFormData23}/>
                                                                
                                                                <h4>F.5.7 Trade License </h4>
                                                                <DynamicHTMLGeneratorF54TL formData={formData24} setFormData={setFormData24}/>
                                                                <table className="table  creat_tbl">
                                                                <tr>
                                                                        <td colspan="4" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab6 && <Loading /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                        <div className={`tab-pane ${activeTab === 'reject-tab7' ? 'active ' : ''} fade show `} id="reject-tab7" role="tabpanel" aria-labelledby="reject-tab7"> {/**remember */}
                                            <form name="seventhform" method="post" onSubmit={handleSubmitTab7}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                            <h4>G. Is the Company a Contractor</h4>
                                                            <table className="table  creat_tbl">
                                                                    <tr className='align-middle'>
                                                                        <td colspan="4">
                                                                        <label for="">Is the Contract Labour Engaged (Yes/No)</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="4" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowgshow}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showgshow} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                </tr>
                                                                </table>
                                                                <div style={{ display:'none' }} 
                                                                        ref={myRefGLabour}> 
                                                                <h4>G.1.1. Details of Contract Work</h4>        
                                                                <DynamicHTMLGeneratorGCC formData={formData25} setFormData={setFormData25}/>
                                                                </div>
                                                                <h4>G.1.2. Nature of the Contract Work</h4>
                                                                <table className="table creat_tbl">
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Agreement Reference Number</label>
                                                                    <input type="text" class="form-control" name="g12ncw" id="g12ncw" onChange={(e)=>setg12ncw(e.target.value)} placeholder="Agreement Reference Number" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="g12ncwdet" id="g12ncwdet" onChange={(e)=>setg12ncwdet(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="g12ncwimage" class="form-control" multiple="" accept="image/*" id="g12ncwimage" style={{ height:'10px' }}
                                                                                onChange={(e) => {setg12ncwimage(e.target.files[0])}} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g12ncwremark" id="g12ncwremark" onChange={(e)=>setg12ncwremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Agreement Date</label>
                                                                    <input type="date" class="form-control" name="g12ncwdate" id="g12ncwdate" onChange={(e)=>setg12ncwdate(e.target.value)}  placeholder="Agreement Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Agreement Validity</label>
                                                                    <input type="date" class="form-control" name="g12ncwdatevalid" id="g12ncwdatevalid" onChange={(e)=>setg12ncwdatevalid(e.target.value)}  placeholder="Agreement Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4">
                                                                    <label for="">Number of Workers to be engaged</label>
                                                                    <input type="number" class="form-control" name="g12ncwnow" id="g12ncwnow" onChange={(e)=>setg12ncwnow(e.target.value)} placeholder="Number of Workers to be engaged" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Category of the Establishment</label>
                                                                    <input type="text" class="form-control" name="g12ncwcoe" id="g12ncwcoe" onChange={(e)=>setg12ncwcoe(e.target.value)} placeholder="Category of the Establishment" required/>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Details</label>
                                                                    <input type="text" class="form-control" name="g12ncwcoedet" id="g12ncwcoedet" onChange={(e)=>setg12ncwcoedet(e.target.value)}  placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" class="form-control" multiple="" accept="image/*" style={{ height:'10px' }}
                                                                                name="g12ncwcoeimage" id="g12ncwcoeimage" onChange={(e)=>setg12ncwcoeimage(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g12ncwcoeremark" id="g12ncwcoeremark" onChange={(e)=>setg12ncwcoeremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                                <table className="table  creat_tbl">
                                                                    <tr className='align-middle'>
                                                                        <td colspan="4">
                                                                        <label for="">Is CLRA Applicable?</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="4" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowgclrashow}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showgclrashow} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                </tr>
                                                                </table>
                                                                <div style={{ display:'none' }} 
                                                                        ref={myRefGCLRA}>
                                                                <h4>G.1.3. Details of CLRA License</h4>
                                                                <table className="table creat_tbl">
                                                                <tr>
                                                                    <td><label for="">Number of Form 5/Form III and date</label>
                                                                    <input type="text" class="form-control" name="g13form" id="g13form" onChange={(e)=>setg13form(e.target.value)} placeholder="Number of Form 5/Form III and date" required/>
                                                                    </td>
                                                                    <td><label for="">Details</label>
                                                                    <input type="text" class="form-control" name="g13formdet" id="g13formdet" onChange={(e)=>setg13formdet(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="g13formimage" class="form-control" multiple="" accept="image/*" id="g13formimage" style={{ height:'10px' }}
                                                                                onChange={(e) => {setg13formimage(e)}} required
                                                                                />
                                                                            </div>
                                                                        </div> {/**,application/pdf */}
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g13formremark" id="g13formremark" onChange={(e)=>setg13formremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4"><label for="">Form 5/Form III date</label>
                                                                    <input type="date" class="form-control" name="g13form5date" id="g13form5date" onChange={(e)=>setg13form5date(e.target.value)} placeholder="Form 5/Form III date" required/>
                                                                    </td>
                                                                    {/* <td><label for="">Details</label>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4"><label for="">Date on which the contract work commenced</label>
                                                                    <input type="date" class="form-control" name="g13form5dateofcommence" id="g13form5dateofcommence" onChange={(e)=>setg13form5dateofcommence(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>

                                                                <tr>
                                                                    <td><label for="">License Number</label>
                                                                    <input type="text" class="form-control" name="g13form5licenece" id="g13form5licenece" onChange={(e)=>setg13form5licenece(e.target.value)}  placeholder="Type here" required/>
                                                                    </td>
                                                                    <td><label for="">Details</label>
                                                                    <input type="text" class="form-control" name="g13form5licenecedet" id="g13form5licenecedet" onChange={(e)=>setg13form5licenecedet(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="g13form5liceneceimage" class="form-control" multiple="" accept="image/*" id="g13form5liceneceimage" style={{ height:'10px' }}
                                                                                onChange={(e) => {setg13form5liceneceimage(e.target.files[0])}} required 
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g13form5liceneceremark" id="g13form5liceneceremark" onChange={(e)=>setg13form5liceneceremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4"><label for="">Date of License</label>
                                                                    <input type="date" class="form-control" name="g13form5licensedol" id="g13form5licensedol" onChange={(e)=>setg13form5licensedol(e.target.value)} placeholder="Date of License" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4"><label for="">Validity</label>
                                                                    <input type="date" class="form-control" name="g13form5licensedolvalid" id="g13form5licensedolvalid" onChange={(e)=>setg13form5licensedolvalid(e.target.value)}  placeholder="Valid" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4"><label for="">Due Date for Renewal</label>
                                                                    <input type="date" class="form-control" name="g13form5licensedoldor" id="g13form5licensedoldor" onChange={(e)=>setg13form5licensedoldor(e.target.value)} placeholder="Duse Date of Renewal" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4"><label for="">Number of Contract Workers</label>
                                                                    <input type="number" class="form-control" name="g13form5licenseworkers" id="g13form5licenseworkers" onChange={(e)=>setg13form5licenseworkers(e.target.value)}  placeholder="Number of Contract Workers" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="4"><label for="">Number of Manager Responsible</label>
                                                                    <input type="number" class="form-control" name="g13form5licensemanresp" id="g13form5licensemanresp" onChange={(e)=>setg13form5licensemanresp(e.target.value)}  placeholder="Number of Manager Responsible" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                </tr>
                                                                <tr>
                                                                    <td><label for="">License Fee</label>
                                                                    <input type="text" class="form-control" name="g13form5licensefee" id="g13form5licensefee" onChange={(e)=>setg13form5licensefee(e.target.value)} placeholder="License Fee" required/>
                                                                    </td>
                                                                    <td><label for="">Details</label>
                                                                    <input type="text" class="form-control" name="g13form5licensefeedet" id="g13form5licensefeedet" onChange={(e)=>setg13form5licensefeedet(e.target.value)}placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}
                                                                                name="g13form5licensefeeimage" id="g13form5licensefeeimage" onChange={(e)=>setg13form5licensefeeimage(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g13form5licensefeeremark" id="g13form5licensefeeremark" onChange={(e)=>setg13form5licensefeeremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><label for="">Security Deposit</label>
                                                                    <input type="text" class="form-control" name="g13form5securityfee" id="g13form5securityfee" onChange={(e)=>setg13form5securityfee(e.target.value)} placeholder="Security Deposit" required/>
                                                                    </td>
                                                                    <td><label for="">Details</label>
                                                                    <input type="text" class="form-control" name="g13form5securityfeedet" id="g13form5securityfeedet" onChange={(e)=>setg13form5securityfeedet(e.target.value)} placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" class="form-control" multiple="" accept="image/*"  style={{ height:'10px' }}name="g13form5securityfeeimage" id="g13form5securityfeeimage" onChange={(e)=>setg13form5securityfeeimage(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g13form5securityfeeremark" id="g13form5securityfeeremark" onChange={(e)=>setg13form5securityfeeremark(e.target.value)}  placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                
                                                                </table>
                                                                </div>
                                                                <h4>G.1.4. Details of the Completion of the Contract</h4>
                                                                <table className="table table-striped creat_tbl">
                                                                   <tr>
                                                                    <td><label for="">Date on which the contract work completed</label>
                                                                        <input type="date" class="form-control" name="g14dcwc" id="g14dcwc" onChange={(e)=>setg14dcwc(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                    <td><label for="">Date of Notice of the Completion of contract</label>
                                                                        <input type="date" class="form-control" name="g14dncc" id="g14dncc" onChange={(e)=>setg14dncc(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                    <td><label for="">Date of application for the refund of the security deposit</label>
                                                                        <input type="date" class="form-control" name="g14dars" id="g14dars" onChange={(e)=>setg14dars(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                    <td><label for="">Date on which the license is surrendered</label>
                                                                        <input type="date" class="form-control" name="g14dls" id="g14dls" onChange={(e)=>setg14dls(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    {/* <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Details"/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" style={{ height:'10px' }}
                                                                                onChange={(e) => {handleProductImageUpload(e)}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" class="form-control" name="" id="" placeholder="Write Here"/>
                                                                    </td> */}
                                                                    </tr>
                                                                    <tr>
                                                                            {/* <td colspan="2" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >skip</button>
                                                                            </div>
                                                                            </td> */}
                                                                        
                                                                            <td colspan="4" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Save</button>{loadingtab7 && <Loading /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                </form>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        </div>
    </div>
</React.Fragment >
    )
}

export default CompanyEdit;
import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {categoryGet,createElibrary,stateGets} from '../../store/actions/otherActions';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //for
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import ElibraryAllTable from './ElibraryAllTable';
const Elibrary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tonotificationpage = () => {
        navigate('/dashboard')
    }
    const [document,setDocument] = useState('');
    const [fileto,setFile] = useState('');
    const [notifications,setNotification] = useState('');
    const myElementRefTab1 = useRef(null);
    const myElementRefTab2 = useRef(null);
    const catGet = useSelector((state) => state.catGet);
    const { loading, categoryInfo,error } = catGet;
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const [date, setDate] = useState(defaultDate)
    const [dating, setDates] = useState('');
    const [category, setCategory] = useState('');
    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
    },[dispatch])
    var initialValues = {
        category: '',
        state: '',
        label:'',
        description: ''
    }
    const schema = Yup.object({
        category: Yup.string('')
            .required('Category Label is required!'),
        state: Yup.string('')
            .required('State is required!'), 
        label: Yup.string('')
            .required('Label is required!'),     
        description: Yup.string('')
            .required('Description is required!'), 
        // image: Yup.mixed()
        //     .nullable()
        //     .notRequired()
        //     .required("Document Image is required!")
        //     .test('type',  "We only support pdf formats", function (value) {
        //         //alert('Here='+value.type)
        //         return value && (value.type === "application/pdf" )}),                 
        // externallink: Yup.string('')
        //     .required('External Link is required')
        //     .min(3, 'External Link must be minimum of 3 charactors')
        //     .max(100, 'External Link should be of maximum 100 characters length'),             
        // dates: Yup.string('')
        //     .required('Date is required')
    });
    //for inline validations via Yup and formik
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action)=>{
          onElibrary(values,action);
        }}
    );
    const onElibrary = async (val,action) => {
        const formData = new FormData();
        formData.append("category", val.category);
        formData.append("state", val.state);
        formData.append("dates", date);
        formData.append("label", val.label);
        formData.append("executive", '659d4f2609c9923c9e7b8f72');
        formData.append("description", val.description);
		formData.append("image", fileto);
        // api call        
        dispatch(createElibrary(formData)); 
        action.resetForm();
        setFile('')
        const elementTab1 = myElementRefTab1.current;
        if(elementTab1){
            elementTab1.click();
        }
    }
    const handleProductImageUpload= (e) => {
        const file = e.target.files[0];
        setFile(e.target.files[0]);
        TransformFileDataDoc(file);
    };
    //reading image using The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const TransformFileDataDoc = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" ){
            types = true; 
            alert('You can only upload JPG/JPEG/PNG/BMP file!');
            return false;
        }
        else{
            types = false;
        }
        if(types===false){
         //   alert('sdsds')
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                //   setImage(reader.result);
                }
            }
        }
        else{
            // setImage("");
        }
    }; 
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    const viewall = () => {
        setTimeout(() => {
            // dispatch(checklistGetOnreject());
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
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" ref={myElementRefTab1} onClick={viewall}> View All </button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" ref={myElementRefTab2}>Approve</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false">Reject</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill" data-bs-toggle="pill" data-bs-target="#reject-tab" type="button" role="tab" aria-controls="reject-tab" aria-selected="false">Create New </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <ElibraryAllTable linktab={myElementRefTab2}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Palaceholder Name</th>
                                                                <th scope="col">Excutive</th>
                                                                <th scope="col">Create Date</th>
                                                                <th scope="col">View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="creative-pill" role="tabpanel" aria-labelledby="creative-tab">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Palaceholder Name</th>
                                                                <th scope="col">Create Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Reject Date</th>
                                                                <th scope="col">Reason</th>
                                                                <th scope="col">View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Reject</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>Reason</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none' data-bs-toggle="modal" data-bs-target="#exampleModal"> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Reject</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>Reason</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none' data-bs-toggle="modal" data-bs-target="#exampleModal"> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Reject</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>Reason</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none' data-bs-toggle="modal" data-bs-target="#exampleModal"> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Reject</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>Reason</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none' data-bs-toggle="modal" data-bs-target="#exampleModal"> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Reject</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>Reason</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none' data-bs-toggle="modal" data-bs-target="#exampleModal"> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Reject</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>Reason</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none' data-bs-toggle="modal" data-bs-target="#exampleModal"> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Reject</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>Reason</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Your Data List Here</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="card p-3 ">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped all_tbl">
                                                                            <thead>
                                                                                <tr className='align-middle'>
                                                                                    <th scope="col">Sr .No</th>
                                                                                    <th scope="col">Category</th>
                                                                                    <th scope="col">Palaceholder Name</th>
                                                                                    <th scope="col">Create Date</th>
                                                                                    <th scope="col">Status</th>
                                                                                    <th scope="col">Reject Date</th>
                                                                                    <th scope="col">Reason</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>Act</td>
                                                                                    <td>ABC</td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td><span className='text-danger'>Reject</span></td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td>Reason</td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>Act</td>
                                                                                    <td>ABC</td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td><span className='text-danger'>Reject</span></td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td>Reason</td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>Act</td>
                                                                                    <td>ABC</td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td><span className='text-danger'>Reject</span></td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td>Reason</td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>Act</td>
                                                                                    <td>ABC</td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td><span className='text-danger'>Reject</span></td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td>Reason</td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>Act</td>
                                                                                    <td>ABC</td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td><span className='text-danger'>Reject</span></td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td>Reason</td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>Act</td>
                                                                                    <td>ABC</td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td><span className='text-danger'>Reject</span></td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td>Reason</td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>Act</td>
                                                                                    <td>ABC</td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td><span className='text-danger'>Reject</span></td>
                                                                                    <td><span className='text-success'>09/01/2024</span></td>
                                                                                    <td>Reason</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                                                                            <div className="modal-content">
                                                                                {/* <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div> */}
                                                                                <div className="modal-body">
                                                                                    <form class="row g-3">
                                                                                        <div class="col-md-6 col-6 col-lg-6">
                                                                                            <button className='btn btn-light border'> Sr. No :01</button>
                                                                                        </div>
                                                                                        <div class="col-md-6 col-6 col-lg-6 text-end">
                                                                                            <button className='btn btn-light border'> 17/02/2024</button>
                                                                                        </div>
                                                                                        <div class="col-md-6 col-lg-6">
                                                                                            <label for="" class="form-label">State</label>
                                                                                            <input type="email" class="form-control" id="" placeholder='Hyderabad' />
                                                                                        </div>
                                                                                        <div class="col-md-6 col-lg-6">
                                                                                            <label for="" class="form-label">Category</label>
                                                                                            <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect State</option>
                                                                                                <option value="1">One</option>
                                                                                                <option value="2">Two</option>
                                                                                                <option value="3">Three</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div class="col-12 col-lg-12 col-md-12">
                                                                                            <label for="inputAddress" class="form-label">Act</label>
                                                                                            <input type="text" class="form-control" id="inputAddress" placeholder="Type act name" />
                                                                                        </div>
                                                                                        <div class="col-12 col-lg-12 col-md-12">
                                                                                            <label for="inputAddress2" class="form-label">Rule *</label>
                                                                                            <div class="input-group">
                                                                                                <input type="text" class="form-control" placeholder="Type Rule Name" aria-label="Type Rule Name" aria-describedby="button-addon2" />
                                                                                                <button class="btn btn-outline-primary" type="button" id="button-addon2">Add  <AddCircleOutlineIcon /></button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-12 col-lg-12 col-md-12">
                                                                                            <label for="inputAddress" class="form-label">Quotation *</label>
                                                                                            <input type="text" class="form-control" id="inputAddress" placeholder="type quotation" />
                                                                                        </div>
                                                                                        <div class="col-12 col-lg-12 col-md-12">
                                                                                            <label for="inputAddress" class="form-label">Description *</label>
                                                                                            <input type="text" class="form-control" id="inputAddress" placeholder="type description" />
                                                                                        </div>
                                                                                        <div class="col-12 col-lg-12 col-md-12">
                                                                                            <label for="inputAddress" class="form-label">Form *</label>
                                                                                            
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                                <div className="modal-footer justify-content-center">
                                                                                    <button type="button" className="btn btn-secondary">Cancel</button>
                                                                                    <button type="button" className="btn btn-success">Edit</button>
                                                                                    <button type="button" className="btn btn-primary">Save</button>
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
                                <div className="tab-pane fade" id="reject-tab" role="tabpanel" aria-labelledby="reject-pill">
                                    <form className="row g-3"  method="post" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
                                        <div className="col-md-12 col-lg-12">
                                            <label for="" className="form-label">Category</label>
                                            <select className="form-select" aria-label="Default select example" id="category" name="category" onChange={formik.handleChange} value={formik.values.category} >
                                                <option value="">Select category</option>
                                                {categoryInfo != 'undefind' && categoryInfo?.length > 0 && categoryInfo.map(item => 
                                                    <option value={item._id}>{item.name}</option>
                                                )};
                                                
                                            </select>
                                            {formik.touched.category && formik.errors.category && (
                                                <div className="error">{formik.errors.category}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Palaceholder Name</label>
                                            <select className="form-select" aria-label="Default select example" id="state" name="state" value={formik.values.state} onChange={formik.handleChange} >
                                                    <option value="">Select State</option>
                                                {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                    <option value={item._id}>{item.name}</option>
                                                )};
                                            </select>
                                            {formik.touched.state && formik.errors.state && (
                                            <div className="error">{formik.errors.state}</div>)}
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Label</label>
                                            <input type="text" className="form-control" placeholder='write here' 
                                                value={formik.values.label}
                                                id="label"
                                                name="label" 
                                                onChange={formik.handleChange}/>
                                                {formik.touched.label && formik.errors.label && (
                                                <div className="error">{formik.errors.label}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Date</label>
                                            <input   type="date" className="form-control" 
                                             // value={formik.values.dates} 
                                                id="dates"
                                                name="dates" 
                                                // onChange={formik.handleChange} 
                                                value={date.toLocaleDateString('en-CA')} 
                                                onChange={onSetDate} />
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <label for="" className="form-label">Write Description</label>
                                            <textarea class="form-control" placeholder='write here' rows="3" 
                                            value={formik.values.description}
                                            id="description"
                                            name="description" 
                                            onChange={formik.handleChange} 
                                            style={{overflow: 'hidden',maxHeight: '200px'}}
                                            />
                                            {formik.touched.description && formik.errors.description && (
                                                <div className="error">{formik.errors.description}</div>
                                            )}
                                        </div>
                                        <div className="col-md-7 col-lg-7">
                                            <div class="form-group files">
                                                <input type="file" name="document" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                                                dataHeight="450" onChange={(e) => {handleProductImageUpload(e);}}
                                                 />
                                                {(formik.touched.document && formik.errors.document)?<div className="error">{formik.errors.document}</div>:null}
                                            </div> 
                                        </div>
                                        <div class="col-md-6">
                                            <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tocategorypage} style={{marginTop:'0px'}}>Cancel</button>
                                            </div>
                                        <div class="col-md-6">
                                            <button type="submit" class="w-100 btn btn-primary " style={{marginBottom:'7px'}}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Elibrary
import React,{useState,useEffect,useRef} from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { FormLabel,styled} from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined } from '@ant-design/icons';
import {stateGets,usersGet,branchGet,companyGet,} from "../../store/actions/otherActions";
import { useDispatch,useSelector } from 'react-redux';
import AuditTable from './AuditTable';
const Audit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [auditor, setAuditor] = useState();
    const [image, setImage] = useState();
    const [fileto,setFile] = useState('');
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor; 
    useEffect(()=>{

    },[dispatch]);
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
       // alert(JSON.stringify(file))
        setFile(file);
        TransformFileData(file);
    };
    //reading image using The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const TransformFileData = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" && fileType!=="application/pdf"){
            types = true; 
            alert('You can only upload JPG/JPEG/PNG/BMP/PDF file!');
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
                  setImage(reader.result);
                }
            }
        }
        else{
            setImage("");
        }
    }; 
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                          <div className='card'>
                            <div className='card-body'>
                            <ul className="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                    <button className="nav-link w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">View All</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                    <button className="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create New</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <AuditTable />
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <form className="row g-3">
                                        <div className="col-md-12">
                                            <h4 className='text-center my-2'>General Details</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="" placeholder='Write here' />
                                        </div>
                                        <div className="col-md-3">
                                            <label for="" className="form-label">Seclect Company *</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Company</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="" className="form-label">Seclect Company *</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="" className="form-label">Seclect Branch *</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="" className="form-label">Start Date</label>
                                            <input type="date" className="form-control" id="" placeholder='start date' />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="" className="form-label">End Date</label>
                                            <input type="date" className="form-control" id="" placeholder='End date' />
                                        </div>
                                        <div className="col-md-12">
                                            <label for="exampleFormControlTextarea1" class="form-label">Scope</label>
                                            <textarea class="form-control" placeholder='write a discription' id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <h4 className='text-center my-2'>Auditor Details</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="" className="form-label">Select Auditor</label>
                                            <select className="form-select" aria-label="Default select example"     name="users" value= {auditor}    onChange={(e)=>setAuditor(e.target.value)}>
                                                <option value="">Select Auditor</option>
                                                {auditorInfo != 'undefind' && auditorInfo?.length > 0 && auditorInfo.map(item => 
                                                <option value={item._id}>{item.firstName}{' '}{item.lastName}
                                                </option>
                                            )};
                                            </select> 
                                        </div>
                                        <div className="col-md-12">
                                            <label for="exampleFormControlTextarea1" class="form-label">Brief To Auditor</label>
                                            <textarea class="form-control" placeholder='Brif To Auditor' id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <h4 className='text-center my-2'>Checklist Details</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="" className="form-label">Select Checklist</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option >Seclect Checklist </option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <div>
                                                <div class="form-group files">
                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*,application/pdf" id="input-file-now-custom-2" className="file-upload"
                                                    dataHeight="500" onChange={(e) => {handleProductImageUpload(e)}}
                                                    />
                                                </div>   
                                            </div>     
                                        </div>
                                        <div className="col-md-4 col-3 text-lg-end">
                                            <button type="submit" className="btn btn-light">Draf</button>
                                        </div>
                                        <div className="col-md-4 col-3  text-lg-center">
                                            <button type="submit" className="btn btn-dark">Cancel</button>
                                        </div>
                                        <div className="col-md-4 col-3 text-lg-start">
                                            <button type="submit" className="btn btn-primary">Submit</button>
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
        </React.Fragment>
    )
}

export default Audit;
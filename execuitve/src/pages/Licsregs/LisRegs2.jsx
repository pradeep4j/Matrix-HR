import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FormLabel,styled} from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined } from '@ant-design/icons';
import {stateGets,usersGet,branchGet,companyGet,nameRateCreate} from "../../store/actions/otherActions";
import { useDispatch,useSelector } from 'react-redux';

const LiseRegs2 = () => {
    const dispatch = useDispatch();
    const [company, setCompany] = useState('');
    const [state, setState] = useState('');
    const [branch,setBranch] = useState('');
    const [executive, setExecutive] = useState('');
    const [image,setImage] = useState('');
    const [document,setDocument] = useState('');
    const [fileto,setFile] = useState('');
    const [documentto,setFileDocument] = useState('');
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    //console.log(stateInfo);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )

    const [date, setDate] = useState(defaultDate)

    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
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
        if(fileType!=="image/svg+xml" && fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" && fileType!=="image/gif"){
            types = false; 
            alert('You can only upload SVG/JPG/JPEG/PNG/BMP/GIF file!');
            return false;
        }
        else{
            types = true;
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
    const handleSubmitCompanyInfo = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("company",company);
        formData.append("state",state);
        formData.append("branch",branch);
        formData.append("date",date);
        // dispatch(companyInfoDispatch(formData))
    }
    useEffect(()=>{
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(branchGet());
        dispatch(companyGet());
    },[dispatch]);
    return (
    <React.Fragment>
        {/* inner tab start here */}
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className='table-responsive'>
                        <form name="secondtab" /*onSubmit={handleSubmitCompanyInfo}*/>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row" className='bg-light w-lg-25'>Document</th>
                                        <td className='text-success'>
                                            <div>
                                                <div class="form-group files">
                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*,application/pdf" id="input-file-now-custom-2" className="file-upload"
                                                    dataHeight="500" onChange={(e) => {handleProductImageUpload(e)}}
                                                    required />
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className='text-success'>
                                            <Dragger {...props}>
                                                <p className="d-inline-block ant-upload-drag-icon mx-2">
                                                    <CloudUploadOutlined className='text-secondary' />
                                                </p>
                                                <p className="d-inline-block ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG/GIF (max. 400MB)</p>
                                            </Dragger>
                                        </td> */}
                                        {/* <td rowSpan={6}><button className='btn btn-primary'> Add More Docu</button></td> */}
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                        <td><input type="date" className="form-control" /></td>
                                        {/* <td><input type="date" className="form-control" /></td> */}
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                        <td> <input type="date" className="form-control" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-light w-lg-25'>Document Recieved Date</th>
                                        <td> <input type="date" className="form-control" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-light w-lg-25'>Status</th>
                                        <td>
                                            <select className="form-select" aria-label="Default select example">
                                            <option selected>Seclect Status</option>
                                                <option value="1">Pending</option>
                                                <option value="2">Pending for Discrepancy</option>
                                                <option value="3">Incomplete Document</option>
                                                <option value="4">Submitted</option>
                                                <option value="5">Approved</option>
                                                <option value="6">Rejected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                        <td>
                                            <input type="text" className='form-control' placeholder='Type here' />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>    
        {/* inner tab start here */}
    </React.Fragment>
    )
}

export default LiseRegs2;
const Spanning =  styled(FormLabel)`
color: red;
font-size:12px;
margin-left:2px;
`
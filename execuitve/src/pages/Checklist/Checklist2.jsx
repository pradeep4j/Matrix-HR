import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined } from '@ant-design/icons';
import { message, Upload,Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {categoryGet,stateGets,usersGet} from "../../store/actions/otherActions";
import $ from 'jquery';



const Checklist = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const catGet = useSelector((state) => state.catGet);
    const { loading, categoryInfo,error } = catGet;  
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    //console.log(stateInfo);
    const userGet = useSelector((state) => state.userGet);
    const { loadingu,usersInfo } = userGet;  
    console.log(usersInfo);
    const [category, setCategory] = useState();
    const [state, setState] = useState();
    const [users, setUser] = useState();
    const [categoryname, setCategoryname] = useState();
    const [act, setAct] = useState();
    const [rule, setRule] = useState();
    const [quotation, setQuotation] = useState();
    const [description, setDescription] = useState();

    $('#btnSave').click(function() {
        $('#exampleModal').modal('hide');
     });
     const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: false,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
            alert(status)
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
           // anAsyncFunction(info.file)
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    }; 
    const anAsyncFunction = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader?.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }
    useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
        dispatch(usersGet());
    },[dispatch]);
    useEffect(()=>{
        let categoryArr = [];
        if (typeof (categoryInfo) !== 'undefined' && categoryInfo?.length != 'undefined'
        && categoryInfo?.length > 0 ) {
            //alert(categoryInfo?.length);
            categoryInfo.map((item, index) => {
                categoryArr.push({
                key:index,
                id: item._id,
                name: item.name
              })
          });
        }
        setCategory(categoryArr);
      },[categoryInfo]);
    //   useEffect(()=>{
    //     let stateArr = [];
    //     if (typeof (stateInfo) !== 'undefined' && stateInfo?.length != 'undefined'
    //     && stateInfo?.length > 0 ) {
    //         //alert(categoryInfo?.length);
    //         stateInfo.map((item, index) => {
    //             stateArr.push({
    //             name: item.name
    //           })
    //       });
    //     }
    //     setState(stateArr);
    //   },[stateInfo]);
    //console.log(state);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(state);return;
        alert('now you have to do what you want!');
    }
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <ContentPasteIcon /> All Checklist</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><ContentPasteIcon /> Approve Checklist</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false"><ContentPasteIcon /> Create New</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill" data-bs-toggle="pill" data-bs-target="#reject-tab" type="button" role="tab" aria-controls="reject-tab" aria-selected="false"><ContentPasteIcon /> Reject Checklist</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect company</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example" name="state" onChange={(e)=>setState(e.target.value)}>
                                                <option value="">Seclect State</option>
                                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                <option value={item._id}>{item.name}</option>
                                            )};
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branches</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example" name="users" onChange={(e)=>setUser(e.target.value)}>
                                                <option value="">Seclect Excutive</option>
                                                {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                                <option value={item._id}>{item.firstName}{' '}{item.lastName}</option>
                                            )};
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                        <input type="date" class="form-control" placeholder="Date" />
                                        </div>
                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">state</th>
                                                                <th scope="col">Branch Name</th>
                                                                <th scope="col">Create Date</th>
                                                                <th scope="col">Approve Date</th>
                                                                <th scope="col">Excutive</th>
                                                                <th scope="col">View And Review Update</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Checklist
import React from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};




function Companies() {
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
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> Create New</button>
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
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Company</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Excutive</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <input type="date" className="form-control" id="" placeholder='start Date' />
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">Company</th>
                                                                <th scope="col">state</th>
                                                                <th scope="col">Branch Name</th>
                                                                <th scope="col">Total Branch</th>
                                                                <th scope="col">Excutive</th>
                                                                <th scope="col">OnBoard Date</th>
                                                                <th scope="col">Profile</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-success'>Complate And Apporove</span></td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Complate And Apporove</span></td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Complate And Apporove</span></td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Complate And Apporove</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-creat" data-bs-toggle="pill" data-bs-target="#pills-home-creat" type="button" role="tab" aria-controls="pills-home-creat" aria-selected="true"> View All </button>
                                                </li>
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab-creat-li" data-bs-toggle="pill" data-bs-target="#pills-profile-creat-li" type="button" role="tab" aria-controls="pills-profile-creat-li" aria-selected="false">Approve</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-home-creat" role="tabpanel" aria-labelledby="pills-home-tab-creat">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-9 mb-3">
                                                            <label for="" className="form-label">write a name of the company as per registration</label>
                                                            <input type="text" className='form-control' placeholder='write company name' />
                                                        </div>
                                                        <div className="col-md-12 col-lg-3">
                                                            <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                            <button className='btn btn-primary w-100'><AddCircleOutlineIcon /> Add More Branches</button>
                                                        </div>
                                                        <div className='row'>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="card p-3 position-relative">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped creat_tbl">
                                                                            <thead>
                                                                                <tr className='align-middle'>
                                                                                    <th>Sr .No</th>
                                                                                    <th>Title</th>
                                                                                    <th>Details</th>
                                                                                    <th>Upload</th>
                                                                                    <th>Remark</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td colSpan={4}>
                                                                                        <h4>A. General</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">write a name of the company as per registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Company" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Register Address of the Company</label>
                                                                                        <input type="text" class="form-control" placeholder="Address" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Type of the Company</label>
                                                                                        <input type="text" class="form-control" placeholder="Company" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <div class="dropdown">
                                                                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                Type of the Company
                                                                                            </button>
                                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                                <a class="dropdown-item" href="#">Action</a>
                                                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <div class="dropdown">
                                                                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                Select Category of the Company
                                                                                            </button>
                                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                                <a class="dropdown-item" href="#">Action</a>
                                                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <div class="dropdown">
                                                                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                Nature of the Business
                                                                                            </button>
                                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                                <a class="dropdown-item" href="#">Action</a>
                                                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12 col-md-12 mt-3'>
                                                                <button className='btn btn-primary w-100'>Save and submit</button>
                                                            </div>
                                                        </div>


                                                        <div className='row'>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="card p-3 position-relative">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped creat_tbl">
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td colSpan={4}>
                                                                                        <h4>B. Details of Registration</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Select Company registration</label>
                                                                                        <div class="dropdown">
                                                                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                Company Registration
                                                                                            </button>
                                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                                <a class="dropdown-item" href="#">Action</a>
                                                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">PAN Number</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">GST Number</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">PF Registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">ESIC Registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">LWF Registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Contract Labor Registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">TAN</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">TIN</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">MSME</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Professional Tax</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">BOCW</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Interstate Migrant Workmen</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12 col-md-12 mt-3'>
                                                                <button className='btn btn-primary w-100'>Save and submit</button>
                                                            </div>
                                                        </div>

                                                        <div className='row'>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="card p-3 position-relative">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped creat_tbl">
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td colSpan={4}>
                                                                                        <h4>C. Details of owners and Authorised Persion</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Select List of owners</label>
                                                                                        <div class="dropdown">
                                                                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                Company Registration
                                                                                            </button>
                                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                                <a class="dropdown-item" href="#">Action</a>
                                                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Name of the authorised Person to Apply for Licenses/Registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Designation of the authorised Person to Apply for Licenses/Registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Name of the Person who will be responsible for Labour Compliance Activities</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Designation of the Person who will be responsible for Labour Compliance Activities</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12 col-md-12 mt-3'>
                                                                <button className='btn btn-primary w-100'>Save and submit</button>
                                                            </div>
                                                        </div>

                                                        <div className='row'>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="card p-3 position-relative">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped creat_tbl">
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td colSpan={4}>
                                                                                        <h4>D. Contact Details</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Email</label>
                                                                                        <input type="email" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Phone Number</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Owner</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Authorised Person</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Authorised Manager</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Compliance Manager</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12 col-md-12 mt-3'>
                                                                <button className='btn btn-primary w-100'>Save and submit</button>
                                                            </div>
                                                        </div>

                                                        <div className='row'>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="card p-3 position-relative">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped creat_tbl">
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td colSpan={4}>
                                                                                        <h4>E. Details of the Labor Contractors</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Is Contract Labor Engaged(Yes/No)</label>
                                                                                        <button type="button" class="btn btn-light">YES</button>
                                                                                        <button type="button" class="btn btn-light">NO</button>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Date of Agreement and Validity</label>
                                                                                        <input type="date" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Number of Contractor</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Registration Details of the Contractor</label>
                                                                                        <input type="text" class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12 col-md-12 mt-3'>
                                                                <button className='btn btn-primary w-100'>Save and submit</button>
                                                            </div>
                                                        </div>

                                                        <div className='row'>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="card p-3 position-relative">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped creat_tbl">
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td colSpan={4}>
                                                                                        <h4>F. Details of the Branch's</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Branch Name/ID</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Select State</label>
                                                                                        <div class="dropdown">
                                                                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                Select State
                                                                                            </button>
                                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                                <a class="dropdown-item" href="#">Action</a>
                                                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Address</label>
                                                                                        <textarea class="form-control" placeholder="Type here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Is Contract Labor Engaged(Yes/No)</label>
                                                                                        <button type="button" class="btn btn-light">YES</button>
                                                                                        <button type="button" class="btn btn-light">NO</button>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Date of Opening</label>
                                                                                        <input type='date' class="form-control" placeholder="Date of Opening" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Number of Employees</label>
                                                                                        <textarea class="form-control" placeholder="Number of Employees" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Details of Licenses/Registration</label>
                                                                                        <textarea class="form-control" placeholder="Details of Licenses/Registration" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">Manager Details</label>
                                                                                        <textarea class="form-control" placeholder="Manager Details" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write here" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12 col-md-12 mt-3'>
                                                                <button className='btn btn-primary w-100'>Save and submit</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                    <button className='btn btn-dark'> <AddCircleOutlineIcon /> Add More</button>
                                </div>
                                <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3">
                                    <button className='btn btn-primary w-100'> Save And Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Companies
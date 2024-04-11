import React from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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


function Elibrary() {
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> View All </button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Approve</button>
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
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Palaceholder Name</th>
                                                                <th scope="col">Document</th>
                                                                <th scope="col">Excutive</th>
                                                                <th scope="col">Approve</th>
                                                                <th scope="col">Approve Create Date</th>
                                                                <th scope="col">View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>Document</span></td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-danger'>Pending</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>Document</span></td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>Approve</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>Document</span></td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>Approve</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>Document</span></td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>Approve</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>Document</span></td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>Approve</span></td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td><span className='text-success'>Document</span></td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>Approve</span></td>
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
                                                                                            <Dragger {...props}>
                                                                                                <p className="ant-upload-drag-icon">
                                                                                                    <CloudUploadOutlined className='text-secondary' />
                                                                                                </p>
                                                                                                <p className="ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG (max. 10MB)</p>
                                                                                            </Dragger>
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
                                    <form className="row g-3">
                                        <div className="col-md-12 col-lg-12">
                                            <label for="" className="form-label">Category</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Category</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Palaceholder Name</label>
                                            <input type="text" className="form-control" placeholder='write here' />
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Label</label>
                                            <input type="text" className="form-control" placeholder='write here' />
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Date</label>
                                            <input type="date" className="form-control" placeholder='write here' />
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <label for="" className="form-label">Write Description</label>
                                            <textarea class="form-control" placeholder='write here' id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <Dragger {...props} className=''>
                                                <p className="d-inline-block ant-upload-drag-icon mx-2">
                                                    <CloudUploadOutlined className='text-secondary' />
                                                </p>
                                                <p className="d-inline-block ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG/GIF (max. 400MB)</p>
                                            </Dragger>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-2 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-dark">Cancel</button>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-2 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Save And Approve</button>
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
import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { EditOutlined,DeleteOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {checklistCreate,stateGets,usersGet,categoryGet} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";

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
    //console.log(usersInfo);
    const searchInput = useRef(null);
    const [category, setCategory] = useState();
    const [state, setState] = useState();
    const [users, setUser] = useState();
    const [categoryname, setCategoryname] = useState();
    const [act, setAct] = useState();
    const [rule, setRule] = useState();
    const [quotation, setQuotation] = useState();
    const [description, setDescription] = useState();
    const [image,setImage] = useState('');
    const [document,setDocument] = useState('');
    const [frequency, setFrequency] = useState('');
    const [searchText, setSearchText] = useState('');
    const [dataSource, setDataSource] = useState();
    const [searchedColumn, setSearchedColumn] = useState('');
    const [risk, setRisk] = useState('');
    //const [loading, setLoading] = useState(false);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )

    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    // const onSetDate = (event) => {
    //     setDate(new Date(event.target.value))
    // }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: false,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
           // alert(status)
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
    useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
        dispatch(usersGet());
    },[dispatch]);
    useEffect(()=>{
        let categoryArr = [];
        if (typeof (categoryInfo) !== 'undefined' && categoryInfo?.length > 0 ) {
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
    const getBase64 = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            
       // reader.readAsDataURL(img);
            }
    };
    const handleChange = (info) => {
        // if (info.file.status === 'uploading') {
        // //  setLoading(true);
        //   return;
        // }
        //alert(info.file.status)
       //if (info.file.status === 'done') {
          // Get this url from response in real world.  //const maxFileSize = 250 * 1024 * 1024; // 250MB limit
          
        const file = info.file;
       // alert(file.type)
        const isLt2M = file.size / 1024 / 1024 < 2;
        const isJpgOrPngOrGifOrPDF = file.type ==='image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp' || file.type === 'application/pdf';
        if (isJpgOrPngOrGifOrPDF === false) {
           // alert('You can only upload JPG/JPEG/PNG/BMP/PDF file!');

          message.error('You can only upload JPG/PNG/GIF/PDF file!');
          return false;
        }
        else if (!isLt2M) {
          //  alert('File size must smaller than 2MB!');
          //  return;
          message.error('File size must smaller than 2MB!');
          return false;
        }
        else{
            const reader = new FileReader();
            if (info.file && JSON.stringify(info.file).indexOf('percent')==-1) {
            reader.readAsDataURL(info.file);
            reader.onloadend = () => {
                setImage(reader.result);
            }
            }
        }
       // }
    };  
    const handleChangeDocument = (info) => {
        // if (info.file.status === 'uploading') {
        // //  setLoading(true);
        //   return;
        // }
        //alert(info.file.status)
       //if (info.file.status === 'done') {
          // Get this url from response in real world.
        //  alert(JSON.stringify(info)); return;
        //const maxFileSize = 250 * 1024 * 1024; // 250MB limit
        const file = info.file;
        const isLt10M = file.size / 1024 / 1024 < 10;
        const isPDF = file.type === 'application/pdf';
        if (isPDF === false) {
          message.error('You can only upload PDF file!');
          return false;
        }
        else if (!isLt10M) {
            //alert('File size must smaller than 10MB!');
           // return;
            message.error('File size must smaller than 10MB!');
            return false;
        }
        else{
            const reader = new FileReader();
            if (info.file && JSON.stringify(info.file).indexOf('percent')==-1) {
            reader.readAsDataURL(info.file);
            reader.onloadend = () => {
                setDocument(reader.result);
            }
            }
        }
        
       // }
    };  
    
    const beforeUpload = (file) => {
        // const isLt10M = file.size < 10000000;
        // const isJpgOrPngOrGifOrPDF = file.type ==='image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp' || file.type === 'application/pdf';
        // if (isJpgOrPngOrGifOrPDF === false) {
        //     alert('You can only upload JPG/JPEG/PNG/BMP/PDF file!');
        //     return;
        //   //message.error('You can only upload JPG/PNG/GIF/PDF file!');
        // }
        // else if (!isLt10M) {
        //     alert('File size must smaller than 10MB!');
        //     return;
        //   //message.error('Image must smaller than 10MB!');
        // }
        // else{
        //     alert('asasaas')
        //     getBase64(file)
        // }
        // return isJpgOrPngOrGifOrPDF ;
        return false;
    };
    const beforeUploadDocument = (file) => {
        // const pdfonly = file.type === 'application/pdf' && file.url ===  getBase64(file);
        // if (pdfonly ===false) {
        //     alert('You can only upload PDF file!');
        //     return false;
        //  // message.error('You can only upload PDF file!');
        // }
        // const isLt10M = file.size < 10000000;
        // if (!isLt10M) {
        //      alert('File size must smaller than 10MB!');
        //   //message.error('File size must smaller than 10MB!');
        //   return false;
        // }
        // return pdfonly ;
        return false;
    };   
    const handleProductDocumentUpload= (e) => {
        const file = e.target.files[0];
    
        TransformFileDataDoc(file);
    };
    //reading image using The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const TransformFileDataDoc = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="application/pdf"){
            types = true; 
            alert('You can only upload PDF file!');
            return false;
        }
        else{
            types = false;
        }
        if(types===false){
            alert('sdsds')
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setDocument(reader.result);
                }
            }
        }
        else{
            alert('else')
            setDocument("");
        }
      }; 
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
    
        TransformFileData(file);
    };
    //reading image using The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const TransformFileData = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png"){
            types = true; 
            alert('You can only upload JPG/JPEG/PNG/BMP/PDF file!');
            return false;
        }
        else{
            types = false;
        }
        if(types===false){
            alert('sdsds')
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
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const postBody= {
            state:state,
            category:categoryname,
            act:act,
            rule:rule,
            quotation:quotation,
            description:description,
            image:image,
            document:document,
            risk:risk,
            date:date
        }
        dispatch(checklistCreate(postBody));
        setCategory('');
        setState('');
        setUser('');
        setAct('');
        setRule('');
        setQuotation('');
        setDescription('');
        setImage('');
        setDocument('');
        setFrequency('');
        setRisk('');
        setDate('');
       // document.getElementById("exampleModal").classList.remove("show", "d-block");
       // console.log(JSON.stringify(postBody)); //return;
       // document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
       // $('#btnSave').click(function() {
           // $('#exampleModal').modal('hide');
      //  });
          //  $(".modal-body form")[0].reset();
         //  $('#exampleModal form :input').val("");
          //  $('#image input[type="file"]').val('');
          //  $('#div_id input[type="text"]').val('');
       /* document.getElementById("exampleModal").classList.remove("show", "d-block");
        const modal = document.getElementById('exampleModal')
        modal.addEventListener('hidden.bs.modal', () => {
          document.getElementById('image').value = '';
          document.getElementById('document').value = '';
        });*/
        
           
    }
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1677ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    const columns = [
        {
          title: 'Sr. No.',
          dataIndex: 'key',
          key: 'key',
          width: '10%',
         // ...getColumnSearchProps('key'),
         // sorter: (a, b) => a.key.length - b.key.length,
         // sortDirections: ['descend', 'ascend']
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          width: '40%',
          ...getColumnSearchProps('category'),
          sorter: (a, b) => a.category.length - b.category.length,
          sortDirections: ['descend', 'ascend']
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
          width: '40%',
          ...getColumnSearchProps('state'),
          sorter: (a, b) => a.state.length - b.state.length,
          sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Branch Name',
            dataIndex: 'branchname',
            key: 'branchname',
            width: '40%',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.branchname.length - b.branchname.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Create Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: '40%',
            ...getColumnSearchProps('createdAt'),
            sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Approve Date',
            dataIndex: 'approvedate',
            key: 'approvedate',
            width: '40%',
            ...getColumnSearchProps('approvedate'),
            sorter: (a, b) => a.approvedate.length - b.approvedate.length,
            sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Executive',
            dataIndex: 'executive',
            key: 'executive',
            width: '40%',
            ...getColumnSearchProps('executive'),
            sorter: (a, b) => a.executive.length - b.executive.length,
            sortDirections: ['descend', 'ascend']
        },            
        // { 
        //     key: "action", 
        //     title: "Actions", 
        //     width: '40%',
        //     render: (record) => { 
        //         //console.log(JSON.stringify(record))
        //       return (
        //         <>
        //           <EditOutlined
        //             onClick={() => {
        //               onEditUser(record);
        //             }}
        //           />
        //           <DeleteOutlined
        //             onClick={(e) => {
        //               onDeleteUer(record);
        //             }}
        //             style={{ color: "red", marginLeft: 12 }}
        //           />
        //         </>
        //       );
        //     }, 
        // }, 
      ];
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
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
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
                                                <option value="">Seclect State</option>
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
                                            <input type="date" className="form-control" id="" placeholder='Date' />
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Save And Apporove</button>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-danger">Reject</button>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Edit</button>
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">state</th>
                                                                <th scope="col">Act</th>
                                                                <th scope="col">Rule</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Form</th>
                                                                <th scope="col">Document</th>
                                                                <th scope="col">Question</th>
                                                                <th scope="col">Description</th>
                                                                <th scope="col">Compliance</th>
                                                                <th scope="col">Risk</th>
                                                                <th scope="col">Consequences</th>
                                                                <th scope="col">Recurrence/Frequency</th>
                                                                <th scope="col">Due Date</th>
                                                                <th scope="col">Remark</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                <option value="">Select State</option>
                                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                <option value={item._id}>{item.name}</option>
                                            )};
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
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                    <Link className='text-white btn btn-primary text-decoration-none mx-2'> Edit <EditIcon fontSize='mediam' /> </Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                    <Link className='text-white btn btn-primary text-decoration-none mx-2'> Edit <EditIcon fontSize='mediam' /> </Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                    <Link className='text-white btn btn-primary text-decoration-none mx-2'> Edit <EditIcon fontSize='mediam' /> </Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                    <Link className='text-white btn btn-primary text-decoration-none mx-2'> Edit <EditIcon fontSize='mediam' /> </Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                    <Link className='text-white btn btn-primary text-decoration-none mx-2'> Edit <EditIcon fontSize='mediam' /> </Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                    <Link className='text-white btn btn-primary text-decoration-none mx-2'> Edit <EditIcon fontSize='mediam' /> </Link>
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
                                                <option value="">Seclect State</option>
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
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
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
                                            <input type="date" className="form-control" id="" placeholder='start Date' />
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Save And Apporove</button>
                                        </div>


                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 position-relative h-100">
                                            <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false }}  scroll={{ x: 400 }} />
                                                {/* <div className="table-responsive">
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
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> */}
                                                
    

                                                <Link className='btn btn-light border mb-2 text-decoration-none position-fixed bottom-0 start-50 translate-middle-x' data-bs-toggle="modal" data-bs-target="#exampleModal">  <AddCircleOutlineIcon /> Add More </Link>
                                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Checklist</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form class="row g-6" name="checklist" onSubmit={handleSubmit}>
                                                                    {/* <div class="col-md-6 col-6 col-lg-6" style={{ backgroundColor:'#0390fc' }}>
                                                                        <button className='btn btn-light border'> Sr. No :01</button>
                                                                        Add Checklist
                                                                    </div>
                                                                    <div class="col-md-6 col-6 col-lg-6 text-end">
                                                                        <button className='btn btn-light border'> 17/02/2024</button>
                                                                    </div> */}
                                                                    <div class="col-md-6 col-lg-6 mb-2">
                                                                        <label for="" class="form-label">State</label>
                                                                        {/* <input type="text" class="form-control" id="" placeholder='Hyderabad' onChange={(e)=>setState(e.target.value)} required/> */}
                                                                        <select className="form-select" aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                                                                                <option value="">Select State</option>
                                                                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                <option value={item.name}>{item.name}</option>
                                                                            )};
                                                                            </select>
                                                                    </div>
                                                                    <div class="col-md-6 col-lg-6 mb-2">
                                                                        <label for="cat" class="form-label">Category</label>
                                                                        <select className="form-select" aria-label="Default select example" id="cat" name="category" onChange={(e)=>setCategoryname(e.target.value)} value={categoryname} required>
                                                                            <option value="">Select category</option>
                                                                            {category != 'undefind' && category?.length > 0 && category.map(item => 
                                                                             <option value={item.name}>{item.name}</option>
                                                                            )};
                                                                            
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                        <label for="inputact" class="form-label">Act</label>
                                                                        <input type="text" class="form-control" id="inputact" onChange={(e)=>setAct(e.target.value)} value={act} placeholder="Type act name" required/>
                                                                    </div>
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                        <label for="inputAddress2" class="form-label">Rule *</label>
                                                                        <div class="input-group">
                                                                            <input type="text" id="inputrule" class="form-control" placeholder="Type Rule Name" aria-label="Type Rule Name" value={rule} onChange={(e)=>setRule(e.target.value)} aria-describedby="button-addon2" required/>
                                                                            <button class="btn btn-outline-primary" type="button" id="button-addon2">Add  <AddCircleOutlineIcon /></button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                        <label for="inputAddress" class="form-label">Quotation *</label>
                                                                        <input type="text" class="form-control" id="inputquotation" value={quotation} onChange={(e)=>setQuotation(e.target.value)} placeholder="type quotation" required/>
                                                                    </div>
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                        <label for="inputAddress" class="form-label">Description *</label>
                                                                        <input type="text" class="form-control" id="inputdescription" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="type description" required/>
                                                                    </div>
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2" >
                                                                        <label for="inputAddress" class="form-label">Form *</label>
                                                                        <div>
                                                                        <div class="form-group files">
                                                                            <input type="file" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                                                                            dataHeight="500" onChange={(e) => handleProductImageUpload(e)}
                                                                            required />
                                                                        </div>    
                                                                        
                                                                        {/* <Upload 
                                                                            accept="image/*"
                                                                            id="image"
                                                                            name="image" 
                                                                            multiple="false" 
                                                                            //action="/upload.do" 
                                                                            listType="picture"
                                                                          //  showUploadList={false}
                                                                            maxCount={1}
                                                                            response={false}   //this is what limits the number of files uploaded
                                                                            beforeUpload={beforeUpload}
                                                                            onChange={handleChange}
                                                                            action= 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                                                                            required
                                                                            >
                                                                                <Button icon={<UploadOutlined />}>
                                                                                    Click to upload or drag the Image here
                                                                                </Button>
                                                                            </Upload> */}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2" >
                                                                        <label for="inputAddress" class="form-label">Documents *</label>
                                                                        <div>
                                                                        <div class="form-group files">
                                                                            <input type="file" class="form-control" multiple="" accept="application/pdf" id="input-file-now-custom-2" className="file-upload"
                                                                            dataHeight="500" onChange={(e) => handleProductDocumentUpload(e)}
                                                                            required />
                                                                        </div> 
                                                                        {/* <Upload 
                                                                            accept="application/pdf"
                                                                            id="document"
                                                                            name="document" 
                                                                            multiple="false" 
                                                                            //action="/upload.do" 
                                                                           // listType="picture"
                                                                           // showUploadList={false}
                                                                            response={false}
                                                                            maxCount={1}    //this is what limits the number of files uploaded
                                                                            beforeUpload={beforeUploadDocument}
                                                                            onChange={handleChangeDocument}
                                                                            action= 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                                                                          
                                                                            >
                                                                                <Button icon={<UploadOutlined />}>
                                                                                    Click to upload or drag the Document here
                                                                                </Button>
                                                                            </Upload> */}
                                                                            
                                                                        </div>
                                                                    </div>                                                               
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                        <label for="" class="form-label">Recurrence/Frequency</label>
                                                                        <select className="form-select" aria-label="Default select example"  id="frequency" name="frequency" value={frequency} onChange={(e)=>setFrequency(e.target.value)} required>
                                                                                <option value="">Select Recurrence/Frequency</option>
                                                                                <option value="Fortnightly">Fortnightly</option>
                                                                                <option value="Monthly">Monthly</option>
                                                                                <option value="Quarterly">Quarterly</option>
                                                                                <option value="Half Yearly">Half Yearly</option>
                                                                            </select>
                                                                    </div>  
                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                        <label for="" class="form-label">Risk</label>
                                                                        <select className="form-select" id="risk" aria-label="Default select example" name="risk" value={risk} onChange={(e)=>setRisk(e.target.value)} required>
                                                                                <option value="">Select Risk</option>
                                                                                <option value="Low">Low</option>
                                                                                <option value="Medium">Medium</option>
                                                                                <option value="High">High</option>
                                                                                <option value="Very High">Very High</option>
                                                                            </select>
                                                                    </div> 

                                                                    <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                        <label for="" className="form-label">Date *</label>
                                                                        <input type="date" className="form-control" 
                                                                        // value={formik.values.dates} 
                                                                            id="dates"
                                                                            name="dates" 
                                                                            // onChange={formik.handleChange} 
                                                                            //value={date.toLocaleDateString('en-CA')} 
                                                                            value={date}
                                                                            onChange={(e)=>setDate(e.target.value)}
                                                                    />
                                                                </div>    
                                                                <div className="modal-footer justify-content-center">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                                    {/* <button type="button" className="btn btn-success">Edit</button> */}
                                                                    <button type="submit" id="btnSave" className="btn btn-primary" >Save</button>
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
                                <div className="tab-pane fade" id="reject-tab" role="tabpanel" aria-labelledby="reject-pill">
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
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>OLX</td>
                                                                <td>Uttar Pradesh</td>
                                                                <td>Branch Name</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td className='text-success'>09/01/2024</td>
                                                                <td>Rajesh</td>
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
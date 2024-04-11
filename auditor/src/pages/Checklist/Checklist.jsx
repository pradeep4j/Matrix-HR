import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {checklistGetAll,checklistGetonCreate,stateGets,branchGet,companyGet,checklistSaveandApprove,checklistCreateFilters,checklistGetApprove,checklistGetOnreject} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
import ChecklistPopup from './ChecklistPopup';
import Loading from '../../components/layout/Loading';
import AllChecklistTable from './AllChecklistTable';
import ChecklistApprove from './ChecklistApprove';
import RejectedChecklist from './RejectedChecklist';
const Checklist = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    //console.log(stateInfo);
    const userGet = useSelector((state) => state.userGet);
    const { loadingu,usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    const checklistGet = useSelector((state) => state.checklistGet);
    const { checklistGetInfo } = checklistGet;
    const checklist = useSelector((state) => state.checklist);
    const { loadingChecklist,checklistInfo } = checklist; 
    const getCheckOnCreate = useSelector((state) => state.getCheckOnCreate);
    const { loadingoncreate,checklistInfoOnCreate } = getCheckOnCreate; 
     console.log(checklistInfoOnCreate);
    //console.log(checklistInfoOnCreate);
    //console.log(usersInfo);
    const filterCreateChecklist = useSelector((state) => state.filterCreateChecklist);
    const { loadingcreatefilter,checklistInfoFilter } = filterCreateChecklist; 
    const searchInput = useRef(null);
    const [open, setOpen] = useState(false);
    const [openPopup, setOpenPopup] = useState(false); 
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [state, setState] = useState('');
    const [company, setCompany] = useState('');
    const [branch,setBranch] = useState('');
    const [dateupdate, setDateUpdate] = useState('');
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    //const [loading, setLoading] = useState(false); 
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )

    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    // const onSetDate = (event) => {
    //     setDate(new Date(event.target.value))
    // }
    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Checklist');
        setModalWidth('400px');
    }
    const openInPopupForAdd = () => {
        setRecordForEdit();
        setOpenPopup(true);
        setPageTitle('Add Checklist');
        setModalWidth('400px');
    }
    const addOrEdit = (e) => {
        //alert(fromdate+'='+todate+'='+userId+'='+status)
        relodreport();
        setRecordForEdit(null);
      //  setPageTitle('Add Checklist');
        setOpenPopup(false);
    }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    
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
    const relodreport = async () => {
        setTimeout(() => {
            dispatch(checklistGetonCreate());
        }, 5000);
        
    }   
    useEffect(() => {
        dispatch(stateGets());
        dispatch(branchGet());
        dispatch(companyGet());
        dispatch(checklistGetonCreate());
        dispatch(checklistGetAll());
        dispatch(checklistGetApprove());
        dispatch(checklistGetOnreject());
        
    },[dispatch])
    useEffect(() => {
        //  alert('2')
        let checklistOnCreateArr = [];
          if (typeof (checklistInfoOnCreate) !== 'undefined' && checklistInfoOnCreate?.length > 0 ) {
              //alert(categoryInfo?.length);
              checklistInfoOnCreate.map((item, index) => {
                checklistOnCreateArr.push({
                  key:index+1,
                  id: item._id,
                  state:item.state,
                  compliance: item.compliance,
                  rule:<div className='new-line'>{item.rule}</div>,
                  category:item.category,
                  question:<div className='new-line'>{item.question}</div>,
                  description:<div className='new-line'>{item.description}</div>,
                  image:<a href={item.image} target="_blank">Form</a>,
                  documents:<a href={item.documents} target="_blank">Document</a>,
                  frequency:item.frequency,
                  branchname:item.branchname,
                  risk:item.risk,
                  created_at:formatDate(item.created_at),
                  approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),
                  executive:'Admin',
                })
            });
          }
          setDataSource(checklistOnCreateArr);
      },[checklistInfoOnCreate])
      const resetForm = () => {
        // alert(state)
         setState('');
         setCompany('');
         setDateUpdate('');
         setBranch('');
    }
    useEffect(() => {
         resetForm();
    },[checklistInfoOnCreate])
      useEffect(() => {
        //  alert('2')
        let checklistOnCreateFilterArr = [];
          if (typeof (checklistInfoFilter) !== 'undefined' && checklistInfoFilter?.length > 0 ) {
              //alert(categoryInfo?.length);
              checklistInfoFilter.map((item, index) => {
                checklistOnCreateFilterArr.push({
                  key:index+1,
                  id: item._id,
                  state:item.state,
                  compliance: item.compliance,
                  rule:<div className='new-line'>{item.rule}</div>,
                  category:item.category,
                  question:<div className='new-line'>{item.question}</div>,
                  description:<div className='new-line'>{item.description}</div>,
                  image:<a href={item.image} target="_blank">Form</a>,
                  documents:<a href={item.documents} target="_blank">Document</a>,
                  frequency:item.frequency,
                  branchname:item.branchname,
                  risk:item.risk,
                  created_at:formatDate(item.created_at),
                  approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),
                  executive:'Admin',
                })
            });
          }
          setDataSource(checklistOnCreateFilterArr);
      },[checklistInfoFilter])
      const formatDate = (currentDate) => {
        const dates = new Date(currentDate);
        const year = dates.getFullYear();
        const month = String(dates.getMonth() + 1).padStart(2, '0');
        const date = String(dates.getDate()).padStart(2, '0');
        const hours = String(dates.getHours()).padStart(2, '0');
        const minutes = String(dates.getMinutes()).padStart(2, '0');
        const seconds = String(dates.getSeconds()).padStart(2, '0');
  
        const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        return (formattedDateTime);
      }
    const columns = [
        {
          title: 'Sr. No.',
          dataIndex: 'key',
          key: 'key',
          width: 70,
         // ...getColumnSearchProps('key'),
         // sorter: (a, b) => a.key.length - b.key.length,
         // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: 150,
            ...getColumnSearchProps('state'),
            sorter: (a, b) => a.state.length - b.state.length,
            sortDirections: ['descend', 'ascend']
          },
        // {
        //   title: 'Category',
        //   dataIndex: 'category',
        //   key: 'category',
        //   width: '40%',
        //   ...getColumnSearchProps('category'),
        //   sorter: (a, b) => a.category.length - b.category.length,
        //   sortDirections: ['descend', 'ascend']
        // },
        {
          title: 'Act',
          dataIndex: 'compliance',
          key: 'compliance',
          width: 100,
        //   ...getColumnSearchProps('act'),
        //   sorter: (a, b) => a.act.length - b.act.length,
        //   sortDirections: ['descend', 'ascend']
        },
        {
            title: <div style={{ textAlign: 'center' }}>Rule</div>,
            dataIndex: 'rule',
            key: 'rule',
            width: 300,
            ...getColumnSearchProps('rule'),
            sorter: (a, b) => a.rule.length - b.rule.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: 100,
            ...getColumnSearchProps('category'),
            sorter: (a, b) => a.category.length - b.category.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: <div style={{ textAlign: 'center' }}>Question</div>,
            dataIndex: 'question',
            key: 'question',
            width: 300,
            // ...getColumnSearchProps('question'),
            // sorter: (a, b) => a.question.length - b.question.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
          title: <div style={{ textAlign: 'center' }}>Description</div>,
            dataIndex: 'description',
            key: 'description',
            width: 300,
            // ...getColumnSearchProps('question'),
            // sorter: (a, b) => a.question.length - b.question.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Form',
            dataIndex: 'image',
            key: 'image',
            width: 100,
        //    ...getColumnSearchProps('image'),
         //   sorter: (a, b) => a.image.length - b.image.length,
         //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Document',
            dataIndex: 'documents',
            key: 'documents',
            width: 100,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Branch Name',
            dataIndex: 'branchname',
            key: 'branchname',
            width: 70,
            // ...getColumnSearchProps('branchname'),
            // sorter: (a, b) => a.branchname.length - b.branchname.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Create Date',
            dataIndex: 'created_at',
            key: 'createdAt',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Recurrence',
            dataIndex: 'frequency',
            key: 'frequency',
            width: 70,
           // ...getColumnSearchProps('frequency'),
           // sorter: (a, b) => a.frequency.length - b.frequency.length,
           // sortDirections: ['descend', 'ascend']
        },    
        {
            title: 'Approve Date',
            dataIndex: 'approvedate',
            key: 'approvedate',
            width: 100,
            // ...getColumnSearchProps('approvedate'),
            // sorter: (a, b) => a.approvedate.length - b.approvedate.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Executive',
            dataIndex: 'executive',
            key: 'executive',
            width: 100,
            // ...getColumnSearchProps('executive'),
            // sorter: (a, b) => a.executive.length - b.executive.length,
            // sortDirections: ['descend', 'ascend']
        },            
        {
            title: 'Risk',
            dataIndex: 'risk',
            key: 'risk',
            width: 100,
            // ...getColumnSearchProps('executive'),
            sorter: (a, b) => a.risk.length - b.risk.length,
            sortDirections: ['descend', 'ascend']
        }, 
        { 
            key: "action", 
            title: "Actions", 
            width: 100,
            render: (record) => { 
                //console.log(JSON.stringify(record))
              return (
                <>
                  <Link className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => openInPopupForUpdate(record)}> Edit <EditIcon fontSize='mediam' /> </Link>
                  {/* <DeleteOutlined
                    onClick={(e) => {
                      onDeleteUer(record);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                  /> */}
                </>
              );
            }, 
        }, 
    ];
    const calling = () =>{
        setTimeout(() => {
            dispatch(checklistGetAll());
        }, 2000);
    }
    const callingcreate = () => {
        setTimeout(() => {
            dispatch(checklistGetonCreate());
        }, 2000);
    }
    const callingapprove = () => {
        // alert('asas')
        setTimeout(() => {
            dispatch(checklistGetApprove());
        }, 2000);
    } 
    const callingrejected = () => {
        setTimeout(() => {
            dispatch(checklistGetOnreject());
        }, 2000);
    }
    const saveandapprove = () => {
        const postBody = {
            approvedate: defaultDate,
            status:1
        }
        dispatch(checklistSaveandApprove(postBody));//relodreport
        relodreport();
    }
    const filter = () => {
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        const elementdate = myElementRefDate.current;
        const postBody = {
            created_at:elementdate.value,
            state:elementstate.value,
            company:elementcompany.value,
            branch:elementbranch.value
        }
        dispatch(checklistCreateFilters(postBody));
    }  
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={calling}> <ContentPasteIcon /> All Checklist</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={callingapprove}><ContentPasteIcon /> Approve Checklist</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false" onClick={callingcreate}><ContentPasteIcon /> Create New</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill" data-bs-toggle="pill" data-bs-target="#reject-tab" type="button" role="tab" aria-controls="reject-tab" aria-selected="false" onClick={callingrejected}><ContentPasteIcon /> Reject Checklist</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <ChecklistApprove />
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <AllChecklistTable />
                                </div>
                                
                                <div className="tab-pane fade" id="creative-pill" role="tabpanel" aria-labelledby="creative-tab">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example"         id="companies" name="company" ref={myElementRefCompany} value={company} onChange={(e)=>{setCompany(e.target.value);filter()}} required>
                                                    <option value="">Select Company</option>
                                                {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                                                    <option value={item._id}>{item.companyname}</option>
                                                )};
                                            </select>
                                        </div>   
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                                <select className="form-select" aria-label="Default select example"  id="states" ref={myElementRefState} value={state} name="state" onChange={(e)=>{setState(e.target.value);filter();}} >
                                                        <option value="">Select State</option> {/*onBlur={handlestateChange}*/}
                                                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                        <option value={item._id}>{item.name}</option>
                                                    )};
                                                </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example" id="branchs" name="branch" ref={myElementRefBranch} onChange={(e)=>{setBranch(e.target.value);filter()}} value={branch} required>
                                            <option value="">Select Branch</option>
                                            {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                                <option value={item._id}>{item.name}</option>
                                            )};
                                            
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <input type="date" id="dating" ref={myElementRefDate} className="form-control" value={dateupdate} onChange={(e) => {setDateUpdate(e.target.value);filter();}} />
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary" onClick={saveandapprove}>Save And Approve</button>
                                        </div>
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button className="w-100 btn btn-primary" onClick={() => branch()}>   Add Branch </button>
                                        </div> */}
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button className="w-100 btn btn-primary" onClick={() => company()}>   Add Company </button>
                                        </div> */}
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 position-relative h-100">
                                            {loadingoncreate && <Loading />}    
                                            <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false ,position: ["bottomCenter"],}} scroll={{ x: 3500 }} sticky={true}/>
                                                <button className='btn btn-light border mb-2 text-decoration-none  bottom-10 start-30 ' style={{ width:'150px' }} onClick={() => openInPopupForAdd()}>  <AddCircleOutlineIcon /> Add More </button>
                                                <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                                                    {(openPopup) && <ChecklistPopup addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                                                </Popup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reject-tab" role="tabpanel" aria-labelledby="reject-pill">
                                    <div className="row">
                                        <RejectedChecklist />
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
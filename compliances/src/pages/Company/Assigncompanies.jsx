import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Checkbox} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {stateGets,branchGet,companyTableGet,auditGetDataAll,assignGetOnCreate} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
// import ChecklistPopup from './ChecklistPopup';
import Loading from '../../components/layout/Loading';
import AssignTable from './AssignTable';
// import AuditChecklistTable from './AuditChecklistTable';
import Checkilist from '../Checklist/Checklist'
import AssignPopup from './AssignPopup'
import checklist from '../../../src/checklist.jpg'
const Assigncompanies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [name, setName] = useState(false);
    const [openPopup, setOpenPopup] = useState(false); 
    const [pageTitle, setPageTitle] = useState('');
    const [dateupdate, setDateUpdate] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [showTable1, setShowTable1] = useState(true);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [state, setState] = useState('');
    const [company, setCompany] = useState('');
    const [branch,setBranch] = useState('');
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    const myElementRefTab1 = useRef(null);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    let selectedRowIds = [];
    const userGet = useSelector((state) => state.userGet);
    const { loadingu,usersInfo } = userGet; 
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    useEffect(() => {
        const saved = localStorage.getItem("userInfo");
        if(saved){
            const initialValue = JSON.parse(saved);
            if(initialValue)
            {
            setName(initialValue.name);
            }
        }
      },[usersInfo]);
      const openInPopupForUpdate = (item) => {
          setRecordForEdit(item);
          setOpenPopup(true);
          setPageTitle('Edit Assign Company To Executive');
          setModalWidth('400px');
      }
      const relodreport = async () => {
        setTimeout(() => {
            dispatch(assignGetOnCreate());
        }, 5000);
        
    }   
      const openInPopupForAdd = () => {
          setRecordForEdit();
          setOpenPopup(true);
          setPageTitle('Add Assign Company To Executive');
          setModalWidth('400px');
      }
      const addOrEdit = (e) => {
          //alert(fromdate+'='+todate+'='+userId+'='+status)
          relodreport();
          setRecordForEdit(null);
        //  setPageTitle('Add Checklist');
          setOpenPopup(false);
      }
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    // const getCompney = useSelector((state) => state.getCompney);
    // const { companyInfo } = getCompney; 
    const createOnAudit = useSelector((state) => state.createOnAudit);
    const { auditorCreateInfo } = createOnAudit;
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor; 
    const onCreateChecklistAudit = useSelector((state) => state.onCreateChecklistAudit);
    const { loadingoncreate,auditorChecklistInfoOncreate } = onCreateChecklistAudit; 
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    useEffect(()=>{
        dispatch(stateGets());
        const elementcompanybranch = myElementRefCompany.current;
        const postBody = {
          id : elementcompanybranch.value
        }
        if (elementcompanybranch) {
          dispatch(branchGet(postBody));
        }
        dispatch(companyTableGet());
        dispatch(auditGetDataAll())
        dispatch(assignGetOnCreate());
    },[dispatch]);
    const getBbranch = (company) => {
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
       id : elementcompanybranch.value
     }
      dispatch(branchGet(postBody));
    }
    useEffect(()=>{
        setState('');
        setCompany('');
        setBranch('');
        setSelectedRows([])
       
     
    },[auditorChecklistInfoOncreate,stateInfo,branchInfo,auditorCreateInfo]);
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const elementtitle = myElementRefTitle.current;
    //     const elementcompany = myElementRefCompany.current;
    //     const elementstate = myElementRefState.current;
    //     const elementbranch = myElementRefBranch.current;
    //     const elementsdate = myElementRefStartdate.current;
    //     const elementedate =  myElementRefEnddate.current;
    //     const elementrisk = myElementRefRisk.current;
    //     const elementauditstatus = myElementRefAuditStatus.current;
    //     const elementscope =  myElementRefScope.current;
    //     const elementauditor =  myElementRefAuditor.current;
    //     const elementbauditor =  myElementRefBriefAuditor.current;
    //     let i=true;
    //     //alert(typeof(title))
    //     if(title === '')
    //     {
    //         // alert(elementtitle)
    //         elementtitle.focus();
    //         elementtitle.innerText='Please select a Title!';
    //         i=false;
    //     }
    //     else{
    //         // elementtitle.style.display='none';
    //         elementtitle.innerText='';
    //     }
    //     // alert(i+'1')
    //     if(company ==='')
    //     {
    //         elementcompany.focus();
    //         elementcompany.innerText='Please select a Company!';
    //         i=false;
    //     }
    //     else{
    //         // elementcompany.style.display='none';
    //         elementcompany.innerText='';
    //     }
    //     // alert(i+'2')
    //     if(state === '')
    //     {
    //         elementstate.focus();
    //         elementstate.innerText='Please select a State!';
    //         i=false;
    //     }
    //     else{
    //         // elementstate.style.display='none';
    //         elementstate.innerText='';
    //     }
    //     // alert(i+'3')
    //     if( branch === '')
    //     {
    //         elementbranch.focus();
    //         elementbranch.innerText='Please select a Branch!';
    //         i=false;
    //     }
    //     else{
    //         // elementbranch.style.display='none';
    //         elementbranch.innerText='';
    //     }
    //     // alert(i+'4')
    //     if(startDate === '')
    //     {
    //         elementsdate.focus();
    //         elementsdate.innerText='Please select a Start Date!';
    //         i=false;
    //     }
    //     else{
    //         // elementsdate.style.display='none';
    //         elementsdate.innerText='';
    //     }
    //     // alert(i+'5')
    //     if(endDate === '' )
    //     {
    //         elementedate.focus();
    //         elementedate.innerText='Please select a End date!';
    //         i=false;
    //     }
    //     else{
    //         elementedate.innerText='';
    //         // elementedate.style.display='none';
    //     }
    //     // alert(i+'6')
    //     if(risk === '' )
    //     {
    //         elementrisk.focus();
    //         elementrisk.innerText='Please select a Risk!';
    //         i=false;
    //     }
    //     else{
    //         // elementrisk.style.display='none';
    //         elementrisk.innerText='';
    //     } 
    //     // alert(i+'7')
    //     if(auditstatus === '' )
    //     {
    //         elementauditstatus.focus();
    //         elementauditstatus.innerText='Please select a Audit Status!';
    //         i=false;
    //     }
    //     else{
    //         // elementauditstatus.style.display='none';
    //         elementauditstatus.innerText='';
    //     }
    //     // alert(i+'8')
    //     if(scope === ''  )
    //     {
    //         elementscope.focus();
    //         elementscope.innerText='Please select a Scope!';
    //         i=false;
    //     }
    //     else{
    //         // elementscope.style.display='none';
    //         elementscope.innerText='';
    //     }
    //     // alert(i+'9')
    //     if(auditor === '' )
    //     {
    //         elementauditor.focus();
    //         elementauditor.innerText='Please select an Auditor!';
    //         i=false;
    //     }
    //     else{
    //         // elementauditor.style.display='none';
    //         elementauditor.innerText='';
    //     }
    //     // alert(i+'10')
    //     if(briefauditor === '')
    //     {
    //         elementbauditor.focus();
    //         elementbauditor.innerText='Please select a brief of Auditor!';
    //         i=false;
    //     }
    //     else{
    //         // elementbauditor.style.display='none';
    //         elementbauditor.innerText='';
    //     }
    //     // alert(i+'11')
    //     const selectedRowIds = selectedRows.map((row) => row.id);
    //     const elementtable = myElementRefTable.current;
    //     const elementtableinput = myElementRefTableInput.current;
        
    //     if(elementtable.style.display === 'none')
    //     {
    //         // alert(elementtableinput)
    //         elementtableinput.innerText='Please click on Select Checklist!';
    //         i=false;
    //     } 
    //     else if (selectedRows.length === 0) {
    //         // Prompt user to select at least one item
    //         Modal.error({
    //           title: 'Error',
    //           content: 'Please click Add Button or select at least one checklist from list.',
    //         });
    //         i=false;
    //     } 
    //     // alert(i)
    //     if(i===true)
    //     {
    //         // showtable();
    //         // alert('start')
    //         const formData = new FormData();
    //         formData.append("title", title);
    //         formData.append("state", state);
    //         formData.append("company", company);
    //         formData.append("branch", branch);
    //         formData.append("start_date", startDate);
    //         formData.append("end_date", endDate);
    //         formData.append("executive", '659d4f2609c9923c9e7b8f72');
    //         formData.append("auditor", auditor);
    //         formData.append("scope", scope);
    //         formData.append("briefauditor", briefauditor);
    //         formData.append("checkboxlist", selectedRowIds);
    //         formData.append("risk", risk);
    //         formData.append("auditstatus", auditstatus);
    //         // alert('end')
    //         dispatch(auditOnCreate(formData));
    //         // alert('after')
    //         setAuditor('');
    //         setTitle('');
    //         setStartDate('');
    //         setEndDate('');
    //         setScope('');
    //         setBriefAuditor('');
    //         setState('');
    //         setCompany('');
    //         setBranch('');
    //         setRisk('');
    //         setAuditStatus('');
    //         setSelectedRows([])
    //         const elementtitle = myElementRefTitle.current;
    //         const elementcompany = myElementRefCompany.current;
    //         const elementstate = myElementRefState.current;
    //         const elementbranch = myElementRefBranch.current;
    //         const elementsdate = myElementRefStartdate.current;
    //         const elementedate =  myElementRefEnddate.current;
    //         const elementrisk = myElementRefRisk.current;
    //         const elementauditstatus = myElementRefAuditStatus.current;
    //         const elementscope =  myElementRefScope.current;
    //         const elementauditor =  myElementRefAuditor.current;
    //         const elementbauditor =  myElementRefBriefAuditor.current;
    //         // alert(typeof(myElementRefTable))
    //         if(typeof(myElementRefTable) === 'object') {
    //             elementtable.style.display = 'none';
    //         }
    //         const elementtableinput = myElementRefTableInput.current;
    //         if(elementtable)
    //         {
    //            elementtableinput.innerText='';
    //         } 
            
    //         elementtitle.innerText='';
    //         elementcompany.innerText='';
    //         elementstate.innerText='';
    //         elementbranch.innerText='';
    //         elementsdate.innerText='';
    //         elementedate.innerText='';  
    //         elementrisk.innerText='';
    //         elementauditstatus.innerText='';
    //         elementscope.innerText='';
    //         elementauditor.innerText='';
    //         elementbauditor.innerText='';
    //         unsetRefValue(elementtitle);
    //         unsetRefValue(elementcompany);
    //         unsetRefValue(elementstate);
    //         unsetRefValue(elementbranch);
    //         unsetRefValue(elementrisk);
    //         unsetRefValue(elementauditstatus);
    //         unsetRefValue(elementauditor);
    //         unsetRefValue(elementbauditor);
    //         unsetRefValue(elementtableinput);
    //         unsetRefValue(elementtable);
    //         // setTimeout(() => {
    //         //     navigate(0);
    //         // }, 5000);
            
    //         const elementTab1 = myElementRefTab1.current;
    //         if (elementTab1) {
    //             elementTab1.click();
    //         }
    //     }
        
    //     // console.log('Selected Row IDs:', selectedRowIds);
    //     // dispatch(auditOnCreate())
    // }   
    const unsetRefValue = (ref) => {
        ref = null;
    };
    const viewall = () => {
        setTimeout(() => {
            dispatch(auditGetDataAll());
        }, 2000);
    }
    const createnew = () => {
        setTimeout(() => {
            dispatch(assignGetOnCreate());
        }, 2000);
    }
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    const filter = () => {
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        // const elementdate = myElementRefDate.current;
        const postBody = {
            // created_at:elementdate.value,
            state:elementstate.value,
            company:elementcompany.value,
            branch:elementbranch.value
        }
        // dispatch(checklistCreateFilters(postBody));
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
    const columns1 = [
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
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: 100,
            // ...getColumnSearchProps('company'),
            sorter: (a, b) => a.company.length - b.company.length,
            sortDirections: ['descend', 'ascend']
          },
          {
              title: 'State',
              dataIndex: 'state',
              key: 'state',
              width: 100,
              // ...getColumnSearchProps('state'),
              sorter: (a, b) => a.state.length - b.state.length,
              sortDirections: ['descend', 'ascend']
            },
          {
              title: 'Branch Name',
              dataIndex: 'branchname',
              key: 'branchname',
              width: 70,
              // ...getColumnSearchProps('branchname'),
              sorter: (a, b) => a.branchname.length - b.branchname.length,
              sortDirections: ['descend', 'ascend']
          },
          {
              title: 'Executive',
              dataIndex: 'executive',
              key: 'executive',
              width: 100,
              // ...getColumnSearchProps('executive'),
              sorter: (a, b) => a.executive.length - b.executive.length,
              sortDirections: ['descend', 'ascend']
          },            
          {
            title: 'Assigned Date',
            dataIndex: 'assigndate',
            key: 'assigndate',
            width: 100,
            // ...getColumnSearchProps('approvedate'),
            // sorter: (a, b) => a.approvedate.length - b.approvedate.length,
            // sortDirections: ['descend', 'ascend']
          }, 
          // { 
          //     key: "action", 
          //     title: "Actions", 
          //     width: 100,
          //     render: (record) => { 
          //         //console.log(JSON.stringify(record))
          //       return (
          //         <>
          //           <Link className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => openInPopupForUpdate(record)}> Edit <EditIcon fontSize='mediam' /> </Link>
          //           {/* <DeleteOutlined
          //             onClick={(e) => {
          //               onDeleteUer(record);
          //             }}
          //             style={{ color: "red", marginLeft: 12 }}
          //           /> */}
          //         </>
          //       );
          //     }, 
          // }, 
      ];
      const saveandapprove = () => {
        const postBody = {
            approvedate: defaultDate,
            status:1,
            id:selectedRowIds
        }
        // dispatch(checklistSaveandApprove(postBody));//relodreport
        relodreport();
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='card'>
                        <div className='card-body'>
                        <ul className="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                            <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                <button className="nav-link w-100 active" id="assign-home-tab" data-bs-toggle="pill" data-bs-target="#assign-home" ref={myElementRefTab1} type="button" role="tab" aria-controls="assign-home" aria-selected="true" onClick={viewall}>View All</button>
                            </li>
                            <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                <button className="nav-link w-100" id="assign-profile-tab" data-bs-toggle="pill" data-bs-target="#assign-profile" type="button" role="tab" aria-controls="assign-profile" aria-selected="false" onClick={createnew}>Assign</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="assign-home" role="tabpanel" aria-labelledby="assign-home-tab">
                                <AssignTable />
                            </div>
                        <div className="tab-pane fade" id="assign-profile" role="tabpanel" aria-labelledby="assign-profile-tab">
                            <div className="row">
                                
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                          <select className="form-select" aria-label="Default select example"     id="companies" name="company" ref={myElementRefCompany} value={company} onChange={(e)=>{setCompany(e.target.value);filter();getBbranch(e.target.value)}} required>
                                                    <option value="">Select Company</option>
                                                    {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
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
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary" onClick={saveandapprove}>Save And Approve</button>
                                        </div> */}
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button className="w-100 btn btn-primary" onClick={() => branch()}>   Add Branch </button>
                                        </div> */}
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button className="w-100 btn btn-primary" onClick={() => company()}>   Add Company </button>
                                        </div> */}
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 position-relative h-100">
                                            {loadingoncreate && <Loading />}    
                                            {/* {showTable1 ? (
                                                  <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 1250 }} sticky={true}/>
                                              ) : ( */}
                                                  <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 3500 }} sticky={true}/>
                                              {/* )}  */}
                                                <button className='btn btn-light border mb-2 text-decoration-none  bottom-10 start-30 ' style={{ width:'150px' }} onClick={() => openInPopupForAdd()}>  <AddCircleOutlineIcon /> Add More </button>
                                                <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                                                    {(openPopup) && <AssignPopup addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                                                </Popup>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* <form name="save" onSubmit={saveandapprove}> */}
                      <button type="submit" style={{ width:'100%',marginBottom:'10px' }} className="w-80 btn btn-primary" onClick={saveandapprove}>Save And Approve</button>
                      {/* </div> */}
                    {/* </form> */}
            </div>
        </React.Fragment>
    )
}

export default Assigncompanies;
// const Spanning =  styled(FormLabel)`
// color: red;
// font-size:13px;
// `
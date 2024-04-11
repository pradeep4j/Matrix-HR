import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import ChecklistPopup from './ChecklistPopup';
import Popup from "../../components/Popup";
import {checklistGetApprove,checklistsReject,usersGet,stateGets,branchGet,companyGet,checklistsApproveFilter,checklistSaveandApprove} from "../../store/actions/otherActions";
import Loading from '../../components/layout/Loading';

const ChecklistApprove = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [reason, setReason] = useState('');
    const [showTable1, setShowTable1] = useState(true);
    const [state, setState] = useState('');
    const [executive, setUser] = useState('');
    const [company, setCompany] = useState('');
    const [branch,setBranch] = useState('');
    const [approveIds,setApproveIds] = useState('');
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    const myElementRefUser = useRef(null);
    //const [loading, setLoading] = useState(false);
    let defaultDate = new Date()
    // defaultDate.setDate(defaultDate.getDate() )
    //alert(clickvalue)
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    const getChecklistApprove = useSelector((state) => state.getChecklistApprove);
    const { loadingApprove,checklistInfoApprove } = getChecklistApprove; 
    const filterApproveChecklist = useSelector((state) => state.filterApproveChecklist);
    const { loadingapp,checklistApproveFilter } = filterApproveChecklist; 
    const complianceByIdUpdate = useSelector((state) => state.complianceByIdUpdate);
    const { loadingu,complianceInfoUpdateId } = complianceByIdUpdate; 
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
   // console.log(checklistInfoApprove)
    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Checklist');
        setModalWidth('400px');
    }
    // const openInPopupForAdd = () => {
    //     setRecordForEdit();
    //     setOpenPopup(true);
    //     setPageTitle('Add Compliance');
    //     setModalWidth('400px');
    // }
    const addOrEdit = (values) => {
        // alert(values)
        // if(values === true)
        // {
          relodreport();
        //}
        setRecordForEdit(null);
      //  setPageTitle('Add Checklist');
        setOpenPopup(false);
    }
    const relodreport = async () => {
        setTimeout(() => {
            dispatch(checklistGetApprove());
        }, 3000);
        
    }  
    useEffect(() => {
        // setShowTable1(showTable1);
        dispatch(checklistGetApprove());
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(branchGet());
        dispatch(companyGet());
    },[dispatch])
    useEffect(() => {
      
      let complianceArrApprove = [];
      let complianceArrForApprovePageIds = [];
        if (typeof (checklistInfoApprove) !== 'undefined' && checklistInfoApprove?.length > 0 ) {
            //alert(categoryInfo?.length);
            checklistInfoApprove.map((item, index) => {
                complianceArrForApprovePageIds.push(item._id);
                complianceArrApprove.push({
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
        setApproveIds(complianceArrForApprovePageIds)
        setDataSource(complianceArrApprove);
    },[checklistInfoApprove])
    console.log(approveIds);///important to discuss with shivam
    const resetForm = () => {
        // alert(state)
         setState('');
         setDate('');
         setUser('');
    };
    useEffect(() => {
        resetForm();
    },[checklistInfoApprove])
    useEffect(() => {
        //  alert('2')
        let checklistApproveFilterArr = [];
          if (typeof (checklistApproveFilter) !== 'undefined' && checklistApproveFilter?.length > 0 ) {
              //alert(categoryInfo?.length);
              checklistApproveFilter.map((item, index) => {
                checklistApproveFilterArr.push({
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
          setDataSource(checklistApproveFilterArr);
    },[checklistApproveFilter]);
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
  
    const toggleTables = () =>{
        setShowTable1(!showTable1)
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
    // const callingapprove = () => {
    //     // alert('asas')
    //     setTimeout(() => {
    //         dispatch(checklistsGet());
    //     }, 2000);
    // } 
    const reject = () => {
        const postBody = {
            rejected_at: defaultDate,
            status:2,
            reason:reason
        }
        dispatch(checklistsReject(postBody));//relodreport
        relodreport();
    }     
    const saveandapprove = () => {
      const postBody = {
          approvedate: defaultDate,
          status:1
      }
     // dispatch(checklistSaveandApprove(postBody));//relodreport
      relodreport();
  }
    const filter = () => {
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        const elementdate = myElementRefDate.current;
        const elementuser = myElementRefUser.current;
        const postBody = {
            created_at:elementdate.value,
            state:elementstate.value,
            company:elementcompany.value,
            branch:elementbranch.value,
            executive:elementuser.value
        }
         dispatch(checklistsApproveFilter(postBody));
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
        // {
        //   title: 'Act',
        //   dataIndex: 'compliance',
        //   key: 'compliance',
        //   width: 100,
        //   ...getColumnSearchProps('act'),
        //   sorter: (a, b) => a.act.length - b.act.length,
        //   sortDirections: ['descend', 'ascend']
        // },
        // {
        //     title: 'Rule',
        //     dataIndex: 'rule',
        //     key: 'rule',
        //     width: 200,
        //     ...getColumnSearchProps('rule'),
        //     sorter: (a, b) => a.rule.length - b.rule.length,
        //     sortDirections: ['descend', 'ascend']
        // },
        // {
        //     title: 'Category',
        //     dataIndex: 'category',
        //     key: 'category',
        //     width: 100,
        //     ...getColumnSearchProps('category'),
        //     sorter: (a, b) => a.category.length - b.category.length,
        //     sortDirections: ['descend', 'ascend']
        // },
        // {
        //     title: 'Question',
        //     dataIndex: 'question',
        //     key: 'question',
        //     width: 300,
        //     // ...getColumnSearchProps('question'),
        //     // sorter: (a, b) => a.question.length - b.question.length,
        //     // sortDirections: ['descend', 'ascend']
        // },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        //     width: 300,
        //     // ...getColumnSearchProps('question'),
        //     // sorter: (a, b) => a.question.length - b.question.length,
        //     // sortDirections: ['descend', 'ascend']
        // },
        // {
        //     title: 'Form',
        //     dataIndex: 'image',
        //     key: 'image',
        //     width: 100,
        // //    ...getColumnSearchProps('image'),
        //  //   sorter: (a, b) => a.image.length - b.image.length,
        //  //   sortDirections: ['descend', 'ascend']
        // },
        {
            title: 'URL/Link',
            dataIndex: 'documents',
            key: 'documents',
            width: 100,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },
        // {
        //     title: 'Branch Name',
        //     dataIndex: 'branchname',
        //     key: 'branchname',
        //     width: 70,
        //     // ...getColumnSearchProps('branchname'),
        //     // sorter: (a, b) => a.branchname.length - b.branchname.length,
        //     // sortDirections: ['descend', 'ascend']
        // },
        {
            title: 'Last Updated Date',
            dataIndex: 'updated_at',
            key: 'updated_at',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        // {
        //     title: 'Recurrence',
        //     dataIndex: 'frequency',
        //     key: 'frequency',
        //     width: 70,
        //    // ...getColumnSearchProps('frequency'),
        //    // sorter: (a, b) => a.frequency.length - b.frequency.length,
        //    // sortDirections: ['descend', 'ascend']
        // },    
        // {
        //     title: 'Approve Date',
        //     dataIndex: 'approvedate',
        //     key: 'approvedate',
        //     width: 100,
        //     // ...getColumnSearchProps('approvedate'),
        //     // sorter: (a, b) => a.approvedate.length - b.approvedate.length,
        //     // sortDirections: ['descend', 'ascend']
        // }, 
        {
            title: 'Executive',
            dataIndex: 'executive',
            key: 'executive',
            width: 100,
            // ...getColumnSearchProps('executive'),
            // sorter: (a, b) => a.executive.length - b.executive.length,
            // sortDirections: ['descend', 'ascend']
        },            
        // {
        //     title: 'Risk',
        //     dataIndex: 'risk',
        //     key: 'risk',
        //     width: 100,
        //     // ...getColumnSearchProps('executive'),
        //     sorter: (a, b) => a.risk.length - b.risk.length,
        //     sortDirections: ['descend', 'ascend']
        // }, 
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
            title: 'Rule',
            dataIndex: 'rule',
            key: 'rule',
            width: 200,
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
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
            width: 300,
            // ...getColumnSearchProps('question'),
            // sorter: (a, b) => a.question.length - b.question.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Description',
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
    return (
        <React.Fragment>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <select className="form-select" ref={myElementRefCompany} aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);filter();}} required>
                                <option value="">Select Company</option>
                            {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                                <option value={item._id}>{item.companyname}</option>
                            )};
                            </select>
                        </div>   
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <select className="form-select" ref={myElementRefState} aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>{setState(e.target.value);filter();}}>
                                    <option value="">Select State</option>
                                {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                    <option value={item._id}>{item.name}</option>
                                )};
                            </select>
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <select className="form-select" ref={myElementRefBranch} aria-label="Default select example" id="branch" name="branch"   onChange= {(e)=>{setBranch(e.target.value);filter();}} value={branch} required>
                            <option value="">Select Branch</option>
                            {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                            <option value={item._id}>{item.name}</option>
                            )};
                            </select>
                        </div>   
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <select className="form-select" ref={myElementRefUser} aria-label="Default select example" id="executives" name="executive"  value={executive} onChange={(e) => {setUser(e.target.value);filter()}} >
                                    <option value="">Select Executive</option>
                                {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                    <option value={item._id}>{item.userName}</option>
                                )};
                            </select>
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <input type="date" className="form-control" id="dates" ref={myElementRefDate} placeholder='Date' value={date} onChange={(e) => {setDate(e.target.value);filter();}} />
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <button type="submit" className="w-100 btn btn-primary" style={{ width:'170px' }} disabled={checklistInfoApprove != undefined && checklistInfoApprove?.length==0 } onClick={saveandapprove}>Save And Apporove</button>
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <button type="submit" className="w-100 btn btn-danger" disabled={checklistInfoApprove != undefined && checklistInfoApprove?.length==0 } onClick={reject}>Reject</button>
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <button type="submit" className="w-100 btn btn-primary" disabled={checklistInfoApprove != undefined && checklistInfoApprove?.length==0 } onClick={toggleTables}>Edit</button>
                        </div>
                        <div className="col-12 col-lg-12">
                            <div className="card p-3 ">
                                <div className="table-responsive">
                                {loadingApprove && <Loading />}    
                                {/* {showTable1 ? (
                                        <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 3500 }} sticky={true}/>
                                    ) : ( */}
                                        <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 3500 }} sticky={true}/>
                                    {/* )} */}
                                      <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                                                    {(openPopup) && <ChecklistPopup addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                                      </Popup>
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
export default ChecklistApprove;
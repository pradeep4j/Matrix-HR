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
import CompliancePopupEdit from './CompliancePopupEdit';
import Popup from "../../components/Popup";
import {compliancesGetAll,complianceAllFilter,usersGet,stateGets,} from "../../store/actions/otherActions";
import Loading from '../../components/layout/Loading';

const AllComplianceTable = () =>{
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
    const [dateupdate, setDateUpdate] = useState('');
    const [state, setState] = useState('');
    const [user,setUser] = useState('');
    //const [loading, setLoading] = useState(false);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const onSetDate = (date) => {
      setDate(new Date(date))
    }
    //const [date, setDate] = useState(defaultDate)
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefUser = useRef(null);
    const [date, setDate] = useState('');
    const getComplianceall = useSelector((state) => state.getComplianceall);
    const { loadingall,complianceInfoAll } = getComplianceall; 
    const complianceByIdUpdate = useSelector((state) => state.complianceByIdUpdate);
    const { loadingupdate,complianceInfoUpdateId } = complianceByIdUpdate; 
    const getState = useSelector((state) => state.getState);
    const { loadingu,stateInfo } = getState; 
    const getComplianceAllFilter = useSelector((state) => state.getComplianceAllFilter);
    const { complianceAllInfo } = getComplianceAllFilter;  
    console.log(complianceAllInfo?.length);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Compliance');
        setModalWidth('400px');
    }
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
            dispatch(compliancesGetAll());
        }, 3000);
        
    }  
    useEffect(() => {
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(compliancesGetAll());
    },[dispatch])
    useEffect(() => {
      //  alert('2')
      let complianceArrAll = [];
          if (typeof (complianceInfoAll) !== 'undefined' && complianceInfoAll?.length > 0 ) {
            //alert(categoryInfo?.length);
            complianceInfoAll.map((item, index) => {
                complianceArrAll.push({
                key:index+1,
                id: item._id,
                state:item.state,
                act: item.act,
                rule:<div className='new-line'>{item.rule}</div>,
                category:item.category,
                question:<div className='new-line'>{item.question}</div>,
                description:<div className='new-line'>{item.description}</div>,
                form:<a href={item.form} target="_blank">Form</a>,
                docattachment:<a href={item.docattachment} target="_blank">Document</a>,
                compliancetype:item.compliancetype,
                recurrence:item.frequency,
                risk:item.risk,
                duedate:formatDate(item.duedate),
              })
          });
        }
        console.log(complianceArrAll)
        setDataSource(complianceArrAll);
    },[complianceInfoAll])
    const resetForm = () => {
       setState('');
       setDateUpdate('');
       setUser('');
  }
  useEffect(() => {
       resetForm();
  },[complianceInfoAll])
    useEffect(() => {
      //  alert('2')
      let complianceArrAllFilter = [];
          if (typeof (complianceAllInfo) !== 'undefined' && complianceAllInfo?.length > 0 ) {
            alert(complianceAllInfo?.length);
            complianceAllInfo.map((item, index) => {
              complianceArrAllFilter.push({
                key:index+1,
                id: item._id,
                state:item.state,
                act: item.act,
                rule:<div className='new-line'>{item.rule}</div>,
                category:item.category,
                question:<div className='new-line'>{item.question}</div>,
                description:<div className='new-line'>{item.description}</div>,
                form:<a href={item.form} target="_blank">Form</a>,
                docattachment:<a href={item.docattachment} target="_blank">Document</a>,
                compliancetype:item.compliancetype,
                recurrence:item.frequency,
                risk:item.risk,
                duedate:formatDate(item.duedate),
              })
          });
        }
       // console.log(complianceArrAllFilter)
        setDataSource(complianceArrAllFilter);
    },[complianceAllInfo])
   // console.log(dataSource)
    const formatDate = (date) => {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
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
            // ...getColumnSearchProps('state'),
            // sorter: (a, b) => a.state.length - b.state.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Act',
            dataIndex: 'act',
            key: 'act',
            width: 100,
            // ...getColumnSearchProps('act'),
            // sorter: (a, b) => a.act.length - b.act.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Rule',
            dataIndex: 'rule',
            key: 'rule',
            width: 200,
            // ...getColumnSearchProps('rule'),
            // sorter: (a, b) => a.rule.length - b.rule.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: 100,
            // ...getColumnSearchProps('category'),
            // sorter: (a, b) => a.category.length - b.category.length,
            // sortDirections: ['descend', 'ascend']
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
            dataIndex: 'form',
            key: 'form',
            width: 100,
        //    ...getColumnSearchProps('image'),
         //   sorter: (a, b) => a.image.length - b.image.length,
         //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Document',
            dataIndex: 'docattachment',
            key: 'docattachment',
            width: 100,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Compliance Type',
            dataIndex: 'compliancetype',
            key: 'compliancetype',
            width: 70,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },      
        {
            title: 'Recurrence',
            dataIndex: 'recurrence',
            key: 'recurrence',
            width: 70,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },     
        {
            title: 'Risk',
            dataIndex: 'risk',
            key: 'risk',
            width: 70,
           ...getColumnSearchProps('risk'),
           sorter: (a, b) => a.risk.length - b.risk.length,
           sortDirections: ['descend', 'ascend']
        },   
        {
            title: 'Due Date',
            dataIndex: 'duedate',
            key: 'duedate',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
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
                    //   onDeleteUer(record);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                  /> */}
                </>
              );
            }, 
        }, 
    ]; 
    const filter = () => {
      const elementstate = myElementRefState.current;
      const elementdate = myElementRefDate.current;
      const elementuser = myElementRefUser.current;
      const postBody = {
          created_at:elementdate.value,
          state:elementstate.value,
          executive:elementuser.value
      }
      dispatch(complianceAllFilter(postBody));
  }   
    return (
        <React.Fragment>
            <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                  {(openPopup) && <CompliancePopupEdit addOrEdit={addOrEdit} recordForEdit={recordForEdit} />}
            </Popup>
            <div className="row">
                <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                    <select className="form-select" ref={myElementRefState} aria-label="Default select example" id="states" name="state" onChange={(e)=>{setState(e.target.value);filter();}}>
                        <option value="">Select State</option>
                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                        <option value={item._id}>{item.name}</option>
                    )};
                    </select>
                </div>
                <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                    <select className="form-select" ref={myElementRefUser} aria-label="Default select example" id="user" name="users" onChange={(e)=>{setUser(e.target.value);filter();}}>
                        <option value="">Seclect Excutive</option>
                        {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                        <option value={item._id}>{item.firstName}{' '}{item.lastName}</option>
                    )};
                    </select>
                </div>
                <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                    <input type="date" id="dating" ref={myElementRefDate} className="form-control" value={dateupdate} onChange={(e) => {setDateUpdate(e.target.value);filter();}}/>
                </div>
                <div className="col-12 col-lg-12">
                    <div className="card p-3 ">
                        <div className="table-responsive">
                        {loadingu && <Loading />}
                          <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false, }}  scroll={{ x: 3500 }} sticky={true}/>
                        </div>
                    </div>
                </div>
              </div>
        </React.Fragment>    
    )
}
export default AllComplianceTable;
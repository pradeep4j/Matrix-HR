import React,{useState,useEffect,useRef} from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { FormLabel,styled} from '@mui/material';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form,message} from 'antd';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import {stateGets,usersGet,branchGet,companyGet,categoryGet,auditorGet,auditGetDataAll} from "../../store/actions/otherActions";
import { useDispatch,useSelector } from 'react-redux';

const Audit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [dateStart, setStartDate] = useState('');
    const [dateEnd, setEndDate] = useState('');
    const [dateOverDue, setOverDueDate] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [user, setUser] = useState();
    const [auditor, setAuditor] = useState();
    const [state, setState] = useState('');
    const [branch,setBranch] = useState('');
    const [company, setCompany] = useState(''); 
    const [risk, setRisk] = useState(''); 
    const [status, setStatus] = useState(''); 
    const [name, setName] = useState('');
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    //console.log(stateInfo);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor; 
    const allAuditGet = useSelector((state) => state.allAuditGet);
    const { loadingallAudit,getAllAudit } = allAuditGet;
    useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(branchGet());
        dispatch(companyGet());
        dispatch(auditorGet());
        dispatch(auditGetDataAll())
    },[dispatch]);
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
    useEffect(() => {
          let auditArrAll = [];
              if (typeof (getAllAudit) !== 'undefined' && getAllAudit?.length > 0 ) {
                //alert(categoryInfo?.length);
                getAllAudit.map((item, index) => {
                    auditArrAll.push({
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
                        company:item.company,
                        risk:item.risk,
                        created_at:formatDate(item.created_at),
                        updated_at:item.updated_at!==undefined?formatDate(item.updated_at):item.updated_at,
                        approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),
                        executive:name?'admin':item.executive,
                  })
              });
            }
        setDataSource(auditArrAll);
    },[getAllAudit])
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
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const columns = [
        {
          title: 'Title/ID',
          dataIndex: 'key',
          key: 'key',
          width: 40,
         // ...getColumnSearchProps('key'),
         // sorter: (a, b) => a.key.length - b.key.length,
         // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: 80,
            // ...getColumnSearchProps('company'),
            // sorter: (a, b) => a.company.length - b.company.length,
            // sortDirections: ['descend', 'ascend']
          },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: 100,
            ...getColumnSearchProps('state'),
            sorter: (a, b) => a.state.length - b.state.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Branch Name',
            dataIndex: 'branch',
            key: 'branch',
            width: 70,
            // ...getColumnSearchProps('branchname'),
            // sorter: (a, b) => a.branchname.length - b.branchname.length,
            // sortDirections: ['descend', 'ascend']
        },        
        {
          title: 'Executive',
          dataIndex: 'executive',
          key: 'executive',
          width: 100,
        //   ...getColumnSearchProps('act'),
        //   sorter: (a, b) => a.act.length - b.act.length,
        //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Auditor',
            dataIndex: 'auditor',
            key: 'auditor',
            width: 100,
          //   ...getColumnSearchProps('act'),
          //   sorter: (a, b) => a.act.length - b.act.length,
          //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Over Due Date',
            dataIndex: 'overdue',
            key: 'overdue',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 50,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Risk',
            dataIndex: 'risk',
            key: 'risk',
            width: 50,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
            width: 40,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        // { 
        //     key: "action", 
        //     title: "Actions", 
        //     width: 100,
        //     render: (record) => { 
        //         //console.log(JSON.stringify(record))
        //       return (
        //           <> 
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
    return (
        <React.Fragment>
            <div className="row">
                <div className="row g-3">
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" aria-label="Default select example" id="company" name="company"    value={company} onChange={(e)=>setCompany(e.target.value)} required>
                            <option value="">Select Company</option>
                            {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                            <option value={item._id}>{item.companyname}</option>
                        )};
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                            <option value="">Select State</option>
                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                            <option value={item._id}>{item.name}</option>
                        )};
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" aria-label="Default select example" id="branch" name="branch" onChange={(e)=>setBranch(e.target.value)} value={branch} required>
                            <option value="">Select Branch</option>
                            {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                            <option value={item._id}>{item.name}</option>
                        )};
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" aria-label="Default select example" name="users" value={user} onChange={(e)=>setUser(e.target.value)}>
                                <option value="">Seclect Excutive</option>
                                {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                <option value={item._id}>{item.firstName}{' '}{item.lastName}</option>
                            )};
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" aria-label="Default select example" name="users" value= {auditor}    onChange={(e)=>setAuditor(e.target.value)}>
                            <option value="">Seclect Auditor</option>
                            {auditorInfo != 'undefind' && auditorInfo?.length > 0 && auditorInfo.map(item => 
                            <option value={item._id}>{item.firstName}{' '}{item.lastName}
                            </option>
                            )};
                        </select>                                  
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label" style={{ fontSize:'13px',fontWeight:'bold' }}>Start Date</label>
                        <input type="date" className="form-control" id="" placeholder='start Date' value={dateStart} onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label" style={{ fontSize:'13px',fontWeight:'bold' }}>End Date</label>
                        <input type="date" className="form-control" id="" placeholder='End Date' value={dateEnd} onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label" style={{ fontSize:'13px',fontWeight:'bold' }}>Overdue Date</label>
                        <input type="date" className="form-control" id="" placeholder='Over Due' value={dateOverDue} onChange={(e) => {setOverDueDate(e.target.value)}}/>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label" style={{ fontSize:'13px',fontWeight:'bold' }}>Status</label>
                        <select className="form-select" aria-label="Default select example" name="status"  value={status} onChange={(e) => {setStatus(e.target.value)}} required>
                            <option value="">Select Status</option>
                            <option value="1">Pending</option>
                            <option value="2">Pending for Discrepancy</option>
                            <option value="3">Incomplete Document</option>
                            <option value="4">Submitted</option>
                            <option value="5">Approved</option>
                            <option value="6">Rejected</option>
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label" style={{ fontSize:'13px',fontWeight:'bold' }}>Risk</label>
                        <select className="form-select" id="risk" aria-label="Default select example" name="risk" value={risk} onChange={(e)=>setRisk(e.target.value)} required>
                            <option value="">Select Risk</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Very High">Very High</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-lg-12 mt-4">
                    <div className="card p-3 overflow-hidden">
                        <div className="table-responsive all_tbl">
                            <div className="table-responsive">
                                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 2000 }} sticky={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Audit;
import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form} from 'antd';
import { EditOutlined,DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import {usersGet,userEdit} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; 
import 'antd/dist/reset.css';
const CategoryTables = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const userGet = useSelector((state) => state.userGet);
const { loading, usersInfo,error } = userGet;  
const userEdits = useSelector((state) => state.userEdits);
const { loadings, userEditInfo } = userEdits;  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState();
  const [editingUser, setEditingUser] = useState(null);
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() )
//   defaultDate.setDateUpdate(defaultDate.getDate() )
  const [uname,setUname] = useState('');
  const [rol,setRole] = useState('');
  const [emails,setEmail] = useState('');
  const [passwords,setPassword] = useState('');
  const [date, setDate] = useState(defaultDate);
  const [visible, setVisible] = useState(false);
  const onSetDate = (date) => {
    setDate(new Date(date))
}
//  alert(catGetInfo);
  useEffect(()=>{
    dispatch(usersGet());
  },[dispatch])
  useEffect(()=>{
    let userArr = [];
    if (usersInfo?.length > 0) {
        usersInfo.map((item, index) => {
            onSetDate(item.createdAt)
            onSetDate(item.updatedAt)
            userArr.push({
            key: index+1,
            id: item._id,
            userName: item.userName,
            role: ((item.role == 0) ? 'Executive(Matrix)' : (item.role == 1) ? 'Companey Executive':(item.role == 2)?'Executive':'Auditor'),
            roles:item.role,
            email: item.email,
            password: item.realpassword,
            createdAt: date.toLocaleDateString('en-CA'),
            updatedAt: date.toLocaleDateString('en-CA'),
          })
      });
    }
    setDataSource(userArr);
  },[usersInfo])
  //console.log(dataSource)

const onDeleteUer = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
        //  dispatch(deleteCategory(record.id));
          return pre.filter((category) => category.id !== record.id);
        });
      },
    });
};
const onEditUser = (record) => {
  setIsEditing(true);
  setEditingUser({ ...record });
};
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const PasswordCell = ({ password }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <Space>
        {showPassword ? (
          <EyeOutlined onClick={togglePasswordVisibility} />
        ) : (
          
          <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
        )}
        {showPassword && password?.length !==undefined ? password : '*'.repeat(password?.length)}
      </Space>
    );
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
      width: '10%',
     // ...getColumnSearchProps('key'),
     // sorter: (a, b) => a.key.length - b.key.length,
     // sortDirections: ['descend', 'ascend']
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
      width: '40%',
      ...getColumnSearchProps('userName'),
      sorter: (a, b) => a.userName.length - b.userName.length,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '40%',
      ...getColumnSearchProps('role'),
      sorter: (a, b) => a.role.length - b.role.length,
      sortDirections: ['descend', 'ascend']
    },
    {
        title: 'Email Id',
        dataIndex: 'email',
        key: 'email',
        width: '40%',
        ...getColumnSearchProps('email'),
        sorter: (a, b) => a.email.length - b.email.length,
        sortDirections: ['descend', 'ascend']
    },
    {
        title: 'Password',
        
        width: '40%',
        render: (text, record) => (
            <PasswordCell password={text} />
        ),
        dataIndex: 'password',
        key: 'password',
        //...getColumnSearchProps('password'),
       //sorter: (a, b) => a.password.length - b.password.length,
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
        title: 'Reset Date',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        width: '40%',
        ...getColumnSearchProps('updatedAt'),
        sorter: (a, b) => a.updatedAt.length - b.updatedAt.length,
        sortDirections: ['descend', 'ascend']
    },             
    { 
        key: "action", 
        title: "Actions", 
        width: '40%',
        render: (record) => { 
            //console.log(JSON.stringify(record))
          return (
            <>
              <EditOutlined
                onClick={() => {
                  onEditUser(record);
                }}
              />
              <DeleteOutlined
                onClick={(e) => {
                  onDeleteUer(record);
                }}
                style={{ color: "red", marginLeft: 12 }}
              />
            </>
          );
        }, 
    }, 
  ];
  const handleSubmit = (values) => {
    console.log(values)
  }
  var initialValues = {
    firstname: '',
    lastname: '',
    role: '',
    email:'',
    password:'Admin@2',
    repassword:'Admin@2'
  }
  setUname(usersInfo.userName);
  setRole(usersInfo.role);
  setEmail(usersInfo.email);
  setPassword(usersInfo.password);
  const names = uname.split(" ");
  let firstname = "";
  let lastname = "";
  if(names[0]){
    firstname =  names[0];
  }
  if(names[1]){
    lastname =  names[1];
  }
  let savedValues = {
    firstname: firstname,
    lastname: lastname,
    role: rol,
    email:emails,
    password:passwords,
}
const schema = Yup.object({
    firstname: Yup.string('')
        .required('First Name is required')
        .min(3, 'First Name must be minimum of 3 charactors')
        .max(30, 'First Name Name must be maximum of 30 charactors'),
    lastname: Yup.string('')
        .required('Last Name is required')
        .min(3, 'Last Name must be minimum of 3 charactors')
        .max(30, 'Last Name Name must be maximum of 30 charactors'),        
    role: Yup.string('')
        .required('Role is required'),   
    email: Yup.string('')
        .required("Email is required!")
        .email("Email is invalid!")
        .min(6,'Email should have of minimum 6 characters length!')
        .max(50, 'Email should be of maximum 50 characters length'),        
    password: Yup.string()
        .min(6, 'Password should be of minimum 6 characters length')
        .max(15, 'Password should be of minimum 15 characters length')
        .required('Password is required') //in editing password is not required initially because it comes from database and we will not check its required
        .matches(/^(?=.*\d)(?=.*[@#\-_$%^&+=ยง!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=ยง!\?]+$/, 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters.'),           
});

//for inline validations via Yup and formik
const formik = useFormik({
    initialValues: (savedValues || initialValues),
    validationSchema: schema,
    enableReinitialize:true,
    onSubmit: (values, action)=>{
      onUserEdit(values,action);
    }}
);
const tocategorypage = () => {
    navigate('/dashboard')
};
const onUserEdit = async (val,action) => {
    
    const postBody = {
        firstName: val.firstname,
        lastName: val.lastname,
        role: val.role,
        email: val.email,
        password: val.password
    }
    // api call        
    dispatch(userEdit(postBody)); 
    action.resetForm();
   // document.getElementById('category').value='';
}
  return (
   <> 
        <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false }}  />
        <Modal
          title="Edit User"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          
          onOk={() => {
            setDataSource((pre) => {
              
              return pre.map((user) => {
                if (user.id === editingUser.id) {
                  const names = (editingUser.userName).split(" ");
                  let firstname = "";
                  let lastname = "";
                  if(names[0]){
                    firstname =  names[0];
                  }
                  if(names[1]){
                    lastname =  names[1];
                  }
                  const postBody = {
                    firstName: firstname,
                    lastName: lastname,
                    userName:editingUser.userName,
                    role:editingUser.role,
                    email: editingUser.email,
                    password: editingUser.password
                  }
                  console.log(JSON.stringify(postBody)); return;
                  dispatch(userEdit(postBody,user.id));
                  //alert((category.name));
                  return editingUser;
                } else {
                  return user;
                }
              });
            });
            resetEditing();
          }}
        >
          <form class="row g-3" onSubmit={formik.handleSubmit}>
          <label for="" class="form-label">User Name</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingUser?.userName}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, userName: e.target.value };
              });
            }}
            type="text" class="form-control" required
          />
          <br />
          <label for="" class="form-label">Role</label>
          <br />
          <select id="role" name="role" class="form-control" value={editingUser?.roles}  onChange={(e) => {
                setEditingUser((pre) => {
                return { ...pre, role: e.target.value };
              });
            }} required>
                
                {/* <option value="" >Select Role</option> */}
                <option value="0">Executive(Matrix)</option>
                <option value="1">Companey Executive</option>
                <option value="2">Executive</option>
                <option value="3">Auditor</option>
          </select>
          <br />
           <label for="" class="form-label">Email</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingUser?.email}
            onChange={(e) => {
                setEditingUser((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
            type="text" class="form-control" required
          />
          <br />
           <label for="" class="form-label">Password</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingUser?.password}
            onChange={(e) => {
                setEditingUser((pre) => {
                return { ...pre, password: e.target.value };
              });
            }}
            type="text" class="form-control" required
          />
        </form>
        </Modal>
  </>
  );
};
export default CategoryTables;
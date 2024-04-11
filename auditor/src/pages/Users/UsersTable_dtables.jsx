import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect,useMemo } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal} from 'antd';

import 'datatables.net';

import { EditOutlined,DeleteOutlined } from "@ant-design/icons";
import {usersGet} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import DataTableComponent from './DataTableComponent';
const CategoryTables = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const userGet = useSelector((state) => state.userGet);
const { loading, usersInfo,error } = userGet;  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [dataSource, setDataSource] = useState();
  const [editingCategory, setEditingCategory] = useState(null);
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() )
//   defaultDate.setDateUpdate(defaultDate.getDate() )
  const [date, setDate] = useState(defaultDate)
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
            userName: item.firstName+' '+item.lastName,
            role: ((item.role == 0) ? 'Executive(Matrix)' : (item.role == 1) ? 'Companey Executive':(item.role == 2)?'Executive':'Auditor'),
            email: item.email,
            password: item.password,
            createdAt: date.toLocaleDateString('en-CA'),
            updatedAt: date.toLocaleDateString('en-CA'),
          })
      });
    }
    setDataSource(userArr);
  },[usersInfo])
  console.log(dataSource)
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
  setEditingCategory({ ...record });
};
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingCategory(null);
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
//   const columns = useMemo(
//     () => [
//       // Define your columns here
//       { Header: 'Sr. No', accessor: 'key' },
//       { Header: 'User Name', accessor: 'userName' },
//       { Header: 'Role', accessor: 'role' },
//       { Header: 'Email Id', accessor: 'email' },
//       { Header: 'Password', accessor: 'password' },
//       { Header: 'Created Date', accessor: 'createdAt' },
//       { Header: 'Reset Date', accessor: 'updatedAt' },
//       // Add more columns as needed
//     ],
//     []
//   );
  const columns1 = [
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
        dataIndex: 'password',
        key: 'password',
        width: '40%',
        ...getColumnSearchProps('password'),
        sorter: (a, b) => a.password.length - b.password.length,
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

  return (
   <> <div>
        <h1>Responsive Data Table</h1>
            <DataTableComponent data={dataSource} />
        </div>
        {/* <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 4, total: 50, showSizeChanger: false }}  /> */}
        {/* <Modal
          title="Edit User"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}CATEGORY_
          onOk={() => {
            setDataSource((pre) => {
              
              return pre.map((category) => {
                if (category.id === editingCategory.id) {
                  const postBody = {
                    name: editingCategory.name,
                    dates: editingCategory.dates
                  }
                  dispatch(categoryEdit(postBody,category.id));
                  //alert((category.name));
                  return editingCategory;
                } else {
                  return category;
                }
              });
            });
            resetEditing();
          }}
        >
          <label for="" class="form-label">Category Name</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingCategory?.name}
            onChange={(e) => {
              setEditingCategory((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <br />
          <label for="" class="form-label">Modified date </label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingCategory?.dates}
            onChange={(e) => {
              setEditingCategory((pre) => {
                return { ...pre, dates: e.target.value };
              });
            }}
            type="date"
          />
          
        </Modal> */}
  </>
  );
};
export default CategoryTables;
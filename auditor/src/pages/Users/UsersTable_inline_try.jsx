import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { EditOutlined,DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import {usersGet,userEdit} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import 'antd/dist/reset.css';
const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const UsersTable = () => {
  const userGet = useSelector((state) => state.userGet);
  const { loading, usersInfo,error } = userGet;  
  const userEdits = useSelector((state) => state.userEdits);
  const { loadings, userEditInfo } = userEdits;  
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
   // const [isEditing, setIsEditing] = useState(false);
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState();
    const [editingUser, setEditingUser] = useState(null);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
  //   defaultDate.setDateUpdate(defaultDate.getDate() )
    const [date, setDate] = useState(defaultDate);
    const [visible, setVisible] = useState(false);
    const onSetDate = (date) => {
      setDate(new Date(date))
  }
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
  const [data, setData] = useState(dataSource);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      userName: '',
      roles: '',
      email: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default UsersTable;
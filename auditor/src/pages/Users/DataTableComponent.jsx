import React, { useRef, useState,useEffect,useMemo } from 'react';
import $ from 'jquery';

const DataTableComponent = ({ data }) => {
  const tableRef = useRef(null);
  const editRow = (id) => {
    // Implement your edit logic here
    console.log(`Edit row with ID ${id}`);
  };
  
  const deleteRow = (id) => {
    // Implement your delete logic here
    console.log(`Delete row with ID ${id}`);
  };
  useEffect(() => {
    // Initialize DataTable when component mounts
    const table = $(tableRef.current).DataTable({
      responsive: true,
      data: data, // Your dynamic data
      columns: [
        // Define your columns
        { title: 'Sr. No', data: 'key' },
        { title: 'User Name', data: 'userName' },
        { title: 'Role', data: 'role' },
        { title: 'Email ID', data: 'email' },
        { title: 'Password', data: 'password' },
        { title: 'Created Date', data: 'createdAt' },
        { title: 'Reset Date', data: 'updatedAt' },
        {
          title: 'Actions',
          render: function (data, type, row) {
            return (<>
              <button onclick={editRow(`${row.id}`)}>Edit</button>
              <button onclick={deleteRow(`${row.id}`)}>Delete</button>
              </>);
          },}
        // Add more columns as needed
      ],
      // Add options for sorting and pagination as needed
    });
    
    // Destroy DataTable when component unmounts
    return () => {
      table.destroy();
    };
  }, [data]);

  return (
    <table ref={tableRef} className="display responsive nowrap" width="100%">
      {/* Table content goes here */}
    </table>
  );
};

export default DataTableComponent;

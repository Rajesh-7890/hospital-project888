import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import './doctorpage.css';
import AdminSidebar from '../../components/AdminSidebar';

const DoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  //   const doctorId = localStorage.getItem('id');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/doctor');
        setDoctors(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching Doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname ',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: ' lastname',
    },

    {
      title: 'Mobile number',
      dataIndex: 'mobilenumber',
      key: 'number',
    },
    {
      title: 'specialization',
      dataIndex: 'specialization',
      key: 'specialization',
    },
    {
      title: 'Department',
      dataIndex: '',
      key: 'department',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <div className="admin-home">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <div className="doc-contents">
        <h2>Doctors</h2>
        <div className="appointment-table">
          <Table dataSource={doctors} columns={columns} rowKey="_id" />
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;

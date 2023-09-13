import { Button, Form, Input, Table } from "antd";
import { message, Popconfirm } from "antd";
import { DeleteTwoTone, EditOutlined } from "@ant-design/icons";
import styles from "../styles/personal.module.css";
import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";

const PersonalDetail = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "About",
      dataIndex: "about",
      key: "about",
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Updated",
      dataIndex: "UpdatedAt",
      key: "UpdatedAt",
    },
    {
      title: "Delete",
      dataIndex: "Delete",
      render: (_, record) => (
        <Popconfirm title='Sure to delete?' onConfirm={() => handleDelete(record.id)}>
          <a>
            <DeleteTwoTone />
          </a>
        </Popconfirm>
      ),
    },
    {
      title: "Update",
      dataIndex: "Update",
      render: (_, record) => (
        <Popconfirm title='Sure to update?' onConfirm={() => handleDelete(record.key)}>
          <a>
            <EditOutlined />
          </a>
        </Popconfirm>
      ),
    },
  ];

  // const handleDelete = () => {
  //     const newData = dataSource.filter((item) => item.key !== key);
  //     setDataSource(newData);
  //   };
  //   const handleDelete = () => {
  //     fetch(`/api/details/deleteBtn?id=${id}`).then((res) => {
  //       res.json().then((result) => {
  //         console.log(result);
  //         setRefresh(!refresh);
  //       });
  //     });
  //   };

  const [refresh, setRefresh] = useState(false);
  const [storeData, setStoreData] = useState([]);

  const onFinish = (data) => {
    console.log(data);
    fetch("/api/details/personal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((result) => {
        console.log(result);
        setRefresh(!refresh);
      });
    });
  };

  const getData = async () => {
    const res = await fetch("/api/details/list-details");
    const result = await res.json();
    console.log(result);
    setStoreData(result.allDetails);
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  return (
    <>
      <section>
        <div>
          <h1>PLease Enter Your Personal Detail</h1>
          <Form name='data' requiredMark={true} onFinish={onFinish}>
            <div style={{ display: "flex" }}>
              <Form.Item
                name={["name"]}
                label={"name"}
                style={{ width: 300 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter your Name",
                  },
                ]}>
                <Input placeholder='Full Name' className={styles.lastInput} />
              </Form.Item>
              <Form.Item
                name={["phoneNumber"]}
                label={"phoneNumber"}
                style={{ width: 300, marginLeft: 100 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter your phoneNumber",
                  },
                ]}>
                <Input className={styles.lastInput} type='number' placeholder='+91 ' />
              </Form.Item>
            </div>
            <Form.Item
              name={["age"]}
              label={"age"}
              style={{ width: 300 }}
              rules={[
                {
                  required: true,
                  message: "Please enter your Age",
                },
              ]}>
              <Input className={styles.lastInput} type='number' placeholder='Enter your age' />
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Form.Item
                name={["email"]}
                label={"email"}
                style={{ width: 300 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter your Email",
                  },
                ]}>
                <Input className={styles.lastInput} placeholder='Enter your email' />
              </Form.Item>
              <Form.Item
                name={["about"]}
                label={"about"}
                style={{ width: 300, marginLeft: 100 }}
                rules={[
                  {
                    required: true,
                    message: "Please enter your about",
                  },
                ]}>
                <Input className={styles.lastInput} type='text' placeholder='Enter Your About' />
              </Form.Item>
            </div>
            <Form.Item>
              <Button style={{ backgroundColor: "darkblue", borderRadius: 20 }} type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Table dataSource={storeData} columns={columns} />
      </section>
    </>
  );
};

export default PersonalDetail;

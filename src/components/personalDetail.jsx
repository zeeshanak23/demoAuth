import { Button, Form, Input} from "antd";
import styles from '../styles/personal.module.css'
import React, { useEffect, useState } from "react"
import 'antd/dist/reset.css';



const PersonalDetail = () => {

    const onFinish = (data) => {
        console.log(data)
        fetch('/api/details/personal', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then (res => {
    
            res.json().then(result => {
                console.log(result)
            })
        })
    };

    return (
        <>
            <section>
                   <div>
                    <h1>PLease Enter Your Personal Detail</h1>
                        <Form
                            name="data"
                            requiredMark={true}
                            onFinish={onFinish}>
                            <div style={{ display: "flex" }}>
                                <Form.Item
                                    name={["name"]} label={"name"}
                                    style={{ width: 300 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your Name'
                                        }
                                    ]}>
                                    <Input placeholder="Full Name" className={styles.lastInput} />
                            
                                </Form.Item>
                                <Form.Item
                                    name={["phoneNumber"]} label={"phoneNumber"}
                                    style={{ width: 300, marginLeft: 100 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your phoneNumber'
                                        }
                                    ]}>
                                    <Input className={styles.lastInput} type="number" placeholder="+91 " />
                                </Form.Item>
                            </div>
                            <Form.Item
                                name={["age"]} label={"age"}
                                style={{ width: 300, }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your Age'
                                    }
                                ]}>
                                <Input className={styles.lastInput} type="number" placeholder="Enter your age" />
                            </Form.Item>
                            <div style={{ display: "flex" }}>

                                <Form.Item
                                    name={["email"]} label={"email"}
                                    style={{ width: 300 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your Email'
                                        }
                                    ]}>
                                    <Input className={styles.lastInput} placeholder="Enter your email" />
                                </Form.Item>
                                <Form.Item
                                    name={["about"]} label={"about"}
                                    style={{ width: 300, marginLeft: 100 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your about'
                                        }
                                    ]}>
                                    <Input className={styles.lastInput} type="text" placeholder="Enter Your About" />
                                </Form.Item>
                            </div>
                            <Form.Item>
                                <Button style={{ backgroundColor: "darkblue", borderRadius: 20 }} type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
            </section >
        </>
    )
}

export default PersonalDetail;
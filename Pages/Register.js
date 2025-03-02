import React,{useState} from 'react'
import {Form,Input,message} from 'antd'
import {Link , useNavigate} from 'react-router-dom'
import '@ant-design/v5-patch-for-react-19';
import axios from 'axios'
import Spinner from '../Component/Spinner'
const Register = () => {
  const navigate = useNavigate()
  const [loading ,setLoading]= useState(false)

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:9090/api/v1/Register/PFM", values
      );      
      setLoading(false);
      message.success("Registration Successful");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Invalid Username Or Password");
    }
  };
  
  return (
    <>
      <div className="register-page">
        {loading && <Spinner/>}
        <Form layout='vertical' onFinish={submitHandler}>
          <h1><b><i>Register Form</i></b></h1>
            <Form.Item label="Name" name="Name" >
              <Input placeholder=" Enter your Name"/>
            </Form.Item>
            <Form.Item label="Userame" name="Username">
              <Input placeholder=" Enter your Username"/>
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type='email' placeholder="Enter your email"/>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type='password' placeholder=" Enter your password"/>
            </Form.Item>
            <div className="d-flex justify-content-between">
              <Link to="/login">Already Register ? </Link>
              <button className="btn btn-primary">Register</button>
            </div>
        </Form>
        </div>

    </>
  )
}

export default Register

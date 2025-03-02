import React,{useState} from 'react';
import { Form, Input,message } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Component/Spinner';
const LogIn = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()
    const submitHandler = async(values) => {
     try {
      setLoading(true)
      const {data} =  await axios.post("http://localhost:9090/api/v1/PFM/LogIn", values);      
      setLoading(false)
      message.success('LogIn Success')
      localStorage.setItem('user',JSON.stringify({...data,password:''}))
      navigate('/')
     } catch (error) {
      setLoading(false)
      message.error('Something Went wrong')
     }
    };
    return (
    <>
      <div className="Login-page">
        {loading && <Spinner/>}
        <Form layout='vertical' onFinish={submitHandler}>
          <h1><b><i>LogIn</i></b></h1>
            <Form.Item label="Userame" name=" Enter your Username">
              <Input placeholder=" Enter your Username"/>
            </Form.Item>
            <Form.Item label="Password" name=" Enter your password">
              <Input type='password' placeholder=" Enter your password"/>
            </Form.Item>
            <div className="d-flex justify-content-between">
              <Link to="/register">New User?</Link>
              <button className="btn btn-primary">LogIn</button>
            </div>
        </Form>
        </div>
    </>
  )
}
export default LogIn

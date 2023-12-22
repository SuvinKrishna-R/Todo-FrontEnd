import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../service/allApis'


function Login() {


    const navigate=useNavigate()

    const[loginInputs,setLoginInputs]=useState({
       
        'uname':'',
        'psw':''
    })

    const loginDatas=(e)=>{
        const {name,value}=e.target
        setLoginInputs({...loginInputs,[name]:value})


    }


    //login button click
    const handleLogin=async()=>{
        const {uname,psw}=loginInputs
        if(uname=="" || psw==""){
            alert("All Datas Are Required")
        }
        else{
            const result=await loginApi(loginInputs)
            if(result.status>=200 && result.status<300){
                alert('Login Successful')
                localStorage.setItem('uId',result.data.uid)
                navigate('/home')
            } 
            else{
                alert('Invalid Username or Password')
            }
        }
    }



    console.log(loginInputs);

    return (
        <div>
            <Container style={{ display: 'flex', justifyContent: 'center' }} >
                <Row style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(255,120,133)', opacity: '0.90', marginTop: '15vh', width: '50%', borderRadius: '20px' }} >
                    <h1><center>LOG IN</center></h1>
                    <div class="form-group w-75 ">
                        <label class="form-label mt-4">Username</label>
                        <input onChange={(e)=>loginDatas (e)} name='uname' type="text" class="form-control" placeholder="Enter Username" />
                    </div>
                    <div class="form-group mb-5 w-75">
                        <label class="form-label mt-4">Password</label>
                        <input onChange={(e)=>loginDatas (e)} name='psw' type="password" class="form-control" placeholder="Password" autocomplete="off" />
                    </div>
                    <div className='w-75'>
                        <Row>
                            <Col>
                                <button onClick={handleLogin} type="submit" class="btn  mb-3" style={{ backgroundColor: 'rgb(101,68,119)' }}>Submit</button>
                            </Col>

                            <Col className='' style={{marginLeft:'39%'}}>
                                <div  style={{height:'100%',width:'100%'}}>
                                     forgot password?
                                </div>
                            </Col>
                            

                            <div className='mb-4'  style={{height:'100%',width:'100%'}}>
                                <span>New User?</span>
                            <Link to='/register'style={{color:'black',textDecoration:'none'}} ><b>Register</b> </Link> 

                            </div>
                        
                        </Row>
                        


                    </div>


                </Row>


            </Container>
        </div>
    )
}

export default Login
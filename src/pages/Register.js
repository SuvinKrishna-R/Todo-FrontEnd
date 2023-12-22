import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../service/allApis'


function Register() {


    //validation
    const [unameValid, setUnameValid] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [pswValid,setPswValid] = useState(true)

    const navigate=useNavigate()




    //state to store input datas
    const [inputData, setInputData] = useState({
        uname: '',
        email: '',
        psw: '',
        cpsw: ''
    })



    const setData = (e) => {
        const { value, name } = e.target

        if (name == 'uname') {
            if ((value.match(/^[a-zA-Z ]+$/))) {
                setUnameValid(true)
                setInputData({ ...inputData, [name]: value })
            }

             else {
                setUnameValid(false)
            }
        }

        if(name == 'email'){
            if((value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/))){
                    setEmailValid(true)
                    setInputData({...inputData,[name]:value})
            }
            else{
                setEmailValid(false)

            }
        }

        if(name == 'psw'){
            if((value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))){
                    setPswValid(true)
                    setInputData({...inputData,[name]:value})
            }
            else{
                setPswValid(false)

            }
        }
    }

    //button click
    const registerSubmit=async()=>{
        const {uname,email,psw}=inputData

        if(uname=='' || email=='' || psw=='' ){

            alert('All inputs are required')
        }

        const result=await registerApi(inputData)
        if(result.status>=200 && result.status<300){
            alert('Registered Successfully')
            navigate('/')
        } 
        else{
            alert(result.response.data)
        }
    }

console.log(inputData);


    return (
        <div>
            <Container style={{ display: 'flex', justifyContent: 'center' }} >
                <Row style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(255,120,133)', opacity: '0.90', marginTop: '10vh', width: '50%', borderRadius: '20px' }} >
                    <h1><center>Register</center></h1>



                    <div class="form-group w-75 ">
                        <label class="form-label mt-4">Username</label>
                        <input type="text" class="form-control" placeholder="Enter Username" name='uname' onChange={(e) => setData(e)} />
                    </div>
                    {!unameValid &&
                        <div>
                            <p className='text-danger'>*Invalid first name  !</p>
                        </div>
                    }

                   

                    <div class="form-group w-75 ">
                        <label class="form-label mt-4">Email id</label>
                        <input type="email" class="form-control" placeholder="Enter Email id" name='email' onChange={(e) => setData(e)} />
                    </div>
                    {!emailValid &&
                        <div>
                            <p className='text-danger'>*Email id is required  !</p>
                        </div>
                    }


                    <div class="form-group  w-75">
                        <label class="form-label mt-4">Password</label>
                        <input type="password" class="form-control" placeholder="Password" autocomplete="off" name='psw' onChange={(e) => setData(e)} />
                    </div>
                    {!pswValid &&
                        <div>
                            <p className='text-danger'>*Password is required  !</p>
                        </div>
                    }

                    <div class="form-group mb-5 w-75">
                        <label class="form-label mt-4">Confirm Password</label>
                        <input type="password" class="form-control" placeholder="Password" autocomplete="off" name='cpsw' />
                    </div>

                    <div className='w-75'>
                        <Row>
                            <Col>
                                <button onClick={registerSubmit} type="submit" class="btn  mb-3" style={{ backgroundColor: 'rgb(101,68,119)' }}>Submit</button>
                            </Col>

                            <Col className='' style={{ marginLeft: '20%' }}>
                                <div style={{ height: '100%', width: '100%' }}>
                                    <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Already Registered..</Link>

                                </div>
                            </Col>



                        </Row>



                    </div>


                </Row>


            </Container>
        </div>
    )
}

export default Register
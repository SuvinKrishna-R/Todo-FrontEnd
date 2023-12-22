import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../pages/Add.css'
import {addtasks, deleteTaskDetails, editTaskStatus, getTaskDetails} from '../service/allApis'
import { MdDelete } from "react-icons/md";





function Add() {
    const [addTask, setAddTask] = useState({
        task: '',
        dueDate: '',
        priority: '',
        tStatus:''
        
       

    })


    const [getTask,setGetTask]=useState({})


    const[taskFlag,setTastFlag]=useState(false)

    const getTaskFunction=async()=>{
        if (localStorage.getItem('uId')){
            const uid=localStorage.getItem('uId')
            const result=await getTaskDetails(uid)
            setGetTask(result.data)
            setTastFlag(false)
        }
    }

    




    const taskAdd = (e) => {
        const { name, value } = e.target
        setAddTask({ ...addTask, [name]: value });
    }
    console.log(addTask);

   


    

    const taskadding=async()=>{
        if (localStorage.getItem('uId')) {
            const uid=localStorage.getItem('uId')
            const response=await addtasks({task:addTask.task,dueDate:addTask.dueDate,priority:addTask.priority,uid:uid})   
            console.log(response);
            alert(response.data)
            setTastFlag(true)
            
        }
        


    }

    useEffect(()=>{
        getTaskFunction()
    },[taskFlag])


    //delete button click
    const deleteHandling=async(id)=>{
        const result=await deleteTaskDetails(id)  
        if(result.status>=200 && result.status<300){
            getTaskFunction()
        }
    }

//update

    // const [editTask,setEditTask]=useState({ tStatus:''})


    // const editStatus=(e) =>{
    //     const { name, value } = e.target
    //     setEditTask({ ...editTask, [name]: value });
    // }

    //update task status
    const updateHandling=async(e,id)=>{
        addTask.tStatus=e.target.value
        const tStatus=addTask.tStatus
        // console.log( addTask.tStatus);
        // console.log( id);
        const result=await editTaskStatus(id,{tStatus})
        console.log(result);         
        if(result.status>=200 && result.status<300){
            getTaskFunction()
        }
       
    }

    // useEffect(()=>{
    //     updateHandling()
    // },[getTask])


    // console.log(getTask);
    // console.log(editTask);
    console.log(addTask.tStatus);

    return (
        <div style={{ height: '100%', width: "100%" }}>
            <Row><h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', fontFamily: 'Vardana', color: 'white', height: '100%', width: "100%" }}>Add your Task</h1></Row>
            <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: "10px", height: '100%', width: "100%" }}>

                <Col style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }} lg={6} md={6} sm={12}>

                    {/* <div class="d-flex flex-row align-items-center">
                    <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
                      placeholder="Add new..."/>
                    <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                        class="fas fa-calendar-alt fa-lg me-3"></i></a>
                    <div>
                      <button type="button" class="btn btn-primary">Add</button>
                    </div>
                  </div> */}




                    <FloatingLabel
                        controlId="floatingInput"
                        label="Add Task"
                        className="mb-3 w-75 ms-3"
                        style={{ height: '55px',fontFamily: 'Russo One, sans-serif' }}



                    >

                        <Form.Control type="text" placeholder="text" name='task' onChange={(e) => taskAdd(e)} />

                        {/* <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                        class="fas fa-calendar-alt fa-lg me-3"></i></a>  */}
                    </FloatingLabel>








                </Col>

                <Col lg={6} md={6} sm={6} style={{ display: 'flex', justifyContent: 'center', marginTop: '100px',fontFamily: 'Russo One, sans-serif' }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Due Date"
                        className="mb-3 w-25 ms-4 "




                    >

                        <Form.Control type="date" placeholder="text" onChange={(e) => taskAdd(e)} name='dueDate' />


                    </FloatingLabel>
                    {/* <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                        class="fas fa-calendar-alt fa-lg me-3"></i></a>  */}

   
                    <Form.Select  aria-label="Default select example" style={{ width: '160px', height: '56px' }} className='ms-5 ' name='priority' onChange={(e) => taskAdd(e)}>
                        <option selected>Priority</option>
                        <option value="High" >High</option>
                        <option value="Medium" >Medium</option>
                        <option value="Low" >Low</option>
                    </Form.Select>



                    <Button onClick={taskadding} variant="primary" style={{ height: '55px', marginLeft: '20px', width: '160px', height: '56px' }}>Submit</Button>{' '}

                </Col>


            </Row>


            <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                
                
                <Table id='table' striped bordered hover size="lg" className='w-50 mt-5 ' align='center' style={{ fontFamily: 'Russo One, sans-serif',height:'auto'}}>
                    <thead >
                        <tr bordered hover size="sm">
                            <th >Sl.No</th>
                            <th>Task</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {getTask.length>0 ? getTask.map((i,index)=>(
                    <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.task}</td>
                            <td>{i.dueDate}</td>
                           
                            {i.priority=="High" ? 
                            <td className='text-danger'>
                           
                                
                                
                                
                               
                                 {i.priority}
                                </td>
                                 :i.priority=="Medium" ? <td className='text-primary'>
                           
                                
                                
                                
                               
                                 {i.priority}
                                </td>
                                : <td className='text-success'>
                           
                                
                                
                                
                               
                                {i.priority}
                               </td>
                                 
                                }

                                
                            <td>
                            <Form.Select  onChange={(e) => updateHandling(e,i._id)}  value={i.tStatus}  aria-label="Default select example" style={{ width: '100px', height: '56px' }} className='ms-0 ' name='tStatus'   >
                        <option  value="Status">Status</option>
                        <option className='text-danger' value= {"Completed"}>Completed</option>
                        <option value= {"Ongoing"}>Ongoing</option>
                    </Form.Select>
                    

                            </td>
                            <td><MdDelete className='text-danger btn' style={{fontSize:"50px"}} onClick={()=>deleteHandling(i._id)}/></td>

                        </tr>

                    </tbody>
                     )):
                     <p>Loading</p>
                 }
                </Table>
               
            </Row>
        </div>
    )
}

export default Add
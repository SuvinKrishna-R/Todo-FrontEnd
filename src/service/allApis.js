import { BASE_URL } from "./baseUrl";
import { commonStructure } from "./commonStructure";


// register
export const registerApi=async(body)=>{
        return await commonStructure('POST',`${BASE_URL}/express/new/user`,body)
}

//login
export const loginApi=async(body)=>{
        return await commonStructure('POST',`${BASE_URL}/express/login/user`,body)
}


//task add-POST-url,body
export const addtasks=async(body)=>{
        return await commonStructure('POST',`${BASE_URL}/express/new/task`,body)
}

//get task details
export const getTaskDetails=async(uid)=>{
        return await commonStructure('GET',`${BASE_URL}/express/get/task?uid=${uid}`,"")
}

//delete task
export const deleteTaskDetails=async(id)=>{
        return await commonStructure('DELETE',`${BASE_URL}/express/task/delete/${id}`,{})
}

// update status of task
export const editTaskStatus=async(id,body)=>{
        console.log({id,body});
        return await commonStructure('POST',`${BASE_URL}/express/task/edit/${id}`,body)
}

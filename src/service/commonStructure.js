import axios from "axios"

export const commonStructure=async(method,url,body)=>{

    let config={
        method,
        url,
        data:body
    }
    return await axios(config).then(response=>{
        return response
    }).catch(response=>{
        return response
    })
}
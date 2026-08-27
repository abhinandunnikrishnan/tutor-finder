import axiosService from "../api/axiosService";

// register new student when register button is clicked
export const registerStudentApi=async(registerStudent)=>{
    return await axiosService("POST","/students",registerStudent)
}

export const allStudentApi=async()=>{
    return await axiosService("GET","/students",{})
}

export const studentProfileApi=async(id)=>{
    return await axiosService("GET",`/students/${id}`,{})
}

export const editStudentApi=async(id,studentDetails)=>{
    return await axiosService("put",`/students/${id}`,studentDetails)
}
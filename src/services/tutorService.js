import axiosService from "../api/axiosService";

// get all tutor from json file into tutor cad when page opens
export const getAllTutorApi=async()=>{
    return await axiosService("GET","/tutors",{})
}

// get  tutor details from json file  when detail button is clicked
export const getTutorDetailsApi=async(id)=>{
    return await axiosService("GET",`/tutors/${id}`,{})
}
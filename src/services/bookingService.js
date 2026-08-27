import axiosService from "../api/axiosService";

// get all bookings from json file into my-bookings when page opens
export const getAllBookingApi=async()=>{
    return await axiosService("GET","/bookings",{})
}

// add bookings to json file when book button is clicked
export const addBookingApi=async(tutorDetails)=>{
    return await axiosService("POST","/bookings",tutorDetails)
}

// delete booking from json file when cancel button clicked
export const deleteBookingApi=async(id)=>{
    return await axiosService("DELETE",`/bookings/${id}`,{})
}
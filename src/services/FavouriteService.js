import axiosService from "../api/axiosService";

// add favorite tutor when tutor button clicked
export const addFavoriteApi=async(tutor)=>{
    return await axiosService("POST","/favorites",tutor)
}

// get all favorite tutors when page opens
export const allFavoriteApi=async()=>{
    return await axiosService("GET","/favorites",{})
}

// remove from favorites when love button is again cicked
export const removeFavoriteApi=async(id)=>{
    return await axiosService("DELETE",`/favorites/${id}`,{})
}


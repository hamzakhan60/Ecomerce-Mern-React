import axios from 'axios'
import {REACT_APP_base_Url} from '../constants/apiConstants';


// get
export const get= async (endpoint,params={})=>{
     
        try {
          const response = await axios.get(`${REACT_APP_base_Url}${endpoint}`,{params:params.params});
          console.log(response.data);
          return(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        } 
}

export const put=async(endpoint,data,params={})=>{
        try{
            const response=await axios.put(`${REACT_APP_base_Url}${endpoint}`,data,{params:params.params})
            return (response);
        }
        catch(err){
                if (err.response) {
                    alert(err.response.data);
                } else {
                    alert("Server Not Found");
                }
            }
          
}
export const post=async (endpoint,data,params={})=>{
    console.log(data);
    console.log(endpoint);
    try{
        const response= await axios.post(`${REACT_APP_base_Url}${endpoint}`,data,{params:params.params});
        console.log(response);
        return(response);
    }
    catch(err){
        alert(err.response.data);
        throw err;
    }

}
export const remove=async(endpoint,params={} ) =>{
    console.log(params.params);
        try{
           const response= axios.delete(`${REACT_APP_base_Url}${endpoint}`,{params:params.params})
           return(response);
        }
        catch(err){
            if (err.response) {
                alert(err.response.data);
            } 
        }
}
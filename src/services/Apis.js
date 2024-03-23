import { commonrequest } from "./ApiCall";
import {BASE_URL} from "./helper"


export const registerfunc = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/register`,data,header)
}    



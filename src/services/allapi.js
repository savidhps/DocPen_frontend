import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


//register content-type =application/json
export const registerApi=async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqbody)

}

export const loginApi=async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqbody)
}

export const addprescriptionApi = async (reqbody) => {
  return await commonApi('POST', `${serverUrl}/add-prescription`, reqbody);
};
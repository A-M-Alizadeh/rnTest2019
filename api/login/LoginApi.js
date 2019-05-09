import {axiosInstance,axiosAuthInstance,tempToken} from '../ApiHelper';
import APIPathHelper from '../APIPathHelper';
  //........................................Real APIs of Project

  export function Auth_Requests(){
    return{
        MBZLogin: (_data)=>axiosInstance.post(`${APIPathHelper.Auth_Login.url}`,_data, {headers: { Authorization: "Basic d2ViLWNsaWVudDoxMjM0NTY3ODk=",'Content-Type': 'multipart/form-data'}}),
        MBZGetLoggedinModel:()=>axiosAuthInstance.post(`${APIPathHelper.getLoggedInModel.url}`),
    }
  }
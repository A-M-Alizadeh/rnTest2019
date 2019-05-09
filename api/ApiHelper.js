import axios from 'axios';
import APIPathHelper from './APIPathHelper';
import {ToastMaker} from '../utils/ToastMaker'

import {store} from '../redux/store/index'

// ------------------get token from storage------------------
// export var tempToken;
// export async function getAuthorizationToken(){

//   console.log('Authinggggg');
//   console.log(store.getState().jwt.jwtToken);
//   try {
//     const value =await AsyncStorage.getItem('jwtToken')
//     if (value !== null) {
//       value.then((e)=>{
//         tempToken =  'Bearer '.concat(e);
//         console.log(`is this wooooooooooooooooooooooorking 1 ${tempToken}`);
//         return tempToken;
//       })
//     }else{
//       console.log('is this wooooooooooooooooooooooorking 2');
//       tempToken = null;
//       Actions.reset('auth');
//     }
//    } catch (error) {
//     //  Error retrieving data
//     console.log('Error retrieving data');
//    }
// }

//---------------------------------------------------------

//   export function removeToken (){
//     try {
//         console.log('removed console');
//         AsyncStorage.removeItem('jwtToken')
//         .then(()=>{
//           ToastMaker().showToast('شما از برنامه خارج شدید','باشه',2000,'warning');
//           Actions.reset('auth')
//         });
//     }
//     catch(exception) {
//         console.log('token remove error');
//     }finally{
//       console.log('finalnalnal');
//       getAuthorizationToken();
//     }
// }

//,{headers:{Authorization:`Bearer ${store.getState().jwt.jwtToken}`}}
//----------------------------------------------------------

// axios.defaults.baseURL = `${APIPathHelper.BASE_URL}`;
export var axiosInstance = axios.create({
    baseURL: `${APIPathHelper.BASE_URL}`,
    timeout: 5000,
    headers:{'Content-Type':'Application/json'}
});
export var axiosAuthInstance = axios.create({
    baseURL: `${APIPathHelper.BASE_URL}`,
    timeout: 5000,
    headers:{'Content-Type':'Application/json'}
});

//#################################INTERCEPTOR#############################################
axiosInstance.interceptors.request.use((config)=>{
    console.log('req config=>',config);

    //newly added
    // let originalRequest = error.config;
    // if (error.response.status === 401){
    //     if (tokenIsExpired && path_is_not_login) {
    //         return issueToken().then((token) => {
    //             originalRequest['Authorization'] = 'Bearer ' + token;
    //             return Promise.resolve(originalRequest);
    //         });
    //     }
    //     return config;
    // }
    //newly added

    return config;
},(error)=>{
    ToastMaker().withoutAction('Ooops Error in Request Interceptor','warning');
    console.log(error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response)=>{
    console.log('resp response=>',response);
    if (response.data.error) {
        return Promise.reject(response);
    }
    return response;
},(error)=>{
    console.log("WHHHHYYY =>"+error);
    switch(error.response.status){
        case 400:{ToastMaker().withoutAction(`${error.response.status}` + " "+error.response.data.error_description,'warning');break;}

        case 401:{
            // added for refresh token
            //   const originalRequest = error.config;
            //
            //   if (!originalRequest._retry) {
            //       originalRequest._retry = true;
            //       return axiosInstance
            //           .post("/tokens/auth", {
            //               refreshToken: getRefreshToken(),
            //               grantType: "refresh_token",
            //               clientId: "website"
            //           })
            //           .then(response => {
            //               localStorage.authentication = JSON.stringify(response.data);
            //               updateAuthInstant();
            //               return axiosInstance(originalRequest);
            //           }).catch(error=>{
            //               ToastMaker().withoutAction(`${error.response.status}` +" "+error.response.data.error_description,'warning');break;
            //           })
            //   }
            // added for refresh token edited
        }

        case 500:{ToastMaker().withoutAction(`${error.response.status}` +" "+error.response.data.error_description,'warning');;break;}

        default:{ToastMaker().withoutAction('مشکل ارتباط با سرور','warning');break;}
    }
    console.log(error.response);
    return Promise.reject(error);
});
//-------------------------------------------------------------------Auth Interceptor----------------------------
axiosAuthInstance.interceptors.request.use((config)=>{
    console.log('req config=>',config);

    const token = store.getState().tokenReducer.access_token;
    console.log(token);
    if (token != null || token !='.') {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('authed');
    }
    return config;
},(error)=>{
    ToastMaker().withoutAction('Ooops Error in Request Interceptor','warning');
    console.log(error);
    return Promise.reject(error);
});

axiosAuthInstance.interceptors.response.use((response)=>{
    console.log('resp response=>',response);
    if (response.data.error) {
        return Promise.reject(response);
    }
    return response;
},(error)=>{
    switch(error.response.status){
        case 400:{ToastMaker().withoutAction(`${error.response.status}` + " "+error.response.data.error_description,'warning');break;}

        case 401:{ToastMaker().withoutAction(`${error.response.status}` +" "+error.response.data.error_description,'warning');break;}

        case 500:{ToastMaker().withoutAction(`${error.response.status}` +" "+error.response.data.error_description,'warning');;break;}

        default:{ToastMaker().withoutAction('مشکل ارتباط با سرور','warning');break;}
    }
    console.log(error.response);
    return Promise.reject(error);
});

//#################################INTERCEPTOR#############################################



































// export const AxiosClient=(_method,_url,_data,_needsToken)=>{
//   axios({method: _method,url:_url,data: _data})
//   .then(Response => {
//     return Response;
//   }).catch(error => {
//     Alert.alert('What?')
//   });
// }


// export const Test=(_method,_url,_data,_needsToken)=>{
//   return axios({method: _method,url: _url,data: _data});
// }

//   export const Test=(_method,_url,_data)=>{
//   return axiosInstance({method: _method,url: _url,data: _data});
// }

// export const LoginReq=(_data)=>{
//   return axiosInstance.post(`${APIPathHelper.Req_Login.url}`,_data);
// }




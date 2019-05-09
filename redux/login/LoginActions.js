import * as Types from "./Types";
import {Auth_Requests} from "../../api/login/LoginApi";
import {HomeApi} from "../../api/home/HomeApi";
import {Actions} from "react-native-router-flux";

//-----------------------------------------------------------------------
export const fetchLoginToken=(loginData)=> {
    return (dispatch) => {
        dispatch({
            type: Types.TOKEN_FETCH,
        });
        Auth_Requests().MBZLogin(loginData)
            .then(response=>{
                dispatch({
                    type: Types.TOKEN_SUCCESS,
                    payload: response.data,
                });
            })
            .then(()=>{
                dispatch(fetchLoggedInModel());
            })
            .catch(error=>{
                dispatch({
                    type: Types.TOKEN_FETCH_FAIL,
                    payload: error,
                });
            })
    };
};

export const resetToken=()=> {
    return (dispatch) => {
        dispatch({
            type: Types.TOKEN_RESET,
        });
        }};
//-----------------------------------------------------------------------
export const fetchLoggedInModel=()=> {
    return (dispatch) => {
        dispatch({
            type: Types.LOGGEDINMODEL_FETCH,
        });
        Auth_Requests().MBZGetLoggedinModel().then()
            .then(response=>{
                dispatch({
                    type: Types.LOGGEDINMODEL_SUCCESS,
                    payload: response.data,
                });
            })
            .then(()=>{
                dispatch(setCommonDataIsLoggedIn(true));
            })
            .then(()=>{
                Actions.reset('root');
            })
            .catch(error=>{
                dispatch({
                    type: Types.LOGGEDINMODEL_FETCH_FAIL,
                    payload: error,
                });
            })
    };
};
//-----------------------------------------------------------------------
export const fetchHorizontalDepartmentList=()=> {
    return (dispatch) => {
        dispatch({
            type: Types.HORIZONTALDEPARTMENTLIST_FETCH,
        });
        HomeApi().departmentData().then((response) => {
            dispatch({
                type: Types.HORIZONTALDEPARTMENTLIST_SUCCESS,
                payload: response,
            });
        }).catch((response) => {
            dispatch({
                type: Types.HORIZONTALDEPARTMENTLIST_FETCH_FAIL,
                payload: response,
            });
        });
    };
};

//-----------------------------------------------------------------------
//
export const fetchHorizontalSpecialProductsList=(virtinId)=> {
    return (dispatch) => {
        dispatch({
            type: Types.HORIZONTALSPECIALPRODUCTLIST_FETCH,
        });
        HomeApi().specialProducts({vitrinId:virtinId,rows:8,page:0,frontTypeList:["SPECIAL"]}).then((response) => {
            dispatch({
                type: Types.HORIZONTALSPECIALPRODUCTLIST_SUCCESS,
                payload: response,
            });
        }).catch((response) => {
            dispatch({
                type: Types.HORIZONTALSPECIALPRODUCTLIST_FETCH_FAIL,
                payload: response,
            });
        });
    };
};
//-----------------------------------------------------------------------
//
export const fetchHorizontalWorkProductsList=(virtinId)=> {
    return (dispatch) => {
        dispatch({
            type: Types.HORIZONTALWORKPRODUCTLIST_FETCH,
        });
        HomeApi().specialProducts({vitrinId:virtinId,rows:8,page:0,frontTypeList:["WORK"]}).then((response) => {
            dispatch({
                type: Types.HORIZONTALWORKPRODUCTLIST_SUCCESS,
                payload: response,
            });
        }).catch((response) => {
            dispatch({
                type: Types.HORIZONTALWORKPRODUCTLIST_FETCH_FAIL,
                payload: response,
            });
        });
    };
};
//-----------------------------------------------------------------------
//
export const fetchAutoCompleteCities=(city)=> {
    return (dispatch) => {
        dispatch({
            type: Types.AUTOCOMPLETECITY_FETCH,
        });
        HomeApi().cityAutoComplete(city).then((response) => {
            dispatch({
                type: Types.AUTOCOMPLETECITY_SUCCESS,
                payload: response,
            });
        }).catch((response) => {
            dispatch({
                type: Types.AUTOCOMPLETECITY_FETCH_FAIL,
                payload: response,
            });
        });
    };
};
export const resetAutoCompleteCities=()=> {
    return (dispatch) => {
        dispatch({
            type: Types.AUTOCOMPLETECITY_RESET,
        });
    };
};
//-----------------------------------------------------------------------
export const setCommonDataCity=(selectedCity)=> {
    return (dispatch) => {
        dispatch({
            type: Types.COMMON_SET_CITY,
            payload:selectedCity
        });
    };
};
export const setCommonDataIsLoggedIn=(isLoggedIn)=> {
    return (dispatch) => {
        dispatch({
            type: Types.COMMON_SET_ISLOGGEDIN,
            payload:isLoggedIn
        });
    };
};
export const setCommonDataBasketNumber=(badgeNumber)=> {
    return (dispatch) => {
        dispatch({
            type: Types.COMMON_SET_BASKETBADGENUMBER,
            payload:badgeNumber,
        });
    };
};






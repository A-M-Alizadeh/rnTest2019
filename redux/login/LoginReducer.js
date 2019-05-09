import * as Types from './Types';
import {MapToList} from "../../utils/MapToList";
import {Actions} from "react-native-router-flux";

//---------------------------------------------------------------------------------------
const TokenInitialState = {
    access_token:null,
    expires_in: 0,
    refresh_token:null
} ;

const loggedInModelInitialState = {
    fName:null,
    lName:null,
    username:null,
    city_id:null,
    emailAddress:null,
    mobileNo:null,
    firstLogin:null,
    id:null,
    userIsMember:null,
} ;

const initialHorizontalList = {
    content:[],
    fetching:false,
    fetched:false,
    error:null
};
const initialCitiesList = {
    content:[],
    cityIsSelected:false,
    fetching:false,
    fetched:false,
    error:null
};
//----------------------------------------------------------------------------------------------------------------------
export const tokenReducer=(state = TokenInitialState,action={})=>{
    switch (action.type) {
        case Types.TOKEN_FETCH: {
            return{
                ...state,
                fetching:true,
                fetched:false,
            };
        }
        case Types.TOKEN_SUCCESS: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                access_token:action.payload.access_token,
                expires_in: action.payload.expires_in,
                refresh_token:action.payload.refresh_token
            };
        }
        case Types.TOKEN_FETCH_FAIL: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                error:'نام کاربری یا کلمه عبور اشتباه است'
            }
        }
        case Types.TOKEN_RESET: {
            return{
                ...state,
                access_token:null,
                expires_in: 0,
                refresh_token:null
            };
        }
        default: return state;

    }
};

//----------------------------------------------------------------------------------------------------------------------
export const loggedInModelReducer=(state = loggedInModelInitialState,action={})=>{
    switch (action.type) {
        case Types.LOGGEDINMODEL_FETCH: {
            return{
                ...state,
                fetching:true,
                fetched:false,
            };
        }
        case Types.LOGGEDINMODEL_SUCCESS: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                fName:action.payload.user.name,
                lName:action.payload.user.family,
                username:action.payload.user.username,
                city_id:action.payload.user.city_id,
                emailAddress:action.payload.user.defaultUserContact_emailAddress,
                mobileNo:action.payload.user.defaultUserContact_mobileNo,
                firstLogin:action.payload.user.firstLogin,
                id:action.payload.user.id,
                userIsMember:action.payload.userIsMember,
            };
        }
        case Types.LOGGEDINMODEL_FETCH_FAIL: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                error:'اطلاعات کاربری دریافت نشد'
            }
        }
        default: return state;

    }
};

//----------------------------------------------------------------------------------------------------------------------
export const HomeHorizontalDepartmentReducer=(state = initialHorizontalList,action={})=>{
    switch (action.type) {
        case Types.HORIZONTALDEPARTMENTLIST_FETCH: {
            return{
                ...state,
                fetching:true,
                fetched:false,
            };
        }
        case Types.HORIZONTALDEPARTMENTLIST_SUCCESS: {
            return{
                ...state,
                content:MapToList(action.payload.data.isSpecialList),
                allDepartments:MapToList(action.payload.data.departmentLevel1FrontModels),
                fetching:false,
                fetched:true,
            };
        }
        case Types.HORIZONTALDEPARTMENTLIST_FETCH_FAIL: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                error:'لیست دپارتمان دریافت نشد'
            }
        }
        default: return state;

    }
};
//----------------------------------------------------------------------------------------------- special product
export const HomeHorizontalSpecialProductReducer=(state = initialHorizontalList,action={})=>{
    switch (action.type) {
        case Types.HORIZONTALSPECIALPRODUCTLIST_FETCH: {
            return{
                ...state,
                fetching:true,
                fetched:false,
            };
        }
        case Types.HORIZONTALSPECIALPRODUCTLIST_SUCCESS: {
            return{
                ...state,
                content:MapToList(action.payload.data.SPECIAL),
                fetching:false,
                fetched:true,
            };
        }
        case Types.HORIZONTALSPECIALPRODUCTLIST_FETCH_FAIL: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                error:'لیست محصولات دریافت نشد'
            }
        }
        default: return state;

    }
};
//----------------------------------------------------------------------------------------------- special product
export const HomeHorizontalWorkProductReducer=(state = initialHorizontalList,action={})=>{
    switch (action.type) {
        case Types.HORIZONTALWORKPRODUCTLIST_FETCH: {
            return{
                ...state,
                fetching:true,
                fetched:false,
            };
        }
        case Types.HORIZONTALWORKPRODUCTLIST_SUCCESS: {
            return{
                ...state,
                content:MapToList(action.payload.data.WORK),
                fetching:false,
                fetched:true,
            };
        }
        case Types.HORIZONTALWORKPRODUCTLIST_FETCH_FAIL: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                error:'لیست محصولات دریافت نشد'
            }
        }
        default: return state;

    }
};
//----------------------------------------------------------------------------------------------- autoComplete Cities
export const AutoCompleteCitiesReducer=(state = initialCitiesList,action={})=>{
    switch (action.type) {
        case Types.AUTOCOMPLETECITY_FETCH: {
            return{
                ...state,
                fetching:true,
                fetched:false,
            };
        }
        case Types.AUTOCOMPLETECITY_SUCCESS: {
            return{
                ...state,
                content:MapToList(action.payload.data),
                cityIsSelected:true,
                fetching:false,
                fetched:true,
            };
        }
        case Types.AUTOCOMPLETECITY_FETCH_FAIL: {
            return{
                ...state,
                fetching:false,
                fetched:true,
                error:'لیست شهرها دریافت نشد'
            }
        }
        case Types.AUTOCOMPLETECITY_RESET: {
            return{
                ...state,
                fetching:false,
                fetched:false,
                content:[],
                error:null
            }
        }
        default: return state;

    }
};
//----------------------------------------------------------------------------------------------- autoComplete Cities
const initialCommonData = {
    vitrinId: '',
    city:'',
    basketbadgenumber:0,
    isLoggedIn:false,
};
export const commonDataReducer=(state = initialCommonData,action={})=>{
    switch (action.type) {
        case Types.COMMON_SET_CITY: {
            return{
                ...state,
                vitrinId:action.payload.vitrinId,
                city:action.payload.city,
            };
        }
        case Types.COMMON_SET_ISLOGGEDIN: {
            const {payload}=action;
            return{
                ...state,
                isLoggedIn:payload,
            };
        }
        case Types.COMMON_SET_BASKETBADGENUMBER: {
            return{
                ...state,
                basketbadgenumber:action.payload,
            }
        }
        default: return state;

    }
};
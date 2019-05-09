import {axiosInstance,tempToken} from './../ApiHelper';
import HomeApiPath from './HomeApiPath';
  //........................................Real APIs of Project

  export function HomeApi() {
      return {
          departmentData: () => axiosInstance.post(`${HomeApiPath.DepartmentFrontGet.url}`),
          specialProducts: (_data) => axiosInstance.post(`${HomeApiPath.SpecialProducts.url}`, _data),
          cityAutoComplete:(city)=>axiosInstance.get(`/frontPanel/general/autocomplete?entity=city&value=${city}&parametersMode=cityLimited`),
      }
  }
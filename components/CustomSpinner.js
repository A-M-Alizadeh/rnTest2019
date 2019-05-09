import {Spinner} from 'native-base'
import React from "react";
import Colors from "../utils/Colors";

const CustomSpinner = ({color,loading,size}) => {
    if(loading){
        return (<Spinner  size={size} color={color}/>)
    }
    return null;
};

CustomSpinner.defaultProps={
  loading : true,
};

CustomSpinner.defaultProps = {
    color: Colors.accentColor,
    size:'small'
};

export default CustomSpinner;

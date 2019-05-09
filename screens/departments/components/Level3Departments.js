import React from 'react';
import {Text,View} from 'native-base';
import Colors from "../../../utils/Colors";
import {Dimens} from "../../../utils/Dimens";
import {Actions} from "react-native-router-flux";

class Level3Departments extends React.Component{
    constructor(props){
        super(props);
    }
    handleOnlickDepartment(){
        Actions.push('department');
    }
    render(){
        return(
                <View style={{backgroundColor:Colors.colorPrimaryDark,marginBottom: 1}}>
                    <Text onPress={()=>{Actions.push('department');}} style={{paddingRight:20,paddingTop:6,paddingBottom:6,flex:1,color:Colors.white,fontSize:Dimens.mediumFont}}> - {this.props.level3.title}</Text>
                </View>
        )
    }
}

export default Level3Departments;

import React,{ Component } from 'react';
import {Card, CardItem} from 'native-base';
import { Image } from 'react-native';
import APIPathHelper from "../../../../api/APIPathHelper";

class DepartmentCardItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card >
                <CardItem cardBody >
                    <Image source={{uri: APIPathHelper.BASE_URL+'/fso/download/eshop/department/'+this.props.department.thumbnailImageHashedPath+'/'}} style={{height: 80, width: 220,margin:1, flex: 1}}/>
                </CardItem>
            </Card>
        )
    }
}
export default DepartmentCardItem;

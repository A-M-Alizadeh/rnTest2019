import React, {Component} from 'react';
import {Button, Text} from 'native-base';

class PlansCardItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Button full style={{width:'100',height: '100', margin: '1%'}}><Text>{this.props.department.value}</Text></Button>
        )
    }
}
export default PlansCardItem;

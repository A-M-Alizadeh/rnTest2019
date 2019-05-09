import React,{ Component } from 'react';
import {Card, CardItem,View, Text} from 'native-base';
import { Image } from 'react-native';
import style from '../styles';

class PlansCardItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Card >
            <CardItem cardBody >
              <Image source={{uri: this.props.plan.url}} style={{height: 120, width: 170,margin:1, flex: 1}}/>
            </CardItem>
            <View style={{height:'30%',position: 'absolute',left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-end',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <Text style={style.planCardText}>{this.props.plan.key}طرح شماره </Text>
            </View>
          </Card>
        )
    }
}
export default PlansCardItem;

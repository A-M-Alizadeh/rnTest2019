import React from 'react';
import {Animated,Easing,Dimensions} from 'react-native';
import {View, Button ,Icon} from 'native-base';
import {general} from "./../../src/assets/styles"
import { Actions } from 'react-native-router-flux';

const {height : deviceHeight, width : deviceWidth} = Dimensions.get('window');

export default class BaseLightbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opacity : new Animated.Value(0)
        }
    }

    componentWillMount(){
        this.animate();
    }

    animate(){
        Animated.timing(this.state.opacity,{
            toValue:1,
            duration : 100,
            easing : Easing.linear
        }).start();
    }

    close(){
        Animated.timing(this.state.opacity,{
            toValue:0,
            duration : 100,
            easing : Easing.linear
        }).start(Actions.pop);
    }

    _renderLightBox(){
        const {children,verticalPercent=1,horizontalPercent=1} = this.props;
        const width =verticalPercent ? deviceWidth*verticalPercent : deviceWidth;
        const height = horizontalPercent ? deviceHeight*horizontalPercent : deviceHeight;
        return(
            <View style={{width,height,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                {children}
                <Button transparent style={{position:'absolute',top:0,left:0}} onPress={()=>this.close()}>
                    <Icon name="md-close-circle" style={{ fontSize: 30, color: '#34495e' }}/>
                </Button>
            </View>
        );
    }

    render(){
        return(
            <Animated.View style={[general.lightbox,{opacity:this.state.opacity}]}>
                {this._renderLightBox()}
            </Animated.View>
        )
    }
}
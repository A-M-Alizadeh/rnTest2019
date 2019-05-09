import React,{ Component } from 'react';
import {Text,View,Button} from 'native-base';
import { Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import{Dimens} from '../../utils/Dimens'
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux'

class StickyFooter extends Component{
    constructor(props){
        super(props);
    }

    gotoLogin(){
        Actions.login('auth');
        console.log(this.props.isLoggedIn);
    }

    render(){
        return(
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                
                <View style={{flexDirection:'row',justifyContent:'center',width:'40%'}}>
                   <Text style={stylesss.footerText}>راهنما</Text>
                </View>

                <View>
                    <Image source={require('./../../src/assets/images/logo.png')} style={{margin:3,width:42,height:42}}/>
                </View>

                {this.props.isLoggedIn ? (
                    <View style={{flexDirection:'row',justifyContent:'center',width:'40%',alignItems:'center'}}>
                        <Text style={stylesss.footerLightText}>{this.props.userData.lName}</Text>
                        <Text style={stylesss.footerLightText}>{this.props.userData.fName}</Text>
                    </View>
                ) : (
                    <View style={{flexDirection:'row',justifyContent:'center',width:'40%',alignItems:'center'}}>
                        <Text style={stylesss.footerLightText}>| ثبت نام</Text>
                        <Text style={stylesss.footerText} onPress={()=>{this.gotoLogin()}}>ورود </Text>
                    </View>
                )}

                {/*<UsernameOrLogin isLoggedIn={this.props.isLoggedIn}/>*/}

            </View>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        isLoggedIn : state.commonDataReducer.isLoggedIn,
        userData : state.loggedInModelReducer,
    }
};
export default connect(mapStateToProps,null)(StickyFooter);

export const stylesss =  EStyleSheet.create({
    footerText:{
        fontFamily:'$fontFamily',
        fontSize: Dimens.largeFont,
        margin:Dimens.smallMargin,
        color:'white',
        fontWeight:'bold'
    },
    footerLightText:{
        fontFamily:'$fontFamily',
        fontSize: Dimens.smallFont,
        margin:Dimens.smallMargin,
        color:'white',
        fontWeight:'bold'
    }
  });
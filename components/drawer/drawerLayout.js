import React from 'react';
import {Container, Content,Text,View, Item, Icon,Picker,Badge,Button} from 'native-base';
import {Image} from 'react-native';
import {general} from "./../../src/assets/styles"
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux'
import {ToastMaker} from '../../utils/ToastMaker'
import {resetToken,setCommonDataIsLoggedIn} from "../../redux/login/LoginActions";

class DrawerLayout extends React.Component{
    constructor(props){
        super(props);
        console.log('hereeeeeee');
    }

    localRmvToken(){
        this.props.resetToken();
        this.props.setCommonDataIsLoggedIn(false);
        ToastMaker().withoutAction('شما با موفقیت از برنامه خارج شدید','warning');
        // Actions.reset('auth');
    }

    render(){
        // var navigationView = (
        //     <View style={{flex: 1, backgroundColor: '#fff'}}>
        //         <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        //     </View>
        // );
        return(

        <Container style={{flex:1,backgroundColor:'#FFB74D'}}>
            <Content>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('./../../src/assets/images/logo.png')} style={{margin:15,width:128,height:128}}/>
                </View>
                <View style={{flex:1,padding:10}}>

                    {!this.props.isLoggedIn ? (
                        <Item style={{justifyContent:'flex-end'}} onPress={()=>Actions.login()}>
                            <View style={{flexDirection: 'row',alignItems:'center',marginRight:10,marginLeft:10}}>
                                <Text style={[general.textTitle_black,{margin:10}]}>ورود به سامانه</Text>
                                <Icon name="md-log-in"/>
                            </View>
                        </Item>
                    ) : (
                        <View/>
                    )}

                    <Item style={{justifyContent:'flex-end'}} onPress={()=>Actions.reset('root')}>
                        <View/>
                        <View style={{flexDirection: 'row',alignItems:'center',marginRight:10,marginLeft:10}}>
                            <Text style={[general.textTitle_black,{margin:10}]}>خانه</Text>
                            <Icon name="md-home"/>
                        </View>
                    </Item>

                    <Item style={{justifyContent:'space-between',flex:1,alignItems:'center'}}>
                        <Badge primary style={{alignSelf: 'center',marginRight:10,marginLeft:10}}>
                            <Text>2</Text>
                        </Badge>
                        <View style={{flexDirection: 'row',alignItems:'center',marginRight:10,marginLeft:10}}>
                            <Text style={[general.textTitle_black,{marginRight:10,marginLeft:10}]}>پیام ها</Text>
                            <Icon name="md-mail"/>
                        </View>
                    </Item>

                    <Item style={{justifyContent:'space-between',flex:1,alignItems:'center'}}>
                        <Badge primary style={{alignSelf: 'center',marginRight:10,marginLeft:10}}>
                            <Text>4</Text>
                        </Badge>
                        <View style={{flexDirection: 'row',alignItems:'center',marginRight:10,marginLeft:10}}>
                            <Text style={general.textTitle_black}>سبد خرید</Text>
                            <Icon name="md-basket"/>
                        </View>

                    </Item>

                    {this.props.isLoggedIn ? (
                        <Item style={{justifyContent:'flex-end'}} onPress={this.localRmvToken.bind(this)}>
                            <View/>
                            <View style={{flexDirection: 'row',alignItems:'center',marginRight:10,marginLeft:10}}>
                                <Text style={[general.textTitle_black,{margin:10,color:'red'}]}>خروج</Text>
                                <Icon name="md-settings"/>
                            </View>
                        </Item>
                    ) : (
                        <View/>
                    )}

                </View>
            </Content>
        </Container>

        )
    }
}

const mapStateToProps = (state)=>{
    return{
        rehidrated : state.rehidrated,
        isLoggedIn : state.commonDataReducer.isLoggedIn,
    }
};
const mapDispatchToProps = dispatch=>{
    return{
        resetToken: ()=>{dispatch(resetToken())},
        setCommonDataIsLoggedIn: (isLoggedIn)=>dispatch(setCommonDataIsLoggedIn(isLoggedIn)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DrawerLayout);
import React from 'react';
import {Container, Text, Spinner} from 'native-base';
import {StatusBar, Animated, Easing, ActivityIndicator, View} from 'react-native';
import {general} from "./../../src/assets/styles"
import { Actions } from 'react-native-router-flux';
import OfflineNotice from '../../utils/OfflineNotice'
import Colors from '../../utils/Colors'
import {connect} from 'react-redux'
import {Splash_STR} from './Strings'
import {Auth_Requests} from '../../api/login/LoginApi';
import {setCommonDataIsLoggedIn} from "../../redux/login/LoginActions";

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.animatedValue= new Animated.Value(0);
    }

    componentWillMount(){
        this.animate();
    }

    animate(){
        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue,{
            toValue:1,
            duration : 500,
            easing : Easing.linear
        }).start(()=>this.animate())
    }

    render(){
        if(this.props.rehidrated === true){
            this.checkUserLogin();
        }
        
        const opacity = this.animatedValue.interpolate({
            inputRange: [0 ,0.5, 1],
            outputRange: [0.6 ,1, 0.6],
        });

        return(
            <Container style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.colorPrimaryDark}}>
            <StatusBar hidden/>
                
            <Animated.Image source={require('./../../src/assets/images/logo.png')} style={{margin:15,width:120,height:120,opacity}}/>
            <Text style={general.appBarTitle_white}>{Splash_STR.companyName}</Text>
            <Text style={general.headerTitle_white}>{Splash_STR.slogan}</Text>
            <Spinner color={Colors.accentColor}/>
            <OfflineNotice/>
            </Container>
        )
    }

    checkUserLogin(){
            let apiToken = this.props.access_token;
            if(apiToken === null)
                apiToken = '.';

            if(apiToken !== null){
                //try catch
                Auth_Requests().MBZGetLoggedinModel().then(response=>{
                    this.props.setCommonDataIsLoggedIn(true);
                    Actions.reset('root');
                }).catch(error=>{
                    this.props.setCommonDataIsLoggedIn(false);
                    Actions.reset('root');
                });
            }else{
                console.log('meu meu meu');
                this.props.setCommonDataIsLoggedIn(false);
                Actions.reset('root');
                console.log('mau mau mau');
            }
    }
}

const mapStateToProps = (state)=>{
    return{
        access_token : state.tokenReducer.access_token,
        rehidrated : state.rehidrated
    }
};

const mapDispatchToProps = dispatch=>{
    return{
        setCommonDataIsLoggedIn: (isLoggedIn)=>dispatch(setCommonDataIsLoggedIn(isLoggedIn)),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Splash);
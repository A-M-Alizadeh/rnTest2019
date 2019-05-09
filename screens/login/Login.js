import React, {Component} from 'react';
import {Button, Container, Content, Form, Header, Icon, Input, Item, Right, Spinner, Text, View} from 'native-base';
import {formStyle, general} from "./../../src/assets/styles"
import {UserData_Requests} from '../../api/login/LoginApi';
import OfflineNotice from '../../utils/OfflineNotice'
import Colors from '../../utils/Colors'
import {connect} from 'react-redux'
import {Login_STR} from './Strings'
import {fetchLoginToken, setCommonDataIsLoggedIn} from "../../redux/login/LoginActions";

class Login extends Component{

    constructor(props){
        super(props);

        this.state=({
            // isLoading:false,
            username:{
                value:'09372897889',
                error:''
            },
            password:{
                value:'123456789',
                error:''
            },
            userData:{
                username:'',
                fName:'',
                lName:'',
                city_id:'',
                emailAddress:'',
                mobileNo:'',
                firstLogin:'',
                id:'',
                userIsMember:'',
            },
            defaultSpec:{
                id:null,
                itemInList:null,
            },
        });
    }

    isEmail = (email = null) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return regex.test(email);
        };
    isMobile = (mobile = null) => {
        const regex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        return regex.test(mobile);
    };

    handleSubmit(){
        console.log(this.state);
        let {username,password} = this.state;
        if(username.value === ''){
            this.setState({
                username:{
                    value:'',
                    error:'فیلد نام کاربری نمیتواند خالی باشد.'
                }
            });
            return;
        }
        if(password.value === ''){
            this.setState({
                password:{
                    value:'',
                    error:'فیلد رمز عبور نمیتواند خالی باشد.'
                }
            });
            return;
        }
        if(!this.isEmail(username.value) && !this.isMobile(username.value)){
            this.setState({
                username:{
                    value:username.value,
                    error:'فرمت نام کاربری صحیح نمیباشد.'
                }
            });
            return;
        }

        this.setState(prevState => ({
            isLoading: true
          }));

        //new for mbz
        var loginData = {username: this.state.username.value,password:this.state.password.value,grant_type:'password'};

        var bodyFormData = new FormData();
        bodyFormData.append('username', this.state.username.value);
        bodyFormData.append('password', this.state.password.value);
        bodyFormData.append('grant_type', 'password');

        //login with calling actions down
        this.props.fetchLoginToken(bodyFormData);
        //login with calling actions up

        //login requests start here
        // Auth_Requests().MBZLogin(bodyFormData)
        //     .then(response=>{
        //         console.log(response);
        //         this.setState(prevState => ({
        //             isLoading: false
        //         }));
        //         this.props.saveToken(response.data);
        //     })
        //     .then(()=>{

                // Auth_Requests().MBZGetLoggedinModel().then(
                //     response=>{
                //         console.log('+++++++++++++++++++++++++++');
                //         this.setState({
                //             userData:{
                //                 fName:response.data.user.name,
                //                 lName:response.data.user.family,
                //                 username:response.data.user.username,
                //                 city_id:response.data.user.city_id,
                //                 emailAddress:response.data.user.defaultUserContact_emailAddress,
                //                 mobileNo:response.data.user.defaultUserContact_mobileNo,
                //                 firstLogin:response.data.user.firstLogin,
                //                 id:response.data.user.id,
                //                 userIsMember:response.data.userIsMember,
                //             }
                //         });
                //         this.props.saveUserData(this.state.userData);
                //         this.props.setCommonDataIsLoggedIn(true);
                        //
                        // console.log(this.state.userData.id);
                        //
            //             Actions.reset('root');
            //         }).catch(error=>{
            //             console.log('hello error !!!');
            //             console.log(error)
            //     })
            // })
            // .catch(error=>{
            //     console.log('WHAT THE FAAAZZZZ');
            //     console.log(error);
            //     this.setState(prevState => ({
            //         isLoading: false
            //     }));
            // });
        //login requests end here
    }

    render(){
        const usernameError = this.state.username.error;
        const passwordError = this.state.password.error;
        return(
            <Container style={{backgroundColor:Colors.colorPrimary}}>
            
                <Header androidStatusBarColor={Colors.statusBarColor} style={{backgroundColor:Colors.colorPrimaryDark}}>
                    <Right>
                        <Text style={general.appBarTitle_white}>{Login_STR.title}</Text>
                    </Right>
                </Header>
                <OfflineNotice />
                <Content>
                    <View style={{alignItems:'center',margin:10}}>
                        <Text style={general.appBarTitle_white}>{Login_STR.companyName}</Text>
                        <Text style={general.headerTitle_white}>{Login_STR.slogan}</Text>
                    </View>

                    <View style={formStyle.formWrapper}>
                        <Form style={formStyle.form} >
                            <Item rounded style={formStyle.item} error={usernameError !== ''}>
                                <Input 
                                // onEndEditing={()=>{console.log('i think i found itttt')}}
                                //   onChange={()=>{console.log('i think i found itttt')}}
                                // onContentSizeChange={()=>{console.log('size changed')}}

                                value={this.state.username.value}
                                    placeholderTextColor='#F5F5F5' 
                                    style={formStyle.input} 
                                    placeholder={Login_STR.getUsername}
                                    onChangeText={username => this.setState({
                                        username:{value:username,error:''}
                                    })}
                                />
                                <Icon active name='md-mail'/>
                            </Item>
                            <Text style={[formStyle.error, this._checkDisplay(usernameError)]}>{usernameError}</Text>
                            
                            <Item rounded style={formStyle.item} error={passwordError !== ''}> 
                                <Input 
                                value={this.state.password.value}
                                    placeholderTextColor='#F5F5F5'
                                    style={formStyle.input} 
                                    placeholder={Login_STR.getPassword}
                                    secureTextEntry
                                    onChangeText={password => this.setState({
                                        password:{value:password,error:''}
                                    })}
                                />
                                <Icon active name='md-key' />
                            </Item>

                            {/* <Item rounded style={formStyle.item} error={passwordError !== ''}> 
                                <Input
                                    value={this.state.nameeee}
                                    placeholderTextColor='#F5F5F5'
                                    style={formStyle.input} 
                                    onChangeText={this.changeNameeee.bind(this)}
                                />
                            </Item> */}

                            <Text style={[formStyle.error, this._checkDisplay(passwordError)]}>{passwordError}</Text>

                            <Button full style={formStyle.submitBtn} onPress={this.handleSubmit.bind(this)}>
                                <Text style={formStyle.submitTxt}>{Login_STR.enter}</Text>
                                { this.props.fetching ? <Spinner  size='small' color={Colors.colorPrimary}/> : null }
                            </Button>
                            
                            <View style={general.topLine}>
                                <Button hasText transparent>
                                    <Text style={general.smallText_white}>{Login_STR.forgetPassword} </Text>
                                </Button>
                            </View>

                            <View style={{alignContent: 'center',flex: 1,alignSelf: 'center',bottom:10}}>
                                <Button hasText style={formStyle.submitBtn}>
                                    <Text style={general.appBarTitle_white}>{Login_STR.signUp} </Text>
                                </Button>
                            </View>

                        </Form>
                    </View>
                </Content>
            </Container>
        )
    }

    _checkDisplay(field){
        return {display : field ===''?'none':'flex'}
    }

}

const mapStateToProps = (state)=>{
    return{
        fetching: state.tokenReducer.fetching,
    }
};

const mapDispatchToProps = dispatch=>{
    return{
        saveToken: jwtToken=>{dispatch(setToken(jwtToken));},

        saveUserData: userData=>{dispatch(setUserData(userData));},

        setCommonDataIsLoggedIn: (isLoggedIn)=>dispatch(setCommonDataIsLoggedIn(isLoggedIn)),

        fetchLoginToken: (loginModel)=>dispatch(fetchLoginToken(loginModel)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
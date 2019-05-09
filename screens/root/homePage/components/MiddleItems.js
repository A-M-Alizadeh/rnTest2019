import React,{ Component } from 'react';
import {Text, Button,Icon, View} from 'native-base';
import { Actions } from 'react-native-router-flux'
import {connect} from "react-redux";
import {ToastMaker} from "../../../../utils/ToastMaker";



class MiddleItems extends Component{
    constructor(props){
        super(props);

    }

    handleDepartmentClick(){
        console.log(this.props.cityIsSelected +' '+ this.props.allDepartments);
        if(this.props.cityIsSelected && this.props.allDepartments!=null){
            Actions.departments();
        }else {
            ToastMaker().withoutAction('لطفا ابتدا بازار را انتخاب نمایید','warning');
        }
    }

    render(){
        return(
            <View>
                    <Button full style={{margin:'1%'}} onPress={this.handleDepartmentClick.bind(this)}><Text>همه دپارتمان ها</Text></Button>

                    <View style={style.linearView}>
                    
                    <View style={{flexDirection:'column',height:200,width: '29%', margin: '1%',alignItems: 'center'}}>
                            <Button full style={{width:'100%',height: '49%', margin: '1%'}}><Text>نسیه</Text></Button>

                            <Button full style={{width:'100%',height: '49%', margin: '1%'}}><Text>نسیه اقساط</Text></Button>
                        </View>
                        
                        {/* <View style={{backgroundColor:'white',width:'36%',height:'95%',margin:'1%',alignItems:'center',alignContent:'center',justifyContent:'center'}}> */}
                        <Button full style={{width:'36%',height:'98%',margin:'1%',flexDirection:'column'}} onPress={()=>{Actions.cityLightBox();}}>
                            <Icon style={{ fontSize: 48 }} name="md-basket" />
                            <Text > خرید از بازار اعضا </Text>
                            </Button>
                        {/* </View> */}
                        
                        <View style={{flexDirection:'column',height:200,width: '29%', margin: '1%',alignItems: 'center'}}>
                    
                            {/* <View style={{backgroundColor:'yellow',width:'100%',height: '49%', margin: '1%',alignItems: 'center',justifyContent:'center'}}>
                                <Text> بن هدیه </Text>
                            </View>
                            <View style={{backgroundColor:'purple',width:'100%',height: '49%', margin: '1%',alignItems: 'center',justifyContent:'center'}}>
                                <Text > اعتبار کاربری </Text>
                            </View> */}
                            <Button full style={{width:'100%',height: '49%', margin: '1%'}}><Text>بن هدیه</Text></Button>

                            <Button full style={{width:'100%',height: '49%', margin: '1%'}}><Text>اعتبار کاربری</Text></Button>
                        </View>

                    </View>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        cityIsSelected : state.AutoCompleteCitiesReducer.cityIsSelected,
        allDepartments : state.HomeHorizontalDepartmentReducer.allDepartments,
    }
};

export default connect(mapStateToProps,null)(MiddleItems);
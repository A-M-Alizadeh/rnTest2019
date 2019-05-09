import React, { Component } from 'react';
import MySearchableDropDown from './MySearchableDropDown';
import {Dimens} from "../../../../utils/Dimens";
import {connect} from "react-redux";
import {fetchAutoCompleteCities, resetAutoCompleteCities,setCommonDataCity} from '../../../../redux/login/LoginActions'


class AutoCompleteCity extends Component {
    constructor(props){
        super(props);
        this.state={
            commonData:{
                vitrinId: '',
                city:'',
            }
        }
    }
    getUpdatedData(city){
        if(city.length >=2){
            this.props.fetchAutoCompleteCities(city);
        }
    };

    render() {
        return (
            <MySearchableDropDown
                onTextChange={text => {this.getUpdatedData(text)}}
                onItemSelect={item => {
                    this.setState({
                        commonData:{
                            vitrinId:item.id,
                            city:item.text,
                        }
                    });
                    this.props.setCommonDataCity(this.state.commonData);
                    this.props.resetAutoCompleteCities();}
                }
                containerStyle={{ padding: 5,height:150}}
                textInputStyle={{
                    padding: 8,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    width:200,
                    textAlign:'center',
                    fontSize:Dimens.smallFont
                }}
                itemStyle={{
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: 'white',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                    alignItems: 'center'
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140}}
                items={this.props.cityItems}
                defaultIndex={2}
                placeholder="بازار خود را انتخاب نمایید"
                resetValue={false}
                underlineColorAndroid="transparent"
            />
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        vitrinId : state.commonDataReducer.vitrinId,
        city : state.commonDataReducer.city,
        cityItems: state.AutoCompleteCitiesReducer.content,
    }
};

const mapDispatchToProps = dispatch=>{
    return{
        saveCommonData: commonData=>{dispatch(setCommonData(commonData));},
        fetchAutoCompleteCities: (city)=>dispatch(fetchAutoCompleteCities(city)),
        resetAutoCompleteCities: ()=>dispatch(resetAutoCompleteCities()),
        setCommonDataCity: (selectedCity)=>dispatch(setCommonDataCity(selectedCity)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)( AutoCompleteCity);
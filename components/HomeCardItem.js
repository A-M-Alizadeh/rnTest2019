import React,{ Component } from 'react';
import {Card, CardItem, Text, View} from 'native-base';
import { Image } from 'react-native';
import style from '../screens/root/homePage/styles';
import APIPathHelper from "../api/APIPathHelper";
import {NumberWithCommas} from "../utils/NumberWithCommas";

class HomeCardItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card style={{width:130}}>
            <CardItem cardBody >
              <Image source={{uri: `${APIPathHelper.BASE_URL}/fso/download/single/eshop/productType/${this.props.product.id}/cover/`}} style={{height: 130, width: null,margin:1, flex: 1}}/>
            </CardItem>
            <Text numberOfLines={2}  style={[style.cardText,{lineHeight: 20,}]}>{this.props.product.title}</Text>

                {this.props.product.unitPriceTaxInclude !== this.props.product.productTypeUnitPriceTaxIncludeDiscountInclude ? (
                    <View style={style.linearView}>
                        <Text style={style.depricatedText}>تومان</Text>
                        <Text style={style.depricatedText}>{this.props.product.unitPriceTaxInclude}</Text>
                    </View>
                ) : (
                    <View/>
                )}

            <View style={style.linearView}>
              <Text style={style.cardText}>تومان</Text>
              <Text style={style.cardText}>{NumberWithCommas(this.props.product.productTypeUnitPriceTaxIncludeDiscountInclude)}</Text>
            </View>

          </Card>
        )
    }
}
export default HomeCardItem;










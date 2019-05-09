import React from 'react';
import {Image} from 'react-native'
import {Card, Text, View} from 'native-base'
import BaseLightbox from './../../../../../components/lightbox/BaseLightbox';
import AutoCompleteCity from '../AutoCompleteCity'
import {connect} from "react-redux";

class CityLightBox extends React.Component {

    render() {
        return (
            <BaseLightbox verticalPercent={0.7} horizontalPercent={0.5}>
                <View style={{width: '90%', alignItems: 'center'}}>
                    <Image source={require('./../../../../../src/assets/images/iran_map_png.png')}
                           style={{height: 140, width: 160, margin: 1}}/>
                    <Text>{this.props.city}</Text>
                    <AutoCompleteCity/>
                </View>
            </BaseLightbox>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        city: state.commonDataReducer.city,
    }
};

export default connect(mapStateToProps,null)(CityLightBox);
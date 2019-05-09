import {Icon, Input, Item, Label} from 'native-base'
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from 'prop-types';
import Colors from "../utils/Colors";

const CustomInput = ({label, placeHolder, onChangeText, icon, validation, error,disabled}) => {
    const {_item, _label, _input,_icon} = styles;
    return (
            <Item rounded style={_item} error={error}>
                <Input
                    placeholderTextColor='#F5F5F5'
                    style={_input}
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                />
                <Label style={_label}>{label}</Label>
                <Icon style={_icon} active name={icon}/>
            </Item>
    )
};

CustomInput.defaultProps = {};

CustomInput.propTypes = {
    placeHolder: PropTypes.string,
    label: PropTypes.string
};

const styles = EStyleSheet.create({
    _label: {
        fontSize: '$smallestFont',
        color: Colors.white,
        margin:'$mediumMargin',
        fontWeight: 'bold'
    },
    _input: {
        fontFamily: "$fontFamily",
        fontSize: '$smallFont',
        color: Colors.white,
        textAlign: 'center'
    },
    _item: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '$DefaultRadious',
        margin: '$smallPadding'
    },
    _icon:{
        color: Colors.white,
        margin:'$smallestMargin'
    }
});

export default CustomInput;

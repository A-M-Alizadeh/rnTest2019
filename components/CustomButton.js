import {Button, Spinner, Text} from 'native-base'
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from 'prop-types';
import CustomSpinner from "./CustomSpinner";
import {Dimens} from "../utils/Dimens";

const CustomButton = ({text, onPress,disabled,loading,icon , width}) => {
    const {_button,_spinner,_text } = styles;
    return (
        <Button full style={_button} onPress={onPress} width={width} disabled={loading || disabled}>
            {loading ? <CustomSpinner loading={loading}/> : <Text style={_text}>{text}</Text> }
        </Button>
    )
};

CustomButton.defaultProps = {};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
};

const styles = EStyleSheet.create({
    _spineer:{},
    _button:{
        fontSize:Dimens.mediumFont,
        fontFamily:'$fontFamily',
        borderRadius: '$DefaultRadious',
        margin: '$smallPadding'
    },
    _text:{}

});

export default CustomButton;

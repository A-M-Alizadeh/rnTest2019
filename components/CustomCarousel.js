import {Text, View} from 'native-base'
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomSpinner from "./CustomSpinner";
import {FlatList} from "react-native";

const CustomCarousel = ({title, data, renderItem, keyExtractor}) => {
    const {_view, _text} = styles;
    // if (data.length > 0) {
        return (
            <View>
                <Text style={_text}>{title}</Text>
                <View style={_view}>
                    <FlatList
                        horizontal={true}
                        data={data}
                        renderItem={renderItem}
                        ListEmptyComponent={<CustomSpinner loading={true}/>}
                        keyExtractor={keyExtractor}
                    />
                </View>
            </View>
        )
    // } else {
    //     return (
    //         <View/>
    //     );
    // }
};

CustomCarousel.defaultProps = {};

CustomCarousel.propTypes = {};

const styles = EStyleSheet.create({
    _view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    _text: {
        fontSize: 16,
        color: 'white',
        marginTop: 5,
        marginRight: 10,
        marginBottom: 3
    }
});

export default CustomCarousel;
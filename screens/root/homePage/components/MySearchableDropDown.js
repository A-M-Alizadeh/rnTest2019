import React, { Component } from 'react';
import {
    Text,
    FlatList,
    TextInput,
    View,
    TouchableOpacity,
    Keyboard
} from 'react-native';

const defaultItemValue = {
    text: '',
    id: 0,
    elementStr:''
};

export default class MySearchableDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            listItems: [],
            focus: false
        };
    }

    renderList = () => {
        if (this.state.focus) {
            return (
                <FlatList
                    style={{ ...this.props.itemsContainerStyle }}
                    keyboardShouldPersistTaps="always"
                    dataSource={ds.cloneWithRows(this.state.listItems)}
                    renderRow={this.renderItems}
                />
            );
        }
    };

    renderFlatList = () => {
        if (this.state.focus) {
            return (
                <FlatList
                    style={{ ...this.props.itemsContainerStyle }}
                    keyboardShouldPersistTaps="always"
                    data={this.state.listItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => this.renderItems(item)}
                />
            );
        }
    };

    componentDidMount = () => {
        const listItems = this.props.items;
        const defaultIndex = this.props.defaultIndex;

        if (defaultIndex && listItems.length > defaultIndex) {
            this.setState({
                listItems,
                item: listItems[defaultIndex]
            });
        } else {
            this.setState({ listItems });
        }
    };

    searchedItems = searchedText => {
        // var ac = this.props.items.filter(function(item) {
        //     return item.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
        // });
        let item = {
            id: -1,
            text: searchedText
        };
        var myAc = this.props.items;
        this.setState({ listItems: myAc, item: item });
        const onTextChange = this.props.onTextChange;

        if (onTextChange && typeof onTextChange === 'function') {
            setTimeout(() => {
                onTextChange(searchedText);
            }, 0);
        }
    };

    renderItems = item => {
        return (
            <TouchableOpacity
                style={{ ...this.props.itemStyle }}
                onPress={() => {
                    this.setState({ item: item, focus: false });
                    Keyboard.dismiss();
                    setTimeout(() => {
                        this.props.onItemSelect(item);

                        if (this.props.resetValue) {
                            this.setState({ focus: true, item: defaultItemValue });
                            this.input.focus();
                        }
                    }, 0);
                }}
            >
                <Text style={{ ...this.props.itemTextStyle }}>{item.text}</Text>
            </TouchableOpacity>
        );
    };

    renderListType = () => {
        return this.props.listType === 'FlatList' //changed form ListView to FlatList
            ? this.renderList()
            : this.renderFlatList();
    };

    render = () => {
        return (
            <View
                keyboardShouldPersist="always"
                style={{ ...this.props.containerStyle }}
            >
                <TextInput
                    ref={e => (this.input = e)}
                    underlineColorAndroid={this.props.underlineColorAndroid}
                    onFocus={() => {
                        this.setState({
                            focus: true,
                            item: defaultItemValue,
                            listItems: this.props.items
                        });
                    }}
                    onChangeText={text => {
                        this.searchedItems(text);
                    }}
                    value={this.state.item.text}
                    style={{ ...this.props.textInputStyle }}
                    placeholderTextColor={this.props.placeholderTextColor}
                    placeholder={this.props.placeholder}
                />
                {this.renderListType()}
            </View>
        );
    };
}
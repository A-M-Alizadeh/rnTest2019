import React,{ Component } from 'react';
import {FlatList} from 'react-native'
import {Text ,View,Spinner} from 'native-base';
import HomeCardItem from './HomeCardItem';
import Colors from '../utils/Colors'


class HomeHorizontalList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }

    render(){
        if(this.props.data.length > 0){
            return(
                <View >
                    <Text style={{fontSize:16,color:'white',marginTop:5,marginRight:10,marginBottom:3}}>{this.props.title}</Text>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <FlatList
                            horizontal={true}
                            data={this.props.data}
                            renderItem={({item}) => <HomeCardItem product={item}/>}
                            ListEmptyComponent={this.renderEmptyList}
                            keyExtractor = { (item) => item.id.toString() }
                        />
                    </View>
                </View>
            );
        }else {
            return(<View/>);
        }
    }

    renderEmptyList(){
        return(
            <Spinner color={Colors.accentColor}/>
        )
    }

}

export default HomeHorizontalList;
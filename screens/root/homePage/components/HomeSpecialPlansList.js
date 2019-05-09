import React,{ Component } from 'react';
import {FlatList} from 'react-native'
import {Spinner, Text, View} from 'native-base';
import PlansCardItem from './PlansCardItems';
import Colors from "../../../../utils/Colors";


class HomeSpecialPlansList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.getdata();
    }

    async getdata() {
        setTimeout(() => {
            this.setState({data: [{key: 'a',url:'http://www.mbazar.info/vwww/utility/theme/theme1/graphic/intro/7pic/rev2/priority3.jpg'},
                    {key: 'b',url: 'http://www.mbazar.info/vwww/utility/theme/theme1/graphic/intro/7pic/rev2/priority2.jpg'},
                    {key: 'c',url: 'http://www.mbazar.info/vwww/utility/theme/theme1/graphic/intro/7pic/rev2/priority1.jpg'},
                    {key: 'd',url: 'http://www.mbazar.info/vwww/utility/theme/theme1/graphic/intro/7pic/rev2/jahaz.jpg'},
                    {key: 'e',url: 'http://www.mbazar.info/vwww/utility/theme/theme1/graphic/intro/7pic/rev2/bime.jpg'}]})
        }, 1500)
    }

    render() {
        // if (this.state.data.length === 0) {
        //     return (
        //         <Spinner color={Colors.accentColor}/>
        //     )
        // } else {
        if(this.state.data.length > 0){
            return(
                <View>
                    <Text style={{fontSize: 16, color: 'white', marginTop: 5, marginRight: 10, marginBottom: 3}}>طرح های
                        ویژه</Text>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <FlatList
                            horizontal={true}
                            data={this.state.data}
                            renderItem={({item}) => <PlansCardItem plan={item}/>}
                            ListEmptyComponent={this.renderEmptyList}
                        />
                    </View>
                </View>
            );
        }else {
            return(
                <View/>
            );
        }
        }


    renderEmptyList(){
        return(
            <Spinner color={Colors.accentColor}/>
        )
    }

}


export default HomeSpecialPlansList;
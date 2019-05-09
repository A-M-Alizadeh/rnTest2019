import React,{ Component } from 'react';
import {FlatList} from 'react-native'
import {Spinner, Text, View} from 'native-base';
import DepartmentItem from "./DepartmentItem";


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
            this.setState({data: [{key: 'a',value:'خوشبو کننده هوا'},
                    {key: 'b',value: 'مایع دستشویی'},
                    {key: 'c',value: 'محصولات سلولوزی'},
                    {key: 'd',value: 'ظرفشویی'},
                    {key: 'e',value: 'لباسشویی'}]})
        }, 1500)
    }

    render() {
        if(this.state.data.length > 0){
            return(
                <View>
                    <Text style={{fontSize: 16, color: 'white', marginTop: 5, marginRight: 10, marginBottom: 3}}>دپارتمان ها</Text>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <FlatList
                            horizontal={true}
                            data={this.state.data}
                            renderItem={({item}) => <DepartmentItem department={item}/>}
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
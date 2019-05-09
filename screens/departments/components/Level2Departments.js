import React from 'react';
import {Content, List, ListItem, Tab, Text,Card,CardItem,Body} from 'native-base';
import Colors from "../../../utils/Colors";
import {Dimens} from "../../../utils/Dimens";
import Level3Departments from "./Level3Departments";
import {FlatList} from "react-native";

class Level2Departments extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.subCategories);
    }

    render(){
        return(
            <Content style={{backgroundColor:Colors.colorPrimary}}>
                    {this.props.subCategories.map((cat) =>
                        <Content key={cat.id}>
                            <Card>
                                <CardItem style={{backgroundColor:Colors.accentColor}}>
                                    <Text style={{flex:1,color:Colors.black,fontSize:Dimens.mediumFont,paddingRight:4,paddingTop:8,paddingBottom:8}}>{cat.title}</Text>
                                </CardItem>
                            </Card>
                            <FlatList
                                data={cat.level3Categories}
                                renderItem={({item}) => <Level3Departments level3={item}/>}
                                ListEmptyComponent={this.renderEmptyList}
                                keyExtractor = { (item) => item.id.toString()}
                            />
                        </Content>
                    )}
            </Content>
        )
    }
}

export default Level2Departments;
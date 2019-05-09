import React from 'react';
import {Container, Tab, Tabs, ScrollableTab, Text, View} from 'native-base';
import Colors from '../../utils/Colors'
import {connect} from 'react-redux'
import Level2Departments from "./components/Level2Departments";
import OfflineNotice from "../../utils/OfflineNotice";

class Departments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categories:[],
            // categories:[{
            //     title:'',
            //     imageHashedPath:'',
            //     level2Categories:[{
            //         title:'',
            //         id:'',
            //         level3Categories:[{
            //             title:'',
            //             id:'',
            //             thumbnailImageHashedPath:''}]
            //     }],
            // }],
        };
        this.seperateCategories = this.seperateCategories.bind(this);
    }
    componentDidMount(){
        this.seperateCategories();
    }

    seperateCategories(){
        var keys = Object.values( Object.values(this.props.allDepartments));
        var tempCategories = [];
        for (var i = 0; i < keys.length; i++) {
            var tempObj = {};
            tempObj.title = keys[i].title;
            tempObj.id = keys[i].id;
            tempObj.imageHashedPath = keys[i].imageHashedPath;

            var level2Categories = [];
                for (let j = 0; j <keys[i].departmentLevel2ColumnIndex1FrontModels.length; j++) {
                    console.log('level [2 1]-> '+j+keys[i].departmentLevel2ColumnIndex1FrontModels[j].title);
                    let tempLevel2Category = {};
                    tempLevel2Category.title = keys[i].departmentLevel2ColumnIndex1FrontModels[j].title;
                    tempLevel2Category.id = keys[i].departmentLevel2ColumnIndex1FrontModels[j].id;


                    let level3Categories =[];
                    // level3Categories.pop();
                    for (let k = 0; k < keys[i].departmentLevel2ColumnIndex1FrontModels[j].departmentLevel3FrontModels.length; k++) {
                        console.log('level 3 [2 1]-> '+k+' '+keys[i].departmentLevel2ColumnIndex1FrontModels[j].departmentLevel3FrontModels[k].title);
                        var tempLevel3Category={};
                        tempLevel3Category.title=keys[i].departmentLevel2ColumnIndex1FrontModels[j].departmentLevel3FrontModels[k].title;
                        tempLevel3Category.id=keys[i].departmentLevel2ColumnIndex1FrontModels[j].departmentLevel3FrontModels[k].id;
                        tempLevel3Category.thumbnailImageHashedPath=keys[i].departmentLevel2ColumnIndex1FrontModels[j].departmentLevel3FrontModels[k].thumbnailImageHashedPath;
                        level3Categories.push(tempLevel3Category);
                    }
                    console.log(level3Categories);
                    tempLevel2Category.level3Categories = level3Categories;
                    level2Categories.push(tempLevel2Category);
                }

                for (let j = 0; j <keys[i].departmentLevel2ColumnIndex2FrontModels.length; j++) {
                    console.log('level [2 2]-> '+j+keys[i].departmentLevel2ColumnIndex1FrontModels[j].title);
                    let tempLevel2Category = {};
                    tempLevel2Category.title = keys[i].departmentLevel2ColumnIndex2FrontModels[j].title;
                    tempLevel2Category.id = keys[i].departmentLevel2ColumnIndex2FrontModels[j].id;


                    let level3Categories =[{}];
                    for (let k = 0; k < keys[i].departmentLevel2ColumnIndex2FrontModels[j].departmentLevel3FrontModels.length; k++) {
                        console.log('level 3 [2 2]-> '+k+' '+keys[i].departmentLevel2ColumnIndex1FrontModels[j].departmentLevel3FrontModels[k].title);
                        let tempLevel3Category={};
                        tempLevel3Category.title=keys[i].departmentLevel2ColumnIndex2FrontModels[j].departmentLevel3FrontModels[k].title;
                        tempLevel3Category.id=keys[i].departmentLevel2ColumnIndex2FrontModels[j].departmentLevel3FrontModels[k].id;
                        tempLevel3Category.thumbnailImageHashedPath=keys[i].departmentLevel2ColumnIndex2FrontModels[j].departmentLevel3FrontModels[k].thumbnailImageHashedPath;
                        level3Categories.push(tempLevel3Category);
                    }
                    tempLevel2Category.level3Categories =level3Categories;
                    level2Categories.push(tempLevel2Category);
                }
            tempObj.level2Categories = level2Categories;
            tempCategories.push(tempObj);
    }
        this.setState({categories:tempCategories},()=>{console.log(this.state.categories)});
        console.log(this.props.allDepartments)
    }

    render(){
        return(
            <Container style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <OfflineNotice />
                <Tabs renderTabBar={()=> <ScrollableTab tabsContainerStyle={{backgroundColor:Colors.colorPrimary}}/>}
                      style={{backgroundColor:Colors.colorPrimary}}>
                    {this.state.categories.map((cat) =>
                        <Tab key={cat.id} heading={cat.title} tabStyle={{ backgroundColor: Colors.colorPrimary}} activeTabStyle={{ backgroundColor:Colors.colorPrimaryDark }}>
                            <Level2Departments subCategories={cat.level2Categories}/>
                        </Tab>
                    )}
                 </Tabs>

            </Container>
        )
}
}

const mapStateToProps = (state)=>{
    return{
    allDepartments : state.HomeHorizontalDepartmentReducer.allDepartments,
    }
};


export default connect(mapStateToProps,null)(Departments);
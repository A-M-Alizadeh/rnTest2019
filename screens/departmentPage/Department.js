import React from 'react';
import {connect} from 'react-redux'
import TopSlider from "../../components/TopSlider";
import HomeHorizontalList from "../../components/HomeHorizontalList";
import {Content} from "native-base";
import Colors from "../../utils/Colors";
import OfflineNotice from "../../utils/OfflineNotice";
import DepartmentHorizontalList from "./components/DepartmentHorizontalList";

class Department extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Content style={{backgroundColor:Colors.colorPrimary}} >
                <DepartmentHorizontalList/>
                <OfflineNotice />
                <TopSlider/>
                <HomeHorizontalList  data={this.props.specialProducts} title={"محصولات ویژه 1"}/>
                <HomeHorizontalList  data={this.props.specialProducts} title={"محصولات ویژه 2"}/>
                <HomeHorizontalList  data={this.props.specialProducts} title={"محصولات ویژه 3"}/>
            </Content>
        )
}
}

const mapStateToProps = (state)=>{
    return{
        specialProducts : state.HomeHorizontalSpecialProductReducer.content,
    }
};


export default connect(mapStateToProps,null)(Department);
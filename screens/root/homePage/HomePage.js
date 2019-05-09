import React, {Component} from 'react';
import {Button, Container, Content, Header, Icon, Left, Right, Text, View} from 'native-base';
import {Actions} from 'react-native-router-flux';
import OfflineNotice from '../../../utils/OfflineNotice'
import Colors from '../../../utils/Colors'
import TopSlider from '../../../components/TopSlider';
import MiddleItems from './components/MiddleItems';
import HomeHorizontalList from '../../../components/HomeHorizontalList';
import HomeSpecialPlansList from './components/HomeSpecialPlansList';
import StickyFooter from '../../../components/footer/StickyFooter';
import styles from './styles';
import {general} from "./../../../src/assets/styles"
import {RefreshControl, ScrollView} from 'react-native'
import DepartmetnsList from "./components/DepartmetnsList";
import {connect} from "react-redux";
import {
    fetchHorizontalDepartmentList,
    fetchHorizontalSpecialProductsList,
    fetchHorizontalWorkProductsList
} from '../../../redux/login/LoginActions'
import EStyleSheet from "react-native-extended-stylesheet";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import CustomSpinner from "../../../components/CustomSpinner";
import CustomCarousel from "../../../components/CustomCarousel";
import HomeCardItem from "../../../components/HomeCardItem";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
        console.log('VITRIN: ' + this.props.vitrinId);
        // this.backPress = backPress.bind(this);
    }

    componentWillMount() {
        // BackHandler.addEventListener('hardwareBackPress', this.backPress);
    }

    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', this.backPress);
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.requestAllData().then(() => {
            this.setState({refreshing: false});
        });
    };

    async requestAllData() {
        this.props.fetchHorizontalDepartmentList();
        this.props.fetchHorizontalSpecialProductsList(this.props.vitrinId);
        this.props.fetchHorizontalWorkProductsList(this.props.vitrinId);
    }

    componentDidMount() {
        this.requestAllData();
    }

    render() {
        return (
            <Container style={{backgroundColor: Colors.colorPrimary}}>
                <Header androidStatusBarColor={Colors.statusBarColor}
                        style={{backgroundColor: Colors.colorPrimaryDark}}>

                    <Left>
                        <Button transparent>
                            <Icon name='md-help' style={general.iconStyle}/>
                        </Button>
                    </Left>

                    <Right>
                        <Button transparent>
                            <Text style={styles.appBarTitle_white} onPress={() => Actions.drawerOpen()}>صفحه اصلی</Text>
                            <Icon name='md-menu' style={{marginLeft: 10}} onPress={() => Actions.drawerOpen()}/>
                        </Button>
                    </Right>
                </Header>

                <OfflineNotice/>

                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                            colors={['#FFB74D', '#607D8B']}
                        />
                    }>

                    <Content>

                        <CustomInput placeHolder={'مقدار مورد نظر رو وارد کنید'} icon={'md-mail'} label={'لیبل'}/>
                        <CustomButton text={'button'} loading={false}/>
                        <CustomSpinner loading={true}/>
                        {/*<CustomCarousel data={this.props.specialProducts} keyExtractor={(item)=>{item.id.toString()}} renderItem={(item)=>{<HomeCardItem product={item} title={'working'}/>}}/>*/}

                        <View style={esstyle.view}>
                            <Text style={esstyle.text}> Hello World</Text>
                        </View>

                        <TopSlider/>

                        <MiddleItems/>

                        <DepartmetnsList data={this.props.specialDepartments} title={"دپارتمانهای ویژه"}/>

                        <HomeHorizontalList data={this.props.specialProducts} title={"محصولات ویژه"}/>

                        <HomeHorizontalList data={this.props.workProducts} title={"محصولات کار و زندگی"}/>

                        <HomeSpecialPlansList title={"طرحهای ویژه"}/>

                    </Content>

                </ScrollView>

                <StickyFooter style={style.footer}/>


            </Container>
        )
    }
}

const esstyle = EStyleSheet.create({
    text: {
        fontSize: '0.75rem',
    },
    view: {
        margin: '$smallestMargin',
        backgroundColor: '$colorPrimaryDark'
    }
});

const mapStateToProps = (state) => {
    return {
        vitrinId: state.commonDataReducer.vitrinId,
        specialDepartments: state.HomeHorizontalDepartmentReducer.content,
        specialProducts: state.HomeHorizontalSpecialProductReducer.content,
        workProducts: state.HomeHorizontalWorkProductReducer.content,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchHorizontalDepartmentList: () => dispatch(fetchHorizontalDepartmentList()),
    fetchHorizontalSpecialProductsList: (vitrinId) => dispatch(fetchHorizontalSpecialProductsList(vitrinId)),
    fetchHorizontalWorkProductsList: (vitrinId) => dispatch(fetchHorizontalWorkProductsList(vitrinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
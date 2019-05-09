import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Router, Scene, Lightbox, Drawer} from 'react-native-router-flux';
import {Root} from 'native-base'
import {ActivityIndicator, View, Text, Dimensions} from 'react-native'
import Colors from './utils/Colors'
import {Provider} from 'react-redux'
import {store, persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {Actions} from 'react-native-router-flux';

// define REM depending on screen width
const {width} = Dimensions.get('window');
const rem = width > 340 ? 18 : 17;

EStyleSheet.build({
    $theme: 'dark',  // required variable for caching!
    $rem: rem,
    //colors
    $statusBarColor: Colors.statusBarColor,
    $colorPrimaryDark: Colors.colorPrimaryDark,
    $colorPrimary: Colors.colorPrimary,
    $accentColor: Colors.accentColor,
    $fontFamily: 'iransans',

    //values
    $largestFont:20,
    $largeFont:18,
    $mediumFont:16,
    $smallFont:'0.8rem',
    $smallestFont:'0.7rem',

    $largestMargin:20,
    $largeMargin:10,
    $mediumMargin:'0.25rem',
    $smallestMargin:'0.1rem',

    $largestPadding:20,
    $largePadding:10,
    $mediumPadding:8,
    $smallPadding:'0.25rem',
    $smallestPadding:'0.1rem',

    $lowRadious:'0.1rem',
    $DefaultRadious:'0.25rem',

});

// screens
import Login from "./screens/login/Login";
import Splash from './screens/splash/Splash';
import DrawerLayout from './components/drawer/drawerLayout';
import HomePage from './screens/root/homePage/HomePage';
import CityLightBox from "./screens/root/homePage/components/lightBox/CityLightBox";
import Departments from "./screens/departments/Departments";
import Department from "./screens/departmentPage/Department";

export default class App extends React.Component {
    componentWillMount() {
        console.log('test test test');
    }

    renderLoading = () => (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>بازار اعضا</Text>
            <ActivityIndicator size='large' color={Colors.accentColor}/>
        </View>
    );

    onBackPress = () => {
        if (Actions.state.index === 0) {
            return false
        }
        Actions.pop();
        return true
    };

    render() {
            return (
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={this.renderLoading()}>
                        <Root>
                            <Router backAndroidHandler={this.onBackPress}>
                                <Scene hideNavBar>
                                    <Scene key="root" hideNavBar>
                                        <Drawer contentComponent={DrawerLayout} key="drawer" drawerPosition="right">
                                            <Lightbox>
                                                <Scene hideNavBar>
                                                    <Scene key="homePage" component={HomePage} initial back='true'/>
                                                    <Scene key="departments" component={Departments}/>
                                                    <Scene key="department" component={Department}/>
                                                </Scene>
                                                <Scene key="cityLightBox" component={CityLightBox}/>
                                            </Lightbox>

                                        </Drawer>
                                    </Scene>

                                    <Scene key="auth" hideNavBar>
                                        <Scene key="login" component={Login} initial/>
                                    </Scene>

                                    <Scene key="splash" hideNavBar component={Splash} initial/>
                                </Scene>

                            </Router>
                        </Root>
                    </PersistGate>
                </Provider>
            );
    }
}

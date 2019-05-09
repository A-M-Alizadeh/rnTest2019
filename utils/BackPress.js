import {Alert,BackHandler} from "react-native";

export const backPress = () => {

    // Put your own code here, which you want to exexute on back button press.
    Alert.alert(
        ' خروج ',
        ' آیا میخواهید از برنامه خارج شوید ؟',
        [
            { text: 'خیر', onPress: () => console.log('NO Pressed') },
            { text: 'بله', onPress: () => BackHandler.exitApp() }
        ],
        { cancelable: false },
    );

    // Return true to enable back button over ride.
    return true;
};
import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { ToastMaker } from '../informer/ToastMaker';
import SnackBar from 'react-native-snackbar-component'

const { width } = Dimensions.get('window');

class OfflineNotice_notworking extends PureComponent {
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
      ToastMaker().Snackbar('ارتباط با اینترنت را چک کنید','باشه');
    }
  };

  render() {
    // if (!this.state.isConnected) {
    //   ToastMaker().Snackbar('2ارتباط با اینترنت را چک کنید','باشه');
    // //   return <MiniOfflineSign />;
    // }
    // return null;
    return(
      <View>
      <SnackBar visible={true} textMessage="Hello There!" actionHandler={()=>{console.log("snackbar button clicked!")}} actionText="let's go"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30
  },
  offlineText: { color: '#fff' }
});

export default OfflineNotice_notworking;
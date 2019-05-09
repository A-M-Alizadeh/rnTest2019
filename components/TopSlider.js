import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
    ActivityIndicator
} from 'react-native'
import Swiper from 'react-native-swiper'
import {ToastMaker} from "../utils/ToastMaker";
const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
};

export default class TopSlider extends Component {
  render () {
    // function callingBack(){
    //     console.log('Hello');
    // }
    //   onTouchStart={(e,state,context)=>{ToastMaker().Snackbar('OOppss','WTF',callingBack)}}
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={180} autoplay
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{bottom: 15, left: 10, right: 10}} loop
          loadMinimalLoader={<ActivityIndicator />}>

          <View style={styles.slide} title={<Text numberOfLines={1}>اسلاید اول</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'http://mbazar.org/vwww/utility/theme/theme1/graphic/intro/slider/slider2.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>اسلاید دوم</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'http://www.mbazar.info/vwww/utility/theme/theme1/graphic/intro/slider/slider3.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>اسلاید سوم</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'http://www.mbazar.info/vwww/utility/theme/theme1/graphic/intro/slider/slider4.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>اسلاید چهارم</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://picsum.photos/640/480/?random'}} />
          </View>

        </Swiper>
      </View>
    )
  }
}
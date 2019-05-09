
import {Toast, View} from 'native-base'
import Snackbar from 'react-native-snackbar';

export function ToastMaker(){
      return{
        withoutAction:(message,type)=> 
             Toast.show({
                text: message,
                textStyle: { color: "black",fontFamily:'iransans',fontSize:14},
                duration: 2000,
                type: type,
                position: "top"
          }),

        withAction:(message,actionText,time,type)=>
          Toast.show({
            text: message,
            textStyle: { color: "black",fontFamily:'iransans',fontSize:14},
            buttonText: actionText,
            buttonTextStyle: { color: "black",fontFamily:'iransans',fontSize:14},
            buttonStyle: { backgroundColor: "white",marginLeft:10,padding:5,borderRadius:2},
            duration: time,
            type: type,
            position: "top",
       }),

       Snackbar:(message,actionText,callback)=>{
         return(
            Snackbar.show({
                    title: message,
                    duration: Snackbar.LENGTH_INDEFINITE,
                    action: {
                      title: actionText,
                      color: 'yellow',
                      onPress: () => { callback() },
                    },
                  })
                )
       },


    }
}
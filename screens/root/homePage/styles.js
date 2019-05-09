import EStyleSheet from 'react-native-extended-stylesheet';
import{Dimens} from '../../../utils/Dimens'

export default style =  EStyleSheet.create({
    cardText:{
        fontFamily:'$fontFamily',
        fontSize: Dimens.smallestFont,
        margin:Dimens.smallMargin,
    },
    planCardText:{
        fontFamily:'$fontFamily',
        fontSize: Dimens.smallFont,
        margin:Dimens.smallMargin,
        color:'white',
        fontWeight:'bold'
    },
    linearView:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    depricatedText:{
        fontFamily:'$fontFamily',
        fontSize: Dimens.smallestFont,
        margin:Dimens.smallMargin,
        color:'red',
        textDecorationLine: 'line-through'
    },
    appBarTitle_white: {
        fontSize: Dimens.largeFont,
        fontWeight: 'bold',
        fontFamily:'$fontFamily',
        color:'white',
    },
    HeaderTitle: {
        fontSize: Dimens.mediumFont,
        fontWeight: 'bold',
        fontFamily:'$fontFamily',
        color:'white',
    }
    
  })
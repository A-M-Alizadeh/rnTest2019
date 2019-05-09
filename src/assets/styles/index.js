import EStyleSheet from 'react-native-extended-stylesheet';
import{Dimens} from '../../../utils/Dimens'

export const general =  EStyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  appBarTitle_black: {
    fontSize: Dimens.mediumFont,
    fontWeight: 'bold',
    fontFamily:'$fontFamily',
    color:'black'
  },    
  appBarTitle_white: {
    fontSize: Dimens.largeFont,
    fontWeight: 'bold',
    fontFamily:'$fontFamily',
    color:'white'
  },
  headerTitle_black:{
    fontSize: Dimens.largeFont,
    fontWeight: 'bold',
    fontFamily:'$fontFamily',
    color:'black',
    margin:Dimens.largeMargin
  },
  headerTitle_white:{
    fontSize: Dimens.largeFont,
    fontWeight: 'bold',
    fontFamily:'$fontFamily',
    color:'white',
    margin:Dimens.largeMargin
  },
  textTitle_black:{
    fontSize: Dimens.mediumFont,
    fontFamily:'$fontFamily',
    color:'black',
    margin:Dimens.largeMargin
  },   
  textTitle_white:{
    fontSize: Dimens.mediumFont,
    fontFamily:'$fontFamily',
    color:'white',
    margin:Dimens.largeMargin
  },
  smallText_white:{
    color:'white',
    textAlign: 'right',
    fontSize: Dimens.smallestFont,
    fontFamily:'$fontFamily',
    alignSelf: 'flex-end',
  },
  smallText_black:{
    color:'white',
    textAlign: 'right',
    fontSize: Dimens.smallestFont,
    fontFamily:'$fontFamily',
    alignSelf: 'flex-end',
  },
  iconStyle:{
    color:'white',
    margin:Dimens.largeMargin
  },
  lightbox:{
    backgroundColor:'rgba(52,52,52,0.5)',
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:Dimens.DefaultRadious
  },
  topLine:{
    flex:1,
    borderTopColor: 'white',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:Dimens.mediumMargin,
  },
});

export const formStyle =  EStyleSheet.create({
  formWrapper:{
    justifyContent: 'center',
  },
  form:{
    padding:Dimens.largePaddingX2,
  },
  item:{
    borderRadius:Dimens.DefaultRadious,
    marginBottom:Dimens.mediumMargin,
    paddingRight:Dimens.largeMargin,
    paddingLeft:Dimens.largeMargin
  },
  input:{
  fontFamily:"$fontFamily",
  fontSize:Dimens.smallFont,
  color:'#fff',
  textAlign:'center'
  },
  icon:{
    color:'white',
  },
  submitBtn:{
    borderRadius:Dimens.DefaultRadious,
    backgroundColor : '$accentColor',
    marginBottom:Dimens.smallMargin,
    marginTop:Dimens.smallMargin,
  },
  submitTxt:{
    fontSize:Dimens.mediumFont,
    fontFamily:'$fontFamily',
  },
  error:{
    color:'#e53935',
    marginBottom:Dimens.mediumMargin,
  },
  customIcon:{color:'white'},
});

export default styles= {
  general,formStyle
}
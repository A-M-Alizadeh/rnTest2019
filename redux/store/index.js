import {createStore,applyMiddleware,compose} from 'redux'
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducers from '../combineReducers'
import { persistStore,persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'remote-redux-devtools';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['tokenReducer','loggedInModelReducer'] // only navigation will be persisted //newly added might need to be deleted
};

const middleWare = [thunk];
middleWare.push(createLogger());

const logger = (store)=>(next)=>(action)=>{
    console.log("action fired => ",action);
    action.Type="DEC";
    next(action);
};

const error = (store)=>(next)=>(action)=>{
    try{
        next(action)
    }catch(e){
        console.log("AHHHHH !! Error in Redux ",e);
    }
};

// const jwtUpdater = (store)=>(next)=>(action)=>{
//     console.log('middleware ware ware');
//     if(action.type === Types.SET_PERSIST){
//         console.log('Auth Middlleeeeeeeee');
//     }
//     next(action);
// }
// middleWare.push(jwtUpdater);

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = createStore(
    persistedReducer,
    undefined,
    compose( //changed from compose
        applyMiddleware(...middleWare),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export const persistor = persistStore(store);
import { combineReducers } from "redux";
import languageReducer from "./language";
import loadingReducer from "./loading";



const reducer = combineReducers({
  language: languageReducer,
  loader: loadingReducer
})

export default  reducer ;
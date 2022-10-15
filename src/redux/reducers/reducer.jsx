import { combineReducers } from "redux"
import { userFavoriteReducer } from "./userFavoriteReducer"
import { userReducer } from "./userReducer"

const reducer = combineReducers({
    userFavorite : userFavoriteReducer,
    user: userReducer
})

export default reducer

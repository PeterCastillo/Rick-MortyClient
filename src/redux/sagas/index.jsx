import { all } from "redux-saga/effects"
import userFavorites  from "./userFavorites"

export default function* rootSaga(){
    yield all([
        userFavorites()
    ])
}
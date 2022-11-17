import { USER_FAVORITE } from "../actionTypes/userFavoritesTypes";
import { select, takeLatest } from "redux-saga/effects"
import Reducer from "../reducers/reducer";
import { useSelector } from "react-redux"
import { deleteFavorite, favorite, getfavorites } from "../../firebase/firebase";

function* handleFavorite({ payload }) {
    try {
        const  getState = yield select((state) => state)
        const user = getState.user
        const itemFavorite = {...payload, uid: user.userStateRegister.uid}
        if(user.userStateRegister.state){
            const favoritos = yield getfavorites(user.userStateRegister.uid)
            const searchFavorito = favoritos.find(item => item.url == itemFavorite.url)
            if(searchFavorito){
                console.log("delete")
                yield deleteFavorite(searchFavorito.docId)
            } else {
                console.log("add")
                yield favorite(itemFavorite)
            }
        }
    } catch(err){
        console.log(err)
    }
}

export default function* userFavorites(){
    yield takeLatest(USER_FAVORITE, handleFavorite)
}
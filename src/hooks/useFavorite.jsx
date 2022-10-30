import { useDispatch, useSelector } from "react-redux"
import { deleteFavorite, favorite, getfavorites } from "../firebase/firebase"
import { handleFavorite } from "../redux/actions/userFavorites"

export const useFavorite = () => {
    const state = useSelector( (state) => state)
    const { userStateRegister  } = state.user
    const { userFavorites } = state.userFavorite
    const dispach = useDispatch()


    const addFavorite = async(info) => {
        if(userStateRegister.state){
            const itemFavorite = {...info, uid: userStateRegister.uid}
            const favoriteItem =  userFavorites.find(item => item.url == info.url)
            if(favoriteItem){
                dispach(handleFavorite(info))
                await deleteFavorite(favoriteItem.docId)
                console.log("delete")
            } else { 
                dispach(handleFavorite(info))
                console.log("add")
                await favorite(itemFavorite)
            }
        }else {
            dispach(handleFavorite(info))
        }
    }

    return { addFavorite }
}
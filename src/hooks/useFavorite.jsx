import { useDispatch, useSelector } from "react-redux"
import { deleteFavorite, favorite, getfavorites } from "../firebase/firebase"
import { handleFavorite } from "../redux/actions/userFavorites"

export const useFavorite = () => {
    const state = useSelector( (state) => state)
    const { userStateRegister  } = state.user
    const dispach = useDispatch()


    const addFavorite = async(info) => {
        if(userStateRegister.state){
            const itemFavorite = {...info, uid: userStateRegister.uid}
            const resFavorites= await getfavorites(userStateRegister.uid)
            if(resFavorites != undefined) {
                const favoriteItem =  resFavorites.find(item => item.url == info.url)
                dispach(handleFavorite(info))
                if(favoriteItem){
                await deleteFavorite(favoriteItem.docId)
            } else{
                const res = await favorite(itemFavorite)
            }
            }
        }else {
            dispach(handleFavorite(info))
        }
    }

    return { addFavorite }
}
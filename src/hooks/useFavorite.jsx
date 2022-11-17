import { useDispatch, useSelector } from "react-redux"
import { deleteFavorite, favorite, getfavorites } from "../firebase/firebase"
import { handleFavorite } from "../redux/actions/userFavorites"

export const useFavorite = () => {
    const state = useSelector( (state) => state)
    const { userStateRegister  } = state.user
    const dispach = useDispatch()


    const addFavorite = async(info) => {
        dispach(handleFavorite(info))
    }

    return { addFavorite }
}
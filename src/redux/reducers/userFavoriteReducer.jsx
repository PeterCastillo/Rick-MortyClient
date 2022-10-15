import { USER_FAVORITE , USER_FAVORITE_CLEAN } from "../actionTypes/userFavoritesTypes"

export const userFavoritesInitialState = {
    userFavorites: []
}

export function userFavoriteReducer( state = userFavoritesInitialState , action ){
    switch(action.type){
        case(USER_FAVORITE):{
            const itemFavorito= state.userFavorites.find(item => item.url == action.payload.url)
            return itemFavorito
            ?{
                ...state,
                userFavorites: state.userFavorites.filter(item => item.url !== action.payload.url)
            }
            :{
                ...state,
                userFavorites: [...state.userFavorites, action.payload]
            }
        }
        case(USER_FAVORITE_CLEAN):{
            return{
                ...state,
                userFavorites: []
            }
        }

        default: {
            return state
        }
    }

}

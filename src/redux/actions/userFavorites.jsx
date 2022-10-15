import { USER_FAVORITE , USER_FAVORITE_CLEAN } from "../actionTypes/userFavoritesTypes";

export const handleFavorite = (favoriteItem) => ({ type:USER_FAVORITE , payload: favoriteItem})
export const handleFavoriteClean = () => ({ type:USER_FAVORITE_CLEAN})
import { USER_REGISTER } from "../actionTypes/userTypes";

export const handleUserState = (userNewState) => ({ type: USER_REGISTER , payload: userNewState})
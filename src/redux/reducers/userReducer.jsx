import { USER_REGISTER } from "../actionTypes/userTypes"

export const userInitialState = {
    userStateRegister: {
        state: false,
        usarname: "",
        uid: ""
    }
}

export function userReducer( state = userInitialState , action ){
    switch(action.type){
        case(USER_REGISTER):{
            return {
                ...state,
                userStateRegister: {
                    state:action.payload.state,
                    usarname:action.payload.usarname,
                    uid:action.payload.uid
                }
            }
        }
        default: {
            return state
        }
    }
}
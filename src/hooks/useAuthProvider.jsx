import { auth, getfavorites, getUserInfo, registerNewUser, userExist } from "../firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { handleFavorite, handleFavoriteClean } from "../redux/actions/userFavorites"
import { handleUserState } from "../redux/actions/userActions"

export const useAuthProvider = (onUserLogin , onUserNotLogin, onUserNotRegister) => {

    const dispach = useDispatch()

    useEffect(()=>{
        onAuthStateChanged(auth, handleUserStateChanged)
    },[])

    const handleUserStateChanged = async(user) => {
        if(user){
            const isRegister = await userExist(user.uid)
            if(isRegister){
                const userInfo = await getUserInfo(user.uid)
                if(userInfo?.processCompleted){
                    onUserLogin(userInfo)
                    const res = await getfavorites(userInfo.uid)
                    dispach(handleFavoriteClean())
                    res?.forEach(item => dispach(handleFavorite(item)))
                    dispach(handleUserState({
                        state:userInfo.processCompleted,
                        usarname:userInfo.username,
                        uid: userInfo.uid
                    }))
                } else {
                    onUserNotLogin(userInfo)
                }
            } else {
                await registerNewUser({
                    uid: user.uid,
                    displayName: user.displayName,
                    profiePicture: "",
                    username: "",
                    processCompleted: false
                })
                onUserNotLogin(user)
            }
        } else {
            onUserNotRegister()
        }
    }
}
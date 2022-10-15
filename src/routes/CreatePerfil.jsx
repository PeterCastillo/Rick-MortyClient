import { useState } from "react"
import { useNavigate } from "react-router"
import { existsUserName, upDateUser } from "../firebase/firebase"
import { useAuthProvider } from "../hooks/useAuthProvider"
import { useDispatch } from "react-redux"
import { handleFavoriteClean } from "../redux/actions/userFavorites"
import { Alert, Btn, Continue, ContinueBtn, ContinueTitle, Create, CreatePerfilContainer, Inputs, Text, Title } from "../StyleComponents/createPerfil"
import { handleUserState } from "../redux/actions/userActions"

const CreatePerfil = () => {
    const [ userName , setUserName ] = useState("")
    const [ currentUser, setCurrentUser ] = useState({})
    const [ state , setState ] = useState(false)
    const [ nameState , setNameState ] = useState(false)
    const dispach = useDispatch()
    const Navigate = useNavigate()

    const onUserLogin = (user) => {
        Navigate("/")
    }
    const onUserNotLogin = (user) => {
        setCurrentUser(user)
    }
    const onUserNotRegister = () => {
        Navigate("/")
    }

    useAuthProvider(onUserLogin , onUserNotLogin, onUserNotRegister)

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleContinue = async() => {
        if(userName.trim() != ""){
            const exist = await existsUserName(userName)
            if(exist){
                setNameState(true)
                console.log("Eso nombre ya existe caradura")
            } else {
                const tmp = {...currentUser}
                tmp.username = userName
                tmp.processCompleted = true
                await upDateUser(tmp)
                dispach(handleUserState({
                    state:tmp.processCompleted,
                    usarname:tmp.username,
                    uid: tmp.uid
                }))
                setState(true)
                dispach(handleFavoriteClean())
            }
        }
    }
    return (
        <CreatePerfilContainer>
            {state
            ?<Continue>
                <ContinueTitle>Bienvenido, {userName}</ContinueTitle>
                <ContinueBtn to={'/Perfil'}>Continuar</ContinueBtn> 
            </Continue>
            :<Create>
                <Title>Bienvenido!</Title>
                <Title>Escoje un nombre</Title>
                <Inputs>
                    <Text
                        type="text"
                        onChange={handleUserName} 
                    />
                    <Btn onClick={handleContinue}>Continuar</Btn>
                </Inputs>
                {nameState? <Alert>! Advertencia: Ese nombre ya existe</Alert>:<></>}
            </Create>
            }
        </CreatePerfilContainer>
    )
}

export default CreatePerfil
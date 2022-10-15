import { NavContainer , Nav , Logo , LogoImg , LogoName , Img , Perfil , PerfilName , PerfilImg, PerfilInfo, PerfilRoute } from '../StyleComponents/navBar'
import { Register } from '../StyleComponents/btnRegister'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, logOut } from '../firebase/firebase'
import { useAuthProvider } from '../hooks/useAuthProvider'
import { useNavigate } from 'react-router'
import { useSelector } from "react-redux"
import { useState } from 'react'

const NavBar = () => {

    const state = useSelector((state) => state)
    const { userStateRegister } = state.user
    const [ perfil , setPerfil ] = useState(false)

    const Navigate = useNavigate()

    const onUserLogin = (user) => {
        Navigate("/")
    }
    const onUserNotLogin = (user) => {
        Navigate("/CreatePerfil")
    }
    const onUserNotRegister = () => {
    }

    useAuthProvider(onUserLogin,onUserNotLogin, onUserNotRegister)

    const HandleLogin = async() => {
        const googleProvider = new GoogleAuthProvider()
        try {
            const res = await signInWithPopup(auth, googleProvider)
        } catch(error){
            console.error(error)
        }
    }

    const HandleLogOut = async() => {
        await logOut()
        window.location.reload()
    }

    return (
        <NavContainer>
            <Nav>
                <Logo to={'/'}>
                    <LogoImg><Img src="https://media.revistagq.com/photos/6266a08026711052931a9e24/1:1/w_1080,h_1080,c_limit/193-1939340_rick-and-morty-stills.png" alt="" /></LogoImg>
                    <LogoName>Rick & Morty Client</LogoName>
                </Logo>
                {
                    userStateRegister.state
                    ?<Perfil onClick={()=>(setPerfil(!perfil))}>
                        <PerfilName>{userStateRegister.usarname}</PerfilName>
                        <PerfilImg><Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPs5nG9Fwaj3MJbskDD39q8V9CZD-r_OPzeF6A_G0WddG77VkvDFqToaykw8k2Q1LYa3E&usqp=CAU" alt="" /></PerfilImg>
                        {
                            perfil
                            ?<PerfilInfo>
                                <PerfilRoute to={'/Perfil'}>Perfil</PerfilRoute>
                                <PerfilRoute to={'/Favorites'}>Favoritos</PerfilRoute>
                                <PerfilRoute to={'/'} onClick={HandleLogOut}>Salir</PerfilRoute>
                            </PerfilInfo>
                            :<></>
                        }
                    </Perfil>
                    :<Register onClick={HandleLogin} >Register</Register>
                }
            </Nav>
        </NavContainer>
    )
}

export default NavBar
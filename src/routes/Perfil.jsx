import { useSelector } from "react-redux"
import SecondaryContainer from "../components/SecondaryContainer"
import { useGeneralViewContext } from "../context/GeneralViewContext"
import { Home, ImgFondo, PerfilContainer, PerfilFondo, SliderContainer, User, UserI, UserImg, UserInfo, UserName } from "../StyleComponents/perfil"

const Perfil = () => {

    const state = useSelector( (state) => state)
    const { userStateRegister } = state.user

    const { generalViewContextValue } = useGeneralViewContext()

    const { PrimaryContainer01 , SecondaryContainer01 } = generalViewContextValue

    return (
        <PerfilContainer>
            <Home to={'/'}>← Home</Home>
            <User>
                <PerfilFondo>
                    <ImgFondo src="http://images6.fanpop.com/image/photos/39500000/sf-img-02-rick-and-morty-39568288-1024-731.jpg" alt="Rick and Morty" />
                </PerfilFondo>
                <UserInfo>
                    <UserImg><UserI src="https://w0.peakpx.com/wallpaper/697/320/HD-wallpaper-rick-and-morty-silhouette-black-white-fecklessabandon-feckless-themes.jpg" alt="" /></UserImg>
                    <UserName>Usuario: {userStateRegister.usarname}</UserName>
                </UserInfo>
                <SliderContainer>
                    <SecondaryContainer apiToUse={PrimaryContainer01}/>
                </SliderContainer>
            </User>
        </PerfilContainer>
    )
}

export default Perfil
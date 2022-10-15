import { useSelector } from "react-redux"
import Character from "../components/Character"
import Episode from "../components/Episode"
import SecondaryContainer from "../components/SecondaryContainer"
import { useGeneralViewContext } from "../context/GeneralViewContext"
import { Fav, FavoritosContainer } from "../StyleComponents/favoritos"
import { PrimiryContainer } from "../StyleComponents/primaryContainer"
import { ViewGeneralContainer, ViewPrev } from "../StyleComponents/viewGeneralContainer"



const Favorites = () => {
    const state = useSelector( (state) => state)
    const { userFavorites} = state.userFavorite

    const { generalViewContextValue } = useGeneralViewContext()

    const { PrimaryContainer01 , SecondaryContainer01 } = generalViewContextValue

    return (
        <ViewGeneralContainer>
            <FavoritosContainer>
                <Fav>Tus Favoritos</Fav>
                <PrimiryContainer>
                {
                    userFavorites.map(item => {
                        return item.hasOwnProperty("status")
                        ?<Character key={item.url} info={item} favorite={true}/>
                        :<Episode key={item.url} info={item} favorite={true}/>
                    })
                }
                </PrimiryContainer>
            </FavoritosContainer>
            <ViewPrev>
                <SecondaryContainer apiToUse={PrimaryContainer01}/>
                <SecondaryContainer apiToUse={SecondaryContainer01}/>
            </ViewPrev>
        </ViewGeneralContainer>
    )
}

export default Favorites

// userFavorites.map(item => {
//     return item.hasOwnProperty("status")
//         ?<Character key={item.url} info={item} medidas={true} favorite={true}/>
//         :<Episode key={item.url} info={item} medidas={true}favorite={true}/>
// }
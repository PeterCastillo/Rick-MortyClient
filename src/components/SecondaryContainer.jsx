import { useGeneralViewContext } from "../context/GeneralViewContext"
import { getData } from "../services/getData"
import Character from "./Character"
import Episode from "./Episode"
import { BtnNext, BtnPrev, Carrusel, SCverMas, SCverMasbtn, SecondaryContainerStyle } from '../StyleComponents/secondaryContainer'
import { useSlider } from "../hooks/useSlider"
import { useSelector } from "react-redux"

const SecondaryContainer = ({ apiToUse }) => {
    
    const { setGeneralViewContextValue , generalViewContextValue } = useGeneralViewContext()
    const { characters , page , setPage } = getData(apiToUse)
    const { ref , lasElement , currentElement , handleNext , handlePrev } = useSlider(page , setPage,characters, apiToUse)
    const state = useSelector( (state) => state)
    const { userFavorites } = state.userFavorite

    const HandleChange = () => {
        if(generalViewContextValue.PrimaryContainer01 == apiToUse ){
            return
        }
        setGeneralViewContextValue((old)=>({
            ...old,
            PrimaryContainer01:apiToUse,
            SecondaryContainer01: old.PrimaryContainer01
        }))
    }

    return (
        <SecondaryContainerStyle ref={ref}>
            <SCverMas >
                <SCverMasbtn to={"/"} onClick={HandleChange}>Ver mas</SCverMasbtn>
            </SCverMas >
            <BtnNext onClick={handleNext}>→</BtnNext>
            <BtnPrev onClick={handlePrev}>←</BtnPrev>
            <Carrusel>
                    {characters.length > 1
                    ? characters.map(item => {
                        const itemFav = userFavorites.find(favorito => favorito.url == item.url)
                        if(itemFav){
                            return item.hasOwnProperty("status")
                            ?<Character key={item.name} info={item} favorite={true}/>
                            :<Episode key={item.name} info={item}  favorite={true}/>
                        } else{
                            return item.hasOwnProperty("status")
                            ?<Character key={item.name} info={item}/>
                            :<Episode key={item.name} info={item}/>
                        }
                    }).slice(currentElement,lasElement)
                    :<></>
                    }
            </Carrusel>
        </SecondaryContainerStyle>
    )
}

export default SecondaryContainer
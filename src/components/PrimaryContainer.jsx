import { useSelector } from "react-redux"
import { useInfiniteSrcoller } from "../hooks/useInfiniteSrcoller"
import { getData } from "../services/getData"
import { PrimiryContainer } from "../StyleComponents/primaryContainer"
import Character from "./Character"
import Episode from "./Episode"

 const PrimaryContainer = ({ apiToUse }) => {

    const { characters , page , setPage } = getData(apiToUse)
    useInfiniteSrcoller(page , setPage)
    const state = useSelector( (state) => state)
    const { userFavorites } = state.userFavorite

    return (
            <PrimiryContainer>  
                {characters.length > 1
                ? characters.map(item => {
                    const FaveriteItem = userFavorites.find(favorito => favorito.url == item.url)
                    if(FaveriteItem){
                        return item.hasOwnProperty("status")
                        ?<Character key={item.url} info={item} favorite={true}/>
                        :<Episode key={item.url} info={item} favorite={true}/>
                    } else{
                        return item.hasOwnProperty("status")
                        ?<Character key={item.url} info={item}/>
                        :<Episode key={item.url} info={item}/>
                    }
                })
                :<></>
                }
            </PrimiryContainer>
    )
}

export default PrimaryContainer
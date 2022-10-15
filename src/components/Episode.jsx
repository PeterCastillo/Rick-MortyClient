import { useFavorite } from "../hooks/useFavorite"
import { getCharacteres } from "../services/getCharacteres"
import { CharacterLocationLabel } from "../StyleComponents/character"
import { BtnFavoriteE, EpisodeContainer, EpisodeInfo, EpisodioCharacters, EspisodeEspecificInfo, EspisodeName } from "../StyleComponents/espisode"
import IndividualCharacter from "./IndividualCharacter"

const Episode = ({ info , favorite=false }) => {

    const { characters } = getCharacteres(info.characters)
    const { addFavorite } = useFavorite()

    return (
        <EpisodeContainer>
            <EpisodeInfo>
                <EspisodeName>{info.name}<BtnFavoriteE onClick={()=> addFavorite(info)} style={{filter: favorite?"":"grayscale(100%)"}}>⭐</BtnFavoriteE></EspisodeName>
                <CharacterLocationLabel>ID: {info.id}</CharacterLocationLabel>
                <EspisodeEspecificInfo>
                    <CharacterLocationLabel>episode:</CharacterLocationLabel>
                    <span>{info.episode}</span>
                </EspisodeEspecificInfo>
                <EspisodeEspecificInfo>
                    <CharacterLocationLabel>Air date:</CharacterLocationLabel>
                    <span>{info.air_date}</span>
                </EspisodeEspecificInfo>
            </EpisodeInfo>
            <EpisodioCharacters>
                {characters.map((character)=>(
                    <IndividualCharacter key={character.id} character={character}/>
                ))}
            </EpisodioCharacters>
        </EpisodeContainer>
    )
}

export default Episode
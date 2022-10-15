import { BtnFavoriteC, 
        CharacterContainer, 
        CharacterImg, 
        CharacterInfo, 
        CharacterLocation, 
        CharacterLocationLabel, 
        CharacterName, 
        CImg, 
        State } from '../StyleComponents/character';
import { useFavorite } from '../hooks/useFavorite';

const Character = ({ info , favorite = false }) => {

    const { addFavorite } = useFavorite()

    return ( 
        <CharacterContainer>
            <CharacterImg><CImg src={info.image} alt="" /></CharacterImg>
            <BtnFavoriteC onClick={()=>addFavorite(info)} style={{filter: favorite?"":"grayscale(100%)"}}>⭐</BtnFavoriteC>
            <CharacterInfo>
                <CharacterName>{info.name}</CharacterName>
                <div>
                    <State state={info.status}/> <span>{info.status}</span><span>-</span><span>{info.species}</span>
                </div>
                <CharacterLocation>
                    <CharacterLocationLabel>Last known location:</CharacterLocationLabel>
                    <span>{info.location.name}</span>
                </CharacterLocation>
                <CharacterLocation>
                    <CharacterLocationLabel>First seen in:</CharacterLocationLabel>
                    <span>{info.origin.name}</span>
                </CharacterLocation>
            </CharacterInfo>
        </CharacterContainer>
    )
}

export default Character
import { CharacterIndividual, CIMG } from "../StyleComponents/individualCharacter"

const IndividualCharacter = ({ character }) => {


    return (
        <CharacterIndividual><CIMG src={character.image?character.image:`https://www.adhesivosnatos.com/wp-content/uploads/2018/08/pegatina-ricky-y-morti-portales.png`} alt="" /></CharacterIndividual>
    )
}

export default IndividualCharacter
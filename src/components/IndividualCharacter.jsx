import { CharacterIndividual, CIMG } from "../StyleComponents/individualCharacter"

const IndividualCharacter = ({ character }) => {

    return (
        <CharacterIndividual to={"/hola"}><CIMG src={character.image} alt="" /></CharacterIndividual>
    )
}

export default IndividualCharacter
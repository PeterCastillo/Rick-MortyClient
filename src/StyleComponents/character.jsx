import styled from 'styled-components'; 

export const CharacterContainer = styled.div`
    display: inline-block;
    display: flex;
    min-height: 16rem;
    color: #d6d4d4;
    flex-grow: 1;
    background-color: hsl(209, 23%, 22%);
    @media (max-width: 500px) {
    flex-direction: column;
  }
`
export const CharacterImg = styled.div`
    flex: 1 1 11rem;
`
export const CImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const CharacterInfo = styled.div`
    flex: 1 1 11rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.3rem 0.6rem;
`

export const CharacterLocation = styled.div`
    display: flex;
    flex-direction: column;
`
export const State = styled.span`
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
    border-radius: 50%;
    ${({ state }) => handleState(state)}
`

export const CharacterName = styled.span`
    font-size: 1.3rem;
    font-weight: bold;
`

const handleState = (state) =>{
    switch(state){
        case("Alive"):{
            return 'background-color:#1e9401 '
        }
        case("Dead"):{
            return 'background-color: #830c0c'
        }
        case("unknown"):{
            return 'background-color: #25292e'
        }
    }
}

export const CharacterLocationLabel = styled.span`
    font-weight: bold;
`

export const BtnFavoriteC = styled.span`
    position: absolute;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 0;
    margin-top: 0;
`
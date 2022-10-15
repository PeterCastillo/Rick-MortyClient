import styled from 'styled-components'; 

export const EpisodeContainer = styled.div`
    height: 16rem;
    background-color: red;
    display: flex;
    padding: 0.8rem;
    flex-grow: 1;
    background-color: hsl(209, 23%, 22%);
    color: #d6d4d4;
    @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

export const EpisodeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1 1 5rem ;
`
export const EspisodeName = styled.span`
    font-weight: bold;
    font-size: 18px;
`
export const EspisodeEspecificInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const EpisodioCharacters = styled.div`
    flex: 1 1 5rem ;
    background-color: hsl(207, 26%, 17%);
    border-radius: 1rem;
    overflow-x:auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(2rem,1fr));
    gap: 1rem;
    padding: 0.5rem;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const BtnFavoriteE = styled.span`
    cursor: pointer;
    font-size: 1.8rem;
`
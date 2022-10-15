import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const PerfilContainer = styled.div`
    max-width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
    min-height: 100vh;
    gap: 2rem;
    padding: 8rem 1rem 1rem 1rem;

    @media (max-width: 512px) {
        padding: 10.5rem 1rem 1rem 1rem;
  }
`

export const PerfilFondo = styled.div`
    flex: 1 1 15rem;
`

export const PerfilUser = styled.span`
    font-size: 4rem;
    color: white;
`

export const Home = styled(Link)`
    font-size: 1.2rem;
    display: inline-block;
    padding: 0.5rem;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(209, 23%, 22%);
    color: white;
    cursor: pointer;
    text-decoration: none;
`

export const User = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 1 15rem;
    background-color: hsl(209, 23%, 22%);
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

export const UserName = styled.span`
    font-size: 1.8rem;
    color: white;
`

export const UserImg = styled.div`
    width: 15rem;
    max-height: 15rem;
`

export const UserI = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 15px solid hsl(209, 23%, 25%);;
`

export const SliderContainer = styled.div`
    flex: 1 1 20rem;
    align-self: center;
`
export const ImgFondo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
`
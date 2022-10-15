import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
    position: fixed;
    width: 100%;
    z-index: 25;
    background-color: hsl(209, 23%, 22%);
    color: white;
`
export const Nav = styled.div`
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
`

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 10 1 20em;
    text-decoration: none;
`

export const LogoImg = styled.div`
    height: 3rem;
    width: 3rem;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`

export const LogoName = styled.span`
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
`

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    flex: 1 0 8rem;
    font-size: 20px;
    gap: 0.2rem;
    font-weight: bold;
    cursor: pointer;
    background-color: hsl(207, 26%, 17%);
    position: relative;
`

export const PerfilName = styled.div`
    letter-spacing: 0.05rem;
    padding-left: 1rem;
`

export const PerfilImg = styled.div`
    width: 3rem;
    height: 2rem;
    padding-right: 1rem;
`
export const PerfilInfo = styled.div`
    position: absolute;
    padding: 0rem;
    display: flex;
    flex-direction: column;
    top: 100%;
    width: 100%;
    gap: 0.5rem;
    background-color: hsl(207, 26%, 17%);
`

export const PerfilRoute = styled(Link)`
    background-color: hsl(207, 26%, 17%);
    padding: 0.4rem 1rem;
    transition: 250ms ease;
    color: white;
    text-decoration: none;
    &:hover {
        background-color: hsl(209, 23%, 22%);
        padding: 0.4rem 1.5rem;
        color: white;
    }
`
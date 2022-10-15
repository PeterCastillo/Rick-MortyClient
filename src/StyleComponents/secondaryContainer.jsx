import styled from 'styled-components'; 
import { Link } from 'react-router-dom'

export const SecondaryContainerStyle = styled.div`
    display: flex;
    position: relative;
`

export const Carrusel = styled.div`
    display: flex;
    width: 100%;
`

export const SCverMas = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(140, 4, 252, 0) 30%, #4a4a4b 80%);
    text-align: end;
    &:hover {
        height: 4rem;
    }
`

export const SCverMasbtn = styled(Link)`
    display: inline-block;
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: #f3f3f3;
    cursor: pointer;
    text-decoration: none;
`

export const BtnNext = styled.span`
    font-weight: bold;
    font-size: 2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f3f3f3;
`

export const BtnPrev = styled.span`
    font-weight: bold;
    font-size: 2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 2.5rem;
    cursor: pointer;
    right: 2rem;
    width: 2.5rem;
    color: #f3f3f3;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
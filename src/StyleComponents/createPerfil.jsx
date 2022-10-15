import styled from 'styled-components'; 
import { Link } from 'react-router-dom'

export const CreatePerfilContainer = styled.div`
    min-height: 100vh;
    padding: 8rem 1rem 1rem 1rem;
    margin: auto;
    align-items: flex-start;
    background: url(https://i0.wp.com/collectible506.com/wp-content/uploads/2018/04/rick-header.png?resize=672%2C372&ssl=1) no-repeat center center fixed;
    background-size: cover;
`
export const Continue = styled.div`
    max-width: 1300px;
    margin: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
export const Create = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin: auto;
    padding: 1rem;
`
export const Title = styled.span`
    font-size: 2rem;
    font-weight: 400;
    color: white;
`
export const Inputs = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
`
export const Text = styled.input`
    border: none;
    outline: none;
`

export const Btn = styled.button`
    background-color: hsl(209, 23%, 22%);
    border: none;
    font-size: 1.2rem;
    color: white;
    padding: 0.3rem  1rem;
`
export const Alert = styled.span`
    color: red;
    font-size: 1.1rem;
`

export const ContinueTitle = styled.span`
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
`

export const ContinueBtn = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 0.5rem;
    background-color: hsl(209, 23%, 22%);
    display: flex;
    justify-content: center;
    width: 6rem;
`
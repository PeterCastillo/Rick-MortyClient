import styled from 'styled-components'; 

export const PrimiryContainer = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23rem,1fr));
    gap: 1rem;
    flex: 1 1 800px;
    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fill, minmax(12rem,1fr));
  }
`
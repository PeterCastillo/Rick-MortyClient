import styled from 'styled-components';

export const ViewGeneralContainer = styled.div`
    display: flex;
    max-width: 1300px;
    margin: auto;
    gap: 1.5rem;
    padding: 1rem;
    flex-wrap: wrap-reverse;
    padding-top: 7rem;
    @media (max-width: 500px) {
        padding-top: 10.5rem;
  }
`

export const ViewPrev = styled.div`
    flex: 1 1 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
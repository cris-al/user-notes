import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1400px;
    height: 100vh;
    gap: 3rem;

    @media screen and (max-width: 690px){
        gap: 1.5rem;
    }
`;

export const Container2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    width: 50%;
`;

export const Container1 = styled.div`
    display: flex;

    @media screen and (max-width: 690px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: ${({size})=> size ? size : '3rem'};
    text-shadow: 2px 2px 10px black;

    @media screen and (max-width: 935px){
        font-size: ${({size})=> size ? '2.5rem' : '2rem'};
    }
`;

export const Paragraph = styled.p`
    font-size: 1.5rem;

    @media screen and (max-width: 935px){
        font-size: 1rem;
    }
`;

export const Image = styled.img`
    width: 450px;
    height: 450px;

    @media screen and (max-width: 935px){
        width: 380px;
        height: 380px;
    }
    @media screen and (max-width: 735px){
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 690px){
        width: 230px;
        height: 230px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`;
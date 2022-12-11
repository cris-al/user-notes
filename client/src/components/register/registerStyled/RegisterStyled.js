import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 1400px;
    height: 100vh;
`;

export const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 50%;
`;

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Image = styled.img`
    width: 450px;
    height: 450px;

    @media screen and (max-width: 935px){
        width: 380px;
        height: 380px;
    }
    @media screen and (max-width: 835px){
        display: none;
    }
    @media screen and (max-width: 690px){
        width: 230px;
        height: 230px;
    }
`;
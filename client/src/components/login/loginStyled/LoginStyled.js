import styled from 'styled-components';

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #424242;
    width: 500px;
    height: 600px;
    padding: 2rem;
    gap: 2rem;
`;

export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Error = styled.div`
    color: red;
    font-size: 0.7rem;
    text-decoration: none;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #00796b;
    font-size: 1rem;
    width: 100px;
    height: 30px;
    box-shadow: 0 0 6px #424242;
    
    &:hover{
        background-color: #00897b;
        cursor: pointer;
    }
`;
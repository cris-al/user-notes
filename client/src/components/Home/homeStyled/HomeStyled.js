import styled from 'styled-components';
import { Colors } from '../../../themes/themes';

export const HomeContainer = styled.div`
    width: 1400px;
    display: flex;
    height: 100vh;
    gap: 1rem;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.background.blue};
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${Colors.background.green};
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${Colors.hover.green};
    }
`;

export const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
    gap: 1rem;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    transition: 0.5s;
    &:hover{
        background-color: ${Colors.hover.blue};
        cursor: pointer;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.background.blue};
    padding: 0.3rem 1rem;
`;

export const Note = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.background.blue};
    padding: 0.3rem 1rem;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`;
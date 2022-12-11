import styled from "styled-components";
import { Colors } from "../../../themes/themes";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.background.blue};
    padding: 0 1rem;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: ${Colors.word.grey};

    &:hover{
        color: ${Colors.hover.grey};
    }
`;
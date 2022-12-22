import styled from "styled-components";
import { Colors } from "../../../themes/themes";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  background-color: ${Colors.background.blue};
  transition: 0.5s;
  height: 220px;
  box-shadow: 0 0 8px ${Colors.shadow.black};
  @media screen and (min-width: 375px) {
    height: 300px;
  }
`;

export const Container = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${Colors.background.green};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.hover.green};
  }
`;

export const Div = styled.div`
  margin: 1rem 0;
`;

export const Text = styled.h3`
  font-size: 1.1rem;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 5px ${Colors.shadow.grey};
  }
  @media screen and (min-width: 375px) {
    height: 240px;
  }
  @media screen and (min-width: 576px) {
    height: 240px;
    width: 240px;
  }
`;
// export const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: ${Colors.background.blue};
//   overflow-y: scroll;

// ::-webkit-scrollbar {
//   width: 10px;
// }
// ::-webkit-scrollbar-thumb {
//   background: ${Colors.background.green};
//   border-radius: 5px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background: ${Colors.hover.green};
// }
// `;

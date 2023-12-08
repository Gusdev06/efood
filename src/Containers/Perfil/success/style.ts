import styled from "styled-components";
import { cores } from "../../../styles";

export const Tittle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.bege};
  background-color: ${cores.rosa};
  padding: 16px;
  text-align: center;
`;

export const DivMessage = styled.div`
  color: ${cores.bege};

  p {
    margin-bottom: 30px;
  }
`;

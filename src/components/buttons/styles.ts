import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../styles";

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;

  border-radius: 8px;
`;
export const ButtonLINK = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 14px;
  padding: 4px 6px;

  font-weight: bold;
  border: none;
`;

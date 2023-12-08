import styled from "styled-components";
import { cores } from "../../../styles";

export const Tittle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.bege};
`;

export const Infos = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${cores.bege};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${cores.bege};
  height: 32px;
`;

export const CepAndNumber = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
`;

export const DivButtons = styled.div`
  display: block;
`;

export const Buttons = styled.button`
  width: 100%;
  background-color: ${cores.bege};
  height: 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${cores.rosa};
`;

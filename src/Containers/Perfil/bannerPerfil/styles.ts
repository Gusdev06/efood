import { styled } from "styled-components";
import { cores } from "../../../styles";

export const Imagem = styled.div`
  max-width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px 0;
`;

export const Tittle = styled.h1`
  color: ${cores.branca};
  font-weight: bold;
`;

export const DivTittle = styled.div``;

export const Category = styled(Tittle)`
  padding-bottom: 220px;
  font-weight: 100;
`;

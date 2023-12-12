import { styled } from "styled-components";
import { cores } from "../../../styles";

export const Imagem = styled.div`
  max-width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px 0;
  font-weight: 100;
`;

export const Tittle = styled.h1`
  color: ${cores.branca};
  font-weight: bold;
  font-size: 32px;
`;

export const DivTittle = styled.div``;

export const Category = styled(Tittle)`
  font-weight: 100;
  font-style: italic;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

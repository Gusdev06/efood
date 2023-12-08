import { styled } from "styled-components";
import { cores } from "../../../styles";

export const Imagem = styled.div`
  width: 100%;
  max-height: 298px;
  height: 100%;
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding-top: 64px;
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
`;

export const Tittle = styled.h1`
  color: ${cores.rosa};
  max-width: 539px;
  font-weight: bold;
`;

export const DivTittle = styled.div`
  padding-top: 32px;
  gap: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Description = styled.div`
  padding-top: 80px;
  max-width: 480px;
  color: ${cores.rosa};
  font-size: 10px;
  text-align: center;
`;

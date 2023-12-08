import styled from "styled-components";
import { cores } from "../../../styles";
import { TagContainer } from "../tags/style";

export const Card = styled.div`
  margin-top: 48px;
  margin-right: 80px;
  max-width: 472px;
  height: 398px;
  border: 1px solid ${cores.rosa};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const Avaliation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DivTittle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Tittle = styled.h3`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
`;

export const DivInfos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Tag = styled.div`
  display: flex;
  background-color: ${cores.rosa};
  padding: 4px 6px;
  color: ${cores.branca};
`;

export const Description = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 14px;
`;

export const Content = styled.div`
  padding: 8px;
`;

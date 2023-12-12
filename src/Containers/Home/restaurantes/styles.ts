import styled from "styled-components";
import { Buttons } from "../../../components/buttons";
import { cores } from "../../../styles";

export const Card = styled.div`
  margin-top: 48px;
  margin-right: 80px;
  max-width: 472px;
  width: 100%;
  height: 398px;
  border: 1px solid ${cores.rosa};
  position: relative;
`;

export const Button = styled(Buttons)`
  margin-top: 16px;
`;

export const Avaliation = styled.div`
  display: flex;
  align-items: center;
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 18px;
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
  right: 14px;
`;

export const Description = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 12px;
`;

export const Content = styled.div`
  padding: 8px;
`;

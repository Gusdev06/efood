import Modal from "react-modal";
import styled from "styled-components";
import { cores } from "../../../styles";

export const Card = styled.div`
  max-width: 320px;
  height: 338px;
  border: 1px solid ${cores.rosa};
  position: relative;

  background-color: ${cores.rosa};
  margin-bottom: 32px;
  img {
    padding: 8px;
  }
`;

export const DivTittle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tittle = styled.h3`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.p`
  color: ${cores.branca};
  font-size: 14px;
  line-height: 22px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  font-size: 14px;
  margin-top: 8px;
  padding: 4px 6px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const Content = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

export const ModalStyle = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1024px;
  height: 344px;
  width: 100%;

  background-color: ${cores.rosa};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  outline: none;

  padding: 32px;
  display: flex;
  color: ${cores.branca};

  img {
    max-width: 280px;
    height: 100%;
  }
`;

export const ContentModal = styled.div`
  margin-left: 24px;
  display: block;
`;

export const DescriptionModal = styled(Description)`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const ButtonModal = styled(Button)`
  margin-top: 16px;
  display: block;

  max-width: 220px;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  font-size: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${cores.branca};
`;

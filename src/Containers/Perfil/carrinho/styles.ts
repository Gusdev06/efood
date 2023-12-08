import styled from "styled-components";
import { cores } from "../../../styles";

export const ButtonCart = styled.button`
  width: 100%;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  font-weight: bold;
  border: none;
  padding: 4px 0;
  font-size: 14px;
  cursor: pointer;
`;

export const CartItem = styled.div`
  display: flex;
  background-color: ${cores.bege};
  width: 100%;
  color: ${cores.rosa};
  position: relative;
  padding: 8px;
  margin-top: 16px;

  img:first-child {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  img:last-child {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const Prices = styled.div`
  color: ${cores.bege};
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 40px 0 16px 0;
`;

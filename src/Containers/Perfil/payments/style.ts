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

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.rosa};
`;

export const Input = styled.input`
  width: calc(100% - 16px); // Adjust width to account for padding
  border: 1px solid ${cores.rosa}; // Use the border color from your theme
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${cores.bege};
  height: 48px; // Increased height for better visibility
  padding: 8px; // Add padding for the input text
  font-size: 16px; // Larger font size for better readability
`;

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); // Use auto-fill for responsiveness
  gap: 16px;
  margin-top: 16px;
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  background-color: ${cores.rosa};
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  height: 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NumberCard = styled(DivGrid)`
  grid-template-columns: 2fr 1fr; // Adjust the ratio for card number and CVV
  ${Input} {
    &:nth-child(2) {
      width: calc(60% - 16px); // Adjust the width of the CVV input
    }
  }
`;

export const ExpirationDateContainer = styled(DivGrid)`
  grid-template-columns: 1fr 1fr; // Two equal columns for month and year
`;

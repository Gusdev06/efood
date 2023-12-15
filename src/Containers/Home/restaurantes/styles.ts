import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../../styles";

export const Card = styled.div`
  background-color: ${cores.branca};
  margin-top: 48px;
  position: relative;
  border: 1px solid ${cores.rosa};

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Content = styled.div`
  padding: 8px;
`;
export const TitleRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 18px;
    font-weight: bold;
  }
`;
export const ContainerRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`;

export const Button = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
export const Tag = styled.span`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
`;

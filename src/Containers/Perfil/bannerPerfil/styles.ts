import styled from "styled-components";

export const HeaderProfile = styled.header`
  font-weight: bold;

  p:last-child {
    cursor: pointer;
  }
`;

export const LogoHeader = styled.img`
  height: 57px;
`;

export const Container = styled.div`
  max-width: 1024px;
  height: 186px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

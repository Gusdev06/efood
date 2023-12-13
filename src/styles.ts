import styled, { createGlobalStyle, keyframes } from "styled-components";

export const cores = {
  cinza: "#333",
  rosa: "#E66767",
  branca: "#FFF8F2",
  verde: "#10AC84",
  cinzaClaro: "#A3A3A3",
  bege: "#FFEBD9",
};

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }




  body{
    background-color: ${cores.branca};
    color: ${cores.rosa};
  }

.container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
   
   
   
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.80);
  z-index: 999;
 
}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;

  margin: 0 auto;
`;

const slideOpen = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideClose = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  font-weight: bold;

  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Aside = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;

  &.slideOpen {
    animation-name: ${slideOpen};
  }

  &.slideClose {
    animation-name: ${slideClose};
  }
`;

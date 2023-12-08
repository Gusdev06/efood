import styled from "styled-components";

import { Props } from ".";
import { cores } from "../../../styles";

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 10px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`;

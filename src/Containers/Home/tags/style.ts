import styled from "styled-components";

import { Props } from ".";
import { cores } from "../../../styles";

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
  padding: 6px 4px;
  display: inline-block;
`;

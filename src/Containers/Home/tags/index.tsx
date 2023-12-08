import { TagContainer } from "./style";

export type Props = {
  children: string;
};

export const Tag = ({ children }: Props) => {
  return <TagContainer>{children}</TagContainer>;
};

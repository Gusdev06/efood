import { ButtonContainer, ButtonLINK } from "./styles";

type Props = {
  type: "button" | "link";
  to?: string;
  title: string;
  onClick?: () => void;
  children: string;
};
export const Buttons = ({ children, title, type, onClick, to }: Props) => {
  if (type === "button") {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLINK to={to as string} title={title}>
      {children}
    </ButtonLINK>
  );
};

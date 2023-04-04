import { styled } from "./styles";

const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$gray500",
  width: "$64",
});

export function App() {
  return <Button>Olá</Button>;
}

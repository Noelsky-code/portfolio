import { templateProps } from "@Type/.";
import { Container } from "./style";

const LearnedTemplate = ({ index }: templateProps) => {
  const myIndex = 4;
  const zIndex = index === myIndex ? -1 : myIndex;
  return <Container zIndex={zIndex}>a</Container>;
};

export default LearnedTemplate;

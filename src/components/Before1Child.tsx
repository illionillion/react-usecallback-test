import { FC, useEffect } from "react";

type ChildProps = {
  onClick: () => void;
};

const Before1Child: FC<ChildProps> = ({ onClick }) => {
  useEffect(() => {
    let i: number = 0;
    while (i < 1000000000) i++;
  });
  return <button onClick={onClick}>Heavy+</button>;
};

export default Before1Child
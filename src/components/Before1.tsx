import { FC, useMemo, useState } from "react";
import Before1Child from "./Before1Child";

const Before1: FC = () => {
  const [countNormal, setCountNormal] = useState(0);
  const [countHeavy, setCountHeavy] = useState(0);

  // クリック時の処理
  const handleClick = () => {
    setCountHeavy(prev => prev + 1);
  };

  // handleClickが毎回作成されるため、コンポーネントのメモ化がうまくいかない
  const ChildMemo = useMemo(
    () => <Before1Child onClick={handleClick} />,
    [handleClick]
  );

  return (
    <div className="app">
      <div className="app-counter">
        <div>Normal: {countNormal}</div>
        <div>Heavy: {countHeavy}</div>
      </div>
      <div className="app-button">
        <button onClick={() => setCountNormal(prev => prev + 1)}>Normal+</button>
        {ChildMemo}
      </div>
    </div>
  );
};

export default Before1
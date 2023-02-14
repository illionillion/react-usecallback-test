import { FC, useCallback, useEffect, useState } from "react";

const After2: FC = () => {
  const [countNormal, setCountNormal] = useState(0);
  const [countHeavy, setCountHeavy] = useState(0);

  // const heavyFunction = (type: string, count: number) => {
  //   let i: number = 0;
  //   while (i < 1000000000) i++;
  //   console.log(`count${type} is clicked  ${count} times!`);
  // };
  const heavyFunction = useCallback((type: string, count: number)=>{
      let i: number = 0;
      while (i < 1000000000) i++;
      console.log(`count${type} is clicked  ${count} times!`);
  },[countHeavy])

  // countNormalボタンがクリックされたら実行される
  useEffect(() => {
    console.log(`countNormal is clicked!`);
  }, [countNormal]);

  // countHeavyボタンだけでなく、countNormalボタンがクリックされても実行される
  // つまり、countNormalボタンをクリックしたときも実行が遅い
  useEffect(() => {
    heavyFunction("Heavy", countHeavy);
  }, [heavyFunction]);

  return (
    <div className="app">
      <div className="app-counter">
        <div>Normal: {countNormal}</div>
        <div>Heavy: {countHeavy}</div>
      </div>
      <div className="app-button">
        <button onClick={() => setCountNormal(prev => prev + 1)}>Normal+</button>
        <button onClick={() => setCountHeavy(prev => prev + 1)}>Heavy+</button>
      </div>
    </div>
  );
};

export default After2;

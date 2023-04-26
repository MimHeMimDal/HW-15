import { Button } from "../../components/Button";
import { useState } from "react";

export const Hex = function () {
  const [num, setNum] = useState(999999);
  const [boxes, setBoxes] = useState<JSX.Element[]>([]);

  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleClick() {
    setNum(randomNumber(0, 999999));
    const newBox = (
      <div
        key={crypto.randomUUID()}
        style={{ background: `#${num}` }}
        className="border w-[150px] border-black text-center"
      >{`#${num}`}</div>
    );
    setBoxes([...boxes, newBox]);
  }
  return (
    <div className="mt-10 ml-5">
      <Button
        onClick={handleClick}
        className="border border-black px-10 py-1 w-[150px] rounded-lg"
        title="add color"
      ></Button>
      <div className="flex gap-5 flex-wrap mt-5 mr-5">{boxes}</div>
    </div>
  );
};

import { ColorBox } from "../../components/Color-Box";
import { useState } from 'react';

export const Rgb = function () {
  const [redColor, setRedColor] = useState(255);
  const [greenColor, setGreenColor] = useState(255);
  const [blueColor, setBlueColor] = useState(255);
  return (
    <div className="flex gap-10 items-center ml-5">
      <div>
        <ColorBox colorSetter={setRedColor} title="RED" titleColor="red" />
        <ColorBox
          colorSetter={setGreenColor}
          title="GREEN"
          titleColor="green"
        />
        <ColorBox colorSetter={setBlueColor} title="BLUE" titleColor="blue" />
      </div>
      <div
        style={{
          backgroundColor: `rgb(${redColor},${greenColor},${blueColor})`,
        }}
        className="flex items-center justify-center border border-black rounded-lg w-[200px] text-center h-16"
      >
        RGB({redColor},{greenColor},{blueColor})
      </div>
    </div>
  );
};

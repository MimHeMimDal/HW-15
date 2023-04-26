type ColorBoxType = {
  colorSetter: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  titleColor: string;
};

export const ColorBox = function ({
  colorSetter,
  title,
  titleColor,
}: ColorBoxType) {
  return (
    <div className="w-[200px]">
      <h3 className="font-bold" style={{ color: titleColor }}>
        {title}
      </h3>
      <button
        className="w-full text-center border border-black rounded mt-2"
        onClick={() => {
          colorSetter((curr): number => {
            if (curr < 255) curr++;
            console.log(curr);
            return curr;
          });
        }}
      >
        +
      </button>
      <button
        className="w-full text-center border border-black rounded mt-2"
        onClick={() => {
          colorSetter((curr): number => {
            if (curr > 0) curr--;
            console.log(curr);
            return curr;
          });
        }}
      >
        -
      </button>
    </div>
  );
};

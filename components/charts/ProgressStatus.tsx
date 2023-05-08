import React from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressStatus = ({ value }: any) => {
  return (
    <Progress.Root
      className="relative overflow-hidden bg-blackA9 rounded-full w-full h-[5px]"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={50}
    >
      <Progress.Indicator
        className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - 50}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressStatus;

import { AdminCards } from "@/data/Data";
import React from "react";

const Card = () => {
  return (
    <section className="grid grid-cols-4 gap-6 w-full pr-20 mt-4">
      {AdminCards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor}  h-[200px] pt-6 pl-6 text-white  rounded-3xl flex flex-col gap-4 before:absolute before:content-[''] before:w-[160px] before:h-[160px] before:bg-indigo-500 before:-top-16 relative
          before:-right-20 overflow-hidden before:rounded-[50%] after:content-[''] after:absolute after:w-[130px] after:h-[130px] after:-z-5 after:bg-sky-500 after:right-[40px] after:-top-[100px] after:rounded-[50%] `}
        >
          <h2 className="text-xl font-semibold">main balance</h2>
          <h3 className="text-4xl font-bold">$ {card.total}</h3>
          <p className="text-base font-medium">{card.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Card;

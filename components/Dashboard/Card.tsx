import { AdminCards } from "@/data/Data";
import React from "react";

const Card = () => {
  return (
    <section className="grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-x-14 lg:gap-y-6  xl:gap-3 2xl:gap-6 w-full lg:pr-7 xl:pr-10 2xl:pr-20 mt-4">
      {AdminCards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor}  lg:h-[180px] xl:h-[160px] 2xl:h-[200px] lg:pt-4 xl:pt-6 lg:pl-4 xl:pl-6 text-white  rounded-3xl flex flex-col lg:gap-6 xl:gap-4 before:absolute before:content-[''] before:w-[160px] before:h-[160px] before:bg-indigo-500 lg:before:-top-[4.3rem] xl:before:-top-[4.3rem] 2xl:before:-top-16 relative
          2xl:before:-right-20 xl:before:-right-28 lg:before:-right-32 overflow-hidden before:rounded-[50%] after:content-[''] after:absolute after:w-[130px] after:h-[130px] after:-z-5 after:bg-sky-500 lg:after:right-[20px] xl:after:right-[30px] 2xl:after:right-[40px] lg:after:-top-[108px] xl:after:-top-[108px] 2xl:after:-top-[100px] after:rounded-[50%] `}
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

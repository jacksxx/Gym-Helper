import Card from "@/components/Card/Card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col mt-5 gap-5">
      <div className="flex flex-col gap-5 items-center mb-5">
        <h1>Sobre esse projeto</h1>
        <p>
          Esse projeto vai te ajudar a acompanhar seu progresso na academia!
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <p className="flex flex-col items-center">Com Gym Helper Você: </p>
        <div className="grid grid-cols-3 items-center justify-center text-center">
          <Card
            alt="kettlebel"
            source="https://images.pexels.com/photos/4164844/pexels-photo-4164844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            w={350}
            h={50}
            text="Você poderá treinar com Kettlebel"
          />
          <Card
            alt="plate"
            source="https://images.pexels.com/photos/11319087/pexels-photo-11319087.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            w={350}
            h={50}
            text="Você poderá treinar com Anilhas"
          />
          <Card
            alt="weigths"
            source="https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            w={350}
            h={50}
            text="Você poderá treinar com Barras e Halteres"
          />
        </div>
        <div className="flex flex-col items-center  text-center z-0 w-full mb-[20px]">
          <p className="text-[24px] font-bold ">GYM HELPER</p>
          <p className="text-[18px] font-semibold ">
            Faça com que seus treinos rendam mais
          </p>
        </div>
        <Link
          href={"/"}
          className="mb-10 flex flex-col items-center border-[1px] border-white w-fit p-3 rounded-lg bg-gradient-radial from-black to-white/50 animate-pulse
          transition duration-1000 ease-in-out hover:scale-125 "
        >
          Se Cadastre Agora!
        </Link>
      </div>
    </div>
  );
};

export default page;

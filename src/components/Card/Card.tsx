import React, { ReactElement } from "react";
import Image from "next/image";

type cardProps = {
  source: string;
  alt: string
  w: number;
  h: number;
  text?:string
  extra?: ReactElement;
};

const Card = ({alt,h,source,w,extra,text}: cardProps) => {
  return (
    <div className="m-2 rounded-lg border-[1px] border-white w-max flex flex-col items-center justify-center">
      <div className="overflow-hidden rounded-t-lg max-w-350 flex flex-col items-center">
        <Image
          alt={alt}
          src={source}
          width={w}
          height={h}
          priority          
          className={`rounded-md object-cover w-max`}
        />
      </div>
      <div className="m-2  text-center">
        <h1 className="text-[16px] font-semibold ">
          {text}
        </h1>
      </div>      
    </div>
  );
};

export default Card;

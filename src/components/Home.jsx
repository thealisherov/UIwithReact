import React from "react";
import Bgimage from "../assets/bg1 1.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[300px] sm:h-[400px] md:h-[527px]"
    >
      <div className="absolute inset-0 m-auto max-w-[1200px] w-full">
        <div className="relative mt-[45px] sm:mt-[90px] md:mt-[150px] 
                      ml-4 sm:ml-10 md:ml-20 
                      w-[350px] sm:w-[300px] md:w-[582px] 
                      h-auto p-2.5">
          <p className="text-[12px] sm:text-[15px] md:text-[17px] mb-2 sm:mb-3.5">
            LEANGROUP - тубы и этикетки
          </p>
          <h1 className="text-[20px] sm:text-2xl md:text-4xl">
            Лиминатные тубы
          </h1>
          <p className="text-[12px] sm:text-[13px] md:text-[18px] mt-1 sm:mt-2.5">
            Используются для производства зубных паст. Широко применяются в
            сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
            химии и DIY (Do-it-Yourself).
          </p>
          <button className="bg-amber-600 w-[65px] sm:w-[75px] md:w-[100px] 
                          h-[30px] sm:h-[35px] md:h-[40px] 
                          text-[12px] sm:text-[15px] md:text-[19px]
                          mt-1 sm:mt-2 rounded-[12px] cursor-pointer text-white p-1 sm:p-2">
            <a href="#">Каталог</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
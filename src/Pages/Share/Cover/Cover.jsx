import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ image, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="mb-16">
        <div className="py-36 bg-no-repeat">
          <div className="card bg-opacity-60 md:w-[900px] sm:w-[500px] mx-auto bg-blue-100 rounded-xl">
            <div className=" items-center text-center">
              <h2 className="text-4xl font-semibold py-2">{title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

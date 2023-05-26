import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div className="mt-36 mb-16">
      <div className="bg-img py-36">
        <div className="card md:w-[900px] sm:w-[500px] mx-auto bg-blue-100 rounded-xl shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="text-4xl font-semibold py-2">Bistro Boss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

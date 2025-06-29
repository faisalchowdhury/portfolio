import React from "react";
import "../../../App.css";
import about from "./../../../assets/about.jpg";
import Header from "../../Header";
import t1 from "../../../assets/travel/1.jpg";
import t2 from "../../../assets/travel/2.jpg";
import t3 from "../../../assets/travel/3.jpg";
import t4 from "../../../assets/travel/4.jpg";
import t5 from "../../../assets/travel/5.jpg";
import t6 from "../../../assets/travel/6.jpg";
import t7 from "../../../assets/travel/7.jpg";
import t8 from "../../../assets/travel/8.jpg";
import t9 from "../../../assets/travel/9.jpg";
import t10 from "../../../assets/travel/10.jpg";
import t11 from "../../../assets/travel/11.jpg";
import t12 from "../../../assets/travel/12.jpg";
import t13 from "../../../assets/travel/13.jpg";
import Lottie from "lottie-react";
import animation from "../../../assets/lottie/animation.json";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const About = () => {
  return (
    <>
      <Header></Header>
      <div className="max-w-7xl mx-auto my-20 space-y-20">
        <div className="sm:grid sm:grid-cols-6 items-center bg-slate-50 p-10 rounded-lg  shadow gap-5 space-y-5">
          <div className="col-span-2">
            <img
              className="w-full h-[350px] md:w-5/6 mx-auto md:h-[450px] object-cover object-top rounded-lg "
              src={about}
              alt=""
            />
          </div>

          <div className="space-y-3 col-span-4">
            <h1 className="text-xl md:text-5xl font-semibold">
              I'm Faisal Chowdhury
            </h1>
            <p className="text-lg md:text-2xl font-semibold">
              A Web Application Developer
            </p>
            <p className="text-lg md:text-xl">-- Born In 2000</p>
            <p>
              I began my web development journey in 2019, dedicating a full year
              to learning without worrying about how I’d earn from it—just
              fueled by curiosity and consistency. By 2020, I landed my first
              role as a junior PHP developer while starting freelance work.
              During that time, I noticed the high demand for WordPress in the
              market, so I decided to learn it thoroughly and joined a company
              where I worked on WordPress projects for nearly a year and a half.
            </p>
            <p>
              As I continued growing, I realized that many large-scale projects
              were being built with the MERN stack. Driven by a desire to
              contribute to bigger, more complex applications, I learned the
              MERN stack to level up my skills further. Throughout this journey,
              I’ve genuinely loved the learning process and have continuously
              adapted to the evolving demands of the tech market.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-20 px-5 lg:px-0">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold">What I Love Beyond Code</h1>

            <p>
              I’ve always loved to travel. It has helped me open up with people,
              and for some reason, I feel more confident whenever I’m exploring
              new places. I’ve been to a few places inside and outside
              Bangladesh, and I’d love to travel even more in the future. One of
              the top things on my bucket list is to take a solo trip—to test my
              strengths and see how I handle things on my own. I believe travel
              not only refreshes the mind but also teaches you about yourself in
              ways nothing else can.
            </p>
            <p>
              As I continued growing, I realized that many large-scale projects
              were being built with the MERN stack. Driven by a desire to
              contribute to bigger, more complex applications, I learned the
              MERN stack to level up my skills further. Throughout this journey,
              I’ve genuinely loved the learning process and have continuously
              adapted to the evolving demands of the tech market.
            </p>
          </div>

          <div className="">
            <div className="columns-4  gap-4 p-4 space-y-5">
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t1}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t2}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t3}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t4}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t5}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t6}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t7}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t8}
                alt=""
              />

              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t9}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t10}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t11}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t12}
                alt=""
              />
              <img
                className="w-full mx-auto  object-cover object-top rounded-lg hover:scale-200 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                src={t13}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 items-center px-5 lg:px-0">
          <div className="space-y-3 col-span-3 order-1 md:order-0">
            <p className="text-3xl">Thank You ...</p>
            <p>
              If you would like to get in touch with me don't forgot to send an
              email to{" "}
              <a
                className="font-medium"
                href="mailto:chowdhuryfaisal66@gmail.com">
                chowdhuryfaisal66@gmail.com
              </a>
            </p>

            <div className="flex gap-2 text-xl text-gray-600">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/faisal-chowdhury-730a051a6/">
                <FaLinkedin></FaLinkedin>
              </a>
              <a target="_blank" href="https://github.com/faisalchowdhury">
                <FaGithub></FaGithub>
              </a>
              <a target="_blank" href="https://wa.me/8801933482811">
                <FaWhatsapp></FaWhatsapp>
              </a>
            </div>
          </div>
          <div className="flex justify-center col-span-2">
            <Lottie
              style={{
                width: "350px",
              }}
              animationData={animation}
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

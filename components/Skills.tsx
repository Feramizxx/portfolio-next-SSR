import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCards, EffectCube, Pagination } from "swiper/modules";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1.5 }}
    //   className="
    //   max-w-xs
    //   flex relative flex-col text-center  xl:flex-row sm:max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    // >
    //   <h3 className="pageHeading">Skills</h3>

    //   {/* <h3 className="absolute top-[18vh] sm:top-36 uppercase tracking-[3px] text-gray-500 text-sm">
    //     Hover over a skill for description
    //   </h3> */}

    //   {/* <div className={`gap-2 mt-[13vh] grid grid-cols-4 sm:gap-5 sm:mt-20 xl:scale-90 xl:translate-y-12`}> */}

    //   <Swiper
    //     effect={"cards"}
    //     grabCursor={true}
    //     modules={[EffectCards]}
    //     className="mySwiper"
    //   >
    //     {skills?.map((skill) => (
    //       // <div key={skill._id}  className="rounded-full hover:scale-110 duration-300 ease-in-out  ">
    //       <SwiperSlide key={skill._id}>
    //         <Skill skill={skill} />
    //       </SwiperSlide>
    //       // </div>
    //     ))}
    //   </Swiper>

    //   {/* {skills?.slice(skills.length / 2, skills.length).map((skill) => (
    //       <Skill key={skill._id} skill={skill} directionLeft />
    //     ))} */}
    //   {/* </div> */}
    // </motion.div>

    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="
      
       h-screen relative flex flex-col overflow-hidden justify-evenly mx-auto items-center z-0 w-[400px]"
      >
        <h3 className="pageHeading">Skills</h3>
        <h3 className="absolute top-[18vh] sm:top-36 uppercase tracking-[3px] text-gray-500 text-sm">
          Flip the cube for more
        </h3>
        <Swiper
          effect={"cube"}
          grabCursor={true}
  
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={false}
          modules={[EffectCube, Pagination]}
          className="mySwiper w-[200px] h-[200px]  lg:w-[300px] lg:h-[300px]"
        >
          {skills?.map((skill) => (
            <div key={skill._id} className="">
              <SwiperSlide key={skill._id}>
                <Skill skill={skill} />
              </SwiperSlide>
            </div>
          ))}

          {/* <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </motion.div>
    </>
  );
}

export default Skills;

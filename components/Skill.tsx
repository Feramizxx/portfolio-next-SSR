import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill } from "../typings";
import Image from "next/image";
type Props = {
  skill?: Skill;
  directionLeft?: boolean;
};

export default function SkillItems({ skill, directionLeft }: Props) {
  return (
    <div className="group relative   flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className=" rounded-  object-cover  w-20 h-20 xl:w-28 xl:h-28 filter transition duration-500 ease-in-out"
      >
        <Image
          layout="fill"
          alt="skill"
          className="rounded-full hover:scale-0"
          src={urlFor(skill?.image).url()}
        />
      </motion.div>

      <div className="absolute rounded-full opacity-0   transition duration-300 ease-in-out  w-20 h-20  xl:w-28 xl:h-28">
        {/* <div className="flex items-center justify-center h-full">
          <p className="text-black text-3xl font-bold">{skill.progress}%</p>
        </div> */}
      </div>
    </div>
  );
}

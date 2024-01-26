import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col  mt-10 items-center justify-center rounded-lg  flex-shrink-0 space-y-7    w-[300px] h-[500px] md:w-[700px]   snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="rounded-full w-28 h-28 xl:w-[150px] xl:h-[150px] object-cover"
        src={urlFor(experience.companyImage).url()}
      />

      <div className="px-0  md:px-10">
        <h4 className="text-4xl font-light ">{experience.jobTitle}</h4>
        <p className="text-2xl font-bold mt-1">{experience.company}</p>
        <div className="flex flex-wrap space-x-2 my-2 pb-2">
          {experience.technologies.map((technology, index) => {
            return (
              <img
                key={technology._id}
                className=" h-6 w-6 md:h-10 md:w-10 rounded-full"
                src={urlFor(technology.image).url()}
              />
            );
          })}
        </div>
        <p className="uppercase py- text-gray-300">
          {experience.dateStarted} / {experience.dateEnded}
        </p>
        <ul className="list-disc whitespace-normal space-y-4 text-[1rem] xl:text-lg ml-5 overflow-y-scroll h-[100px]  scrollbar-thumb-[#F7AB0A]/80 max-w-52  max-h-90 scrollbar   pt-8">
          {experience?.point?.map((item, index) => {
            return <li key={index}>‣ {item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

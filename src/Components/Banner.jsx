import { motion } from "framer-motion";
import { fadeIn } from "../varriants";

const Banner = () => {
  return (
    <div className=" bg-bannerImg bg-cover bg-no-repeat min-h-screen flex flex-col gap-3 justify-center items-center px-6 md:px-12 lg:px-24">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-white font-bold text-4xl md:text-7xl text-center">
          Where will you go next?
        </h1>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          labore. Error minima, odio ipsam ad aperiam consequatur natus nesciunt
          illum laboriosam ratione nihil doloremque eligendi.
        </p>
      </motion.div>
    </div>
  );
};

export default Banner;

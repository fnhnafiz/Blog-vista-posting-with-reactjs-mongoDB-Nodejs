import { motion } from "framer-motion";
import { fadeIn } from "../varriants";

const Banner = () => {
  const hanldeScroll = () => {
    const scroll = document.getElementById("joinWithUs");
    if (scroll) {
      scroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-bannerImg bg-cover bg-no-repeat min-h-screen flex flex-col gap-3 justify-center items-center px-6 md:px-12 lg:px-24">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-5"
      >
        <h1 className="text-white font-bold text-4xl md:text-7xl text-center">
          "Welcome to BlogVista!! Your Gateway to Stories, Ideas, and
          Inspiration"
        </h1>
        <p className="text-white text-center font-thin text-xl">
          At BlogVista, we believe in the power of words to inspire, inform, and
          connect. Dive into a diverse collection of blogs that cover topics you
          love, spark new interests, and fuel your imagination. Join us in
          creating a dynamic space where your voice matters, and every story
          finds a home
        </p>
        <button
          onClick={hanldeScroll}
          className="btn btn-warning block mx-auto"
        >
          Join with us
        </button>
      </motion.div>
    </div>
  );
};

export default Banner;

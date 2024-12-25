import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeIn } from "../varriants";

const Newsletter = () => {
  const handleSubmitMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    if (email) {
      toast.success("Thanks for Subscribing");
      form.reset();
    } else {
      toast.error("Email not Valid");
    }
  };

  return (
    <section className="bg-newsletterImg bg-cover bg-no-repeat  flex flex-col justify-center items-center mx-auto py-16 px-6 ">
      {/* Heading */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl text-center text-white font-bold mb-8">
          Join the{" "}
          <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
            Blog Community
          </span>
        </h2>
      </motion.div>

      {/* Newsletter Card */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="rounded-xl bg-white shadow-lg flex flex-col items-center text-center p-8 w-full max-w-3xl"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Stay Updated with Our Weekly Insights!
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
          Subscribe to our newsletter and never miss an update! Receive the
          latest blogs, trends, and tips directly to your inbox every week.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmitMessage}
          className="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            name="email"
            className="p-3 flex-grow border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none w-full md:w-auto"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-200"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;

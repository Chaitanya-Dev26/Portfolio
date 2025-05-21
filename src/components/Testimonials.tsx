import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Card } from "./ui/card";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

const Testimonials = () => {
  return (
    <motion.section
      className="py-16 px-4 md:px-8 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
    {/* Section Title */}
    <motion.div variants={itemVariants} className="flex items-center mb-14">
    <h2 className="section-title group flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold relative overflow-hidden mb-4 -ml-5">
        <motion.span
          className="w-10 h-0.5 bg-foreground origin-left"
          whileHover={{ scaleX: 1.5 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        <motion.span
          className="relative inline-block"
          whileHover={{ y: -3, scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          TESTIMONIALS
          <motion.span
            className="absolute left-0 -bottom-1 w-full h-0.5 bg-foreground scale-x-0 origin-left"
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.span>
      </h2>
    </motion.div>


      {/* Testimonial Card */}
      <motion.div variants={itemVariants} className="max-w-xl">
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={300}>
          <motion.div variants={cardVariants} whileHover="hover">
          <Card className="bg-secondary-gradient rounded-2xl p-6 md:p-5 text-left text-base md:text-md relative overflow-hidden min-h-[300px] -ml-4">

              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-gray-300 mb-6 leading-relaxed ">
                Chaitanya demonstrated exceptional talent and dedication in 
                both football and academics throughout their time at college. 
                Their commitment to excellence was evident not only on the 
                football field but also in the classroom, consistently maintaining
                impressive grades. Their coach admired their discipline, teamwork,
                and positive attitude, which inspired teammates and contributed 
                greatly to the team’s success. Beyond athletic skills, he showed 
                a strong work ethic and a balanced approach to studies and sports,
                making them a standout student-athlete.
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-white ring-opacity-10">
                    <img
                      src="/path-to-niramaya-logo.png"
                      alt="Arnav Madan"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-white">Arnav Madan</div>
                    <div className="text-sm text-gray-400">Football Coach, Podar International School</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Tilt>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;

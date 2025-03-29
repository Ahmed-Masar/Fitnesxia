import "./about.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="section__container about__container">
        <motion.div
          className="about__image"
          initial={{ opacity: 0, transform: "translateX(-30px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5 }}
        >
          <img src="./assets/about.jpg" alt="about" />
        </motion.div>

        <div className="about__content">
          <motion.h2
            className="section__header"
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Get Ready To Reach Your Fitness Goals
          </motion.h2>
          <motion.p
            className="section__description"
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 1 }}
          >
            At FITNESXIA, we are committed to helping you achieve your fitness
            goals with expert guidance, personalized workouts, and a motivating
            environment. Whether you aim to build strength, improve endurance,
            or stay active, we provide the right support and training to keep
            you on track.
          </motion.p>

          <motion.p
            className="section__description"
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Start your journey today and transform your health with the perfect
            exercise routine!
          </motion.p>

          <motion.div
            className="about__btn"
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 2 }}
          >
            <button className="btn">Free Trail Today</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import "./program.css";
import { ArrowRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const Program = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="program" id="program" ref={ref}>
      <div className="section__container program__container">
        <div className="program__header">
          <h2 className="section__header">
            The Best Programs We Offer For You
          </h2>
          <p className="section__description">
            From strength training and yoga to cardio and weight loss programs,
            we offer a variety of workouts to keep you motivated and on track.
            Join us and find the perfect program for you.
          </p>
        </div>

        <div className="program__grid">
          <div className="program__card">
            <img src="./assets/program-1.png" alt="program" />
            <h4>Strength Training</h4>
            <p>
              Build muscle, increase endurance, and enhance overall strength
              with our expert-led resistance and weight training sessions.
            </p>
            <a href="#">
              Learn More <ArrowRight />{" "}
            </a>
          </div>

          <motion.div
            className="program__card"
            initial={{ opacity: 0, transform: "translateY(60px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5 }}
          >
            <img src="./assets/program-2.png" alt="program" />
            <h4>Basic Yoga</h4>
            <p>
              Improve flexibility, balance, and mental well-being with guided
              yoga sessions designed for relaxation and inner peace.
            </p>
            <a href="#">
              Learn More <ArrowRight />{" "}
            </a>
          </motion.div>

          <motion.div
            className="program__card"
            initial={{ opacity: 0, transform: "translateY(60px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img src="./assets/program-3.png" alt="program" />
            <h4>Body Building</h4>
            <p>
              Sculpt and define your physique with targeted workouts, expert
              coaching, and personalized training plans.
            </p>
            <a href="#">
              Learn More <ArrowRight />{" "}
            </a>
          </motion.div>

          <motion.div
            className="program__card"
            initial={{ opacity: 0, transform: "translateY(60px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 1 }}
          >
            <img src="./assets/program-4.png" alt="program" />
            <h4>Weight Loss</h4>
            <p>
              Burn calories, boost metabolism, and achieve your ideal weight
              with our effective fat-burning and cardio-based programs.
            </p>
            <a href="#">
              Learn More <ArrowRight />{" "}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Program;

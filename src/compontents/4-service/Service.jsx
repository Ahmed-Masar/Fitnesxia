import "./service.css";
import { BadgeCheck } from "lucide-react";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="service" ref={ref}>
      <div className="section__container service__container">
        <div className="service__content">
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
            Why Should People Choose Fitnesxia Services
          </motion.h2>
          <ul className="service__list">
            <motion.li
              initial={{ opacity: 0, transform: "translateY(50px)" }}
              animate={
                hasAnimated
                  ? { opacity: 1, transform: "translateY(0)" }
                  : undefined
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h4>
                <span>
                  {" "}
                  <BadgeCheck />{" "}
                </span>{" "}
                Personal Training
              </h4>
              <p className="section__description">
                Get customized workout plans tailored to your fitness goals with
                one-on-one guidance from our professional trainers
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, transform: "translateY(50px)" }}
              animate={
                hasAnimated
                  ? { opacity: 1, transform: "translateY(0)" }
                  : undefined
              }
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <h4>
                <span>
                  {" "}
                  <BadgeCheck />{" "}
                </span>{" "}
                Expert Trainer
              </h4>
              <p className="section__description">
                Train with highly qualified and experienced fitness experts who
                will motivate and support you every step of the way.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, transform: "translateY(50px)" }}
              animate={
                hasAnimated
                  ? { opacity: 1, transform: "translateY(0)" }
                  : undefined
              }
              transition={{ duration: 0.5, delay: 2 }}
            >
              <h4>
                <span>
                  {" "}
                  <BadgeCheck />{" "}
                </span>{" "}
                Flexible Timing
              </h4>
              <p className="section__description">
                Enjoy the convenience of workout sessions that fit your
                schedule, making it easier to stay committed to your fitness
                journey.
              </p>
            </motion.li>
          </ul>

          <div className="service__btn">
            <motion.button
              className="btn"
              initial={{ opacity: 0, transform: "translateY(50px)" }}
              animate={
                hasAnimated
                  ? { opacity: 1, transform: "translateY(0)" }
                  : undefined
              }
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              Join Today
            </motion.button>
          </div>
        </div>

        <div className="service__image">
          <motion.img
            src="./assets/service.png"
            alt="service"
            initial={{ opacity: 0, transform: "translateX(50px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

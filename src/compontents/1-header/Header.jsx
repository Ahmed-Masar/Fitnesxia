import { useState } from "react";
import "./header.css";
import { AlignRight, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src="./assets/logo.png" alt="logo" />
            </a>
          </div>

          <div className="nav__menu__btn">
            {open ? (
              <X
                onClick={() => {
                  setOpen(false);
                }}
              />
            ) : (
              <AlignRight
                onClick={() => {
                  setOpen(true);
                }}
              />
            )}
          </div>
        </div>

        <ul className={`nav__links ${open ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#program">Programs</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <button className="btn">Sign Up</button>
          </li>
        </ul>
      </nav>

      <div className="section__container header__container" id="home">
        <div className="header__image">
          <motion.img
            src="./assets/header.png"
            alt="header"
            initial={{ opacity: 0, transform: "translateX(50px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="header__content">
          <motion.h1
            initial={{ opacity: 0, transform: "translatey(50px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            GET HEALTHY BODY WITH THE PERFECT EXERCISES
          </motion.h1>
          <motion.p
            className="section__description"
            initial={{ opacity: 0, transform: "translatey(50px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Achieve your dream body with expertly designed exercises tailored
            for strength, endurance, and overall well-being. Whether you're a
            beginner or a fitness enthusiast, our workouts are crafted to help
            you stay active, build muscle, and improve flexibility.
          </motion.p>

          <motion.div
            className="header__btn"
            initial={{ opacity: 0, transform: "translatey(50px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <button className="btn">Get Started</button>
          </motion.div>

          <motion.div
            className="header__stats"
            initial={{ opacity: 0, transform: "translatey(50px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <div>
              <h4>105+</h4>
              <p>Expert Trainers</p>
            </div>

            <div>
              <h4>970+</h4>
              <p>Member Joined</p>
            </div>

            <div>
              <h4>135+</h4>
              <p>Fitness Programs</p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

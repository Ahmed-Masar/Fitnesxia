import "./card.css";
import { Star } from "lucide-react";

const Card = ({ name, jobTitle, imgSrc, body }) => {
  return (
    <div className="testimonial__card">
      <div className="user__details">
        <img src={imgSrc} alt="user" />
        <div>
          <h4>{name}</h4>
          <h5>{jobTitle}</h5>
        </div>
      </div>

      <div className="user__ratings">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>

      <p className="section__description"> {body}</p>
    </div>
  );
};

export default Card;

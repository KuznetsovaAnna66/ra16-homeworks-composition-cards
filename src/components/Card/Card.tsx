import type { ReactNode } from "react";
import type { CardType } from "../../CardType";

interface CardProps {
  item: CardType;
  children?: ReactNode;
}

const Card = ({ item, children }: CardProps) => {
  const { img, alt, title, text, link } = item;

  return (
    <div className="card">
      {children ||
        (img && (
          <img src={img} alt={alt || "Card Image"} className="card-img-top" />
        ))}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  id:number;
  image: string;
  title: string;
  price: number;
  actionButton?: React.ReactNode; 
};
 
const Card: React.FC<CardProps> = ({ id, image, title, price, actionButton }) => {
  return (
    <div className="bg-white p-4  shadow-md hover:shadow-lg transition">
      <Link to={`/products/${id}`}>
      <div className="w-full h-60 mb-4">
        <img 
          src={image}
          alt={title}
          width="320"
          height="160"
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>
      </Link>

      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600 font-semibold">${price}</p>

      {actionButton && <div className="mt-4">{actionButton}</div>}
    </div>
  );
};

export default Card;

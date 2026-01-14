import React from 'react';
import Card from './Card';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

const FeatureCard: React.FC<Props> = ({ product }) => {
  return (
    <Card
      id={product.id}
      image={product.image}
      title={product.name}
      price={product.price}
    />
  );
};

export default FeatureCard;

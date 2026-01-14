import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
const ProductDetails = () => {
  const {id}=useParams();
  const numericId = Number(id);
  const productsWithImagesByCategory = useProducts();
  const dispatch=useDispatch();

  const product = Object.keys(productsWithImagesByCategory)
  .map((category) => productsWithImagesByCategory[category].find((p) => p.id == numericId))
  .find(Boolean); 

  useEffect(() => {
  if (!product) return;

 
  performance.mark('product-details-start');


  const handle = requestAnimationFrame(() => {
    performance.mark('product-details-end');

    performance.measure(
      'ProductDetails Page Render',
      'product-details-start',
      'product-details-end'
    );

    const measure = performance.getEntriesByName('ProductDetails Page Render')[0];
    console.log('ProductDetails page render took:', measure?.duration.toFixed(2), 'ms');

   
    performance.clearMarks('product-details-start');
    performance.clearMarks('product-details-end');
    performance.clearMeasures('ProductDetails Page Render');
  });

  return () => cancelAnimationFrame(handle);
}, [product]);
 

  if(!product) return <p>Product Not Found</p>
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    const newQuantity=quantity+1;
    setQuantity(newQuantity);
    dispatch(addToCart({...product,quantity:newQuantity}));
  };

  const handleDecrease = () => {
    if(quantity>1){
      const newQuantity=quantity-1;
      setQuantity(newQuantity);
      dispatch(addToCart({...product,quantity:newQuantity}));
    }
    
  };
  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      <img src={product.image}  alt={product.name} className="w-full max-w-sm h-80 object-cover"/>
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-700 text-lg mt-2">${product.price}</p>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus quae fugiat nisi obcaecati consectetur. Asperiores magnam sed, 
           doloremque hic maiores earum odio similique in quas doloribus, cupiditate assumenda beatae.</p>
            {/* Quantity Selector */}
        <div className="flex items-center mt-4 space-x-4">
          <button
            className="bg-gray-300 text-black px-3 py-1 rounded"
            onClick={handleDecrease}
          >
            -
          </button>

          <span className="text-lg">{quantity}</span>

          <button
            className="bg-gray-300 text-black px-3 py-1 rounded"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded" onClick={()=>dispatch(addToCart({...product,quantity}))}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails
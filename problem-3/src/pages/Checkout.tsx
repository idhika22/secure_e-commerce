
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import { removeFromCart } from '../redux/cartSlice'
import { Trash2 } from 'lucide-react';
import { useEffect } from 'react';
const Checkout = () => {
  const cartItems=useSelector((state:RootState)=>state.cart.items);
  const dispatch=useDispatch();

  const total=cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0);

useEffect(() => {
 
  if (!cartItems.length) return;

 
  performance.mark('checkout-start');

  const handle = requestAnimationFrame(() => {
    performance.mark('checkout-end');

    performance.measure('Checkout Page Render', 'checkout-start', 'checkout-end');

    const measure = performance.getEntriesByName('Checkout Page Render')[0];
    console.log('Checkout page render took:', measure?.duration.toFixed(2), 'ms');

  
    performance.clearMarks('checkout-start');
    performance.clearMarks('checkout-end');
    performance.clearMeasures('Checkout Page Render');
  });

  return () => cancelAnimationFrame(handle); 
}, [cartItems]); 

  return (
    <div className="flex justify-center items-start min-h-screen p-6 ">
  <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl min-h-[700px]">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Your Cart</h1>

    {cartItems.length === 0 ? (
      <p className="text-gray-600 text-center">Your cart is empty</p>
    ) : (
      <div className="space-y-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center sm:justify-between p-4 rounded-lg shadow-xl gap-4">
            {/* Product Details */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded"/>
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price} {item.quantity>1 && <> x {item.quantity}</>}</p>
              </div>
            </div>

            {/* Remove Button */}
            <button onClick={() => dispatch(removeFromCart(item.id))} >
             <Trash2/>
            </button>
          </div>
        ))}

        {/* Total + Checkout */}
        <div className="flex flex-col sm:flex-row justify-between items-center  pt-4 mt-6 gap-4">
          <h2 className="text-xl font-bold">Estimated Total: ${total.toFixed(2)}</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full sm:w-auto">
            Proceed to Checkout
          </button>
        </div>
      </div>
    )}
  </div>
</div>
  )
}

export default Checkout
import { useState } from "react";
import products from "./prducts.json";
import "./Styles.css";

function App() {
  const [cart, setCart] = useState([]);

  // ➕ Add product
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ➖ Remove one product
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const confirmOrder = () => {
    alert("✅ Order Confirmed!");
    setCart([]); // clear cart after confirmation
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 m-6">
      {/* Products Section */}
      <section className="lg:col-span-8">
        <h3 className="text-2xl font-bold mb-4">Najat kitchen</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {products.map((product) => {
            const inCart = cart.find((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className=" rounded-lg shadow shadow-amber-950 transition pb-5"
              >
                
                <div className="relative inline-block w-full">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full object-cover overflow-hidden rounded-lg"
                  />

                  {/* 🔘 Button turns into - qty + if already in cart */}
                  {inCart ? (
                    <div className="flex justify-between items-center absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 bg-amber-700 border border-amber-700 rounded-full px-4 min-w-[160px] h-[44px]">
                      <button
                        onClick={() => removeFromCart(product)}
                        className="px-2 text-xl font-bold text-white"
                      >
                        –
                      </button>
                      <span className="mx-3 font-semibold text-white">
                        {inCart.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className="px-2 text-xl font-bold text-white"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center justify-center cursor-pointer absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 px-4 min-w-[160px] h-[44px] bg-white border border-amber-700 rounded-full"
                    >
                      <img
                        src="/IMAGES/icon-add-to-cart.svg"
                        className="mr-2"
                        alt="Add"
                      />
                      Add to Cart
                    </button>
                  )}
                </div>
                {/* Product details */}
                <p className="mt-5 font-bold px-2">{product.title}</p>
                <p className="px-2">{product.name}</p>
                <p className="mb-5 text-amber-700 px-2 font-bold">${product.price}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cart Section */}
      <section className="lg:col-span-4 bg-gray-50 p-4 rounded-lg shadow-sm">
        <h6 className="font-semibold mb-4">Your Cart ({totalItems})</h6>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center text-center text-gray-500">
            <img
              src="/IMAGES/illustration-empty-cart.svg"
              alt="Empty cart"
              className="w-32 h-32 mb-4"
            />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <>
            <ul className="space-y-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b shadow-black pb-2"
                >
                  {/* 🖼️ Product image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md mr-3"
                  />

                  {/* Product details */}
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600 flex justify-between w-full">
                      <span className="text-gray-500">
                        {item.quantity} × @ ${item.price}
                      </span>
                      <span className="font-semibold text-black">
                        ${(item.quantity * item.price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 font-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>

            {/* ✅ Confirm Order Button */}
            <button
              onClick={confirmOrder}
              className="mt-4 w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-full font-semibold shadow-md transition"
            >
              Confirm Order
            </button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;

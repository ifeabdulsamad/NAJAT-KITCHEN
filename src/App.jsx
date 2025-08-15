import products from "./assets/prducts.json"
import "./styles.css"
function App() {

  return (
   <main className="grid grid-cols-12 gap-6 p-6">
  {/* Products Section */}
  <section className="col-span-8">
    <h3 className="text-2xl font-bold mb-4">Desserts</h3>
    <div className="grid grid-cols-3 gap-3">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg">
          <img
            src={product.img}
            alt={`Dessert ${product.id}`}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>

  {/* Cart Section */}
  <section className="col-span-4 bg-gray-50 p-4 rounded-lg shadow-sm">
    <h5 className="text-xl font-semibold mb-4">Your Cart (7)</h5>
    <div className="flex flex-col items-center text-center text-gray-500">
      <img
        src="src/assets/IMAGES/illustration-empty-cart.svg"
        alt="Empty cart"
        className="w-32 h-32 mb-4"
      />
      <p>Your added items will appear here</p>
    </div>
  </section>
</main>

  )
}

export default App

import products from "./assets/prducts.json"
function App() {

  return (
    <>
      <section>
      <h3>Dersserts</h3>
          <div>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.img}
          />
        </div>
      ))}
    </div>
      </section>

      <section>
        <h5>Your Cart(7)</h5>
        <img src="src/assets/IMAGES/illustration-empty-cart.svg" alt="" />
        <p>Your added items will apear here</p>
      </section>
    </>
  )
}

export default App

import { products } from "./data/products"
import ProductCard from "./components/ProductCard"

function App() {
  return (
    <div>
      <h1>Bytte-nettside</h1>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default App
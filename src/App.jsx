
import "./App.css"

function App() {

  const nombre1 = "Laptop Lenovo"
  const categoria1 = "Computadoras"
  const precio1 = 2500
  const cantidad1 = 2
  const stock1 = 10
  const total1 = precio1 * cantidad1

  const nombre2 = "Mouse Logitech"
  const categoria2 = "Accesorios"
  const precio2 = 80
  const cantidad2 = 1
  const stock2 = 0
  const total2 = precio2 * cantidad2

  return (
    <div className="pagina">
      <header className="encabezado">
        <h1>Gian</h1>
        <p>Productos tecnológicos para todos</p>
      </header>
      <main className="contenido">
        <h2 className="titulo-productos">
          Nuestros productos
        </h2>

        <div className="lista-productos">
          <div className="producto">
            <h3>{nombre1}</h3>
            <p className="categoria">{categoria1}</p>
            <p className="precio">
              Precio: S/ {precio1}
            </p>
            <p>Cantidad: {cantidad1}</p>
            <p className="total">
              Total: S/ {total1}
            </p>
            <p>Stock disponible: {stock1}</p>
            <p className={stock1 > 0 ? "disponible" : "agotado"}>
              {stock1 > 0
                ? "Producto disponible"
                : "Producto agotado"}
            </p>
            <button disabled={stock1 === 0}>
              Comprar
            </button>
          </div>

          <div className="producto">
            <h3>{nombre2}</h3>
            <p className="categoria">{categoria2}</p>
            <p className="precio">
              Precio: S/ {precio2}
            </p>
            <p>Cantidad: {cantidad2}</p>
            <p className="total">
              Total: S/ {total2}
            </p>
            <p>Stock disponible: {stock2}</p>
            <p className={stock2 > 0 ? "disponible" : "agotado"}>
              {stock2 > 0
                ? "Producto disponible"
                : "Producto agotado"}
            </p>
            <button disabled={stock2 === 0}>
              Comprar
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
export default App
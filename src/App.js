import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  // useEffect(()=>{
  //   console.log(basket);
  // })

  return (
    <div className="App">
      <Header money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
}

export default App;

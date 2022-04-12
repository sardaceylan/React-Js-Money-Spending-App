import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import products from "./products.json";

const App = () => {
  const [money, setMoney] = useState(1000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  });

  const resetBasket = () => {
    setBasket([]);
  };

  return (
    <div className="App">
      <Header total={total} money={money} resetBasket={resetBasket} />

      {products.map((product) => (
        <Product
          key={product.id}
          total={total}
          money={money}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
      {total > 0 && (
        <>
          <div>Toplam: ${total}</div>
          <Basket
            products={products}
            basket={basket}
            resetBasket={resetBasket}
          />
        </>
      )}
    </div>
  );
}

export default App;

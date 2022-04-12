import { useState } from "react";

const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const basketWithoutCurrent = basket.filter((item) => item.id !== product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    // ürün daha önce eklenmiş

    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );

    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div className="product">
        <h3>{product.title}</h3>
        <div className="price">${product.price}</div>
        <div className="actions">
          <button disabled={!basketItem} onClick={removeBasket}>
            Sat
          </button>

          <button disabled={total + product.price > money} onClick={addBasket}>
            Al
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;

import BasketItem from "./BasketItem";

const Basket = ({ basket, resetBasket, products }) => {
  return (
    <>
      {basket.map((item) => (
        <BasketItem
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
    </>
  );
};

export default Basket;

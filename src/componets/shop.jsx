import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Loader from "./Loader";
import GoodList from "./GoodLIst";
import Cart from "./Cart";
import BasketList from "./BasketList";
import { toast } from "react-toastify";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return itemIndex;
        }
      });
      setOrder(newOrder)
    }
    toast.success('Товар успешно добавлен в корзину!')
    toast.success('Goods add to basket succesfully!')
  };

  const handelBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(item => item.id !== itemId)
    setOrder(newOrder)
    toast.error('Товар успешно удален из корзины!')
    toast.error('Goods delete from basket succesfully!')
  }

  const incrementQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }
  const dncrementQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return el
      }
    })
    setOrder(newOrder)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} handelBasketShow={handelBasketShow} />
      {loading ? <Loader /> : <GoodList goods={goods} addToBasket={addToBasket} />}
      {isBasketShow && <BasketList order={order}
      handelBasketShow={handelBasketShow}
      removeFromBasket={removeFromBasket}
      incrementQuantity={incrementQuantity}
      dncrementQuantity={dncrementQuantity}

      />}
    </div>
  );
}
